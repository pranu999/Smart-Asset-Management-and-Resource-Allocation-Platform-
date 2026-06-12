const db = require("../config/db");

const issueAsset = (
  booking_id,
  issue_date,
  due_date,
  callback
) => {

  const sql = `
  INSERT INTO asset_issues
  (
    booking_id,
    issue_date,
    due_date
  )
  VALUES (?, ?, ?)
  `;

  db.query(
    sql,
    [
      booking_id,
      issue_date,
      due_date
    ],
    callback
  );
};

const returnAsset = (
  booking_id,
  return_date,
  callback
) => {

  const sql = `
  UPDATE asset_issues
  SET
  return_date = ?,
  issue_status = 'RETURNED'
  WHERE booking_id = ?
  `;

  db.query(
    sql,
    [
      return_date,
      booking_id
    ],
    callback
  );
};

const getAllIssues = (
  callback
) => {

  db.query(
    "SELECT * FROM asset_issues",
    callback
  );
};

module.exports = {
  issueAsset,
  returnAsset,
  getAllIssues
};