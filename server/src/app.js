import express from 'express';

//initialize 3rd party libraries
import './Config/dotenv.js';
import './Config/firebase.js';
import './Database/mongo/db.js';
// import './Database/sql/db.js';

import cors from 'cors';
import morgan from 'morgan';

import limiter from './Middleware/rateLimiter.js';
import { errorHandler } from './Middleware/errorHandler.js';
import { unhandledRejectionHandler } from './Middleware/unhandledRejectionHandler.js';

import auth from './API/auth.js';
import todoApi from './API/todos.js';
import utilsApi from './API/utils.js';
import orgApi from './API/org.js';
import projectApi from './API/projects.js';

const app = express();

//Middleware
app.use(cors());
app.use(limiter);
app.use(morgan('dev'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//API routes
app.use('/', utilsApi);

app.use('/auth', auth);
app.use('/api', orgApi);
app.use('/api', todoApi);
app.use('/api', projectApi);

// error handling
app.use(errorHandler);
process.on('unhandledRejection', unhandledRejectionHandler);

export default app;
