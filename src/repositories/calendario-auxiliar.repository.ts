import {DefaultCrudRepository} from '@loopback/repository';
import {CalendarioAuxiliar, CalendarioAuxiliarRelations} from '../models';
import {MongoconnectDataSource} from '../datasources';
import {inject} from '@loopback/core';

export class CalendarioAuxiliarRepository extends DefaultCrudRepository<
  CalendarioAuxiliar,
  typeof CalendarioAuxiliar.prototype.id,
  CalendarioAuxiliarRelations
> {
  constructor(
    @inject('datasources.mongoconnect') dataSource: MongoconnectDataSource,
  ) {
    super(CalendarioAuxiliar, dataSource);
  }
}
