import express from 'express';
import bodyParser from 'body-parser';
import orders from './v1/routes/orders';

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());


app.use('/api/v1/orders', orders);

const port = process.env.PORT || 8080;
if (process.env.NODE_ENV !== 'test') {
  app.listen(port, '0.0.0.0', () => console.log(`Server running at localhost:${port}`));
}

export default app;
