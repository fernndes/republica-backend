const express = require('express');
const { celebrate, Segments, Joi } = require('celebrate');

const UserController = require('./src/controllers/UserController');
const SessionController = require('./src/controllers/SessionController');
const HomeController = require('./src/controllers/HomeController');
const ProfileController = require('./src/controllers/ProfileController');

const routes = express.Router();

routes.post('/users', celebrate({
	[Segments.BODY] : Joi.object().keys({
		name: Joi.string().required(),
        email: Joi.string().required().email(),
        whatsapp: Joi.string().required().min(10).max(11),
        city: Joi.string().required(),
        uf: Joi.string().required().length(2)
	})
}), UserController.create);

routes.post('/sessions', SessionController.create);

routes.post('/home', HomeController.create);

routes.get('/profile', ProfileController.index)

module.exports = routes;