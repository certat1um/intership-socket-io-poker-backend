import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('point-cards')
export class PointCard {
  @PrimaryGeneratedColumn()
  id: string;

  @Column()
  value: number;
}
