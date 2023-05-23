import session from "express-session";
import app from "./app";

const oneDay = 1000 * 60 * 60 * 24;
app.use(
  session({
    secret: process.env.SECRET_CODE,
    name: "user_id",
    resave: false,
    saveUninitialized: false,
    cookie: {
      maxAge: oneDay,
    },
  })
);
