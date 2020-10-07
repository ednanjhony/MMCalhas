import { Request, Response } from 'express';
import { container } from 'tsyringe';

import ListCashFlowService from '@modules/cashflow/services/ListCashFlowService';

export default class ListCashFlowController {
  public async index(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;
    const { name, date, price, total, desc } = request.query;

    const listCashFlow = container.resolve(ListCashFlowService);

    const cashFlow = await listCashFlow.execute({
      id,
      name: String(name),
      date,
      price,
      total,
      desc: String(desc),
    });

    return response.json(cashFlow);
  }
}
