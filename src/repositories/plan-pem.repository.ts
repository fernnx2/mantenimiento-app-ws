import {DefaultCrudRepository} from '@loopback/repository';
import {PlanPem, PlanPemRelations} from '../models';
import {MongoconnectDataSource} from '../datasources';
import {inject} from '@loopback/core';

export class PlanPemRepository extends DefaultCrudRepository<
  PlanPem,
  typeof PlanPem.prototype.id,
  PlanPemRelations
> {
  constructor(
    @inject('datasources.mongoconnect') dataSource: MongoconnectDataSource,
  ) {
    super(PlanPem, dataSource);
  }
}
