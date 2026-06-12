import { useEffect, useState } from "react";

import UserLayout from "../../components/UserLayout";

import { getAssets } from "../../api/assetApi";
import { bookAsset } from "../../api/bookAssetApi";

import {
  Paper,
  Grid,
  Button,
  TextField,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions
} from "@mui/material";

function BrowseAssets() {

  const [assets, setAssets] =
  useState([]);

  const [search, setSearch] =
  useState("");

  const [open, setOpen] =
  useState(false);

  const [selectedAsset,
  setSelectedAsset] =
  useState(null);

  const [bookingData,
  setBookingData] =
  useState({

    requested_quantity: 1,
    start_date: "",
    end_date: "",
    purpose: ""

  });

  useEffect(() => {

    loadAssets();

  }, []);

  const loadAssets =
  async () => {

    try {

      const res =
      await getAssets();

      setAssets(
        res.data
      );

    } catch (error) {

      console.error(error);

    }
  };

  const openBookingDialog =
  (asset) => {

    setSelectedAsset(asset);

    setBookingData({

      requested_quantity: 1,
      start_date: "",
      end_date: "",
      purpose: ""

    });

    setOpen(true);
  };

  const submitBooking =
  async () => {

    try {

      await bookAsset({

        asset_id:
        selectedAsset.id,

        requested_quantity:
        bookingData.requested_quantity,

        start_date:
        bookingData.start_date,

        end_date:
        bookingData.end_date,

        purpose:
        bookingData.purpose

      });

      alert(
        "Booking Request Submitted Successfully"
      );

      setOpen(false);

    } catch (error) {

      console.error(error);

      alert(
        "Booking Failed"
      );

    }
  };

  return (

    <UserLayout>

      <h1>
        Available Assets
      </h1>

      <TextField
        fullWidth
        label="Search Assets"
        value={search}
        onChange={(e) =>
          setSearch(
            e.target.value
          )
        }
        sx={{
          marginBottom: 3
        }}
      />

      <Grid
        container
        spacing={3}
      >

        {
          assets
          .filter(asset =>
            asset.asset_name
            .toLowerCase()
            .includes(
              search.toLowerCase()
            )
          )
          .map(
            asset => (

              <Grid
                item
                xs={12}
                sm={6}
                md={4}
                key={asset.id}
              >

                <Paper
                  elevation={3}
                  sx={{
                    padding: 3,
                    height: "100%"
                  }}
                >

                  <h2>
                    {asset.asset_name}
                  </h2>

                  <p>
                    <strong>
                      Available:
                    </strong>
                    {" "}
                    {asset.available_quantity}
                  </p>

                  <p>
                    <strong>
                      Status:
                    </strong>
                    {" "}
                    {asset.asset_status}
                  </p>

                  <p>
                    <strong>
                      Condition:
                    </strong>
                    {" "}
                    {asset.asset_condition}
                  </p>

                  {
                    asset.description &&
                    (
                      <p>
                        <strong>
                          Description:
                        </strong>
                        {" "}
                        {asset.description}
                      </p>
                    )
                  }

                  <Button
                    variant="contained"
                    sx={{
                      marginTop: 2
                    }}
                    onClick={() =>
                      openBookingDialog(
                        asset
                      )
                    }
                  >
                    Book Asset
                  </Button>

                </Paper>

              </Grid>

            )
          )
        }

      </Grid>

      <Dialog
        open={open}
        onClose={() =>
          setOpen(false)
        }
        fullWidth
      >

        <DialogTitle>
          Book Asset
        </DialogTitle>

        <DialogContent>

          <TextField
            fullWidth
            margin="dense"
            label="Quantity"
            type="number"
            value={
              bookingData
              .requested_quantity
            }
            onChange={(e) =>
              setBookingData({

                ...bookingData,

                requested_quantity:
                e.target.value

              })
            }
          />

          <TextField
            fullWidth
            margin="dense"
            type="date"
            label="Start Date"
            InputLabelProps={{
              shrink: true
            }}
            value={
              bookingData
              .start_date
            }
            onChange={(e) =>
              setBookingData({

                ...bookingData,

                start_date:
                e.target.value

              })
            }
          />

          <TextField
            fullWidth
            margin="dense"
            type="date"
            label="End Date"
            InputLabelProps={{
              shrink: true
            }}
            value={
              bookingData
              .end_date
            }
            onChange={(e) =>
              setBookingData({

                ...bookingData,

                end_date:
                e.target.value

              })
            }
          />

          <TextField
            fullWidth
            margin="dense"
            label="Purpose"
            multiline
            rows={3}
            value={
              bookingData
              .purpose
            }
            onChange={(e) =>
              setBookingData({

                ...bookingData,

                purpose:
                e.target.value

              })
            }
          />

        </DialogContent>

        <DialogActions>

          <Button
            onClick={() =>
              setOpen(false)
            }
          >
            Cancel
          </Button>

          <Button
            variant="contained"
            onClick={
              submitBooking
            }
          >
            Submit Booking
          </Button>

        </DialogActions>

      </Dialog>

    </UserLayout>

  );
}

export default BrowseAssets;