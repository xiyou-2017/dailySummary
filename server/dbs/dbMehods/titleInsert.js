/*** Created by lmy on 17-8-18.*/

'use strict';

let express = require('express');
let router = express.Router();
let db = require('../connection');

var addSql = 'INSERT INTO edit(id,title,text) VALUES(0,?,?)';
var addSqlParams = ['testTwo', 'mytextTwo'];
//增加
/*
db.query(addSql, addSqlParams, function (err, result) {
    if (err) {
        console.log('[INSERT ERROR] - ', err.message);
        return;
    }

    console.log('--------------------------INSERT----------------------------');

    console.log('INSERT ID:', result);
    console.log('-----------------------------------------------------------------\n\n');
});

db.end();
*/

router.post('/titleInsert', (req, res) => {
    console.log(req.body);
    db.query(addSql, addSqlParams, function (err, result) {
        if (err) return err;
        console.log('--------------------------INSERT----------------------------');

        console.log('INSERT ID:', result);
        console.log('-----------------------------------------------------------------\n\n');
        res.send(result);

    });
});

module.exports = router;