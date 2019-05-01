import dotenv from 'dotenv';
import path from 'path';
import express from 'express';
import logger from 'morgan';
import bodyParser from 'body-parser';
import routes from './routes'

dotenv.config()

const app = express();

app.use(logger('dev'));
app.use(bodyParser.json());

routes(app);

app.set('port', process.env.PORT || 8000);

app.listen(app.get('port'), error => {
  if (error) {
    console.log('Error starting the server', error.message);
  }
  console.log(`Server running on port ${app.get('port')}`);
})