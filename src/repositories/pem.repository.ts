import {DefaultCrudRepository} from '@loopback/repository';
import {Pem, PemRelations} from '../models';
import {MongoconnectDataSource} from '../datasources';
import {inject} from '@loopback/core';

export class PemRepository extends DefaultCrudRepository<
  Pem,
  typeof Pem.prototype.id,
  PemRelations
> {
  constructor(
    @inject('datasources.mongoconnect') dataSource: MongoconnectDataSource,
  ) {
    super(Pem, dataSource);
  }
}
