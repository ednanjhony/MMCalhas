import { uuid } from 'uuidv4';

import IAppointmentsRepository from '@modules/appointments/repositories/IAppointmentsRepository';
import ICreateAppointmentDTO from '@modules/appointments/dtos/ICreateAppointmentDTO';
import IFindAllAppointmentsDTO from '@modules/appointments/dtos/IFindAllAppointmentsDTO ';

import Appointment from '../../infra/typeorm/entities/Appointment';

class AppointmentsRepository implements IAppointmentsRepository {
  private appointments: Appointment[] = [];

  public async findAllAppointments({
    appointment_id,
  }: IFindAllAppointmentsDTO): Promise<Appointment[]> {
    const appointments = this.appointments.filter(appointment => {
      return appointment.appointment_id === appointment_id;
    });

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
    const appointment = new Appointment();

    Object.assign(appointment, {
      id: uuid(),
      name,
      address,
      tel,
      desc,
      date,
      done,
    });

    this.appointments.push(appointment);

    return appointment;
  }
}

export default AppointmentsRepository;
