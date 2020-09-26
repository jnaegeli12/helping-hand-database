const express = require('express')
const path = require('path')

const router = express.Router();

const help = require('../models')


router.get("/submit", function(req, res) {
    res.render('submit');
});



router.get('/api/food', function(req, res) {
    
    help.selectAllFood(function(data) {
        res.json(data)
        console.log(data);

    });
});

router.get('/api/shelter', function(req, res) {
    help.selectAllShelter(function(data) {
        res.json(data)
        console.log(data);

    });
});
router.get('/api/health_care', function(req, res) {
    help.selectAllHealth_care(function(data) {
        res.json(data)
        console.log(data);

    });
});
router.get('/api/daily_care', function(req, res) {
    help.selectAllDaily_care(function(data) {
        res.json(data)
        console.log(data);

    });
});

router.post('api/organization', function(req, res) {
    help.create([
        'name',
        'address',
        'city',
        'state',
        'zip',
        'phone',
        'website',
        'food',
        'health_care',
        'daily_care',
        'shelter',
        'condition'
    ],
    [
        req.body.name,
        req.body.address,
        req.body.city,
        req.body.state,
        req.body.zip,
        req.body.phone,
        req.body.website,
        req.body.food,
        req.body.health_care,
        req.body.daily_care,
        req.body.shelter,
        false
    ], function(results) {
     //giving an id to each company who choses to added ther company information
        res.json({id: results.insertId})
    }); 
});

router.get("/", function(req, res) {
    res.render('index');
});
module.exports = router;