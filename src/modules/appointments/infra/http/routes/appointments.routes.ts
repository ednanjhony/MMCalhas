import { Router } from 'express';
import { celebrate, Segments, Joi } from 'celebrate';

import ensureAuthenticated from '@modules/users/infra/http/middlewares/ensureAuthenticated';
import AppointmentsController from '../controllers/AppointmentsController';
import ListAppointmentsController from '../controllers/ListAppointmentsController';

const appointmentsRouter = Router();
const appointmentsController = new AppointmentsController();
const listAppointmentsController = new ListAppointmentsController();

appointmentsRouter.use(ensureAuthenticated);

appointmentsRouter.post(
  '/',
  celebrate({
    [Segments.BODY]: {
      name: Joi.string().required(),
      address: Joi.string().required(),
      tel: Joi.string().required(),
      desc: Joi.string().required(),
      date: Joi.string().required(),
      done: Joi.boolean().required(),
    },
  }),
  appointmentsController.create,
);

appointmentsRouter.get('/', listAppointmentsController.show);

export default appointmentsRouter;
