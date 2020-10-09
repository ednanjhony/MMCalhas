import { Request, Response } from 'express';
import { container } from 'tsyringe';

import CreateCashFlowService from '@modules/cashflow/services/CreateCashFlowService';

export default class CashFlowController {
  public async create(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;
    const { name, date, price, total, desc } = request.body;

    const createCashFlow = container.resolve(CreateCashFlowService);

    const cashFlow = await createCashFlow.execute({
      id,
      name,
      date,
      price,
      total,
      desc,
    });

    return response.json(cashFlow);
  }
}
