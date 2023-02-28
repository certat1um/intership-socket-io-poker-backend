import { Module } from '@nestjs/common';
import { ParticipantService } from './participant.service';
import { ParticipantController } from './participant.controller';
import { Room } from 'src/room/room.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Participant } from './participant.entity';
import { RoomService } from 'src/room/room.service';

@Module({
  imports: [TypeOrmModule.forFeature([Room, Participant])],
  providers: [ParticipantService, RoomService],
  controllers: [ParticipantController],
})
export class ParticipantModule {}
