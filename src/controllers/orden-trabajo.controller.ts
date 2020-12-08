import {authenticate} from '@loopback/authentication';
import {
  Count,
  CountSchema,
  Filter,
  FilterExcludingWhere,
  repository,
  Where,
} from '@loopback/repository';
import {
  del,
  get,
  getModelSchemaRef,
  param,
  patch,
  post,
  put,
  requestBody,
} from '@loopback/rest';
import {OrdenTrabajo} from '../models';
import {OrdenTrabajoRepository} from '../repositories';

@authenticate('jwt')
export class OrdenTrabajoController {
  constructor(
    @repository(OrdenTrabajoRepository)
    public ordenTrabajoRepository: OrdenTrabajoRepository,
  ) {}

  @post('/ordenes-trabajo', {
    responses: {
      '200': {
        description: 'OrdenTrabajo model instance',
        content: {
          'application/json': {schema: getModelSchemaRef(OrdenTrabajo)},
        },
      },
    },
  })
  async create(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(OrdenTrabajo, {
            title: 'NewOrdenTrabajo',
          }),
        },
      },
    })
    ordenTrabajo: OrdenTrabajo,
  ): Promise<OrdenTrabajo> {
    return this.ordenTrabajoRepository.create(ordenTrabajo);
  }

  @get('/ordenes-trabajo/count', {
    responses: {
      '200': {
        description: 'OrdenTrabajo model count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async count(
    @param.where(OrdenTrabajo) where?: Where<OrdenTrabajo>,
  ): Promise<Count> {
    return this.ordenTrabajoRepository.count(where);
  }

  @get('/ordenes-trabajo', {
    responses: {
      '200': {
        description: 'Array of OrdenTrabajo model instances',
        content: {
          'application/json': {
            schema: {
              type: 'array',
              items: getModelSchemaRef(OrdenTrabajo, {includeRelations: true}),
            },
          },
        },
      },
    },
  })
  async find(
    @param.filter(OrdenTrabajo) filter?: Filter<OrdenTrabajo>,
  ): Promise<OrdenTrabajo[]> {
    return this.ordenTrabajoRepository.find(filter);
  }

  @patch('/ordenes-trabajo', {
    responses: {
      '200': {
        description: 'OrdenTrabajo PATCH success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async updateAll(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(OrdenTrabajo, {partial: true}),
        },
      },
    })
    ordenTrabajo: OrdenTrabajo,
    @param.where(OrdenTrabajo) where?: Where<OrdenTrabajo>,
  ): Promise<Count> {
    return this.ordenTrabajoRepository.updateAll(ordenTrabajo, where);
  }

  @get('/ordenes-trabajo/{id}', {
    responses: {
      '200': {
        description: 'OrdenTrabajo model instance',
        content: {
          'application/json': {
            schema: getModelSchemaRef(OrdenTrabajo, {includeRelations: true}),
          },
        },
      },
    },
  })
  async findById(
    @param.path.string('id') id: string,
    @param.filter(OrdenTrabajo, {exclude: 'where'})
    filter?: FilterExcludingWhere<OrdenTrabajo>,
  ): Promise<OrdenTrabajo> {
    return this.ordenTrabajoRepository.findById(id, filter);
  }

  @patch('/ordenes-trabajo/{id}', {
    responses: {
      '204': {
        description: 'OrdenTrabajo PATCH success',
      },
    },
  })
  async updateById(
    @param.path.string('id') id: string,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(OrdenTrabajo, {partial: true}),
        },
      },
    })
    ordenTrabajo: OrdenTrabajo,
  ): Promise<void> {
    await this.ordenTrabajoRepository.updateById(id, ordenTrabajo);
  }

  @put('/ordenes-trabajo/{id}', {
    responses: {
      '204': {
        description: 'OrdenTrabajo PUT success',
      },
    },
  })
  async replaceById(
    @param.path.string('id') id: string,
    @requestBody() ordenTrabajo: OrdenTrabajo,
  ): Promise<void> {
    await this.ordenTrabajoRepository.replaceById(id, ordenTrabajo);
  }

  @del('/ordenes-trabajo/{id}', {
    responses: {
      '204': {
        description: 'OrdenTrabajo DELETE success',
      },
    },
  })
  async deleteById(@param.path.string('id') id: string): Promise<void> {
    await this.ordenTrabajoRepository.deleteById(id);
  }
}
