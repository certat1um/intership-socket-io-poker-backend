import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { Participant } from './participant.entity';
import { ParticipantService } from './participant.service';

@Controller()
export class ParticipantController {
  constructor(private participantService: ParticipantService) {}

  @Get('results')
  async handleResults(): Promise<Participant[]> {
    return this.participantService.getResults();
  }

  @Post('add-participant')
  async handleCreatingParticipant(
    @Body() body: { username: string; roomCode: string },
  ) {
    const isExist = await this.participantService.checkIfExist(body);
    return isExist;
    //if(isExist) {
    //  return 'User already exist';
    //}

    //const res = await this.participantService.createOne(body.username, body.roomCode);

    //return res;
  }
}
