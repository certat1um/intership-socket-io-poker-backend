import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { PointCard } from './point-card.entity';

@Injectable()
export class PointCardService {
  constructor(
    @InjectRepository(PointCard)
    private pointCardRepository: Repository<PointCard>,
  ) {}

  async getAllCards(): Promise<PointCard[]> {
    return this.pointCardRepository.find();
  }
}
