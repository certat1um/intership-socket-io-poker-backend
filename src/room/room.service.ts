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
    return this.roomRepository.findOneBy({ id });
  }

  async findOneByCode(code: number): Promise<Room> {
    return this.roomRepository.findOneBy({ code });
  }

  async create(code: number): Promise<Room> {
    const room = new Room();
    room.code = code;

    return this.roomRepository.save(room);
  }

  async isRoomExists() {}
}
