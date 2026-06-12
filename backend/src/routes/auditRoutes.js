const express =
require("express");

const router =
express.Router();

const {
  viewLogs
} = require(
"../controllers/auditController"
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
  viewLogs
);

module.exports = router;