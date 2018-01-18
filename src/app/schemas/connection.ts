import mongoose = require('mongoose');

export class Database {
    public con;
    public conflag: false;
    public static init = function initdb(){
    mongoose.connect('mongodb://localhost/MonthlyExpenses',  function(err, data){
        if (err) {
            console.log(err);
        } else {
            console.log('connection success');
            this.conflag = true;
            this.con = mongoose.connection;
        }
    });
    }
}
