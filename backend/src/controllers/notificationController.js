const {
  getNotifications,
  markAsRead
} = require("../models/notificationModel");

exports.viewNotifications =
(
  req,
  res
) => {

  getNotifications(
    req.user.id,
    (err, results) => {

      if (err)
        return res.status(500).json(err);

      res.json(results);

    }
  );
};

exports.readNotification =
(
  req,
  res
) => {

  markAsRead(
    req.params.id,
    (err) => {

      if (err)
        return res.status(500).json(err);

      res.json({
        message:
        "Notification Marked Read"
      });

    }
  );
};