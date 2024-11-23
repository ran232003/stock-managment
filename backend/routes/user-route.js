let express = require("express");
const {
  signup,
  login,
  getUser,
  signout,
} = require("../controllers/user-controller");
const { verifyToken } = require("../middleware/helperFunctions");

const router = express.Router();
router.post("/signin", signup);
router.post("/login", login);
router.get("/getUser", verifyToken, getUser);
router.post("/signout", signout);

module.exports = router;
