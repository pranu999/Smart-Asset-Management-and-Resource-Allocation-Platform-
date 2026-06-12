const db = require("../config/db");

const createLog = (
  user_id,
  action,
  details,
  callback
) => {

  const sql = `
  INSERT INTO audit_logs
  (
    user_id,
    action,
    details
  )
  VALUES (?, ?, ?)
  `;

  db.query(
    sql,
    [
      user_id,
      action,
      details
    ],
    callback
  );
};

const getLogs = (
  callback
) => {

  const sql = `
  SELECT
  al.*,
  u.name

  FROM audit_logs al

  LEFT JOIN users u
  ON al.user_id = u.id

  ORDER BY al.created_at DESC
  `;

  db.query(
    sql,
    callback
  );
};

module.exports = {
  createLog,
  getLogs
};