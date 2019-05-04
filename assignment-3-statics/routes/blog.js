const express = require('express');
const path = require('path');
const rootDir = require('../utils/path');

const router = express.Router();

router.get('/blog', (req, res, next) => {
    res.sendFile(path.join(rootDir, 'views', 'blog.html'));
});

module.exports = router;
