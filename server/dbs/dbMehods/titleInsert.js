/**
 * Created by lmy on 17-8-18.
 */
'use strict'

let express = require('express');
let db = require('../connection');

var  addSql = 'INSERT INTO edit(id,title,text) VALUES(0,?,?)';
var  addSqlParams = ['test', 'mytext'];
//增
db.query(addSql,addSqlParams,function (err, result) {
    if(err){
        console.log('[INSERT ERROR] - ',err.message);
        return;
    }

    console.log('--------------------------INSERT----------------------------');

    console.log('INSERT ID:',result);
    console.log('-----------------------------------------------------------------\n\n');
});

db.end();