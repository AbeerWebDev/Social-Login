const cookieSession = require("cookie-session");
const express = require("express");
const passport = require("passport");
const cors = require('cors')
const passportSetup = require('./passport') 
const authRoute = require("./routes/auth")
const app = express();
require("dotenv").config();

app.use(cookieSession({
  name: "session", keys: ["Abeer"], maxAge: 24 * 60 * 60 * 100
}))

app.use(passport.initialize())
app.use(passport.session())

app.use(
  cors({
    origin: process.env.CLIENT_URL,
    methods: "GET, POST, PUT, DELETE",
    credentials: true,
  })
);

app.use('/auth', authRoute)

app.listen("8000", () => {
  console.log("Server is running");
});
