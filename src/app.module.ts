import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { config } from 'dotenv';
import { AppGateway } from './app.gateway';
import { RoomModule } from './room/room.module';
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
      entities: [],
      synchronize: true,
    }),
    RoomModule,
  ],
  controllers: [],
  providers: [AppGateway],
})
export class AppModule {}
