import API from "./authApi";

export const issueAsset =
(id, dueDate) => {

  return API.post(

    `/issues/issue/${id}`,

    {
      due_date: dueDate
    },

    {
      headers: {
        Authorization:
        `Bearer ${localStorage.getItem("token")}`
      }
    }
  );
};

export const returnAsset =
(id) => {

  return API.post(

    `/issues/return/${id}`,

    {},

    {
      headers: {
        Authorization:
        `Bearer ${localStorage.getItem("token")}`
      }
    }
  );
};