const express = require("express");
console.log("Asset Routes Loaded");

const router = express.Router();

const {
  addAsset,
  getAssets,
  editAsset,
  removeAsset,
  getAssetByQr
} = require("../controllers/assetController");

const verifyToken =
require("../middleware/authMiddleware");

const adminOnly =
require("../middleware/adminMiddleware");

router.post(
  "/",
  verifyToken,
  adminOnly,
  addAsset
);

router.get(
  "/",
  verifyToken,
  getAssets
);

router.put(
  "/:id",
  verifyToken,
  adminOnly,
  editAsset
);

router.delete(
  "/:id",
  verifyToken,
  adminOnly,
  removeAsset
);

router.get(
  "/qr/:id",
  verifyToken,
  getAssetByQr
);

module.exports = router;