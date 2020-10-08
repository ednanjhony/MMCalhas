import { getRepository, Repository } from 'typeorm';

import ICashFlowRepository from '@modules/cashflow/repositories/ICashFlowRepository';
import ICreateCashFlowDTO from '@modules/cashflow/dtos/ICreateCashFlowDTO';

import CashFlow from '../entities/CashFlow';

class CashFlowRepository implements ICashFlowRepository {
  private ormRepository: Repository<CashFlow>;

  constructor() {
    this.ormRepository = getRepository(CashFlow);
  }

  public async create({
    id,
    name,
    date,
    price,
    desc,
  }: ICreateCashFlowDTO): Promise<CashFlow> {
    const cashFlow = this.ormRepository.create({
      id,
      name,
      date,
      price,
      desc,
    });

    await this.ormRepository.save(cashFlow);

    return cashFlow;
  }
}

export default CashFlowRepository;
