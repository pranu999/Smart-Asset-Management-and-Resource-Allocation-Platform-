import API from "./authApi";

export const getMyBookings =
() => {

  return API.get(
    "/bookings/my-bookings",
    {
      headers:{
        Authorization:
        `Bearer ${localStorage.getItem("token")}`
      }
    }
  );
};