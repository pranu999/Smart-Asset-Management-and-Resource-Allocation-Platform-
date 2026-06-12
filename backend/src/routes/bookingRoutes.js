const express =
require("express");

const router =
express.Router();

const {
  bookAsset,
  viewAllBookings,
  viewMyBookings,
  approveBooking,
  rejectBooking
} = require(
"../controllers/bookingController"
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
  bookAsset
);

router.get(
  "/my-bookings",
  verifyToken,
  viewMyBookings
);

router.get(
  "/",
  verifyToken,
  adminOnly,
  viewAllBookings
);

router.put(
  "/approve/:id",
  verifyToken,
  adminOnly,
  approveBooking
);

router.put(
  "/reject/:id",
  verifyToken,
  adminOnly,
  rejectBooking
);

module.exports = router;