import { getCustomRepository } from 'typeorm';

import Appointment from '../infra/typeorm/entities/Appointment';
import AppointmentsRepository from '../repositories/AppointmentsRepository';

interface Request {
  name: string;
  address: string;
  tel: string;
  desc: string;
  date: string;
  done: boolean;
}

class CreateAppointmentService {
  public async execute({
    name,
    address,
    tel,
    desc,
    date,
    done,
  }: Request): Promise<Appointment> {
    const appointmentsRepository = getCustomRepository(AppointmentsRepository);

    const appointment = appointmentsRepository.create({
      name,
      address,
      tel,
      desc,
      date,
      done,
    });

    await appointmentsRepository.save(appointment);

    return appointment;
  }
}

export default CreateAppointmentService;
