const express = require('express');
const router = express.Router();

router.get('/', function (req, res) {
    res.send("Hello World");
    }  );

    router.get('/about', function(req, res) {
        res.send("About page");
      });

module.exports = router;