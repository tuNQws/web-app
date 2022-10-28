const courseController = require('../app/controllers/CourseController');
const express = require('express');
const router = express.Router();

router.get('/:id/edit', courseController.edit);

router.put('/:id', courseController.update);

router.delete('/:id', courseController.delete);

router.get('/', courseController.index);


module.exports = router;
