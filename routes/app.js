let router = require('express').Router();
let dashboardController = require('../controllers/DashboardController');


//BORRAR dado el parametro, que se recibe de users.hbs y manda a sashboard
router.post('/:id/delete', dashboardController.delete);


//read bd
router.get('/users', dashboardController.readAll);

//borrar de database

router.get('/dashboard', dashboardController.index);

module.exports = router;
