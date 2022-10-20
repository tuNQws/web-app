const Course = require('../../models/Course');
const express = require('express');
const app = express();

app.use(express.json());

class CourseController{
    // [GET]
    index(req, res, next){
        res.render('courses/create');
    }

    show(req, res, next){
        Course.findOne({ slug: req.params.slug })
        .then(course => {
            res.json(course);
        })
        .catch(next);
    }

}

module.exports = new CourseController;
