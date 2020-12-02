import {DefaultCrudRepository} from '@loopback/repository';
import {FichaTecnica, FichaTecnicaRelations} from '../models';
import {MongoconnectDataSource} from '../datasources';
import {inject} from '@loopback/core';

export class FichaTecnicaRepository extends DefaultCrudRepository<
  FichaTecnica,
  typeof FichaTecnica.prototype.id,
  FichaTecnicaRelations
> {
  constructor(
    @inject('datasources.mongoconnect') dataSource: MongoconnectDataSource,
  ) {
    super(FichaTecnica, dataSource);
  }
}
