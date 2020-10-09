import { Request, Response } from 'express';
import { container } from 'tsyringe';

import ListCashFlowService from '@modules/cashflow/services/ListCashFlowService';

export default class ListCashFlowController {
  public async index(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;
    const { name, day, month, year, price, total, desc } = request.query;

    const listCashFlow = container.resolve(ListCashFlowService);

    const cashFlow = await listCashFlow.execute({
      id,
      name: String(name),
      day: Number(day),
      month: Number(month),
      year: Number(year),
      price: Number(price),
      total: Number(total),
      desc: String(desc),
    });

    return response.json(cashFlow);
  }
}
