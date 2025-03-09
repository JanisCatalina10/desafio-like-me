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

export { getPostsFromDb, createPostInDb };
