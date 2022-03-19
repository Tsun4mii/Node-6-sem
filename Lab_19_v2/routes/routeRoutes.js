const routeController = require('../controllers/routeController');

module.exports = app => {
    app.get('/routes', routeController.getAll);
    app.post('/routes', routeController.addRoute);
    app.get('/routes/index', routeController.getPage);
    app.delete('/routes', routeController.deleteRoute)
}