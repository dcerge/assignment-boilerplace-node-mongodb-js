import appSettings from './src/config';

const config = {
  mongodb: {
    url: appSettings.dbConnection,
    databaseName: appSettings.dbName,
    options: {
      useNewUrlParser: true, // removes a deprecation warning when connecting
      useUnifiedTopology: true, // removes a deprecating warning when connecting
    },
  },
  migrationsDir: 'migrations', // The migrations dir, can be an relative or absolute path. Only edit this when really necessary.
  changelogCollectionName: 'changelog', // The mongodb collection where the applied changes are stored. Only edit this when really necessary.
  migrationFileExtension: '.js', // The file extension to create migrations and search for in migration dir
};

console.log('config', config);

export default config;
