import { Room } from 'src/room/room.entity';
import {
  Column,
  Entity,
  JoinColumn,
  OneToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity('users')
export class User {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  username: string;

  @OneToOne((type) => Room, (room) => room.id, { nullable: true })
  @JoinColumn()
  createdRoom: Room | string;
}
