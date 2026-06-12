const express =
require("express");

const router =
express.Router();

const {
  viewNotifications,
  readNotification
} = require(
"../controllers/notificationController"
);

const verifyToken =
require(
"../middleware/authMiddleware"
);

router.get(
  "/",
  verifyToken,
  viewNotifications
);

router.put(
  "/:id",
  verifyToken,
  readNotification
);

module.exports = router;