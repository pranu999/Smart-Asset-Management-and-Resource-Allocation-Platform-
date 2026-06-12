const express =
require("express");

const router =
express.Router();

const {
  issueBooking,
  returnBooking,
  viewIssues
} = require(
"../controllers/issueController"
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
  "/issue/:id",
  verifyToken,
  adminOnly,
  issueBooking
);

router.post(
  "/return/:id",
  verifyToken,
  adminOnly,
  returnBooking
);

router.get(
  "/",
  verifyToken,
  adminOnly,
  viewIssues
);

module.exports = router;