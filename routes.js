const express = require('express');
const { celebrate, Segments, Joi } = require('celebrate');

const UserController = require('./controllers/UserController')

const routes = express.Router();

routes.post('/users', celebrate({
	[Segments.BODY] = Joi.object().keys({
		key: Joi.string().required().min(8),
		name: Joi.string().required(),
        email: Joi.string().required().email(),
        whatsapp: Joi.string().required().min(10).max(11),
        city: Joi.string().required(),
        uf: Joi.string().required().length(2)
	})
}), UserController.create);

module.exports = routes;