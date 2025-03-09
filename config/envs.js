import dotenv from 'dotenv';
dotenv.config();

const envs = {
  dbHost: process.env.DB_HOST,           
  userDb: process.env.DB_USER,            
  passwordDb: process.env.DB_PASSWORD,   
  nameDatabase: process.env.DB_DATABASE,
  dbPort: process.env.DB_PORT            
};

export { envs }