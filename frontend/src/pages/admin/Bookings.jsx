import { useEffect, useState } from "react";

import AdminLayout
from "../../components/AdminLayout";

import {
  getBookings,
  approveBooking,
  rejectBooking
} from "../../api/bookingApi";

import {
  issueAsset,
  returnAsset
} from "../../api/issueApi";

import {
  Paper,
  Button,
  Stack
} from "@mui/material";

function Bookings() {

  const [bookings,
  setBookings] =
  useState([]);

  useEffect(() => {

    loadBookings();

  }, []);

  const loadBookings =
  async () => {

    const res =
    await getBookings();

    setBookings(
      res.data
    );
  };

  const handleApprove =
  async (id) => {

    await approveBooking(id);

    loadBookings();
  };

  const handleReject =
  async (id) => {

    await rejectBooking(id);

    loadBookings();
  };

  const handleIssue =
  async (id) => {

    const dueDate =
    prompt(
      "Enter Due Date (YYYY-MM-DD)"
    );

    if (!dueDate)
      return;

    await issueAsset(
      id,
      dueDate
    );

    loadBookings();
  };

  const handleReturn =
  async (id) => {

    await returnAsset(
      id
    );

    loadBookings();
  };

  return (

    <AdminLayout>

      <h2>
        Booking Requests
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

              <h3>
                {booking.asset_name}
              </h3>

              <p>
                User:
                {" "}
                {booking.name}
              </p>

              <p>
                Status:
                {" "}
                {booking.status}
              </p>

              <p>
                Quantity:
                {" "}
                {booking.requested_quantity}
              </p>

              <Stack
                direction="row"
                spacing={1}
              >

                {
                  booking.status ===
                  "PENDING"
                  &&

                  <>
                    <Button
                      variant="contained"
                      color="success"
                      onClick={() =>
                        handleApprove(
                          booking.id
                        )
                      }
                    >
                      Approve
                    </Button>

                    <Button
                      variant="contained"
                      color="error"
                      onClick={() =>
                        handleReject(
                          booking.id
                        )
                      }
                    >
                      Reject
                    </Button>
                  </>
                }

                {
                  booking.status ===
                  "APPROVED"
                  &&

                  <Button
                    variant="contained"
                    onClick={() =>
                      handleIssue(
                        booking.id
                      )
                    }
                  >
                    Issue Asset
                  </Button>
                }

                {
                  booking.status ===
                  "ISSUED"
                  &&

                  <Button
                    variant="contained"
                    color="warning"
                    onClick={() =>
                      handleReturn(
                        booking.id
                      )
                    }
                  >
                    Return Asset
                  </Button>
                }

              </Stack>

            </Paper>

          )
        )
      }

    </AdminLayout>

  );
}

export default Bookings;