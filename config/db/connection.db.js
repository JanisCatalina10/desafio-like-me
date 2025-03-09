import pg from 'pg';
import { envs } from '../envs.js';

const pool = new pg.Pool({
  host: envs.dbHost,
  user: envs.userDb,
  password: envs.passwordDb,
  database: envs.nameDatabase,
  port: envs.dbPort,
  allowExitOnIdle: true  
});

pool.connect()
  .then(client => {
    console.log('Conexión exitosa a la base de datos');
    client.release();  
  })
  .catch(err => {
    console.error('Error al conectar con la base de datos:', err);
  });

export default pool;  
