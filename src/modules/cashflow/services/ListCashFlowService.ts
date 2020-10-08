import { injectable, inject } from 'tsyringe';

import ICashFlowRepository from '@modules/cashflow/repositories/ICashFlowRepository';
import CashFlow from '../infra/typeorm/entities/CashFlow';

interface IRequest {
  id: string;
  name: string;
  date: Date;
  price: number;
  total: number;
  desc: string;
}

@injectable()