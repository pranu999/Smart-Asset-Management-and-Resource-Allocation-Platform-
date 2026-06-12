const express =
require("express");

const router =
express.Router();

const {
  createMaintenance,
  viewMaintenance,
  completeMaintenance
} = require(
"../controllers/maintenanceController"
);

const verifyToken =
require(
"../middleware/authMiddleware"
);

const adminOnly =
require(
"../middleware/adminMiddleware"
);

router.post(
  "/",
  verifyToken,
  adminOnly,
  createMaintenance
);

router.get(
  "/",
  verifyToken,
  adminOnly,
  viewMaintenance
);

router.put(
  "/complete/:id",
  verifyToken,
  adminOnly,
  completeMaintenance
);

module.exports = router;