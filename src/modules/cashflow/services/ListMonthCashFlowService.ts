import { injectable, inject } from 'tsyringe';
import { getDate } from 'date-fns';

import ICashFlowRepository from '../repositories/ICashFlowRepository';
import CashFlow from '../infra/typeorm/entities/CashFlow';

interface IRequest {
  id: string;
  day: number;
  month: number;
  year: number;
}

@injectable()
class ListMonthCashFlowService {
  constructor(
    @inject('CashFlowRepository')
    private cashFlowRepository: ICashFlowRepository,
  ) {}

  // maintance

  public async execute({ id, year, month }: IRequest): Promise<CashFlow[]> {
    const cashFlows = await this.cashFlowRepository.fidnAllInMonthFromCashFlow({
      id,
      year,
      month,
    });

    const cashFlowInMonth = cashFlows.filter(cashFlow => {
      return getDate(cashFlow.date) === month;
    });

    return cashFlowInMonth;
  }
}

export default ListMonthCashFlowService;
