import { getPostsFromDb, createPostInDb, setPost, destroyPost } from '../models/post.models.js';
import { findError } from '../utils/find.error.utils.js';

// Controlador para obtener todos los posts
const getAllPosts = async (req, res) => {
  try {
    const posts = await getPostsFromDb();
    res.status(200).json({ posts });
  } catch (error) {
    const errorFound = findError(error.code);
    return res
    .status(errorFound[0].status)
    .json({error: errorFound[0].message, type: errorFound[0].type });
  }
};

// Controlador para crear un nuevo post
const createPost = async (req, res) => {
  try {
    const { titulo, img, descripcion, likes } = req.body;
    const newPost = await createPostInDb(titulo, img, descripcion, likes);
    res.status(201).json(newPost);
  } catch (error) {
    const errorFound = findError(error.code);
    return res
    .status(errorFound[0].status)
    .json({error: errorFound[0].message, type: errorFound[0].type });
  }
};

// Controlador para actualizar un post
const updatePost = async (req, res) => {
  try {
    const {post_id} = req.params;
    const { titulo, img, descripcion, likes } = req.body;
    const oldPost = req.oldData;
    const post = await setPost(titulo, img, descripcion, likes, post_id, oldPost);
    res.status(201).json(post);
  } catch (error) {
    const errorFound = findError(error.code);
    return res
    .status(errorFound[0].status)
    .json({error: errorFound[0].message, type: errorFound[0].type });
  }
}

//controlador para borrar un post
const deletePost = async (req, res) => {
  try {
    const {post_id} = req.params;
    const post = await destroyPost(post_id);
    res.status(204).json({message:"post eliminado con éxito", row: post});
  } catch (error) {
    const errorFound = findError(error.code);
    return res
    .status(errorFound[0].status)
    .json({error: errorFound[0].message, type: errorFound[0].type });
  }
}

export { getAllPosts, createPost, updatePost, deletePost };
