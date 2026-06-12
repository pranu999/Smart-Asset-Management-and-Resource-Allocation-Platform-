const {
  getAvailableInventory,
  getActiveBookings,
  getOverdueReturns,
  getMostUtilizedAssets
} = require("../models/dashboardModel");

exports.dashboardData =
(
  req,
  res
) => {

  getAvailableInventory(
    (err, inventory) => {

      if (err)
        return res.status(500).json(err);

      getActiveBookings(
      (err, bookings) => {

      getOverdueReturns(
      (err, overdue) => {

      getMostUtilizedAssets(
      (err, utilized) => {

      res.json({
        inventory,
        activeBookings:
        bookings[0],

        overdueReturns:
        overdue,

        mostUtilizedAssets:
        utilized
      });

      });

      });

      });

    }
  );
};