const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const UserSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        default: Date.now
    },
    status: {
        type: Boolean,
        required: true
    }, 
    roles: [
        {
        type: String,
        ref: "Role"
        }
    ]
});


module.exports = User = mongoose.model("users", UserSchema);
