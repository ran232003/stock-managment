const express = require("express");
const app = express();
const port = 5000;

const mongoose = require("mongoose");
const cors = require("cors");
const MyError = require("./models/MyError");
const userRouter = require("./routes/user-route");

//const commentRouter = require("./routes/comment-routes");

const cookieParser = require("cookie-parser");
const User = require("./models/user-schema");

const corsOptions = {
  origin: "http://localhost:3000", // Replace with your React app's domain
  credentials: true,
};
app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors(corsOptions));
mongoose.connect("mongodb://localhost:27017/stockManagment", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
app.use("/api/stock/user", userRouter);

app.use((req, res, next) => {
  let error = new MyError("not able to find page");
  error.errorCode = 404;
  next(error);
});
app.use(function (error, req, res, next) {
  //console.log(error);
  console.log("error controller", error.message);
  const errorCode = error.code || 500;
  const errorMsg = error.message || "unknown error occurd";
  const errorObject = error.errors || {};
  res.status(errorCode);
  res.json({ status: "fail", msg: errorMsg, errorObject });
});
