import Joi from 'joi';

export const postSchema = Joi.object({
  titulo: Joi.string().max(25).required(),
  img: Joi.string().uri().required(),
  descripcion: Joi.string().max(255).required(),
  likes: Joi.number().integer().min(0).default(0),
});

export const updatePostSchema = Joi.object({
  titulo: Joi.string().max(25).optional(),
  img: Joi.string().uri().optional(),
  descripcion: Joi.string().max(255).optional(),
  likes: Joi.number().integer().min(0).default(0),
});


