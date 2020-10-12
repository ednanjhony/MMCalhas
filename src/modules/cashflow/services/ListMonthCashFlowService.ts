import { injectable, inject } from 'tsyringe';
import { getDate } from 'date-fns';

import ICashFlowRepository from '../repositories/ICashFlowRepository';

interface IRequest {
  id: string;
  month: number;
  year: number;
}

type IResponse = Array<{
  day: number;
}>;

@injectable()
class ListMonthCashFlowService {
  constructor(
    @inject('CashFlowRepository')
    private cashFlowRepository: ICashFlowRepository,
  ) {}

  // maintance

  public async execute({ id, year, month }: IRequest): Promise<IResponse> {
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
