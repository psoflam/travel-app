const axios = require("axios");

export async function getAllUsers() {
  try {
    const response = await axios.get("/api/get");
    console.log("response  ", response);
    return response.data;
  } catch (error) {
    return [];
  }
}

export async function createUser(data) {
  const response = await axios.post(`/api/add`, { user: data });
  return response.data;
}
