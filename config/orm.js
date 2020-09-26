const connection = require('./connection')

function printQuestionMarks(num) {
    var arr = [];

    for (var i = 0; i < num; i++) {
        arr.push("?");
    }

    return arr.toString();
}

// function objToSql(ob) {
//     const arr = []

//     for (let key in ob) {
//         let value = ob[key];

//         if (Object.hasOwnProperty.call(ob, key)) {
//             if (typeof value === 'string' && value.indexOf(' ') >= 0) {
//                 value = "'" + value + "'";
//             }
//             arr.push(key + '=' + value);
//         }
//     }
//     return arr.toString();
// }

const orm = {
    selectAllFood: function (input, cb) {
        let queryString = `SELECT id, name, address, city, state, zip, website, phone_number FROM organization WHERE food = 1`;
        connection.query(queryString, function (err, res) {
            if (err) throw err;
            cb(res)
        })
    },
    
    selectAllShelter: function (input, cb) {
        let queryString = `SELECT id, name, address, city, state, zip, website, phone_number FROM organization WHERE shelter = 1`;
        connection.query(queryString, function (err, res) {
            if (err) throw err;
            cb(res)
        })
    },
    selectAllHealth_care: function (input, cb) {
        let queryString = `SELECT id, name, address, city, state, zip, website, phone_number FROM organization WHERE health_care = 1`;
        connection.query(queryString, function (err, res) {
            if (err) throw err;
            cb(res)
        })
    },
    selectAllDaily_care: function (input, cb) {
        let queryString = `SELECT id, name, address, city, state, zip, website, phone_number FROM organization WHERE daily_care = 1`;
        connection.query(queryString, function (err, res) {
            if (err) throw err;
            cb(res)
        })
    },
    
    create: function (table, col, val, cb) {
        let queryString = 'INSERT INTO ' + table;
        
        queryString += ' (' + col.toString() + ') ';
        queryString += 'VALUES (' + printQuestionMarks(val.length) + ')';
        console.log(queryString);
        connection.query(queryString, val, function (err, res) {
            if (err) throw err;
            cb(res);
        });
    }
};

module.exports = orm;