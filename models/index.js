const mongoose = require('mongoose');

mongoose.Promise = global.Promise;

const db = {};

db.mongoose = mongoose;

db.role = require("./Role");

db.ROLES = ["user", "admin"]