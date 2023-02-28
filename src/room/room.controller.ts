import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { UserService } from 'src/user/user.service';
import { Room } from './room.entity';
import { RoomService } from './room.service';

@Controller()
export class RoomController {
  constructor(
    private roomService: RoomService,
    private userService: UserService,
  ) {}

  @Post('new-room')
  async handleCreatingRoom(@Body() body: { userID: string }) {
    // generate roomCode
    const roomCode = await this.roomService.generateRoomCode();

    // create room
    const { id: roomID } = await this.roomService.create(roomCode);

    // update user data by updating createdRoomID
    return this.userService.addRoomToUser(roomID, body.userID);
  }

  @Get('existing-room/:roomCode')
  async handleExistingRoom(@Param() roomCode: string): Promise<boolean> {
    const room = this.roomService.findOneByCode(roomCode);

    if (!room) {
      return false;
    }
    return true;
  }
}
