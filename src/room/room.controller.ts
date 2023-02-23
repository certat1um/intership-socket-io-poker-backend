import { Controller, Get } from '@nestjs/common';
import { RoomService } from './room.service';

@Controller('room')
export class RoomController {
  constructor(private roomService: RoomService) {}

  @Get('generateID')
  async getRandomRoomID() {
    console.log('did!');

    return this.roomService.generateRoomID();
  }
}
