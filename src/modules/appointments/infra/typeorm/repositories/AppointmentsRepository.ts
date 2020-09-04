import { getRepository, Repository } from 'typeorm';

import IAppointmentsRepository from '@modules/appointments/repositories/IAppointmentsRepository';
import ICreateAppointmentDTO from '@modules/appointments/dtos/ICreateAppointmentDTO';
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
    name,
    address,
    tel,
    desc,
    date,
    done,
  }: ICreateAppointmentDTO): Promise<Appointment> {
    const appointment = this.ormRepository.create({
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
}

export default AppointmentsRepository;
