import {Entity, model, property} from '@loopback/repository';

@model()
export class CalendarioAuxiliar extends Entity {
  @property({
    type: 'string',
    id: true,
    generated: true,
  })
  id?: string;

  @property({
    type: 'string',
    required: true,
  })
  codigoPem: string;

  @property({
    type: 'date',
    required: true,
  })
  fechaProgramacionTrabajo: string;

  @property({
    type: 'string',
    required: true,
  })
  numeroOrdenTrabajo: string;

  @property({
    type: 'object',
    required: true,
  })
  estado: object;


  constructor(data?: Partial<CalendarioAuxiliar>) {
    super(data);
  }
}

export interface CalendarioAuxiliarRelations {
  // describe navigational properties here
}

export type CalendarioAuxiliarWithRelations = CalendarioAuxiliar & CalendarioAuxiliarRelations;
