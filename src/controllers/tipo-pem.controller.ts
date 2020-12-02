import {authenticate} from '@loopback/authentication';
import {
  Count,
  CountSchema,
  Filter,
  FilterExcludingWhere,
  repository,
  Where
} from '@loopback/repository';
import {
  del, get,
  getModelSchemaRef, param,


  patch, post,




  put,

  requestBody
} from '@loopback/rest';
import {TipoPem} from '../models';
import {TipoPemRepository} from '../repositories';

@authenticate('jwt')
export class TipoPemController {
  constructor(
    @repository(TipoPemRepository)
    public tipoPemRepository: TipoPemRepository,
  ) { }

  @post('/tipo-pems', {
    responses: {
      '200': {
        description: 'TipoPem model instance',
        content: {'application/json': {schema: getModelSchemaRef(TipoPem)}},
      },
    },
  })
  async create(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(TipoPem, {
            title: 'NewTipoPem',

          }),
        },
      },
    })
    tipoPem: TipoPem,
  ): Promise<TipoPem> {
    return this.tipoPemRepository.create(tipoPem);
  }

  @get('/tipo-pems/count', {
    responses: {
      '200': {
        description: 'TipoPem model count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async count(
    @param.where(TipoPem) where?: Where<TipoPem>,
  ): Promise<Count> {
    return this.tipoPemRepository.count(where);
  }

  @get('/tipo-pems', {
    responses: {
      '200': {
        description: 'Array of TipoPem model instances',
        content: {
          'application/json': {
            schema: {
              type: 'array',
              items: getModelSchemaRef(TipoPem, {includeRelations: true}),
            },
          },
        },
      },
    },
  })
  async find(
    @param.filter(TipoPem) filter?: Filter<TipoPem>,
  ): Promise<TipoPem[]> {
    return this.tipoPemRepository.find(filter);
  }

  @patch('/tipo-pems', {
    responses: {
      '200': {
        description: 'TipoPem PATCH success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async updateAll(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(TipoPem, {partial: true}),
        },
      },
    })
    tipoPem: TipoPem,
    @param.where(TipoPem) where?: Where<TipoPem>,
  ): Promise<Count> {
    return this.tipoPemRepository.updateAll(tipoPem, where);
  }

  @get('/tipo-pems/{id}', {
    responses: {
      '200': {
        description: 'TipoPem model instance',
        content: {
          'application/json': {
            schema: getModelSchemaRef(TipoPem, {includeRelations: true}),
          },
        },
      },
    },
  })
  async findById(
    @param.path.string('id') id: string,
    @param.filter(TipoPem, {exclude: 'where'}) filter?: FilterExcludingWhere<TipoPem>
  ): Promise<TipoPem> {
    return this.tipoPemRepository.findById(id, filter);
  }

  @patch('/tipo-pems/{id}', {
    responses: {
      '204': {
        description: 'TipoPem PATCH success',
      },
    },
  })
  async updateById(
    @param.path.string('id') id: string,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(TipoPem, {partial: true}),
        },
      },
    })
    tipoPem: TipoPem,
  ): Promise<void> {
    await this.tipoPemRepository.updateById(id, tipoPem);
  }

  @put('/tipo-pems/{id}', {
    responses: {
      '204': {
        description: 'TipoPem PUT success',
      },
    },
  })
  async replaceById(
    @param.path.string('id') id: string,
    @requestBody() tipoPem: TipoPem,
  ): Promise<void> {
    await this.tipoPemRepository.replaceById(id, tipoPem);
  }

  @del('/tipo-pems/{id}', {
    responses: {
      '204': {
        description: 'TipoPem DELETE success',
      },
    },
  })
  async deleteById(@param.path.string('id') id: string): Promise<void> {
    await this.tipoPemRepository.deleteById(id);
  }
}
