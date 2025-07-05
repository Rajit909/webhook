// index.ts
import express from 'express';
import cors from 'cors';
import cookieParser from 'cookie-parser';
import bodyParser from 'body-parser';
import dotenv from 'dotenv';

import mainRoute from './routes/webhook/webhook.route.js';
import connectToDB from './dbConfig/database.js';


dotenv.config(); // Load env variables

const app = express();

// Connect to MongoDB
connectToDB();

// Middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(bodyParser.text({ type: '*/*' }));

// JSON safety middleware
app.use((req, res, next) => {
  try {
    if (typeof req.body === 'string') {
      req.body = JSON.parse(req.body);
    }
  } catch (err: any) {
    console.warn('❌ Failed to parse body as JSON:', err.message);
  }
  next();
});

// CORS
app.use(cors({ origin: '*', credentials: false }));

// Routes
app.use('/api/v1', mainRoute);

// Health check
app.get('/', (_, res) => {   
    res.send('Hello World!');
});


export default app;
