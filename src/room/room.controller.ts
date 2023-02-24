import { Controller, Get, Param, Post } from '@nestjs/common';
import { Room } from './room.entity';
import { RoomService } from './room.service';

@Controller()
export class RoomController {
  constructor(private roomService: RoomService) {}

  @Post('new-room')
  async createOrUpdateRoom(): Promise<Room> {
    const roomCode = await this.roomService.generateRoomID();
    return this.roomService.create(roomCode);
  }

  @Get('existing-room/:roomCode')
  async handleExistingRoom(@Param() roomCode: string): Promise<boolean> {
    const room = this.roomService.findOneByCode(+roomCode);

    if (!room) {
      return false;
    }
    return true;
  }
}
