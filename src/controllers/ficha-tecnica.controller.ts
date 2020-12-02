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
import {FichaTecnica} from '../models';
import {FichaTecnicaRepository} from '../repositories';

export class FichaTecnicaController {
  constructor(
    @repository(FichaTecnicaRepository)
    public fichaTecnicaRepository : FichaTecnicaRepository,
  ) {}

  @post('/ficha-tecnicas', {
    responses: {
      '200': {
        description: 'FichaTecnica model instance',
        content: {'application/json': {schema: getModelSchemaRef(FichaTecnica)}},
      },
    },
  })
  async create(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(FichaTecnica, {
            title: 'NewFichaTecnica',
            
          }),
        },
      },
    })
    fichaTecnica: FichaTecnica,
  ): Promise<FichaTecnica> {
    return this.fichaTecnicaRepository.create(fichaTecnica);
  }

  @get('/ficha-tecnicas/count', {
    responses: {
      '200': {
        description: 'FichaTecnica model count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async count(
    @param.where(FichaTecnica) where?: Where<FichaTecnica>,
  ): Promise<Count> {
    return this.fichaTecnicaRepository.count(where);
  }

  @get('/ficha-tecnicas', {
    responses: {
      '200': {
        description: 'Array of FichaTecnica model instances',
        content: {
          'application/json': {
            schema: {
              type: 'array',
              items: getModelSchemaRef(FichaTecnica, {includeRelations: true}),
            },
          },
        },
      },
    },
  })
  async find(
    @param.filter(FichaTecnica) filter?: Filter<FichaTecnica>,
  ): Promise<FichaTecnica[]> {
    return this.fichaTecnicaRepository.find(filter);
  }

  @patch('/ficha-tecnicas', {
    responses: {
      '200': {
        description: 'FichaTecnica PATCH success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async updateAll(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(FichaTecnica, {partial: true}),
        },
      },
    })
    fichaTecnica: FichaTecnica,
    @param.where(FichaTecnica) where?: Where<FichaTecnica>,
  ): Promise<Count> {
    return this.fichaTecnicaRepository.updateAll(fichaTecnica, where);
  }

  @get('/ficha-tecnicas/{id}', {
    responses: {
      '200': {
        description: 'FichaTecnica model instance',
        content: {
          'application/json': {
            schema: getModelSchemaRef(FichaTecnica, {includeRelations: true}),
          },
        },
      },
    },
  })
  async findById(
    @param.path.string('id') id: string,
    @param.filter(FichaTecnica, {exclude: 'where'}) filter?: FilterExcludingWhere<FichaTecnica>
  ): Promise<FichaTecnica> {
    return this.fichaTecnicaRepository.findById(id, filter);
  }

  @patch('/ficha-tecnicas/{id}', {
    responses: {
      '204': {
        description: 'FichaTecnica PATCH success',
      },
    },
  })
  async updateById(
    @param.path.string('id') id: string,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(FichaTecnica, {partial: true}),
        },
      },
    })
    fichaTecnica: FichaTecnica,
  ): Promise<void> {
    await this.fichaTecnicaRepository.updateById(id, fichaTecnica);
  }

  @put('/ficha-tecnicas/{id}', {
    responses: {
      '204': {
        description: 'FichaTecnica PUT success',
      },
    },
  })
  async replaceById(
    @param.path.string('id') id: string,
    @requestBody() fichaTecnica: FichaTecnica,
  ): Promise<void> {
    await this.fichaTecnicaRepository.replaceById(id, fichaTecnica);
  }

  @del('/ficha-tecnicas/{id}', {
    responses: {
      '204': {
        description: 'FichaTecnica DELETE success',
      },
    },
  })
  async deleteById(@param.path.string('id') id: string): Promise<void> {
    await this.fichaTecnicaRepository.deleteById(id);
  }
}
