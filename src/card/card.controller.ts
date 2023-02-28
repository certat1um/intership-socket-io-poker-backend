import { Controller, Get } from '@nestjs/common';
import { Card } from './card.entity';
import { CardService } from './card.service';

@Controller()
export class CardController {
  constructor(private CardService: CardService) {}

  @Get('cards')
  async handleAllCards(): Promise<Card[]> {
    return this.CardService.getAllCards();
  }
}
