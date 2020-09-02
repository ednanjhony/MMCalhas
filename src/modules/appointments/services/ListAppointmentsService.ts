import { injectable, inject } from 'tsyringe';

import ICacheProvider from '@shared/container/providers/CacheProvider/models/ICacheProvider';
import IAppointmentsRepository from '@modules/appointments/repositories/IAppointmentsRepository';
import Appointment from '../infra/typeorm/entities/Appointment';

interface IRequest {
  appointment_id: string;
}

@injectable()
class ListAppointmentsService {
  constructor(
    @inject('AppointmentsRepository')
    private appointmentsRepository: IAppointmentsRepository,

    @inject('CacheProvider')
    private cacheProvider: ICacheProvider,
  ) {}

  public async execute({ appointment_id }: IRequest): Promise<Appointment[]> {
    let appointments = await this.cacheProvider.recover<Appointment[]>(
      `appointments-list:${appointment_id}`,
    );

    if (!appointments) {
      appointments = await this.appointmentsRepository.findAllAppointments({
        appointment_id,
      });

      console.log('A query no banco foi feita');

      await this.cacheProvider.save(
        `appointments-list:${appointment_id}`,
        appointments,
      );
    }

    return appointments;
  }
}

export default ListAppointmentsService;
