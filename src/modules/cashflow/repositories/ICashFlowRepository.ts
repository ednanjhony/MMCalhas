import CashFlow from '../infra/typeorm/entities/CashFlow';
import ICreateCashFlowDTO from '../dtos/ICreateCashFlowDTO';
import IFindAllCashFlowDTO from '../dtos/IFindAllCashFlowDTO';
import IFindAllInMonthFromCashFlowDTO from '../dtos/IFindAllInMonthFromCashFlowDTO';

export default interface ICashFlowRepository {
  create(data: ICreateCashFlowDTO): Promise<CashFlow>;
  findAllCashFlow(data: IFindAllCashFlowDTO): Promise<CashFlow[]>;
  fidnAllInMonthFromCashFlow(
    data: IFindAllInMonthFromCashFlowDTO,
  ): Promise<CashFlow[]>;
}
