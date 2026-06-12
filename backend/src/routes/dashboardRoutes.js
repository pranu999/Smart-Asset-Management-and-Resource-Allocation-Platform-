const express =
require("express");

const router =
express.Router();

const {
  dashboardData
} = require(
"../controllers/dashboardController"
);

const verifyToken =
require(
"../middleware/authMiddleware"
);

const adminOnly =
require(
"../middleware/adminMiddleware"
);

router.get(
  "/",
  verifyToken,
  adminOnly,
  dashboardData
);

module.exports = router;