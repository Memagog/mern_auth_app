const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const app = express();
const PORT =  5000;
const path = require('path');
const passport = require("passport");
const users = require("./routes/api/users");
const cors = require("cors");
var corsOptions = {
    origin: "https://desolate-fortress-25081.herokuapp.com/"
  };
  app.use(cors(corsOptions));
app.use(
    bodyParser.urlencoded({
        extended: false
    })
);
app.use(express.static('client/build'));
app.use((req, res) =>{
    res.sendFile(path.join(__dirname, './client/build/index.html'));
    
});
app.use(bodyParser.json());
const db = require("./config/key").mongoURI;

mongoose.connect(
    db
    , {useNewUrlParser: true},
    {useUnifiedTopology: true}
)
.then(()=> console.log("MongoDb successfully connected"))
.catch( err => console.log(err));

app.use(passport.initialize());
require("./config/passport")(passport);
app.use("/api/users",users);
const port = process.env.PORT || 5000;

app.listen( port, () => console.log(`Server has been started ${port}!`));
