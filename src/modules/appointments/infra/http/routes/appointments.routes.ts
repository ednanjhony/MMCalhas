import { Router } from 'express';

import AppointmentsRepository from '@modules/appointments/infra/typeorm/repositories/AppointmentsRepository';
import CreateAppointmentService from '@modules/appointments/services/CreateAppointmentService';

import ensureAuthenticated from '@modules/users/infra/http/middlewares/ensureAuthenticated';

const appointmentsRouter = Router();

appointmentsRouter.use(ensureAuthenticated);

// appointmentsRouter.get('/', async (request, response) => {
// const appointments = await appointmentsRepository.find();

// return response.json(appointments);
// });

appointmentsRouter.post('/', async (request, response) => {
  const { name, address, tel, desc, date, done } = request.body;

  const appointmentsRepository = new AppointmentsRepository();
  const createAppointment = new CreateAppointmentService(
    appointmentsRepository,
  );

  const appointment = await createAppointment.execute({
    name,
    address,
    tel,
    desc,
    date,
    done,
  });

  return response.json(appointment);
});

export default appointmentsRouter;
