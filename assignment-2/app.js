const express = require('express');

const app = express();

app.use('/', (req, res, next) => {
    console.log('This always runs on the root!');
    next();
});

app.use('/users', (req, res, next) => {
    console.log('In another middleware!');
    res.send('<h1>The user page</h1>');
});

app.use('/', (req, res, next) => {
    console.log('In another middleware!');
    res.send('<h1>Hello from Express!</h1>');
});

app.listen(3000);
