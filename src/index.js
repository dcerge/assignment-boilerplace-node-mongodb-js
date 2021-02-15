import express from 'express';
import bodyParser from 'body-parser';
import appSettings from './config';
import { dbConnect } from './dbconnect';
import configureApp from './appExpressConfig';

const app = express();

app.use(bodyParser.json());

configureApp(app);

app.listen(appSettings.port, async () => {
  console.log(`Server started on port ${appSettings.port}`);
  const res = await dbConnect();
  if (res !== true) {
    console.log('Failed to connect to the database:', res.error);
  } else {
    console.log('Database connected');
  }
});
