import { injectable, inject } from 'tsyringe';

import ICacheProvider from '@shared/container/providers/CacheProvider/models/ICacheProvider';
import Provider from '../infra/typeorm/entities/Provider';
import IProvidersRepository from '../repositories/IProvidersRepository';

interface IRequest {
  provider_id: string;
  name: string;
  tel: string;
}

@injectable()
class CreateProviderService {
  constructor(
    @inject('ProvidersRepository')
    private providersRepository: IProvidersRepository,

    @inject('CacheProvider')
    private cacheProvider: ICacheProvider,
  ) {}

  public async execute({
    provider_id,
    name,
    tel,
  }: IRequest): Promise<Provider> {
    const provider = await this.providersRepository.create({
      provider_id,
      name,
      tel,
    });
    return provider;
  }
}

export default CreateProviderService;
