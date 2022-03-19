const express = require('express');
const app = express();

const tripsRoutes = require('./routes/tripRoutes')
const customerRoutes = require('./routes/customerRoutes')

app.use(express.json());
app.use(express.static(__dirname + "/views"))

tripsRoutes(app);
customerRoutes(app);

app.listen(5000);