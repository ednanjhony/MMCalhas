import { getRepository, Repository } from 'typeorm';

import IAppointmentsRepository from '@modules/appointments/repositories/IAppointmentsRepository';
import ICreateAppointmentDTO from '@modules/appointments/dtos/ICreateAppointmentDTO';
import IUpdateAppointmentDTO from '@modules/appointments/dtos/IUpdateAppointmentsDTO';
import IFindAllAppointments from '@modules/appointments/dtos/IFindAllAppointmentsDTO ';

import Appointment from '../entities/Appointment';

class AppointmentsRepository implements IAppointmentsRepository {
  private ormRepository: Repository<Appointment>;

  constructor() {
    this.ormRepository = getRepository(Appointment);
  }

  public async findAllAppointments({
    appointment_id,
  }: IFindAllAppointments): Promise<Appointment[]> {
    let appointments: Appointment[];

    if (appointment_id) {
      appointments = await this.ormRepository.find({
        where: {
          appointment_id,
        },
      });
    } else {
      appointments = await this.ormRepository.find();
    }

    return appointments;
  }

  public async create({
    appointment_id,
    name,
    address,
    tel,
    desc,
    date,
    done,
  }: ICreateAppointmentDTO): Promise<Appointment> {
    const appointment = this.ormRepository.create({
      appointment_id,
      name,
      address,
      tel,
      desc,
      date,
      done,
    });

    await this.ormRepository.save(appointment);

    return appointment;
  }

  public async update({
    appointment_id,
    name,
    address,
    tel,
    desc,
    date,
    done,
  }: IUpdateAppointmentDTO): Promise<Appointment[]> {
    const appointments = this.ormRepository.update({
      appointment_id,
      name,
      address,
      tel,
      desc,
      date,
      done,
    });

    await this.ormRepository.save(appointments);

    return appointments;
  }
}

export default AppointmentsRepository;
