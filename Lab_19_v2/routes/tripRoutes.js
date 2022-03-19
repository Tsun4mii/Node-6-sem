const tripController = require('../controllers/tripController');

module.exports = app => {
    app.get('/trips', tripController.getAll);
    app.post('/trips', tripController.addTrip);
    app.get('/trips/index', tripController.getPage);
    app.delete('/trips', tripController.deleteTrip)
}