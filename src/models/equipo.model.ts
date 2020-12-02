import {Entity, model, property} from '@loopback/repository';

@model()
export class Equipo extends Entity {
  @property({
    type: 'string',
    id: true,
    generated: true,
  })
  id: string;

  @property({
    type: 'string',
    required: true,
  })
  codigo: string;

  @property({
    type: 'string',
    required: true,
  })
  tipo: string;

  @property({
    type: 'string',
  })
  descripcion?: string;

  @property({
    type: 'object',
    required: true,
  })
  ubicacion: object;

  @property({
    type: 'string',
    required: true,
  })
  condicionGeneral: string;

  @property({
    type: 'boolean',
    required: true,
  })
  mantenimiento: boolean;

  constructor(data?: Partial<Equipo>) {
    super(data);
  }
}

export interface EquipoRelations {
  // describe navigational properties here
}

export type EquipoWithRelations = Equipo & EquipoRelations;
