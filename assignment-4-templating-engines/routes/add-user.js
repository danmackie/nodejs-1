const path = require('path');

const express = require('express');

const rootDir = require('../util/path');

const router = express.Router();

const users = [];

// /add-user => GET
router.get('/add-user', (req, res, next) => {
    res.render('add-user', {
        pageTitle: 'Add User',
        path: '/add-user',
        formsCSS: true,
        userCSS: true,
        activeAddUser: true
    });
});

// /add-user => POST
router.post('/add-user', (req, res, next) => {
    console.log(req.body);

    users.push({ username: req.body.username });
    res.redirect('/');
});

exports.routes = router;
exports.users = users;
