import { injectable, inject } from 'tsyringe';

import CashFlow from '../infra/typeorm/entities/CashFlow';
import ICashFlowRepository from '../repositories/ICashFlowRepository';

interface IRequest {
  id: string;
  name: string;
  date: Date;
  price: number;
  total: number;
  desc: string;
}

@injectable()
class CreateCashFlowService {
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
  }: IRequest): Promise<CashFlow> {
    const cashFlow = await this.cashFlowRepository.create({
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

export default CreateCashFlowService;
