import { Room } from 'src/room/room.entity';
import { Entity, ManyToOne } from 'typeorm';
import { Column } from 'typeorm/decorator/columns/Column';
import { PrimaryGeneratedColumn } from 'typeorm/decorator/columns/PrimaryGeneratedColumn';

@Entity('participants')
export class Participant {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  username: string;

  @Column()
  points: number;

  @ManyToOne((room) => Room, (room) => room.id)
  room: Room;
}
