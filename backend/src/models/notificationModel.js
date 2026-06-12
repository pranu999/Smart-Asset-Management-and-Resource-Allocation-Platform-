const db = require("../config/db");

const createNotification = (
  user_id,
  title,
  message,
  callback
) => {

  const sql = `
  INSERT INTO notifications
  (
    user_id,
    title,
    message
  )
  VALUES (?, ?, ?)
  `;

  db.query(
    sql,
    [
      user_id,
      title,
      message
    ],
    callback
  );
};

const getNotifications = (
  user_id,
  callback
) => {

  const sql = `
  SELECT *
  FROM notifications
  WHERE user_id = ?
  ORDER BY created_at DESC
  `;

  db.query(
    sql,
    [user_id],
    callback
  );
};

const markAsRead = (
  id,
  callback
) => {

  const sql = `
  UPDATE notifications
  SET is_read = TRUE
  WHERE id = ?
  `;

  db.query(
    sql,
    [id],
    callback
  );
};

module.exports = {
  createNotification,
  getNotifications,
  markAsRead
};