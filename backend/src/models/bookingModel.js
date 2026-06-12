const db = require("../config/db");

const createBooking = (
  user_id,
  asset_id,
  requested_quantity,
  start_date,
  end_date,
  purpose,
  callback
) => {

  const sql = `
    INSERT INTO booking_requests
    (
      user_id,
      asset_id,
      requested_quantity,
      start_date,
      end_date,
      purpose
    )
    VALUES (?, ?, ?, ?, ?, ?)
  `;

  db.query(
    sql,
    [
      user_id,
      asset_id,
      requested_quantity,
      start_date,
      end_date,
      purpose
    ],
    callback
  );
};

const getAllBookings = (callback) => {

  const sql = `
  SELECT
  br.*,
  u.name,
  a.asset_name
  FROM booking_requests br
  JOIN users u
  ON br.user_id = u.id
  JOIN assets a
  ON br.asset_id = a.id
  `;

  db.query(sql, callback);
};

const getUserBookings = (
  user_id,
  callback
) => {

  const sql = `
  SELECT *
  FROM booking_requests
  WHERE user_id = ?
  `;

  db.query(
    sql,
    [user_id],
    callback
  );
};

const updateBookingStatus = (
  booking_id,
  status,
  callback
) => {

  db.query(
    `
    UPDATE booking_requests
    SET status = ?
    WHERE id = ?
    `,
    [status, booking_id],
    callback
  );
};

module.exports = {
  createBooking,
  getAllBookings,
  getUserBookings,
  updateBookingStatus
};