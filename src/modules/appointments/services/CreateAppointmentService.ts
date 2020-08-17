import Appointment from '../infra/typeorm/entities/Appointment';
import IAppointmentsRepository from '../repositories/IAppointmentsRepository';

interface IRequest {
  name: string;
  address: string;
  tel: string;
  desc: string;
  date: string;
  done: boolean;
}

class CreateAppointmentService {
  constructor(private appointmentsRepository: IAppointmentsRepository) {}

  public async execute({
    name,
    address,
    tel,
    desc,
    date,
    done,
  }: IRequest): Promise<Appointment> {
    const appointment = await this.appointmentsRepository.create({
      name,
      address,
      tel,
      desc,
      date,
      done,
    });

    return appointment;
  }
}

export default CreateAppointmentService;
