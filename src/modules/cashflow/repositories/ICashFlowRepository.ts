import CashFlow from '../infra/typeorm/entities/CashFlow';
import ICreateCashFlowDTO from '../dtos/ICreateCashFlowDTO';
import IFindAllCashFlowDTO from '../dtos/IFindAllCashFlowDTO';

export default interface ICashFlowRepository {
  create(data: ICreateCashFlowDTO): Promise<CashFlow>;
  findAllCashFlow(data: IFindAllCashFlowDTO): Promise<CashFlow[]>;
}
