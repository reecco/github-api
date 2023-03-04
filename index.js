import express from 'express';
import cors from './src/middlewares/cors.js';
import routes from './src/routes/index.js';

const app = express();
const port = process.env.PORT || 3000;

cors(app);
app.use(express.json());
routes(app);

app.listen(port, () => console.log(`http://localhost:${port}`));