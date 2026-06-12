const {
  createLog
} = require("../models/auditModel");

const {
  createAsset,
  getAllAssets,
  updateAsset,
  deleteAsset,
  updateQrCode,
  getAssetById
} = require("../models/assetModel");

const QRCode = require("qrcode");
const path = require("path");

exports.addAsset = (
  req,
  res
) => {

  createAsset(
    req.body.asset_name,
    req.body.category_id,
    req.body.description,
    req.body.total_quantity,
    req.body.available_quantity,
    req.body.asset_status,
    req.body.asset_condition,

    async (err, result) => {

      if (err)
        return res.status(500).json(err);

      const assetId =
      result.insertId;

      const qrData =
      JSON.stringify({
        assetId
      });

      const qrPath =
      path.join(
        __dirname,
        "../uploads/qrcodes",
        `asset_${assetId}.png`
      );

      await QRCode.toFile(
        qrPath,
        qrData
      );

      updateQrCode(
        assetId,
        `/uploads/qrcodes/asset_${assetId}.png`,
        () => {}
      );

      res.status(201).json({
        message:
        "Asset Added Successfully",
        assetId
      });

    }
  );
};

exports.getAssets = (req, res) => {

  getAllAssets((err, results) => {

    if (err)
      return res.status(500).json(err);

    res.json(results);
  });
};

exports.editAsset = (req, res) => {

  updateAsset(
    req.params.id,
    req.body.asset_name,
    req.body.category_id,
    req.body.description,
    req.body.total_quantity,
    req.body.available_quantity,
    req.body.asset_status,
    req.body.asset_condition,
    (err) => {

      if (err)
        return res.status(500).json(err);

      createLog(
        req.user.id,
        "ASSET_UPDATED",
        `Updated asset ID ${req.params.id}`,
        () => {}
      );

      res.json({
        message: "Asset Updated Successfully"
      });
    }
  );
};

exports.removeAsset = (req, res) => {

  deleteAsset(
    req.params.id,
    (err) => {

      if (err)
        return res.status(500).json(err);

      createLog(
        req.user.id,
        "ASSET_DELETED",
        `Deleted asset ID ${req.params.id}`,
        () => {}
      );

      res.json({
        message: "Asset Deleted Successfully"
      });
    }
  );
};

exports.getAssetByQr =
(
  req,
  res
) => {

  getAssetById(
    req.params.id,
    (err, result) => {

      if (err)
        return res.status(500).json(err);

      res.json(
        result[0]
      );

    }
  );
};