require("dotenv").config();

const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const mongoose = require("mongoose");
const cors = require("cors");
const session = require("express-session")
const passport = require("./helpers/passport");

mongoose
  .connect(process.env.DB_PROD, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then((x) => {
    console.log(
      `Connected to Mongo! Database name: "${x.connections[0].name}"`
    );
  })
  .catch((err) => {
    console.error("Error connecting to mongo", err);
  });

const app = express();

app.use(
    cors({
      origin: ["http://localhost:3001","http://localhost:3000","https://art1fy.herokuapp.com/", "https://art1fy.netlify.app"],
      credentials: true,
    })
  );

app.use(
    session({
        secret : process.env.SECRET,
        saveUninitialized:true,
        resave:true
    })
)

app.use( passport.initialize() )
app.use( passport.session() )

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
// Routes config
const authRouter = require('./routes/auth');
const designRouter = require('./routes/design');
const userRouter = require ('./routes/user');

app.use('/api/auth', authRouter);
app.use('/api/design', designRouter);
app.use('/api/user', userRouter);


app.use("*", (req, res) => {
    res.sendFile(path.join(__dirname, "public", "index.html"));
});
  
module.exports = app;
