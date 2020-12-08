import {Entity, model, property} from '@loopback/repository';

@model()
export class OrdenTrabajo extends Entity {
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
  idSolicitudOrdenTrabajo: string;

  @property({
    type: 'date',
    required: true,
  })
  fechaARealizar: string;

  @property({
    type: 'string',
    required: true,
  })
  codigoOrdenTrabajo: string;

  @property({
    type: 'object',
    required: true,
  })
  estatus: object;

  @property({
    type: 'array',
    itemType: 'string',
    required: true,
  })
  tiposProcedimientos: string[];

  @property({
    type: 'string',
    required: true,
  })
  codigoEquipo: string;

  @property({
    type: 'object',
  })
  manoObra?: object;

  @property({
    type: 'array',
    itemType: 'object',
  })
  repuestosMateriales?: object[];

  @property({
    type: 'array',
    itemType: 'object',
  })
  herramientas?: object[];

  @property({
    type: 'string',
    required: true,
  })
  personaDesignada: string;

  @property({
    type: 'date',
    required: true,
  })
  fechaDesarrolloTrabajo: string;


  constructor(data?: Partial<OrdenTrabajo>) {
    super(data);
  }
}

export interface OrdenTrabajoRelations {
  // describe navigational properties here
}

export type OrdenTrabajoWithRelations = OrdenTrabajo & OrdenTrabajoRelations;
