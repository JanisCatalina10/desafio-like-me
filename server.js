import express from 'express';
import cors from 'cors';
import postRoutes from './routes/post.routes.js';

const app = express();

app.use(cors());
app.use(express.json());

app.use('/posts', postRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor corriendo en el puerto ${PORT}`);
});
