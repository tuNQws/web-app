const Course = require('../../models/Course');
const express = require('express');
const app = express();

app.use(express.json());

class ApiController{
    // [GET]
    index(req, res, next){
        Course.find({})
        .then((courses) => {
            res.json(courses);
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

    //
    create(req, res, next){
        res.render('courses/create');
    }

    //
    store(req, res, next){
        const course = new Course(req.body);
        course.save()
        .then(() => res.redirect('/courses'))
        .catch(next);
    }

    update(req, res, next){
        
    }
}

module.exports = new ApiController;
