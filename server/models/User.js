const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// connect to mongoose 
mongoose.connect("mongodb://127.0.0.1:27017/inotebook")
// Define the user schema
const userSchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true,
    },
    date: {
        type: Date,
        default:Date.now
    },
});

// Create the user model
const User = mongoose.model('User', userSchema);
User.createIndexes();
module.exports = User;
