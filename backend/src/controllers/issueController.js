const {
  issueAsset,
  returnAsset,
  getAllIssues
} = require("../models/issueModel");

const db = require("../config/db");

const {
  createNotification
} = require("../models/notificationModel");

exports.issueBooking =
(
  req,
  res
) => {

  const bookingId =
  req.params.id;

  const issueDate =
  new Date();

  const dueDate =
  req.body.due_date;

  issueAsset(
    bookingId,
    issueDate,
    dueDate,
    (err) => {

      if (err)
        return res.status(500).json(err);

      db.query(
      `
      UPDATE booking_requests
      SET status='ISSUED'
      WHERE id=?
      `,
      [bookingId]
      );

      createNotification(
        req.user.id,
        "Asset Issued",
        "Asset has been issued successfully.",
        () => {}
      );

      res.json({
        message:
        "Asset Issued"
      });

    }
  );
};

exports.returnBooking =
(
  req,
  res
) => {

  const bookingId =
  req.params.id;

  returnAsset(
    bookingId,
    new Date(),
    (err) => {

      if (err)
        return res.status(500).json(err);

      db.query(
      `
      UPDATE booking_requests
      SET status='RETURNED'
      WHERE id=?
      `,
      [bookingId]
      );

      createNotification(
        req.user.id,
        "Asset Returned",
        "Asset return recorded successfully.",
        () => {}
      );

      res.json({
        message:
        "Asset Returned"
      });

    }
  );
};

exports.viewIssues =
(
  req,
  res
) => {

  getAllIssues(
    (err, results) => {

      if (err)
        return res.status(500).json(err);

      res.json(results);

    }
  );
};