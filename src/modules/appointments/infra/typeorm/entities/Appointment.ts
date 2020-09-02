import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity('appointments')
class Appointment {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  appointment_id: string;

  @Column()
  name: string;

  @Column()
  address: string;

  @Column()
  tel: string;

  @Column()
  desc: string;

  @Column()
  date: string;

  @Column('boolean')
  done: boolean;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;
}

export default Appointment;
