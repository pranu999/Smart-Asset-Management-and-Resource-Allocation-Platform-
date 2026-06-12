const db = require("../config/db");

const getAvailableInventory = (callback) => {

  db.query(
    `
    SELECT
    asset_name,
    available_quantity
    FROM assets
    `,
    callback
  );
};

const getActiveBookings = (callback) => {

  db.query(
    `
    SELECT COUNT(*) AS activeBookings
    FROM booking_requests
    WHERE status='ISSUED'
    `,
    callback
  );
};

const getOverdueReturns = (callback) => {

  db.query(
    `
    SELECT *
    FROM asset_issues
    WHERE due_date < NOW()
    AND issue_status='ISSUED'
    `,
    callback
  );
};

const getMostUtilizedAssets = (callback) => {

  db.query(
    `
    SELECT
    a.asset_name,
    COUNT(br.asset_id) AS bookingCount

    FROM booking_requests br
    JOIN assets a
    ON br.asset_id = a.id

    GROUP BY br.asset_id

    ORDER BY bookingCount DESC
    `,
    callback
  );
};

module.exports = {
  getAvailableInventory,
  getActiveBookings,
  getOverdueReturns,
  getMostUtilizedAssets
};