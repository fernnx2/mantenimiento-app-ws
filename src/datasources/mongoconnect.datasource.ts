import {inject, lifeCycleObserver, LifeCycleObserver} from '@loopback/core';
import {juggler} from '@loopback/repository';

const config = {
  name: 'mongoconnect',
  connector: 'mongodb',
  url: 'mongodb://primary:secret@localhost/mantenimiento',
  host: 'localhost',
  port: 27017,
  user: 'primary',
  password: 'secret',
  database: 'mantenimiento',
  useNewUrlParser: true
};

// Observe application's life cycle to disconnect the datasource when
// application is stopped. This allows the application to be shut down
// gracefully. The `stop()` method is inherited from `juggler.DataSource`.
// Learn more at https://loopback.io/doc/en/lb4/Life-cycle.html
@lifeCycleObserver('datasource')
export class MongoconnectDataSource extends juggler.DataSource
  implements LifeCycleObserver {
  static dataSourceName = 'mongoconnect';
  static readonly defaultConfig = config;

  constructor(
    @inject('datasources.config.mongoconnect', {optional: true})
    dsConfig: object = config,
  ) {
    super(dsConfig);
  }
}
