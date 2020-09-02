import { Request, Response } from 'express';
import { container } from 'tsyringe';

import ListAppointmentsService from '@modules/appointments/services/ListAppointmentsService';

export default class ListAppointmentsController {
  public async show(request: Request, response: Response): Promise<Response> {
    const appointment_id = request.body;

    const listAppointments = container.resolve(ListAppointmentsService);

    const appointments = await listAppointments.execute({
      appointment_id,
    });

    return response.json(appointments);
  }
}
