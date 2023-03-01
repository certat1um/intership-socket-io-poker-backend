import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { Inject } from '@nestjs/common/decorators';
import { RoomService } from './room.service';

@Controller()
export class RoomController {
  constructor(private roomService: RoomService) {}

  @Post('new-room')
  async handleCreatingRoom(@Body() body: { userID: string }): Promise<string | null> {
    return this.roomService.createAndUpdateUserData(body.userID);
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
