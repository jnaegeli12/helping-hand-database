const orm = require('../config/orm.js');

const service = {
    selectTopic: function(cond, cb) {
        orm.selectTopic('organization', cond, function (res) {
            cb(res)
        })
    },
    create: function(col, val, cb) {
        orm.create('organization', col, val, function(res) {
            cb(res);
        });
    }
};

module.exports = service;