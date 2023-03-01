import { Module, forwardRef } from '@nestjs/common';
import { ParticipantService } from './participant.service';
import { ParticipantController } from './participant.controller';
import { Room } from 'src/room/room.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Participant } from './participant.entity';
import { RoomModule } from 'src/room/room.module';

@Module({
  imports: [TypeOrmModule.forFeature([Room, Participant]), forwardRef(() => RoomModule)],
  providers: [ParticipantService],
  controllers: [ParticipantController],
})
export class ParticipantModule {}
