import {
  useEffect,
  useState
} from "react";

import UserLayout
from "../../components/UserLayout";

import {
  getMyBookings
} from "../../api/myBookingsApi";

import {
  Paper
} from "@mui/material";

function MyBookings() {

  const [bookings,
  setBookings] =
  useState([]);

  useEffect(() => {

    loadBookings();

  }, []);

  const loadBookings =
  async () => {

    const res =
    await getMyBookings();

    setBookings(
      res.data
    );
  };

  return (

    <UserLayout>

      <h2>
        My Bookings
      </h2>

      {
        bookings.map(
          booking => (

            <Paper
              key={booking.id}
              sx={{
                padding:2,
                marginBottom:2
              }}
            >

              <p>
                Asset ID:
                {" "}
                {booking.asset_id}
              </p>

              <p>
                Quantity:
                {" "}
                {booking.requested_quantity}
              </p>

              <p>
                Status:
                {" "}
                {booking.status}
              </p>

              <p>
                Start:
                {" "}
                {booking.start_date}
              </p>

              <p>
                End:
                {" "}
                {booking.end_date}
              </p>

            </Paper>

          )
        )
      }

    </UserLayout>

  );
}

export default MyBookings;