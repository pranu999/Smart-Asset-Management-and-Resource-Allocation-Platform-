import API from "./authApi";

export const bookAsset = (data) => {

  return API.post(
    "/bookings",
    data,
    {
      headers:{
        Authorization:
        `Bearer ${localStorage.getItem("token")}`
      }
    }
  );
};