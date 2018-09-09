import express from 'express';
import bodyParser from 'body-parser';
import orders from './api/v1/routes/orders';

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());


app.use('/api/v1/orders', orders);

const port = process.env.PORT || 8080;
app.listen(port, () => {
  console.log(`Server running at localhost:${port}`);
});
