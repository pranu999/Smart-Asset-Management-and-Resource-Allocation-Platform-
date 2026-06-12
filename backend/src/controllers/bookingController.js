const db = require("../config/db");

const {
  createLog
} = require("../models/auditModel");

const {
  createNotification
} = require("../models/notificationModel");

const {
  createBooking,
  getAllBookings,
  getUserBookings,
  updateBookingStatus
} = require("../models/bookingModel");

exports.bookAsset = (
  req,
  res
) => {

  createBooking(
    req.user.id,
    req.body.asset_id,
    req.body.requested_quantity,
    req.body.start_date,
    req.body.end_date,
    req.body.purpose,
    (err) => {

      if (err) {
        console.log(err);

        return res.status(500).json({
          error: err.message
        });
      }

      createLog(
        req.user.id,
        "BOOKING_REQUEST",
        `Requested asset ID ${req.body.asset_id}`,
        () => {}
      );

      createNotification(
        req.user.id,
        "Booking Submitted",
        "Your booking request has been submitted.",
        () => {}
      );

      res.status(201).json({
        message:
        "Booking Request Submitted"
      });

    }
  );
};

exports.viewAllBookings = (
  req,
  res
) => {

  getAllBookings(
    (err, results) => {

      if (err)
        return res.status(500).json(err);

      res.json(results);

    }
  );
};

exports.viewMyBookings = (
  req,
  res
) => {

  getUserBookings(
    req.user.id,
    (err, results) => {

      if (err)
        return res.status(500).json(err);

      res.json(results);

    }
  );
};

exports.approveBooking = (
  req,
  res
) => {

  updateBookingStatus(
    req.params.id,
    "APPROVED",
    (err) => {

      if (err)
        return res.status(500).json(err);

      createLog(
        req.user.id,
        "BOOKING_APPROVED",
        `Approved booking ${req.params.id}`,
        () => {}
      );

      db.query(
        `
        SELECT user_id
        FROM booking_requests
        WHERE id = ?
        `,
        [req.params.id],
        (err, result) => {

          if (
            !err &&
            result.length > 0
          ) {

            createNotification(
              result[0].user_id,
              "Booking Approved",
              "Your booking request has been approved.",
              () => {}
            );

          }

        }
      );

      res.json({
        message:
        "Booking Approved"
      });

    }
  );
};

exports.rejectBooking = (
  req,
  res
) => {

  updateBookingStatus(
    req.params.id,
    "REJECTED",
    (err) => {

      if (err)
        return res.status(500).json(err);

      createLog(
        req.user.id,
        "BOOKING_REJECTED",
        `Rejected booking ${req.params.id}`,
        () => {}
      );

      db.query(
        `
        SELECT user_id
        FROM booking_requests
        WHERE id = ?
        `,
        [req.params.id],
        (err, result) => {

          if (
            !err &&
            result.length > 0
          ) {

            createNotification(
              result[0].user_id,
              "Booking Rejected",
              "Your booking request has been rejected.",
              () => {}
            );

          }

        }
      );

      res.json({
        message:
        "Booking Rejected"
      });

    }
  );
};