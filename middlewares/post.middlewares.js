import { postSchema } from './schemas/post.schema.js';  

export const validatePost = async (req, res, next) => {
  try {
    const { error } = postSchema.validate(req.body);
    if (error) {
      return res.status(400).json({ message: error.details[0].message });
    }
    next();  
  } catch (err) {
    console.error('Error en la validación del post:', err);
    res.status(500).json({ message: 'Error interno del servidor' });
  }
};
