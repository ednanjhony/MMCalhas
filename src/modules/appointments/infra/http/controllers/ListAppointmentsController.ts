import { Request, Response } from 'express';
import { container } from 'tsyringe';

import ListAppointmentsService from '@modules/appointments/services/ListAppointmentsService';

export default class ListAppointmentsController {
  public async index(request: Request, response: Response): Promise<Response> {
    const { appointment_id } = request.params;
    const { name, address, tel, desc, date, done } = request.query;

    const listAppointments = container.resolve(ListAppointmentsService);

    const appointments = await listAppointments.execute({
      appointment_id,
      name: String(name),
      address: String(address),
      tel: String(tel),
      desc: String(desc),
      date: String(date),
      done: Boolean(done),
    });

    return response.json(appointments);
  }
}
