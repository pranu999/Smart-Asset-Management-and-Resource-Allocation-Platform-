import API from "./authApi";

export const getAuditLogs =
() => {

  return API.get(
    "/audit",
    {
      headers:{
        Authorization:
        `Bearer ${localStorage.getItem("token")}`
      }
    }
  );
};