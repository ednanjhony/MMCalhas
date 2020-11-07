import Appointment from '../infra/typeorm/entities/Appointment';
import ICreateAppointmentDTO from '../dtos/ICreateAppointmentDTO';
import IUpdateAppointmentDTO from '../dtos/IUpdateAppointmentsDTO';
import IFindAllAppointmentsDTO from '../dtos/IFindAllAppointmentsDTO ';

export default interface IAppointmentsRepository {
  create(data: ICreateAppointmentDTO): Promise<Appointment>;
  update(data: IUpdateAppointmentDTO): Promise<Appointment[]>;
  findAllAppointments(data: IFindAllAppointmentsDTO): Promise<Appointment[]>;
}
