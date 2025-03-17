import pool from '../../config/db/connection.db.js';

// Función para obtener todos los posts
const getPostsFromDb = async () => {
  const SQLquery = {
    text: 'SELECT * FROM posts',
  };

  const response = await pool.query(SQLquery);
  return response.rows;
};

// Función para crear un nuevo post
const createPostInDb = async (titulo, img, descripcion, likes) => {
  const SQLquery = {
    text: 'INSERT INTO posts (titulo, img, descripcion, likes) VALUES ($1, $2, $3, $4) RETURNING *',
    values: [titulo, img, descripcion, likes],
  };

  const response = await pool.query(SQLquery);
  return response.rows[0];
};

// Función para actualizar un post
const setPost = async(titulo, img, descripcion, likes, postId, oldData) => {
  const newTitulo = titulo || oldData.titulo
  const newImg =  img || oldData.img
  const newDescripcion =  descripcion || oldData.descripcion
  const newLikes = likes|| oldData.likes
  const SQLquery = {
    text: 'UPDATE posts set titulo = $1, img = $2, descripcion = $3, likes = $4 WHERE id = $5  RETURNING *',
    values: [newTitulo, newImg, newDescripcion, newLikes, postId],
  };

  const response = await pool.query(SQLquery);
  return response.rows[0];
};

const postById = async(id) => {
  const SQLquery = {
    text: 'SELECT * FROM posts WHERE id = $1',
    values: [Number(id)]
  };
  const response = await pool.query(SQLquery);
  return response.rows[0];
};

// Función para borrar un post
const destroyPost = async(id) => {
  const SQLquery = {
    text: 'DELETE FROM posts WHERE id = $1',
    values: [Number(id)]
  };
  const response = await pool.query(SQLquery);
  return response.rowCount;
}


export { getPostsFromDb, createPostInDb, setPost, postById, destroyPost  };
