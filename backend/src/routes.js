const UserController = require('./controllers/UserController');
const AudioController = require('./controllers/AudioController');
const { Router } = require('express');
const routes = Router();
const fs = require('fs');
const getStat = require('util').promisify(fs.stat);

routes.post('/users', UserController.store);
routes.get('/users', UserController.index);

routes.get('/audio/:file', AudioController.show);
routes.get('/audios', AudioController.index);


module.exports = routes;