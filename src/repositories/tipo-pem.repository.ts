import {DefaultCrudRepository} from '@loopback/repository';
import {TipoPem, TipoPemRelations} from '../models';
import {MongoconnectDataSource} from '../datasources';
import {inject} from '@loopback/core';

export class TipoPemRepository extends DefaultCrudRepository<
  TipoPem,
  typeof TipoPem.prototype.id,
  TipoPemRelations
> {
  constructor(
    @inject('datasources.mongoconnect') dataSource: MongoconnectDataSource,
  ) {
    super(TipoPem, dataSource);
  }
}
