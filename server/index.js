import express from 'express';
import { createServer } from 'node:http';
const port = 3001

const app = express();
const server = createServer(app);

app.get('/', (req, res) => {
  res.sendFile(new URL('./index.html', import.meta.url).pathname);
});

server.listen(port, () => {
  console.log(`server running at ${port}`);
});