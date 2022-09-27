import axios from "axios";

const rootUrl = "http://localhost:5000/api/v2";
const registerEP = rootUrl + "/user-register";

const apiProcessor = async (method, url, data) => {
  try {
    const response = await axios({
      method,
      url,
      data,
    });

    return response.data;
  } catch (error) {
    return {
      status: "error",
      message: error.message,
    };
  }
};

export const postClientDetails = (data) => {
  return apiProcessor("post", registerEP, data);
};

export const emailVerificationClientUser = (data) => {
  return apiProcessor("patch", registerEP, data);
};
