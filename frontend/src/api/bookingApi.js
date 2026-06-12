import API from "./authApi";

const authConfig = () => ({
  headers: {
    Authorization:
      `Bearer ${localStorage.getItem("token")}`
  }
});

export const getBookings = () => {
  return API.get(
    "/bookings",
    authConfig()
  );
};

export const approveBooking = (id) => {
  return API.put(
    `/bookings/approve/${id}`,
    {},
    authConfig()
  );
};

export const rejectBooking = (id) => {
  return API.put(
    `/bookings/reject/${id}`,
    {},
    authConfig()
  );
};