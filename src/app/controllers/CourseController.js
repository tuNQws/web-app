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

    edit(req, res, next){
        Course.findById(req.params.id)
        .then(course => res.render('courses/edit', {
            course: mongooseToObject(course)
        }))
        .catch(next);
    }

    update(req, res, next){
        Course.updateOne({ _id: req.params.id }, req.body)
        .then(() => {
            res.redirect('/courses');
        })
        .catch(next);
    }

    delete(req, res, next){
        Course.deleteOne({ _id: req.params.id })
        .then(() =>{
            res.redirect('back');
        })
        .catch(next);
    }

}

module.exports = new CourseController;
