const db = require("../config/db");

const addMaintenanceRecord = (
  asset_id,
  maintenance_date,
  remarks,
  status,
  callback
) => {

  const sql = `
  INSERT INTO maintenance_records
  (
    asset_id,
    maintenance_date,
    remarks,
    status
  )
  VALUES (?, ?, ?, ?)
  `;

  db.query(
    sql,
    [
      asset_id,
      maintenance_date,
      remarks,
      status
    ],
    callback
  );
};

const getMaintenanceRecords =
(
  callback
) => {

  const sql = `
  SELECT
  mr.*,
  a.asset_name

  FROM maintenance_records mr

  JOIN assets a
  ON mr.asset_id = a.id

  ORDER BY maintenance_date DESC
  `;

  db.query(sql, callback);
};

const updateMaintenanceStatus =
(
  id,
  status,
  callback
) => {

  db.query(
    `
    UPDATE maintenance_records
    SET status=?
    WHERE id=?
    `,
    [status, id],
    callback
  );
};

module.exports = {
  addMaintenanceRecord,
  getMaintenanceRecords,
  updateMaintenanceStatus
};