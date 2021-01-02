const {Schema,model} = require("mongoose");

const Role = new Schema({
    name:{
        type:String,
        default: 'user'
    }
})

module.exports = model('role', Role)