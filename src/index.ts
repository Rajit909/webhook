import express from 'express';
import cors from 'cors';
import cookieParser from 'cookie-parser';

// routes
import mainRoute from "./routes/webhook/webhook.route.js"

const app = express();

// routes

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

// handle cors
const corsOptions = {
    origin:'http://localhost:3000',
    credentials:true
}

app.use(cors(corsOptions));


// user routes

app.use('/api/v1/', mainRoute);


app.get('/', (_, res) => {   
    res.send('Hello World!');
});

export default app;