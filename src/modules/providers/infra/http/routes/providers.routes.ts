import { Router } from 'express';
import { celebrate, Segments, Joi } from 'celebrate';

import ensureAuthenticated from '@modules/providers/infra/http/middlewares/ensureAuthenticated';
import ProvidersController from '../controllers/ProvidersController';
import ListProvidersController from '../controllers/ListProvidersController';

const providersRouter = Router();
const providersController = new ProvidersController();
const listProvidersController = new ListProvidersController();

providersRouter.use(ensureAuthenticated);

providersRouter.post(
  '/providers',
  celebrate({
    [Segments.BODY]: {
      name: Joi.string().required(),
      tel: Joi.string().required(),
    },
  }),
  providersController.create,
);

providersRouter.get('/', listProvidersController.index);

export default providersRouter;
