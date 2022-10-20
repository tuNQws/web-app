const Course = require('../models/Course');
const express = require('express');
const app = express();
const { multipleMongooseToObject, mongooseToObject } = require('../../util/mongoose');

class CourseController{
    // [GET]
    index(req, res, next){
        Course.find({})
        .then(courses => {
            res.render('courses/mycourse', { 
                courses: multipleMongooseToObject(courses)
            });

        })
        .catch(next);
    }

    show(req, res, next){
        Course.findOne({ slug: req.params.slug })
        .then(course => {
            res.json(course);
        })
        .catch(next);
    }

    edit(req, res, next){
        Course.findById(req.params.id)
        .then(course => res.render('courses/edit', {
            course: mongooseToObject(course)
        }))
        .catch(next);
    }
}

module.exports = new CourseController;
