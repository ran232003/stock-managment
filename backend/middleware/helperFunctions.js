const jwt = require("jsonwebtoken");
const cookieParser = require("cookie-parser");

const MyError = require("../models/MyError");
const verifyToken = (req, res, next) => {
  const token = req.cookies["Auth_Cookie"];
  if (!token) {
    return res.status(401).json({ message: "Auth token is missing" });
  }

  jwt.verify(token, "my-secret", (err, decoded) => {
    if (err) {
      return res.status(401).json({ message: "Token is invalid" });
    }
    req.user = decoded; // Add decoded payload to request object
    next();
  });
};
module.exports = {
  verifyToken,
};
