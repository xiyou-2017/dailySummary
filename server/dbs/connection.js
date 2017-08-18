//noinspection JSUnresolvedFunction
/**
 * Created by lmy on 17-8-18.
 */
const mysql=require('mysql');
//noinspection JSUnresolvedFunction
var connection=mysql.createConnection(
    {
        host:'localhost',
        user:'root',
        password:"lmy123321",
        database:'dailySummary',
        port:3306
    });
connection.connect((err)=>{
    if(err){
        console.log('err'+err.stack);
        return;
    }
    console.log('connected');
});
module.exports=connection;