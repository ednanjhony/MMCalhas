import { Request, Response } from 'express';
import { container } from 'tsyringe';

import ListProvidersService from '@modules/providers/services/ListProvidersService';

export default class ListProvidersController {
  public async index(request: Request, response: Response): Promise<Response> {
    const { provider_id } = request.params;
    const { name, tel } = request.query;

    const listProviders = container.resolve(ListProvidersService);

    const providers = await listProviders.execute({
      provider_id,
      name: String(name),
      tel: String(tel),
    });

    return response.json(providers);
  }
}
