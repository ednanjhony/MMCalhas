import { Request, Response } from 'express';
import { container } from 'tsyringe';

import CreateProviderService from '@modules/providers/services/CreateProviderService';

export default class ProvidersController {
  public async create(request: Request, response: Response): Promise<Response> {
    const { provider_id } = request.params;
    const { name, tel } = request.body;

    const createProvider = container.resolve(CreateProviderService);

    const provider = await createProvider.execute({
      provider_id,
      name,
      tel,
    });

    return response.json(provider);
  }
}
