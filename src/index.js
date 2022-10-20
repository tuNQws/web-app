const express = require("express");
const morgan = require("morgan");
const path = require("path");
const app = express();
const handlebars = require("express-handlebars");
const db = require('./config/db');
const route = require('./routes');
const bodyParser = require('body-parser');

const port = process.env.PORT || 3000;
app.use(express.json());

app.use(bodyParser.urlencoded());

app.use(bodyParser.json());

app.use(express.static(path.join(__dirname, 'public')));

//Connect to DB
db.connect();

//HTTP Logger
app.use(morgan('combined'));

//Template engine
app.engine('handlebars', handlebars.engine());
app.set('view engine', 'handlebars');
app.set('views', path.join(__dirname, 'resources/views'));

app.get('/', (req, res) => {
    res.render('home');
});

//Route init
route(app);

app.listen(port, () => {
    console.log(`App running on ${port}`);
});