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
import {CalendarioAuxiliar} from '../models';
import {CalendarioAuxiliarRepository} from '../repositories';

@authenticate('jwt')
export class CalendarioAuxiliarController {
  constructor(
    @repository(CalendarioAuxiliarRepository)
    public calendarioAuxiliarRepository: CalendarioAuxiliarRepository,
  ) {}

  @post('/calendario-auxiliar', {
    responses: {
      '200': {
        description: 'CalendarioAuxiliar model instance',
        content: {
          'application/json': {schema: getModelSchemaRef(CalendarioAuxiliar)},
        },
      },
    },
  })
  async create(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(CalendarioAuxiliar, {
            title: 'NewCalendarioAuxiliar',
          }),
        },
      },
    })
    calendarioAuxiliar: CalendarioAuxiliar,
  ): Promise<CalendarioAuxiliar> {
    return this.calendarioAuxiliarRepository.create(calendarioAuxiliar);
  }

  @get('/calendario-auxiliar/count', {
    responses: {
      '200': {
        description: 'CalendarioAuxiliar model count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async count(
    @param.where(CalendarioAuxiliar) where?: Where<CalendarioAuxiliar>,
  ): Promise<Count> {
    return this.calendarioAuxiliarRepository.count(where);
  }

  @get('/calendario-auxiliar', {
    responses: {
      '200': {
        description: 'Array of CalendarioAuxiliar model instances',
        content: {
          'application/json': {
            schema: {
              type: 'array',
              items: getModelSchemaRef(CalendarioAuxiliar, {
                includeRelations: true,
              }),
            },
          },
        },
      },
    },
  })
  async find(
    @param.filter(CalendarioAuxiliar) filter?: Filter<CalendarioAuxiliar>,
  ): Promise<CalendarioAuxiliar[]> {
    return this.calendarioAuxiliarRepository.find(filter);
  }

  @patch('/calendario-auxiliar', {
    responses: {
      '200': {
        description: 'CalendarioAuxiliar PATCH success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async updateAll(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(CalendarioAuxiliar, {partial: true}),
        },
      },
    })
    calendarioAuxiliar: CalendarioAuxiliar,
    @param.where(CalendarioAuxiliar) where?: Where<CalendarioAuxiliar>,
  ): Promise<Count> {
    return this.calendarioAuxiliarRepository.updateAll(
      calendarioAuxiliar,
      where,
    );
  }

  @get('/calendario-auxiliar/{id}', {
    responses: {
      '200': {
        description: 'CalendarioAuxiliar model instance',
        content: {
          'application/json': {
            schema: getModelSchemaRef(CalendarioAuxiliar, {
              includeRelations: true,
            }),
          },
        },
      },
    },
  })
  async findById(
    @param.path.string('id') id: string,
    @param.filter(CalendarioAuxiliar, {exclude: 'where'})
    filter?: FilterExcludingWhere<CalendarioAuxiliar>,
  ): Promise<CalendarioAuxiliar> {
    return this.calendarioAuxiliarRepository.findById(id, filter);
  }

  @patch('/calendario-auxiliar/{id}', {
    responses: {
      '204': {
        description: 'CalendarioAuxiliar PATCH success',
      },
    },
  })
  async updateById(
    @param.path.string('id') id: string,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(CalendarioAuxiliar, {partial: true}),
        },
      },
    })
    calendarioAuxiliar: CalendarioAuxiliar,
  ): Promise<void> {
    await this.calendarioAuxiliarRepository.updateById(id, calendarioAuxiliar);
  }

  @put('/calendario-auxiliar/{id}', {
    responses: {
      '204': {
        description: 'CalendarioAuxiliar PUT success',
      },
    },
  })
  async replaceById(
    @param.path.string('id') id: string,
    @requestBody() calendarioAuxiliar: CalendarioAuxiliar,
  ): Promise<void> {
    await this.calendarioAuxiliarRepository.replaceById(id, calendarioAuxiliar);
  }

  @del('/calendario-auxiliar/{id}', {
    responses: {
      '204': {
        description: 'CalendarioAuxiliar DELETE success',
      },
    },
  })
  async deleteById(@param.path.string('id') id: string): Promise<void> {
    await this.calendarioAuxiliarRepository.deleteById(id);
  }
}
