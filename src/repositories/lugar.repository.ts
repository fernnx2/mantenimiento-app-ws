import {DefaultCrudRepository} from '@loopback/repository';
import {Lugar, LugarRelations} from '../models';
import {MongoconnectDataSource} from '../datasources';
import {inject} from '@loopback/core';

export class LugarRepository extends DefaultCrudRepository<
  Lugar,
  typeof Lugar.prototype.id,
  LugarRelations
> {
  constructor(
    @inject('datasources.mongoconnect') dataSource: MongoconnectDataSource,
  ) {
    super(Lugar, dataSource);
  }
}
