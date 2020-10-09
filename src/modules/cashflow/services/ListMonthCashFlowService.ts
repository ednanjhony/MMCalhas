import { injectable, inject } from 'tsyringe';
import { getDaysInMonth, getDate, isAfter } from 'date-fns';

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

  public async execute({ id, year, month }: IRequest): Promise<IResponse> {
    const cashFlow = await this.cashFlowRepository.fidnAllInMonthFromCashFlow({
      id,
      year,
      month,
    });

    const number;
  }
}
