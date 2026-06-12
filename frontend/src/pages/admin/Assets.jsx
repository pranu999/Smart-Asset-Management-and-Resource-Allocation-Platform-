import AdminLayout
from "../../components/AdminLayout";

import {
  useEffect,
  useState
} from "react";

import {
  getAssets,
  addAsset,
  updateAsset,
  deleteAsset
}
from "../../api/assetApi";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Paper,
  TextField,
  Button,
  Stack
}
from "@mui/material";

function Assets() {

  const [assets,
  setAssets] =
  useState([]);

  const [form,
  setForm] =
  useState({

    asset_name:"",
    category_id:1,
    description:"",
    total_quantity:1,
    available_quantity:1,
    asset_status:"AVAILABLE",
    asset_condition:"GOOD"

  });

  const [editingId,
  setEditingId] =
  useState(null);

  useEffect(() => {

    loadAssets();

  }, []);

  const loadAssets =
  async () => {

    const res =
    await getAssets();

    setAssets(
      res.data
    );
  };

  const handleChange =
  (e) => {

    setForm({

      ...form,

      [e.target.name]:
      e.target.value

    });

  };

  const handleSubmit =
  async () => {

    try {

      if(editingId){

        await updateAsset(
          editingId,
          form
        );

        alert(
          "Asset Updated"
        );

      } else {

        await addAsset(
          form
        );

        alert(
          "Asset Added"
        );

      }

      setForm({

        asset_name:"",
        category_id:1,
        description:"",
        total_quantity:1,
        available_quantity:1,
        asset_status:"AVAILABLE",
        asset_condition:"GOOD"

      });

      setEditingId(
        null
      );

      loadAssets();

    } catch(error){

      console.error(
        error
      );

      alert(
        "Operation Failed"
      );

    }
  };

  const handleEdit =
  (asset) => {

    setEditingId(
      asset.id
    );

    setForm({

      asset_name:
      asset.asset_name,

      category_id:
      asset.category_id,

      description:
      asset.description,

      total_quantity:
      asset.total_quantity,

      available_quantity:
      asset.available_quantity,

      asset_status:
      asset.asset_status,

      asset_condition:
      asset.asset_condition

    });
  };

  const handleDelete =
  async(id)=>{

    if(
      !window.confirm(
      "Delete Asset?"
      )
    )
    return;

    await deleteAsset(
      id
    );

    loadAssets();
  };

  return (

    <AdminLayout>

      <Paper
        sx={{
          padding:2,
          marginBottom:3
        }}
      >

        <h2>
          Asset Form
        </h2>

        <Stack
          spacing={2}
        >

          <TextField
            label="Asset Name"
            name="asset_name"
            value={
              form.asset_name
            }
            onChange={
              handleChange
            }
          />

          <TextField
            label="Category ID"
            name="category_id"
            value={
              form.category_id
            }
            onChange={
              handleChange
            }
          />

          <TextField
            label="Description"
            name="description"
            value={
              form.description
            }
            onChange={
              handleChange
            }
          />

          <TextField
            label="Total Quantity"
            name="total_quantity"
            value={
              form.total_quantity
            }
            onChange={
              handleChange
            }
          />

          <TextField
            label="Available Quantity"
            name="available_quantity"
            value={
              form.available_quantity
            }
            onChange={
              handleChange
            }
          />

          <TextField
            label="Status"
            name="asset_status"
            value={
              form.asset_status
            }
            onChange={
              handleChange
            }
          />

          <TextField
            label="Condition"
            name="asset_condition"
            value={
              form.asset_condition
            }
            onChange={
              handleChange
            }
          />

          <Button
            variant="contained"
            onClick={
              handleSubmit
            }
          >

            {
              editingId
              ?
              "Update Asset"
              :
              "Add Asset"
            }

          </Button>

        </Stack>

      </Paper>

      <Paper
        sx={{
          padding:2
        }}
      >

        <h2>
          Assets
        </h2>

        <Table>

          <TableHead>

            <TableRow>

              <TableCell>
                Name
              </TableCell>

              <TableCell>
                Available
              </TableCell>

              <TableCell>
                Status
              </TableCell>

              <TableCell>
                Actions
              </TableCell>

            </TableRow>

          </TableHead>

          <TableBody>

            {
              assets.map(
                asset => (

                <TableRow
                  key={
                    asset.id
                  }
                >

                  <TableCell>
                    {
                      asset.asset_name
                    }
                  </TableCell>

                  <TableCell>
                    {
                      asset.available_quantity
                    }
                  </TableCell>

                  <TableCell>
                    {
                      asset.asset_status
                    }
                  </TableCell>

                  <TableCell>

                    <Button
                      onClick={() =>
                        handleEdit(
                          asset
                        )
                      }
                    >
                      Edit
                    </Button>

                    <Button
                      color="error"
                      onClick={() =>
                        handleDelete(
                          asset.id
                        )
                      }
                    >
                      Delete
                    </Button>

                  </TableCell>

                </TableRow>

                )
              )
            }

          </TableBody>

        </Table>

      </Paper>

    </AdminLayout>

  );
}

export default Assets;