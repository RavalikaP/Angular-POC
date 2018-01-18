import { User } from '../shared/user.interface';
import  mongoose = require('mongoose');

let UserSchema: mongoose.Schema = new mongoose.Schema({
    userId: {type: Number, index: true, unique: true, trim: true, required: true},
    password: {type: String, default: '1234567'},
    name: {type: String},
    firstName: {type: String},
    lastName: {type: String},
    emailid: {type: String, required: true, match: /.+\@.+\..+/, index: true}
}, {collection: 'users'});
type IUser = User & mongoose.Document;
export let userModel  = mongoose.model<IUser>('Users', UserSchema);

