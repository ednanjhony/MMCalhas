import { getRepository, Repository, Raw } from 'typeorm';

import ICashFlowRepository from '@modules/cashflow/repositories/ICashFlowRepository';
import ICreateCashFlowDTO from '@modules/cashflow/dtos/ICreateCashFlowDTO';
import IFindAllInMonthCashFlowDTO from '@modules/cashflow/dtos/IFindAllInMonthFromCashFlowDTO';
import IFindAllCashFlow from '@modules/cashflow/dtos/IFindAllCashFlowDTO';

import CashFlow from '../entities/CashFlow';

class CashFlowRepository implements ICashFlowRepository {
  private ormRepository: Repository<CashFlow>;

  constructor() {
    this.ormRepository = getRepository(CashFlow);
  }

  public async findAllCashFlow({ id }: IFindAllCashFlow): Promise<CashFlow[]> {
    let cashFlow: CashFlow[];

    if (id) {
      cashFlow = await this.ormRepository.find({
        where: {
          id,
        },
      });
    } else {
      cashFlow = await this.ormRepository.find();
    }

    return cashFlow;
  }

  public async findAllInMonthFromCashFlow({
    id,
    month,
    year,
  }: IFindAllInMonthCashFlowDTO): Promise<CashFlow[]> {
    const parsedMonth = String(month).padStart(2, '0');

    const cashFlow = await this.ormRepository.find({
      where: {
        id,
        date: Raw(
          dateFieldName =>
            `to_char(${dateFieldName}, 'MM-YYYY') = '${parsedMonth}-${year}'`,
        ),
      },
    });

    return cashFlow;
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
