import CashFlow from '../infra/typeorm/entities/CashFlow';
import ICreateCashFlowDTO from '../dtos/ICreateCashFlowDTO';

export default interface ICashFlowRepository {
  create(data: ICreateCashFlowDTO): Promise<CashFlow>;
}
