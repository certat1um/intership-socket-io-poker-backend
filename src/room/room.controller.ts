import { Controller, Get } from '@nestjs/common';
import { RoomService } from './room.service';

@Controller('room')
export class RoomController {
  constructor(private roomService: RoomService) {}

  @Get('generateID')
  async getRandomRoomID() {
    return this.roomService.generateRoomID();
  }
}
