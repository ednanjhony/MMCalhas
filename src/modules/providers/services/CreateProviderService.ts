import { injectable, inject } from 'tsyringe';

import Provider from '../infra/typeorm/entities/Provider';
import IProvidersRepository from '../repositories/IProvidersRepository';

interface IRequest {
  name: string;
  tel: string;
}

@injectable()
class CreateProviderService {
  constructor(
    @inject('ProvidersRepository')
    private providersRepository: IProvidersRepository,
  ) {}

  public async execute({ name, tel }: IRequest): Promise<Provider> {
    const provider = await this.providersRepository.create({
      name,
      tel,
    });
    return provider;
  }
}

export default CreateProviderService;
