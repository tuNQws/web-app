const courseController = require('../app/controllers/CourseController');
const express = require('express');
const router = express.Router();

// courseController.show
// router.get('/:slug', courseController.show);

// courseController.index
router.get('/', courseController.index);


module.exports = router;
