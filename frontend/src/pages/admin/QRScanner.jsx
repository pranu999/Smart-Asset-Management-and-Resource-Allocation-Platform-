import { useState } from "react";

import AdminLayout from "../../components/AdminLayout";

import { Scanner }
from "@yudiel/react-qr-scanner";

import axios from "axios";

import {
  Paper
} from "@mui/material";

function QRScanner() {

  const [asset,
  setAsset] =
  useState(null);

  const handleScan =
  async(result)=>{

    if(!result?.length)
      return;

    try{

      const qrData =
      JSON.parse(
        result[0].rawValue
      );

      const res =
      await axios.get(

      `http://localhost:5001/api/assets/qr/${qrData.assetId}`,

      {
        headers:{
          Authorization:
          `Bearer ${localStorage.getItem("token")}`
        }
      }

      );

      setAsset(
        res.data
      );

    }catch{

      alert(
        "Invalid QR"
      );

    }
  };

  return (

    <AdminLayout>

      <h2>
        QR Scanner
      </h2>

      <div
        style={{
          maxWidth:"500px"
        }}
      >

        <Scanner
          onScan={
            handleScan
          }
        />

      </div>

      {
        asset && (

          <Paper
            sx={{
              padding:2,
              marginTop:2
            }}
          >

            <h3>
              Asset Details
            </h3>

            <p>
              Name:
              {asset.asset_name}
            </p>

            <p>
              Available:
              {asset.available_quantity}
            </p>

            <p>
              Status:
              {asset.asset_status}
            </p>

            <p>
              Condition:
              {asset.asset_condition}
            </p>

          </Paper>

        )
      }

    </AdminLayout>
  );
}

export default QRScanner;