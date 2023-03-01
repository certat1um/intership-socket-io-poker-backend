import { Injectable, forwardRef } from '@nestjs/common';
import { Room } from './room.entity';
import { Repository, UpdateResult } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { UserService } from '../user/user.service';
import { Inject } from '@nestjs/common/decorators';

@Injectable()
export class RoomService {
  constructor(
    @InjectRepository(Room)
    private roomRepository: Repository<Room>,
    @Inject(forwardRef(() => UserService))
    private userService: UserService,
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

  async createAndUpdateUserData(userID: string): Promise<string | null> {
    // generate roomCode
    const roomCode = await this.generateRoomCode();

    // create room
    const room = new Room();
    room.code = roomCode;

    const {id: roomID} = await this.roomRepository.save(room);

    // update user data by updating createdRoomID
    const affectedResult: UpdateResult = await this.userService.addRoomToUser(
      roomID,
      userID,
    );

    if (affectedResult.affected === 1) {
      return roomCode;
    }
    return null;
  }

  async isRoomExists() {}
}
