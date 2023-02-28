import { Card } from 'src/card/card.entity';
import { Room } from 'src/room/room.entity';
import { User } from 'src/user/user.entity';
import { Entity, JoinColumn, ManyToOne } from 'typeorm';
import { Column } from 'typeorm/decorator/columns/Column';
import { PrimaryGeneratedColumn } from 'typeorm/decorator/columns/PrimaryGeneratedColumn';

@Entity('participants')
export class Participant {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @ManyToOne((point) => User, (user) => user.id, { nullable: false })
  user: User | string;

  @ManyToOne((point) => Card, (card) => card.id)
  activeCard: Card;

  @ManyToOne((room) => Room, (room) => room.id, { nullable: false })
  room: Room | string;
}
