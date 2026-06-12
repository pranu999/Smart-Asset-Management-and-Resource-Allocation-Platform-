import API from "./authApi";

const authConfig = () => ({
  headers: {
    Authorization:
      `Bearer ${localStorage.getItem("token")}`
  }
});

export const getAssets = () => {
  return API.get(
    "/assets",
    authConfig()
  );
};

export const addAsset = (data) => {
  return API.post(
    "/assets",
    data,
    authConfig()
  );
};

export const updateAsset = (
  id,
  data
) => {
  return API.put(
    `/assets/${id}`,
    data,
    authConfig()
  );
};

export const deleteAsset = (
  id
) => {
  return API.delete(
    `/assets/${id}`,
    authConfig()
  );
};