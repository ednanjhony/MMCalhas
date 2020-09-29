import { injectable, inject } from 'tsyringe';

import IProvidersRepository from '@modules/providers/repositories/IProvidersRepository';
import Provider from '../infra/typeorm/entities/Provider';

interface IRequest {
  name: string;
  tel: string;
}

@injectable()
class ListProvidersService {
  constructor(
    @inject('ProvidersRepository')
    private providersRepository: IProvidersRepository,
  ) {}

  public async execute({ name, tel }: IRequest): Promise<Provider[]> {
    const providers = await this.providersRepository.findAllProviders({
      name,
      tel,
    });

    return providers;
  }
}

export default ListProvidersService;
