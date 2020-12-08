import {Entity, model, property} from '@loopback/repository';

@model()
export class SolicitudOrdenTrabajo extends Entity {
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
  nombreSolicitante: string;

  @property({
    type: 'date',
    required: true,
  })
  fechaHoraSolicitud: string;

  @property({
    type: 'string',
    required: true,
  })
  referenciaOrdenTrabajo: string;

  @property({
    type: 'string',
    required: true,
  })
  codigoEquipo: string;

  @property({
    type: 'boolean',
    default: false,
  })
  esFallaEmergencia?: boolean;

  @property({
    type: 'boolean',
    default: false,
  })
  esFallaCorrectiva?: boolean;

  @property({
    type: 'string',
    required: true,
  })
  causaFalla: string;

  @property({
    type: 'string',
  })
  descripcionFalla?: string;

  @property({
    type: 'date',
    required: true,
  })
  fechaProgramacionTrabajo: string;

  @property({
    type: 'string',
    required: true,
  })
  estatus: string;


  constructor(data?: Partial<SolicitudOrdenTrabajo>) {
    super(data);
  }
}

export interface SolicitudOrdenTrabajoRelations {
  // describe navigational properties here
}

export type SolicitudOrdenTrabajoWithRelations = SolicitudOrdenTrabajo & SolicitudOrdenTrabajoRelations;
