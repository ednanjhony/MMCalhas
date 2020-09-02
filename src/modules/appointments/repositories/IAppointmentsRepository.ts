import Appointment from '../infra/typeorm/entities/Appointment';
import ICreateAppointmentDTO from '../dtos/ICreateAppointmentDTO';
import IFindAllAppointmentsDTO from '../dtos/IFindAllAppointmentsDTO ';

export default interface IAppointmentsRepository {
  findAllAppointments(data: IFindAllAppointmentsDTO): Promise<Appointment[]>;
  create(data: ICreateAppointmentDTO): Promise<Appointment>;
}
