import { Controller, Get } from '@nestjs/common';
import { PointCard } from './point-card.entity';
import { PointCardService } from './point-card.service';

@Controller()
export class PointCardController {
  constructor(private pointCardService: PointCardService) {}

  @Get('cards')
  async handleAllCards(): Promise<PointCard[]> {
    return this.pointCardService.getAllCards();
  }
}
