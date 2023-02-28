import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { RoomService } from 'src/room/room.service';
import { Repository } from 'typeorm';
import { User } from './user.entity';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private userRepository: Repository<User>,
    private roomService: RoomService,
  ) {}

  async getRoomByUserID(userID: string): Promise<string | null> {
    const { createdRoom } = await this.userRepository.findOneBy({ id: userID });

    if (createdRoom) {
      const { id } = await this.roomService.findOneByID(createdRoom.toString());
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
