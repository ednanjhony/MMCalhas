import { Request, Response } from 'express';
import { container } from 'tsyringe';

import CreateAppointmentService from '@modules/appointments/services/CreateAppointmentService';

export default class AppointmentsController {
  public async create(request: Request, response: Response): Promise<Response> {
    const { appointment_id } = request.params;
    const { name, address, tel, desc, date, done } = request.body;

    const createAppointment = container.resolve(CreateAppointmentService);

    const appointment = await createAppointment.execute({
      appointment_id,
      name,
      address,
      tel,
      desc,
      date,
      done,
    });

    return response.json(appointment);
  }
}
