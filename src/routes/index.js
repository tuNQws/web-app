const courseRouter = require('./course');
const apiRouter = require('./api');

function route(app){

    // //PUT
    // app.put("/api/courses/edit/:id", (req, res) => {
    //     const course = COURSES.find(COURSES => COURSES.id === parseInt(req.params.id));

    //     if (!course){
    //         res.send("Id don't exist!");
    //     }   else{
    //         course.name = req.body.name;

    //         res.send(JSON.stringify({
    //             success: true,
    //             notify: "Update course successfully",
    //             data: COURSES
    //         }));
    //     }
    // });


    // //DELETE
    // app.delete("/api/courses/delete/:id", (req, res) => {
    //     const course = COURSES.find(COURSES => COURSES.id === parseInt(req.params.id));

    //     if (!course){
    //         res.send("Id don't exist!");
    //     }   else{
    //         let index = COURSES.indexOf(course);
    //         COURSES.splice(index, 1);

    //         res.send(JSON.stringify({
    //             success: true,
    //             notify: "Delete course successfully",
    //             data: COURSES
    //         }));
    //     }
    // });

    app.use('/api/v1/courses', apiRouter);
    
    app.use('/courses', courseRouter);

}

module.exports = route;
