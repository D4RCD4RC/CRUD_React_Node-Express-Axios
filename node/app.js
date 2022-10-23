import express from 'express';
import cors from 'cors';

/* importar conexion  base de datos */

import db from './dataBase/db.js';

/* importar enrutador */
import blogRoutes from './routes/routes.js';

const app = express();

app.use(cors());
app.use(express.json());
app.use('/blogs', blogRoutes);

try {
  await db.authenticate();
  console.log('conexion exitosa');
} catch (error) {
  console.log(`conexion fallida: ${error}`);
}

/* app.get('/', (req, res) => {
  res.send('HOLA MUNDO');
}); */

app.listen(8000, () => {
  console.log('server UP runing in http://localhost:8000/');
});
