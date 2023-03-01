import { Injectable, forwardRef } from '@nestjs/common';
import { Inject } from '@nestjs/common/decorators';
import { InjectRepository } from '@nestjs/typeorm';
import { RoomService } from 'src/room/room.service';
import { Repository } from 'typeorm';
import { User } from './user.entity';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private userRepository: Repository<User>,
    @Inject(forwardRef(() => RoomService))
    private roomService: RoomService,
  ) {}

  async getRoomIDByUserID(userID: string): Promise<string | null | any> {
    const { createdRoom: createdRoomID } = await this.userRepository.findOneBy({ id: userID });
    if (createdRoomID) {
      const { id } = await this.roomService.findOneByID(createdRoomID.toString());
      return id;
    }
    return null;
  }

  async addRoomToUser(roomID: string, userID: string) {
    return this.userRepository.update({ id: userID }, { createdRoom: roomID });
  }

  async create(username: string) {
    const user = new User();

    user.username = username;
    user.createdRoom = null;

    return this.userRepository.save(user);
  }
}
