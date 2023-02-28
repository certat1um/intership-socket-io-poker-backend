import { Module } from '@nestjs/common';
import { UserController } from './user.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './user.entity';
import { RoomService } from 'src/room/room.service';
import { UserService } from './user.service';
import { Room } from 'src/room/room.entity';

@Module({
  imports: [TypeOrmModule.forFeature([User, Room])],
  providers: [UserService, RoomService],
  controllers: [UserController],
})
export class UserModule {}
