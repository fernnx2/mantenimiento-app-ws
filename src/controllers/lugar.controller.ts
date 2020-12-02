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
import {Lugar} from '../models';
import {LugarRepository} from '../repositories';

export class LugarController {
  constructor(
    @repository(LugarRepository)
    public lugarRepository : LugarRepository,
  ) {}

  @post('/lugares', {
    responses: {
      '200': {
        description: 'Lugar model instance',
        content: {'application/json': {schema: getModelSchemaRef(Lugar)}},
      },
    },
  })
  async create(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Lugar, {
            title: 'NewLugar',
            
          }),
        },
      },
    })
    lugar: Lugar,
  ): Promise<Lugar> {
    return this.lugarRepository.create(lugar);
  }

  @get('/lugares/count', {
    responses: {
      '200': {
        description: 'Lugar model count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async count(
    @param.where(Lugar) where?: Where<Lugar>,
  ): Promise<Count> {
    return this.lugarRepository.count(where);
  }

  @get('/lugares', {
    responses: {
      '200': {
        description: 'Array of Lugar model instances',
        content: {
          'application/json': {
            schema: {
              type: 'array',
              items: getModelSchemaRef(Lugar, {includeRelations: true}),
            },
          },
        },
      },
    },
  })
  async find(
    @param.filter(Lugar) filter?: Filter<Lugar>,
  ): Promise<Lugar[]> {
    return this.lugarRepository.find(filter);
  }

  @patch('/lugares', {
    responses: {
      '200': {
        description: 'Lugar PATCH success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async updateAll(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Lugar, {partial: true}),
        },
      },
    })
    lugar: Lugar,
    @param.where(Lugar) where?: Where<Lugar>,
  ): Promise<Count> {
    return this.lugarRepository.updateAll(lugar, where);
  }

  @get('/lugares/{id}', {
    responses: {
      '200': {
        description: 'Lugar model instance',
        content: {
          'application/json': {
            schema: getModelSchemaRef(Lugar, {includeRelations: true}),
          },
        },
      },
    },
  })
  async findById(
    @param.path.string('id') id: string,
    @param.filter(Lugar, {exclude: 'where'}) filter?: FilterExcludingWhere<Lugar>
  ): Promise<Lugar> {
    return this.lugarRepository.findById(id, filter);
  }

  @patch('/lugares/{id}', {
    responses: {
      '204': {
        description: 'Lugar PATCH success',
      },
    },
  })
  async updateById(
    @param.path.string('id') id: string,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Lugar, {partial: true}),
        },
      },
    })
    lugar: Lugar,
  ): Promise<void> {
    await this.lugarRepository.updateById(id, lugar);
  }

  @put('/lugares/{id}', {
    responses: {
      '204': {
        description: 'Lugar PUT success',
      },
    },
  })
  async replaceById(
    @param.path.string('id') id: string,
    @requestBody() lugar: Lugar,
  ): Promise<void> {
    await this.lugarRepository.replaceById(id, lugar);
  }

  @del('/lugares/{id}', {
    responses: {
      '204': {
        description: 'Lugar DELETE success',
      },
    },
  })
  async deleteById(@param.path.string('id') id: string): Promise<void> {
    await this.lugarRepository.deleteById(id);
  }
}
