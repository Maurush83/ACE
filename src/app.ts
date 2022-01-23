import express from 'express';
import { Processor } from './processor';
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  const processor = new Processor();
  processor.getAssets();
});

app.listen(port, () => {
  return console.log(`Express is listening at http://localhost:${port}`);
});