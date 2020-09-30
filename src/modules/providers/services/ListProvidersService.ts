import { injectable, inject } from 'tsyringe';

import IProvidersRepository from '@modules/providers/repositories/IProvidersRepository';
import Provider from '../infra/typeorm/entities/Provider';

interface IRequest {
  provider_id: string;
  name: string;
  tel: string;
}

@injectable()
class ListProvidersService {
  constructor(
    @inject('ProvidersRepository')
    private providersRepository: IProvidersRepository,
  ) {}

  public async execute({
    provider_id,
    name,
    tel,
  }: IRequest): Promise<Provider[]> {
    const provider = await this.providersRepository.findAllProviders({
      provider_id,
      name,
      tel,
    });

    return provider;
  }
}

export default ListProvidersService;
