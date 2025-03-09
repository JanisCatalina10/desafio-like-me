import Joi from 'joi';

export const postSchema = Joi.object({
  titulo: Joi.string().max(25).required(),
  img: Joi.string().uri().required(),
  descripcion: Joi.string().max(255).required(),
  likes: Joi.number().integer().min(0).default(0),
});
