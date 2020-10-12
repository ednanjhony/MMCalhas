import { Router } from 'express';
import { celebrate, Segments, Joi } from 'celebrate';

import ensureAuthenticated from '@modules/users/infra/http/middlewares/ensureAuthenticated';
import CashFlowController from '../controllers/CashFlowController';
import ListCashFlowController from '../controllers/ListCashFlowController';

const cashFlowRouter = Router();
const cashFlowController = new CashFlowController();

const listCashFlowController = new ListCashFlowController();

cashFlowRouter.use(ensureAuthenticated);

cashFlowRouter.post(
  '/',
  celebrate({
    [Segments.BODY]: {
      name: Joi.string().required(),
      date: Joi.date().required(),
      price: Joi.number().required(),
      desc: Joi.string().required(),
    },
  }),
  cashFlowController.create,
);

cashFlowRouter.get('/', listCashFlowController.index);

export default cashFlowRouter;
