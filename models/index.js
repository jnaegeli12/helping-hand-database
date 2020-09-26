const orm = require('../config/orm.js');

module.exports = {
    selectAllFood: function(cb) {
        orm.selectAllFood('organization', function (res) {
            cb(res)
        })
    },
    selectAllShelter: function(cb) {
        orm.selectAllShelter('organization', function (res) {
            cb(res)                    
        })
    },
    selectAllHealth_care: function(cb) {
        orm.selectAllHealth_care('organization', function (res) {
            cb(res)
        })
    },
    selectAllDaily_care: function(cb) {
        orm.selectAllDaily_care('organization', function (res) {
            cb(res)
        })
    },
    create: function(col, val, cb) {
        orm.create('organization', col, val, function(res) {
            cb(res);
        });
    }
};

