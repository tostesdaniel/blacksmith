import Joi from 'joi';
import UserMessages from './User.messages';

export default {
  login: Joi.object({
    username: Joi.string().required().empty('').messages({
      'any.required': UserMessages.username,
      'string.empty': UserMessages.username,
    }),
    password: Joi.string().required().empty('').messages({
      'any.required': UserMessages.password,
      'string.empty': UserMessages.password,
    }),
  }),
};
