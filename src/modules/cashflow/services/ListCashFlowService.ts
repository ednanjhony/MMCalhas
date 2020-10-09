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
class ListCashFlowService {
  constructor(
    @inject('CashFlowRepository')
    private cashFlowRepository: ICashFlowRepository,
  ) {}

  public async execute({
    id,
    name,
    date,
    price,
    total,
    desc,
  }: IRequest): Promise<CashFlow[]> {
    const cashFlow = await this.cashFlowRepository.findAllCashFlow({
      id,
      name,
      date,
      price,
      total,
      desc,
    });

    return cashFlow;
  }
}

export default ListCashFlowService;
