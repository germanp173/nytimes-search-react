const path = require('path');
const router = require('express').Router();
const apiRoutes = require('./api');

// Set up API routes
router.use('/api', apiRoutes);

// Send React app if no API routers are hit.
// The client build directory is created after the react app is built.
router.use('/', function(req, res){
    res.sendFile(path.join(__dirname, '../client/build/index.html'));
});

module.exports = router;