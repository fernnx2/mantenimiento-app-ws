import {Entity, model, property} from '@loopback/repository';

@model()
export class FichaTecnica extends Entity {
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
  codigoFichaTecnica: string;

  @property({
    type: 'string',
    required: true,
  })
  equipoId: string;

  @property({
    type: 'date',
    required: true,
  })
  fechaElaboracion: string;

  @property({
    type: 'string',
    required: true,
  })
  nombreResponsable: string;

  @property({
    type: 'string',
  })
  descripcionEquipo?: string;

  @property({
    type: 'string',
    required: true,
  })
  tipoEquipo: string;

  @property({
    type: 'string',
  })
  modeloEquipo?: string;

  @property({
    type: 'string',
  })
  numeroSerieEquipo?: string;

  @property({
    type: 'number',
    required: true,
  })
  anioFabricacion: number;

  @property({
    type: 'string',
    required: true,
  })
  nombreFabricante: string;

  @property({
    type: 'string',
  })
  telefonoFabricante?: string;

  @property({
    type: 'string',
    required: true,
  })
  nombreProveedor: string;

  @property({
    type: 'string',
  })
  telefonoProveedor?: string;

  @property({
    type: 'string',
    required: true,
  })
  nombresProveedoresRepuestos: string;

  @property({
    type: 'date',
    required: true,
  })
  fechaCompra: string;

  @property({
    type: 'date',
    required: true,
  })
  fechaInstalacion: string;

  @property({
    type: 'number',
    required: true,
  })
  costoAdquisicion: number;

  @property({
    type: 'number',
  })
  costoReemplazo?: number;

  @property({
    type: 'boolean',
    required: true,
  })
  garantia: boolean;

  @property({
    type: 'date',
  })
  vencimientoGarantia?: string;

  @property({
    type: 'boolean',
    required: true,
  })
  contratoMantenimiento: boolean;

  @property({
    type: 'date',
  })
  vencimientoContratoMantenimiento?: string;

  @property({
    type: 'number',
  })
  vidaUtilEsperada?: number;

  @property({
    type: 'boolean',
    required: true,
  })
  incluyeManuales: boolean;

  @property({
    type: 'boolean',
    required: true,
  })
  incluyePlanos: boolean;

  @property({
    type: 'boolean',
    required: true,
  })
  incluyeCD: boolean;

  @property({
    type: 'number',
  })
  voltage?: number;

  @property({
    type: 'number',
  })
  amperaje?: number;

  @property({
    type: 'number',
  })
  cantidadFases?: number;

  @property({
    type: 'number',
  })
  pesoKg?: number;

  @property({
    type: 'object',
  })
  dimensiones?: object;

  @property({
    type: 'boolean',
    required: true,
  })
  incluyeHerramientas: boolean;

  @property({
    type: 'string',
  })
  descripcionHerramientas?: string;

  @property({
    type: 'string',
  })
  observaciones?: string;


  constructor(data?: Partial<FichaTecnica>) {
    super(data);
  }
}

export interface FichaTecnicaRelations {
  // describe navigational properties here
}

export type FichaTecnicaWithRelations = FichaTecnica & FichaTecnicaRelations;
