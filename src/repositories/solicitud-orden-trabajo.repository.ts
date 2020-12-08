import {DefaultCrudRepository} from '@loopback/repository';
import {SolicitudOrdenTrabajo, SolicitudOrdenTrabajoRelations} from '../models';
import {MongoconnectDataSource} from '../datasources';
import {inject} from '@loopback/core';

export class SolicitudOrdenTrabajoRepository extends DefaultCrudRepository<
  SolicitudOrdenTrabajo,
  typeof SolicitudOrdenTrabajo.prototype.id,
  SolicitudOrdenTrabajoRelations
> {
  constructor(
    @inject('datasources.mongoconnect') dataSource: MongoconnectDataSource,
  ) {
    super(SolicitudOrdenTrabajo, dataSource);
  }
}
