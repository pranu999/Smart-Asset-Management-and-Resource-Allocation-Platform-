import { useEffect, useState } from "react";

import AdminLayout from "../../components/AdminLayout";

import {
  getMaintenance,
  addMaintenance,
  completeMaintenance
} from "../../api/maintenanceApi";

import {
  Button,
  Paper,
  TextField,
  Stack
} from "@mui/material";

function Maintenance() {

  const [records,setRecords] =
  useState([]);

  const [form,setForm] =
  useState({

    asset_id:"",
    maintenance_date:"",
    remarks:"",
    status:"PENDING"

  });

  useEffect(() => {

    loadData();

  }, []);

  const loadData =
  async () => {

    const res =
    await getMaintenance();

    setRecords(
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

      await addMaintenance(
        form
      );

      alert(
        "Maintenance Record Added"
      );

      setForm({

        asset_id:"",
        maintenance_date:"",
        remarks:"",
        status:"PENDING"

      });

      loadData();

    } catch(error){

      console.error(
        error
      );

      alert(
        "Failed"
      );

    }
  };

  const handleComplete =
  async(id)=>{

    await completeMaintenance(
      id
    );

    loadData();
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
          Add Maintenance Record
        </h2>

        <Stack spacing={2}>

          <TextField
            label="Asset ID"
            name="asset_id"
            value={form.asset_id}
            onChange={handleChange}
          />

          <TextField
            type="date"
            name="maintenance_date"
            value={form.maintenance_date}
            onChange={handleChange}
          />

          <TextField
            label="Remarks"
            name="remarks"
            value={form.remarks}
            onChange={handleChange}
          />

          <Button
            variant="contained"
            onClick={handleSubmit}
          >
            Add Maintenance
          </Button>

        </Stack>

      </Paper>

      <h2>
        Maintenance Records
      </h2>

      {
        records.map(
          record => (

            <Paper
              key={record.id}
              sx={{
                padding:2,
                marginBottom:2
              }}
            >

              <h3>
                {record.asset_name}
              </h3>

              <p>
                {record.remarks}
              </p>

              <p>
                {record.status}
              </p>

              {
                record.status ===
                "PENDING"
                &&

                <Button
                  variant="contained"
                  onClick={() =>
                    handleComplete(
                      record.id
                    )
                  }
                >
                  Complete
                </Button>
              }

            </Paper>

          )
        )
      }

    </AdminLayout>
  );
}

export default Maintenance;