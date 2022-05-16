import * as express from 'express';
import * as bodyParser from 'body-parser';
import { handleAuth, handleTenant } from './app/handlers';

const app = express();

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json());

handleAuth(app);
handleTenant(app);

app.get('/api', (req, res) => {
  res.send({ message: 'hello' });
});

const port = process.env.port || 3333;
const server = app.listen(port, () => {
  console.log('Listening at http://localhost:' + port + '/api');
});
server.on('error', console.error);
