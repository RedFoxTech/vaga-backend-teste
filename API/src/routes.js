const routes = require('express').Router();
const PokemonController = require('./controllers/PokemonController');

routes.get('/all', PokemonController.all);
routes.get('/search', PokemonController.search);
routes.post('/', PokemonController.store);
routes.put('/:id', PokemonController.update);
routes.delete('/:id', PokemonController.destroy);


module.exports = app => app.use('/', routes);