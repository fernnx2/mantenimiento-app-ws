import {LoggingBindings} from '@loopback/extension-logging';
import {ApplicationConfig, MantenimientoAppWsApplication} from './application';
export * from './application';
export async function main(options: ApplicationConfig = {}) {
  const app = new MantenimientoAppWsApplication(options);
  await app.boot();
  await app.start();
  app.configure(LoggingBindings.COMPONENT).to({
    enableFluent: false,
    enableHttpAccessLog: true,
  });

  app.configure(LoggingBindings.FLUENT_SENDER).to({
    host: process.env.FLUENTD_SERVICE_HOST ?? 'localhost',
    port: +(process.env.FLUENTD_SERVICE_PORT_TCP ?? 24224),
    timeout: 3.0,
    reconnectInterval: 600000, // 10 minutes
  });

  const url = app.restServer.url;
  console.log(`Server is running at ${url}`);
  console.log(`Try ${url}/ping`);

  return app;
}

if (require.main === module) {
  // Run the application
  const config = {
    rest: {
      cors: {
        origin: '*',
        methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
        preflightContinue: false,
        optionsSuccessStatus: 204,
        maxAge: 86400,
        credentials: true,
      },
      port: +(process.env.PORT ?? 3000),
      host: process.env.HOST,
      // The `gracePeriodForClose` provides a graceful close for http/https
      // servers with keep-alive clients. The default value is `Infinity`
      // (don't force-close). If you want to immediately destroy all sockets
      // upon stop, set its value to `0`.
      // See https://www.npmjs.com/package/stoppable
      gracePeriodForClose: 5000, // 5 seconds
      openApiSpec: {
        // useful when used with OpenAPI-to-GraphQL to locate your application
        setServersFromRequest: true,
      },
    },
  };
  main(config).catch(err => {
    console.error('Cannot start the application.', err);
    process.exit(1);
  });
}
