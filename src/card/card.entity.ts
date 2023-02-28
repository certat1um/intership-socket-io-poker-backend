import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('point-cards')
export class Card {
  @PrimaryGeneratedColumn()
  id: string;

  @Column()
  value: number;
}
