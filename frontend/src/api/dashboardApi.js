import API from "./authApi";

export const getDashboard = () => {
  return API.get(
    "/dashboard",
    {
      headers:{
        Authorization:
        `Bearer ${localStorage.getItem("token")}`
      }
    }
  );
};