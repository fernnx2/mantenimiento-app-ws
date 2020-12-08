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
import {SolicitudOrdenTrabajo} from '../models';
import {SolicitudOrdenTrabajoRepository} from '../repositories';

@authenticate('jwt')
export class SolicitudOrdenTrabajoController {
  constructor(
    @repository(SolicitudOrdenTrabajoRepository)
    public solicitudOrdenTrabajoRepository: SolicitudOrdenTrabajoRepository,
  ) {}

  @post('/solicitudes-ordenes-trabajo', {
    responses: {
      '200': {
        description: 'SolicitudOrdenTrabajo model instance',
        content: {
          'application/json': {
            schema: getModelSchemaRef(SolicitudOrdenTrabajo),
          },
        },
      },
    },
  })
  async create(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(SolicitudOrdenTrabajo, {
            title: 'NewSolicitudOrdenTrabajo',
          }),
        },
      },
    })
    solicitudOrdenTrabajo: SolicitudOrdenTrabajo,
  ): Promise<SolicitudOrdenTrabajo> {
    return this.solicitudOrdenTrabajoRepository.create(solicitudOrdenTrabajo);
  }

  @get('/solicitudes-ordenes-trabajo/count', {
    responses: {
      '200': {
        description: 'SolicitudOrdenTrabajo model count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async count(
    @param.where(SolicitudOrdenTrabajo) where?: Where<SolicitudOrdenTrabajo>,
  ): Promise<Count> {
    return this.solicitudOrdenTrabajoRepository.count(where);
  }

  @get('/solicitudes-ordenes-trabajo', {
    responses: {
      '200': {
        description: 'Array of SolicitudOrdenTrabajo model instances',
        content: {
          'application/json': {
            schema: {
              type: 'array',
              items: getModelSchemaRef(SolicitudOrdenTrabajo, {
                includeRelations: true,
              }),
            },
          },
        },
      },
    },
  })
  async find(
    @param.filter(SolicitudOrdenTrabajo) filter?: Filter<SolicitudOrdenTrabajo>,
  ): Promise<SolicitudOrdenTrabajo[]> {
    return this.solicitudOrdenTrabajoRepository.find(filter);
  }

  @patch('/solicitudes-ordenes-trabajo', {
    responses: {
      '200': {
        description: 'SolicitudOrdenTrabajo PATCH success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async updateAll(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(SolicitudOrdenTrabajo, {partial: true}),
        },
      },
    })
    solicitudOrdenTrabajo: SolicitudOrdenTrabajo,
    @param.where(SolicitudOrdenTrabajo) where?: Where<SolicitudOrdenTrabajo>,
  ): Promise<Count> {
    return this.solicitudOrdenTrabajoRepository.updateAll(
      solicitudOrdenTrabajo,
      where,
    );
  }

  @get('/solicitudes-ordenes-trabajo/{id}', {
    responses: {
      '200': {
        description: 'SolicitudOrdenTrabajo model instance',
        content: {
          'application/json': {
            schema: getModelSchemaRef(SolicitudOrdenTrabajo, {
              includeRelations: true,
            }),
          },
        },
      },
    },
  })
  async findById(
    @param.path.string('id') id: string,
    @param.filter(SolicitudOrdenTrabajo, {exclude: 'where'})
    filter?: FilterExcludingWhere<SolicitudOrdenTrabajo>,
  ): Promise<SolicitudOrdenTrabajo> {
    return this.solicitudOrdenTrabajoRepository.findById(id, filter);
  }

  @patch('/solicitudes-ordenes-trabajo/{id}', {
    responses: {
      '204': {
        description: 'SolicitudOrdenTrabajo PATCH success',
      },
    },
  })
  async updateById(
    @param.path.string('id') id: string,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(SolicitudOrdenTrabajo, {partial: true}),
        },
      },
    })
    solicitudOrdenTrabajo: SolicitudOrdenTrabajo,
  ): Promise<void> {
    await this.solicitudOrdenTrabajoRepository.updateById(
      id,
      solicitudOrdenTrabajo,
    );
  }

  @put('/solicitudes-ordenes-trabajo/{id}', {
    responses: {
      '204': {
        description: 'SolicitudOrdenTrabajo PUT success',
      },
    },
  })
  async replaceById(
    @param.path.string('id') id: string,
    @requestBody() solicitudOrdenTrabajo: SolicitudOrdenTrabajo,
  ): Promise<void> {
    await this.solicitudOrdenTrabajoRepository.replaceById(
      id,
      solicitudOrdenTrabajo,
    );
  }

  @del('/solicitudes-ordenes-trabajo/{id}', {
    responses: {
      '204': {
        description: 'SolicitudOrdenTrabajo DELETE success',
      },
    },
  })
  async deleteById(@param.path.string('id') id: string): Promise<void> {
    await this.solicitudOrdenTrabajoRepository.deleteById(id);
  }
}
