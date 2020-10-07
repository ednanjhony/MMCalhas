import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity('cashFlow')
class CashFlow {
  @PrimaryGeneratedColumn('uuid'),
  id: string;

  @Column()
  name: string;

  @Column()
  date: Date;

  @Column('float')
  price: number;

  @Column('float')
  total: number;

  @Column()
  desc: string;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;
}

export default CashFlow;