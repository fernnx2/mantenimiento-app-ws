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
import {PlanPem} from '../models';
import {PlanPemRepository} from '../repositories';

export class PlanPemController {
  constructor(
    @repository(PlanPemRepository)
    public planPemRepository : PlanPemRepository,
  ) {}

  @post('/plan-pems', {
    responses: {
      '200': {
        description: 'PlanPem model instance',
        content: {'application/json': {schema: getModelSchemaRef(PlanPem)}},
      },
    },
  })
  async create(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(PlanPem, {
            title: 'NewPlanPem',
            
          }),
        },
      },
    })
    planPem: PlanPem,
  ): Promise<PlanPem> {
    return this.planPemRepository.create(planPem);
  }

  @get('/plan-pems/count', {
    responses: {
      '200': {
        description: 'PlanPem model count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async count(
    @param.where(PlanPem) where?: Where<PlanPem>,
  ): Promise<Count> {
    return this.planPemRepository.count(where);
  }

  @get('/plan-pems', {
    responses: {
      '200': {
        description: 'Array of PlanPem model instances',
        content: {
          'application/json': {
            schema: {
              type: 'array',
              items: getModelSchemaRef(PlanPem, {includeRelations: true}),
            },
          },
        },
      },
    },
  })
  async find(
    @param.filter(PlanPem) filter?: Filter<PlanPem>,
  ): Promise<PlanPem[]> {
    return this.planPemRepository.find(filter);
  }

  @patch('/plan-pems', {
    responses: {
      '200': {
        description: 'PlanPem PATCH success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async updateAll(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(PlanPem, {partial: true}),
        },
      },
    })
    planPem: PlanPem,
    @param.where(PlanPem) where?: Where<PlanPem>,
  ): Promise<Count> {
    return this.planPemRepository.updateAll(planPem, where);
  }

  @get('/plan-pems/{id}', {
    responses: {
      '200': {
        description: 'PlanPem model instance',
        content: {
          'application/json': {
            schema: getModelSchemaRef(PlanPem, {includeRelations: true}),
          },
        },
      },
    },
  })
  async findById(
    @param.path.string('id') id: string,
    @param.filter(PlanPem, {exclude: 'where'}) filter?: FilterExcludingWhere<PlanPem>
  ): Promise<PlanPem> {
    return this.planPemRepository.findById(id, filter);
  }

  @patch('/plan-pems/{id}', {
    responses: {
      '204': {
        description: 'PlanPem PATCH success',
      },
    },
  })
  async updateById(
    @param.path.string('id') id: string,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(PlanPem, {partial: true}),
        },
      },
    })
    planPem: PlanPem,
  ): Promise<void> {
    await this.planPemRepository.updateById(id, planPem);
  }

  @put('/plan-pems/{id}', {
    responses: {
      '204': {
        description: 'PlanPem PUT success',
      },
    },
  })
  async replaceById(
    @param.path.string('id') id: string,
    @requestBody() planPem: PlanPem,
  ): Promise<void> {
    await this.planPemRepository.replaceById(id, planPem);
  }

  @del('/plan-pems/{id}', {
    responses: {
      '204': {
        description: 'PlanPem DELETE success',
      },
    },
  })
  async deleteById(@param.path.string('id') id: string): Promise<void> {
    await this.planPemRepository.deleteById(id);
  }
}
