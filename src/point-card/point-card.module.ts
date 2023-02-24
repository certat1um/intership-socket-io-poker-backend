import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PointCardController } from './point-card.controller';
import { PointCard } from './point-card.entity';
import { PointCardService } from './point-card.service';

@Module({
  imports: [TypeOrmModule.forFeature([PointCard])],
  controllers: [PointCardController],
  providers: [PointCardService],
})
export class PointCardModule {}
