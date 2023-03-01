import { Injectable, forwardRef } from '@nestjs/common';
import { Inject } from '@nestjs/common/decorators';
import { InjectRepository } from '@nestjs/typeorm';
import { RoomService } from 'src/room/room.service';
import { Repository } from 'typeorm';
import { Participant } from './participant.entity';

@Injectable()
export class ParticipantService {
  constructor(
    @InjectRepository(Participant)
    private participantRepository: Repository<Participant>,
    @Inject(forwardRef(() => RoomService))
    private roomService: RoomService,
  ) {}

  async getResults(): Promise<Participant[]> {
    const res = await this.participantRepository.find({
      relations: { activeCard: true, room: true },
    });

    return res;
  }

  async createOne(username: string, roomCode: string) {
    //const participant = new Participant();
    //participant.username = username;
    //participant.activeCard = null;
    //const { id } = await this.roomRepository.findOneBy({ code: roomCode });
    //if (!id) {
    //  throw new HttpException('Room not found', HttpStatus.NOT_FOUND);
    //}
    //participant.room = id;
    //return this.participantRepository.save(participant);
  }

  async checkIfExist(body: { username: string; roomCode: string }) {
    const { id } = await this.roomService.findOneByCode(body.roomCode);

    //const res = await this.participantRepository.findOneBy({
    //  username: body.username,
    //  room: id,
    //);

    //return res;

    //if(res) {
    //  return true;
    //}
    //return false;
  }
}
