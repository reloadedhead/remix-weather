const rootDir = 'build';

const config = [
  {
    name: 'dev',
    type: 'mariadb',
    host: 'localhost',
    port: 3306,
    username: 'root',
    password: 'dev',
    database: 'db',
    synchronize: false,
    logging: ['query', 'error'],
    entities: [rootDir + '/entities/**/*.{js,ts}'],
    migrations: [rootDir + '/migrations/*.{js,ts}'],
    subscribers: [rootDir + '/subscribers/**/*.{js,ts}'],
    seeds: [rootDir + '/migrations/seeds/**/*.{js,ts}'],
    factories: [rootDir + '/migrations/factories/**/*.{js,ts}'],
    cli: {
      entitiesDir: 'src/entities',
      migrationsDir: 'src/migrations',
      subscribersDir: 'src/subscribers'
    }
  }
];

module.exports = config;