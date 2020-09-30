const connection = require('./connection')

function printQuestionMarks(num) {
    var arr = [];

    for (var i = 0; i < num; i++) {
        arr.push("?");
    }

    return arr.toString();
}

const orm = {
    selectTopic: function (table, input, cb) {
        let queryString = `SELECT name, address, city, state, zip, website, phone_number FROM ${table} WHERE ${input} = 1;`;
        connection.query(queryString, input, function (err, res) {
            if (err) throw err;
            cb(res)
        })
    },
    create: function (table, col, val, cb) {
        let queryString = 'INSERT INTO ' + table;
        
        queryString += ' (' + col.toString() + ') ';
        queryString += 'VALUES (' + printQuestionMarks(val.length) + ')';
        console.log(queryString);
        connection.query(queryString, col, val, function (err, res) {
            if (err) throw err;
            cb(res);
        });
    }
};

module.exports = orm;