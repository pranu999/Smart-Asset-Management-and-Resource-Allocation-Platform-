import API from "./authApi";

export const getNotifications =
() => {

  return API.get(
    "/notifications",
    {
      headers:{
        Authorization:
        `Bearer ${localStorage.getItem("token")}`
      }
    }
  );
};