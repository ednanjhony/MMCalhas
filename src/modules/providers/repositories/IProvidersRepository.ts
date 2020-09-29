import ICreateProviderDTO from '../dtos/ICreateProviderDTO';
import IFindAllProvidersDTO from '../dtos/IFindAllProvidersDTO';
import Provider from '../infra/typeorm/entities/Provider';

export default interface IProvidersRepository {
  create(data: ICreateProviderDTO): Promise<Provider>;
  findAllProviders(data: IFindAllProvidersDTO): Promise<Provider[]>;
}
