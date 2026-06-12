import {
  useEffect,
  useState
} from "react";

import UserLayout
from "../../components/UserLayout";

import {
  getNotifications
} from "../../api/notificationApi";

import {
  Paper
} from "@mui/material";

function Notifications() {

  const [notifications,
  setNotifications] =
  useState([]);

  useEffect(() => {

    loadNotifications();

  }, []);

  const loadNotifications =
  async () => {

    const res =
    await getNotifications();

    setNotifications(
      res.data
    );
  };

  return (

    <UserLayout>

      <h2>
        Notifications
      </h2>

      {
        notifications.map(
          notification => (

            <Paper
              key={notification.id}
              sx={{
                padding:2,
                marginBottom:2
              }}
            >

              <h3>
                {notification.title}
              </h3>

              <p>
                {notification.message}
              </p>

            </Paper>

          )
        )
      }

    </UserLayout>

  );
}

export default Notifications;