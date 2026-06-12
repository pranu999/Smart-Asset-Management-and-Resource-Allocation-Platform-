const {
  getLogs
} = require("../models/auditModel");

exports.viewLogs =
(
  req,
  res
) => {

  getLogs(
    (err, results) => {

      if (err)
        return res.status(500).json(err);

      res.json(results);

    }
  );
};