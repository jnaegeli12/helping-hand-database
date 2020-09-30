const router = require('express').Router();
const service = require('../models/index');

router.get("/", function (req, res) {
    res.render('index');
});

router.get("/submit", function (req, res) {
    res.render('submit');
});

router.get('/api/:id', function (req, res) {
    service.selectTopic(req.params.id, function (data) {
        res.render('index', data);
        console.log(data);
    });
});

router.post('api/organization', function (req, res) {
    service.create([
            'name',
            'address',
            'city',
            'state',
            'zip',
            'phone_number',
            'website',
            'food',
            'health_care',
            'daily_care',
            'shelter'
        ],
        [
            req.body.name,
            req.body.address,
            req.body.city,
            req.body.state,
            req.body.zip,
            req.body.phone_number,
            req.body.website,
            req.body.food,
            req.body.health_care,
            req.body.daily_care,
            req.body.shelter
        ],
        function (result) {
            //giving an id to each company who choses to added ther company information
            res.json({
                id: result.insertId
            })
        });
});

module.exports = router;