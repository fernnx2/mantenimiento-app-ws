import {Entity, model, property} from '@loopback/repository';

@model()
export class Pem extends Entity {
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
    type: 'string',
    required: true,
  })
  tipoEquipo: string;

  @property({
    type: 'string',
    required: true,
  })
  objetivoProcedimiento: string;

  @property({
    type: 'string',
    required: true,
  })
  descripcionProcedimiento: string;

  @property({
    type: 'date',
    required: true,
  })
  fechaCreacion: string;

  @property({
    type: 'string',
    required: true,
  })
  nombreCreador: string;

  @property({
    type: 'string',
    required: true,
  })
  nombrePem: string;

  @property({
    type: 'string',
    required: true,
  })
  descripcionPem: string;

  @property({
    type: 'number',
    required: true,
  })
  frecuenciaEnMeses: number;

  @property({
    type: 'string',
    required: true,
  })
  tipoPem: object;

  @property({
    type: 'array',
    itemType: 'object',
    required: true,
  })
  tareasPem: object[];

  @property({
    type: 'array',
    itemType: 'object',
  })
  manoObra?: object[];

  @property({
    type: 'array',
    itemType: 'object',
  })
  repuestosMateriales?: object[];

  constructor(data?: Partial<Pem>) {
    super(data);
  }
}

export interface PemRelations {
  // describe navigational properties here
}

export type PemWithRelations = Pem & PemRelations;
