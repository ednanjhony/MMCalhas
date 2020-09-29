import { getRepository, Repository } from 'typeorm';

import IProvidersRepository from '@modules/providers/repositories/IProvidersRepository';
import ICreateProviderDTO from '@modules/providers/dtos/ICreateProviderDTO';
import IFindAllProviders from '@modules/providers/dtos/IFindAllProvidersDTO';

import Provider from '../entities/Provider';

class ProvidersRepository implements IProvidersRepository {
  private ormRepository: Repository<Provider>;

  constructor() {
    this.ormRepository = getRepository(Provider);
  }

  public async findAllProviders({
    provider_id,
  }: IFindAllProviders): Promise<Provider[]> {
    let providers: Provider[];

    if (provider_id) {
      providers = await this.ormRepository.find({
        where: {
          provider_id,
        },
      });
    } else {
      providers = await this.ormRepository.find();
    }

    return providers;
  }

  public async create({
    provider_id,
    name,
    tel,
  }: ICreateProviderDTO): Promise<Provider> {
    const provider = this.ormRepository.create({
      provider_id,
      name,
      tel,
    });

    await this.ormRepository.save(provider);

    return provider;
  }
}

export default ProvidersRepository;
