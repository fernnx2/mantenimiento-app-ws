import {Entity, model, property} from '@loopback/repository';

@model()
export class TipoPem extends Entity {
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
  codigoTipoProcedimiento: string;

  @property({
    type: 'string',
    required: true,
  })
  decripcionTipoProcedimiento: string;


  constructor(data?: Partial<TipoPem>) {
    super(data);
  }
}

export interface TipoPemRelations {
  // describe navigational properties here
}

export type TipoPemWithRelations = TipoPem & TipoPemRelations;
