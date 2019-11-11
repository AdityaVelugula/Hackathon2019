var express = require('express');
var router = express.Router();
var demo= require('../models/demographics');

router.get('/:username', function (req, res, next) {
    demo.findOne({'username': req.params.username}, function (err, post) {
        if (err) return next(err);
        res.json(post);
    });
});
module.exports = router;
