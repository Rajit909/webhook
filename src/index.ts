import express from 'express';
import cors from 'cors';
import cookieParser from 'cookie-parser';
import bodyParser from 'body-parser';

// routes
import mainRoute from "./routes/webhook/webhook.route.js"

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(bodyParser.text({ type: '*/*' }));

app.use((req, res, next) => {
  try {
    if (typeof req.body === 'string') {
      req.body = JSON.parse(req.body);
    }
  } catch (err: object | any) {
    console.warn('❌ Failed to parse body as JSON:', err.message);
  }
  next();
});

// handle cors
const corsOptions = {
    origin:'*',
    credentials:false,
}

app.use(cors(corsOptions));

app.use('/api/v1', mainRoute);


app.get('/', (_, res) => {   
    res.send('Hello World!');
});

export default app;