const mongoose = require('mongoose')
const Schema = mongoose.Schema

const UserModuleSchema = new Schema(
    {
        username: String,
         email: String,
        password: String,
        confirm_password: String
    }
);

const UserModel = mongoose.model('UserModel',UserModuleSchema);
module.exports = UserModel;

