import { Room } from 'src/room/room.entity';
import { Column, Entity, OneToOne, PrimaryGeneratedColumn } from 'typeorm';

@Entity('users')
export class User {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  username: string;

  @OneToOne((type) => Room, (room) => room.id, { nullable: true })
  createdRoom: Room | string;
}
