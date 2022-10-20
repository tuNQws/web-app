const apiController = require('../app/controllers/ApiController');
const express = require('express');
const router = express.Router();


router.get('/create', apiController.create);


router.post('/store', apiController.store);


//router.put('/update', apiController.update);


router.get('/:slug', apiController.show);


router.get('/', apiController.index);


module.exports = router;
