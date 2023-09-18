import express, { json } from 'express';
import enterpriseRouter from './routes/enterprise.routes';

const app = express();
app.use(json());
app.use(enterpriseRouter);

const port: number = 5005;
app.listen(port, () => {
    console.log(`Listening in port ${port}`);
})