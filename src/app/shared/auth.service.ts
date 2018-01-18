import { User } from './user.interface';
import { userModel } from '../schemas/users.schema';
import mongoose = require('mongoose');
import { Database } from '../schemas/connection';

export class AuthService {
    Schema = mongoose.Schema;
    callback = function(err, data){
        if (err) {
            console.log(err);
        } else {
            console.log(data);
        }
    }
};
