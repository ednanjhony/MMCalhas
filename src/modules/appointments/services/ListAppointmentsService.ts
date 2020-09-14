import { injectable, inject } from 'tsyringe';

import IAppointmentsRepository from '@modules/appointments/repositories/IAppointmentsRepository';
import Appointment from '../infra/typeorm/entities/Appointment';

interface IRequest {
  appointment_id: string;
  name: string;
  address: string;
  tel: string;
  desc: string;
  date: string;
  done: boolean;
}

@injectable()
class ListAppointmentsService {
  constructor(
    @inject('AppointmentsRepository')
    private appointmentsRepository: IAppointmentsRepository,
  ) {}

  public async execute({
    appointment_id,
    name,
    address,
    tel,
    desc,
    date,
    done,
  }: IRequest): Promise<Appointment[]> {
    const appointments = await this.appointmentsRepository.findAllAppointments({
      appointment_id,
      name,
      address,
      tel,
      desc,
      date,
      done,
    });

    return appointments;
  }
}

export default ListAppointmentsService;
