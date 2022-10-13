const express = require("express");
const morgan = require("morgan");
const path = require("path");
const app = express();
const handlebars = require("express-handlebars");
const port = process.env.PORT || 3000;
app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));

//HTTP Logger
app.use(morgan('combined'));

//Template engine
app.engine('handlebars', handlebars.engine());
app.set('view engine', 'handlebars');
app.set('views', path.join(__dirname, 'resources/views'));

app.get('/', (req, res) => {
    res.render('home');
});

const COURSES = [
    { id: 1, name: "Nodejs"},
    { id: 2, name: "Reactjs"},
    { id: 3, name: "PHP"}
];

//GET

app.get("/api/courses/:id", (req, res) => {

    const course = COURSES.find(COURSES => COURSES.id === parseInt(req.params.id));

    if (!course){
        res.send("Id don't exist!");
    }   else{
        res.send(course);
    }
});

app.get("/api/courses/", (req, res) => {
    res.writeHead(404,{
        'Content-Type' : 'application/json',
        'X-Powered-By' : 'Node.js'
    });
    
    // res.set({
    //     'Content-Type' : 'application/json',
    //     'X-Powered-By' : 'Node.js'
    // });

    res.send(JSON.stringify({
        success: true,
        data: COURSES
    }));
});

//POST
app.post("/api/courses/add", (req, res) => {
    const course = {
        id : req.body.id,
        name : req.body.name
    };

    COURSES.push(course);

    res.send(JSON.stringify({
        success: true,
        notify: "Add course successfully",
        data: COURSES
    }));
});


//PUT
app.put("/api/courses/edit/:id", (req, res) => {
    const course = COURSES.find(COURSES => COURSES.id === parseInt(req.params.id));

    if (!course){
        res.send("Id don't exist!");
    }   else{
        course.name = req.body.name;

        res.send(JSON.stringify({
            success: true,
            notify: "Update course successfully",
            data: COURSES
        }));
    }
});


//DELETE
app.delete("/api/courses/delete/:id", (req, res) => {
    const course = COURSES.find(COURSES => COURSES.id === parseInt(req.params.id));

    if (!course){
        res.send("Id don't exist!");
    }   else{
        let index = COURSES.indexOf(course);
        COURSES.splice(index, 1);

        res.send(JSON.stringify({
            success: true,
            notify: "Delete course successfully",
            data: COURSES
        }));
    }
});

app.listen(port, () => {
    console.log(`App running on ${port}`);
});