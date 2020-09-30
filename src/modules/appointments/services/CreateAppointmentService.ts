import { injectable, inject } from 'tsyringe';

import ICacheProvider from '@shared/container/providers/CacheProvider/models/ICacheProvider';
import Appointment from '../infra/typeorm/entities/Appointment';
import IAppointmentsRepository from '../repositories/IAppointmentsRepository';

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
class CreateAppointmentService {
  constructor(
    @inject('AppointmentsRepository')
    private appointmentsRepository: IAppointmentsRepository,

    @inject('CacheProvider')
    private cacheProvider: ICacheProvider,
  ) {}

  public async execute({
    appointment_id,
    name,
    address,
    tel,
    desc,
    date,
    done,
  }: IRequest): Promise<Appointment> {
    const appointment = await this.appointmentsRepository.create({
      appointment_id,
      name,
      address,
      tel,
      desc,
      date,
      done,
    });

    await this.cacheProvider.invalidate(
      `provider-appointments:${appointment_id}`,
    );

    return appointment;
  }
}

export default CreateAppointmentService;
