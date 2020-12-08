import {Entity, model, property} from '@loopback/repository';
@model()
export class PlanPem extends Entity {
  @property({
    type: 'string',
    id: true,
    generated: true,
  })
  id?: string;

  @property({
    type: 'string',
  })
  codigoEquipo?: string;

  @property({
    type: 'string',
    required: true,
  })
  nombreProcedimiento: string;

  @property({
    type: 'string',
    required: true,
  })
  objetivoProcedimiento: string;

  @property({
    type: 'string',
    required: true,
  })
  frecuenciaProcedimiento: string;

  @property({
    type: 'string',
    defaultFn: 'uuid',
  })
  numeroPem: string;

  @property({
    type: 'date',
    defaultFn: 'now'
  })
  fechaCreacion: string;

  @property({
    type: 'object',
  })
  tipoPem?: object;


  constructor(data?: Partial<PlanPem>) {
    super(data);
  }
}

export interface PlanPemRelations {
  // describe navigational properties here
}

export type PlanPemWithRelations = PlanPem & PlanPemRelations;
