import axios from "axios";

const URL = "http://localhost:5000";

export const addUser = async (data) => {
  try {
    await axios.post(`${URL}/add`, data);
  } catch (error) {
    console.log("Getting error while adding user :", error);
  }
};

export const getUser = async () => {
  try {
    const res = await axios.get(`${URL}/get`);
    // console.log(res.data);
    return res.data;
  } catch (error) {
    console.log("Getting error while getting user data :", error);
  }
};
export const setConversation = async (data) => {
  try {
    const res = await axios.post(`${URL}/conversation/add`, data);
    // console.log(res.data);
    return res.data;
  } catch (error) {
    console.log("Getting error while calling setConversation :", error);
  }
};
export const getConversation = async (data) => {
  try {
    const res = await axios.post(`${URL}/conversation/get`, data);
    // console.log(res.data);
    return res.data;
  } catch (error) {
    console.log("Getting error while calling getConversation :", error);
  }
};
export const newMessage = async (data) => {
  try {
    const res = await axios.post(`${URL}/message/add`, data);
    // console.log(res.data);
    return res;
  } catch (error) {
    console.log("Getting error while calling newMWssage :", error);
  }
};
export const getMessage = async (id) => {
  try {
    const res = await axios.get(`${URL}/message/get/${id}`);
    // console.log(res.data);
    return res.data;
  } catch (error) {
    console.log("Getting error while calling getMessage :", error);
  }
};

export const uploadFile = async (data) => {
  try {
    console.log("helloo o o oo o o ", data);
    const res = await axios.post("http://localhost:5000/file/upload", data);
    return res;
  } catch (error) {
    console.log("Getting error while calling uploadFile :", error);
  }
};
