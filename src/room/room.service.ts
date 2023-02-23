import { Injectable } from '@nestjs/common';
import { Room } from './room.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class RoomService {
  constructor(
    @InjectRepository(Room)
    private roomRepository: Repository<Room>,
  ) {}

  async generateRoomID(): Promise<number> {
    const min = 10000000;
    const max = 99999999;

    return Math.floor(Math.random() * max) + min;
  }

  async findOneByID(id: string): Promise<Room> {
    return this.roomRepository.findOneBy({id});
  }

  async create(code: number): Promise<Room> {
    const existingRoom = await this.roomRepository.findOneBy({code});

    if(existingRoom) {
      const {id} = await this.findOneByID(existingRoom.id);
      this.roomRepository.update({id}, {code: existingRoom.code});
      return {
        id,
        code: existingRoom.code
      } as Room;
    }

    const room = new Room();
    room.code = code;

    return room;
  }
}
