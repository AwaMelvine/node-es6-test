import express from 'express';

const app = express();

app.use('/', (req, res, next) => {
  res.send('Welcome');
});

const port = process.env.PORT || 8080;

app.listen(port, () => {
  console.log(`Server running at localhost:${port}`);
});
