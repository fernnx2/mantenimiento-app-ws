import {
  Count,
  CountSchema,
  Filter,
  FilterExcludingWhere,
  repository,
  Where,
} from '@loopback/repository';
import {
  post,
  param,
  get,
  getModelSchemaRef,
  patch,
  put,
  del,
  requestBody,
} from '@loopback/rest';
import {Pem} from '../models';
import {PemRepository} from '../repositories';

export class PemController {
  constructor(
    @repository(PemRepository)
    public pemRepository : PemRepository,
  ) {}

  @post('/pems', {
    responses: {
      '200': {
        description: 'Pem model instance',
        content: {'application/json': {schema: getModelSchemaRef(Pem)}},
      },
    },
  })
  async create(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Pem, {
            title: 'NewPem',
            
          }),
        },
      },
    })
    pem: Pem,
  ): Promise<Pem> {
    return this.pemRepository.create(pem);
  }

  @get('/pems/count', {
    responses: {
      '200': {
        description: 'Pem model count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async count(
    @param.where(Pem) where?: Where<Pem>,
  ): Promise<Count> {
    return this.pemRepository.count(where);
  }

  @get('/pems', {
    responses: {
      '200': {
        description: 'Array of Pem model instances',
        content: {
          'application/json': {
            schema: {
              type: 'array',
              items: getModelSchemaRef(Pem, {includeRelations: true}),
            },
          },
        },
      },
    },
  })
  async find(
    @param.filter(Pem) filter?: Filter<Pem>,
  ): Promise<Pem[]> {
    return this.pemRepository.find(filter);
  }

  @patch('/pems', {
    responses: {
      '200': {
        description: 'Pem PATCH success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async updateAll(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Pem, {partial: true}),
        },
      },
    })
    pem: Pem,
    @param.where(Pem) where?: Where<Pem>,
  ): Promise<Count> {
    return this.pemRepository.updateAll(pem, where);
  }

  @get('/pems/{id}', {
    responses: {
      '200': {
        description: 'Pem model instance',
        content: {
          'application/json': {
            schema: getModelSchemaRef(Pem, {includeRelations: true}),
          },
        },
      },
    },
  })
  async findById(
    @param.path.string('id') id: string,
    @param.filter(Pem, {exclude: 'where'}) filter?: FilterExcludingWhere<Pem>
  ): Promise<Pem> {
    return this.pemRepository.findById(id, filter);
  }

  @patch('/pems/{id}', {
    responses: {
      '204': {
        description: 'Pem PATCH success',
      },
    },
  })
  async updateById(
    @param.path.string('id') id: string,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Pem, {partial: true}),
        },
      },
    })
    pem: Pem,
  ): Promise<void> {
    await this.pemRepository.updateById(id, pem);
  }

  @put('/pems/{id}', {
    responses: {
      '204': {
        description: 'Pem PUT success',
      },
    },
  })
  async replaceById(
    @param.path.string('id') id: string,
    @requestBody() pem: Pem,
  ): Promise<void> {
    await this.pemRepository.replaceById(id, pem);
  }

  @del('/pems/{id}', {
    responses: {
      '204': {
        description: 'Pem DELETE success',
      },
    },
  })
  async deleteById(@param.path.string('id') id: string): Promise<void> {
    await this.pemRepository.deleteById(id);
  }
}
