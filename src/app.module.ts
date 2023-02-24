import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { config } from 'dotenv';
import { AppGateway } from './app.gateway';
import { Room } from './room/room.entity';
import { RoomModule } from './room/room.module';
import { ParticipantModule } from './participant/participant.module';
import { Participant } from './participant/participant.entity';
import { PointCardModule } from './point-card/point-card.module';
import { PointCard } from './point-card/point-card.entity';
config();

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: process.env.DB_HOST,
      port: 3306,
      username: process.env.USER_NAME,
      password: '',
      database: process.env.DB_NAME,
      entities: [Room, Participant, PointCard],
      synchronize: true,
    }),
    RoomModule,
    ParticipantModule,
    PointCardModule,
  ],
  controllers: [],
  providers: [AppGateway],
})
export class AppModule {}
