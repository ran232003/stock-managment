let express = require("express");

const { verifyToken } = require("../middleware/helperFunctions");
const {
  searchStoke,
  getStock,
  myStocks,
  test,
  myFave,
} = require("../controllers/stoke-controller");

const router = express.Router();

router.get("/searchStokes", verifyToken, searchStoke);
router.get("/test", test);

router.get("/getStock/:symbol", verifyToken, getStock);
router.post("/myStocks", verifyToken, myStocks);
router.get("/myFave", verifyToken, myFave);

module.exports = router;
