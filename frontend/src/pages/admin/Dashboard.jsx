import { useEffect, useState } from "react";
import AdminLayout from "../../components/AdminLayout";

import { getDashboard } from "../../api/dashboardApi";

import {
  Paper,
  Grid,
  Typography
} from "@mui/material";

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
} from "chart.js";

import { Bar } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

function Dashboard() {

  const [dashboard,
  setDashboard] =
  useState(null);

  useEffect(() => {

    loadDashboard();

  }, []);

  const loadDashboard =
  async () => {

    const res =
    await getDashboard();

    setDashboard(
      res.data
    );
  };

  if (!dashboard)
    return <h2>Loading...</h2>;

  const chartData = {

    labels:
    dashboard.mostUtilizedAssets.map(
      asset => asset.asset_name
    ),

    datasets: [
      {
        label:
        "Bookings",

        data:
        dashboard.mostUtilizedAssets.map(
          asset =>
          asset.bookingCount
        )
      }
    ]
  };

  return (
  <AdminLayout>

    <Typography
      variant="h4"
      gutterBottom
    >
      Dashboard
    </Typography>

    <Grid
      container
      spacing={2}
    >

      <Grid item xs={3}>
        <Paper sx={{ padding: 2 }}>
          <h3>Active Bookings</h3>

          <h1>
            {
              dashboard
              .activeBookings
              .activeBookings
            }
          </h1>

        </Paper>
      </Grid>

      <Grid item xs={3}>
        <Paper sx={{ padding: 2 }}>
          <h3>Overdue Returns</h3>

          <h1>
            {
              dashboard
              .overdueReturns
              .length
            }
          </h1>
        </Paper>
      </Grid>

    </Grid>

    <Paper
      sx={{
        marginTop:4,
        padding:2
      }}
    >

      <Bar
        data={chartData}
      />

    </Paper>

  </AdminLayout>
);
}

export default Dashboard;