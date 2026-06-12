const db = require("../config/db");

const createAsset = (
  asset_name,
  category_id,
  description,
  total_quantity,
  available_quantity,
  asset_status,
  asset_condition,
  callback
) => {

  const sql = `
    INSERT INTO assets
    (
      asset_name,
      category_id,
      description,
      total_quantity,
      available_quantity,
      asset_status,
      asset_condition
    )
    VALUES (?, ?, ?, ?, ?, ?, ?)
  `;

  db.query(
    sql,
    [
      asset_name,
      category_id,
      description,
      total_quantity,
      available_quantity,
      asset_status,
      asset_condition
    ],
    callback
  );
};

const getAllAssets = (callback) => {
  db.query(
    "SELECT * FROM assets",
    callback
  );
};

const updateAsset = (
  id,
  asset_name,
  category_id,
  description,
  total_quantity,
  available_quantity,
  asset_status,
  asset_condition,
  callback
) => {

  const sql = `
  UPDATE assets
  SET
  asset_name=?,
  category_id=?,
  description=?,
  total_quantity=?,
  available_quantity=?,
  asset_status=?,
  asset_condition=?
  WHERE id=?
  `;

  db.query(
    sql,
    [
      asset_name,
      category_id,
      description,
      total_quantity,
      available_quantity,
      asset_status,
      asset_condition,
      id
    ],
    callback
  );
};

const deleteAsset = (id, callback) => {
  db.query(
    "DELETE FROM assets WHERE id=?",
    [id],
    callback
  );
};


const updateQrCode = (
  id,
  qr_code,
  callback
) => {

  db.query(
    `
    UPDATE assets
    SET qr_code = ?
    WHERE id = ?
    `,
    [qr_code, id],
    callback
  );
};

const getAssetById =
(
  id,
  callback
) => {

  db.query(
    `
    SELECT *
    FROM assets
    WHERE id=?
    `,
    [id],
    callback
  );
};
module.exports = {
  createAsset,
  getAllAssets,
  updateAsset,
  deleteAsset,
  updateQrCode,
  getAssetById
};