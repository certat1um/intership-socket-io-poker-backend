import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Card } from './card.entity';

@Injectable()
export class CardService {
  constructor(
    @InjectRepository(Card)
    private CardRepository: Repository<Card>,
  ) {}

  async getAllCards(): Promise<Card[]> {
    return this.CardRepository.find();
  }
}
