import {DefaultCrudRepository} from '@loopback/repository';
import {OrdenTrabajo, OrdenTrabajoRelations} from '../models';
import {MongoconnectDataSource} from '../datasources';
import {inject} from '@loopback/core';

export class OrdenTrabajoRepository extends DefaultCrudRepository<
  OrdenTrabajo,
  typeof OrdenTrabajo.prototype.id,
  OrdenTrabajoRelations
> {
  constructor(
    @inject('datasources.mongoconnect') dataSource: MongoconnectDataSource,
  ) {
    super(OrdenTrabajo, dataSource);
  }
}
