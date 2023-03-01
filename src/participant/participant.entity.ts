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

  @ManyToOne((type) => User, (user) => user.id, { nullable: false })
  user: User | string;

  @ManyToOne((type) => Card, (card) => card.id)
  activeCard: Card;

  @ManyToOne((type) => Room, (room) => room.id, { nullable: false })
  room: Room | string;
}
