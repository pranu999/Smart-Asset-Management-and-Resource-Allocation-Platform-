import API from "./authApi";

export const getMaintenance =
() => {

  return API.get(
    "/maintenance",
    {
      headers:{
        Authorization:
        `Bearer ${localStorage.getItem("token")}`
      }
    }
  );
};

export const addMaintenance =
(data) => {

  return API.post(
    "/maintenance",
    data,
    {
      headers:{
        Authorization:
        `Bearer ${localStorage.getItem("token")}`
      }
    }
  );
};

export const completeMaintenance =
(id) => {

  return API.put(
    `/maintenance/complete/${id}`,
    {},
    {
      headers:{
        Authorization:
        `Bearer ${localStorage.getItem("token")}`
      }
    }
  );
};