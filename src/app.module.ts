import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { config } from 'dotenv';
import { AppGateway } from './app.gateway';
import { Room } from './room/room.entity';
import { RoomModule } from './room/room.module';
import { ParticipantModule } from './participant/participant.module';
import { Participant } from './participant/participant.entity';
import { CardModule } from './card/card.module';
import { Card } from './card/card.entity';
import { UserModule } from './user/user.module';
import { User } from './user/user.entity';
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
      entities: [Room, Participant, Card, User],
      synchronize: true,
    }),
    RoomModule,
    ParticipantModule,
    CardModule,
    UserModule,
  ],
  controllers: [],
  providers: [AppGateway],
})
export class AppModule {}
