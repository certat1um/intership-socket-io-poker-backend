import { Injectable } from '@nestjs/common';

@Injectable()
export class RoomService {
  async generateRoomID(): Promise<number> {
    const min = 10000000;
    const max = 99999999;

    return Math.floor(Math.random() * max) + min;
  }
}
