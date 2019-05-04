const path = require('path');

const express = require('express');

const rootDir = require('../util/path');
const adminData = require('./add-user');

const router = express.Router();

router.get('/', (req, res, next) => {
    const users = adminData.users;
    res.render('users', {
        users: users,
        pageTitle: 'Users',
        path: '/',
        hasUsers: users.length > 0,
        activeUsers: true,
        userCSS: true
    });
});

module.exports = router;