const {
  addMaintenanceRecord,
  getMaintenanceRecords,
  updateMaintenanceStatus
} = require(
  "../models/maintenanceModel"
);

exports.createMaintenance =
(
  req,
  res
) => {

  addMaintenanceRecord(
    req.body.asset_id,
    req.body.maintenance_date,
    req.body.remarks,
    req.body.status,
    (err) => {

      if (err)
        return res.status(500).json(err);

      res.status(201).json({
        message:
        "Maintenance Record Added"
      });

    }
  );
};

exports.viewMaintenance =
(
  req,
  res
) => {

  getMaintenanceRecords(
    (err, results) => {

      if (err)
        return res.status(500).json(err);

      res.json(results);

    }
  );
};

exports.completeMaintenance =
(
  req,
  res
) => {

  updateMaintenanceStatus(
    req.params.id,
    "COMPLETED",
    (err) => {

      if (err)
        return res.status(500).json(err);

      res.json({
        message:
        "Maintenance Completed"
      });

    }
  );
};