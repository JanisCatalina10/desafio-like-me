import { getPostsFromDb, createPostInDb } from '../models/post.models.js';

// Controlador para obtener todos los posts
const getAllPosts = async (req, res) => {
  try {
    const posts = await getPostsFromDb();
    res.status(200).json({ posts });
  } catch (error) {
    console.error('Error al obtener los posts:', error);
    res.status(500).json({ message: 'Error interno del servidor' });
  }
};

// Controlador para crear un nuevo post
const createPost = async (req, res) => {
  try {
    const { titulo, img, descripcion, likes } = req.body;
    const newPost = await createPostInDb(titulo, img, descripcion, likes);
    res.status(201).json(newPost);
  } catch (error) {
    console.error('Error al crear el post:', error);
    res.status(500).json({ message: 'Error interno del servidor' });
  }
};

export { getAllPosts, createPost };
