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

  async generateRoomCode(): Promise<string> {
    const min = 10000000;
    const max = 99999999;

    return String(Math.floor(Math.random() * max) + min);
  }

  async findOneByID(id: string): Promise<Room> {
    return this.roomRepository.findOneBy({ id });
  }

  async findOneByCode(code: string): Promise<Room> {
    return this.roomRepository.findOneBy({ code });
  }

  async create(code: string): Promise<Room> {
    const room = new Room();
    room.code = code;

    return this.roomRepository.save(room);
  }

  async isRoomExists() {}
}
