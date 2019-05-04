const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');

//instantiate the express app
const app = express();

//require the routes 
const blogRoutes = require('./routes/blog');
const aboutRoutes = require('./routes/about');

//use the bodyparser
app.use(bodyParser.urlencoded({ extended: false }));
//use static directory
app.use(express.static(path.join(__dirname, 'public')));

//use routes
app.use(blogRoutes);
app.use(aboutRoutes);

app.use((req, res, next) => {
    res.status(404).sendFile(path.join(__dirname, 'views', '404.html'));
});

app.listen(3000);