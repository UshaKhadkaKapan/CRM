import axios from "axios";

const rootUrl = "http://localhost:8000/api/v1";
const loginRegisterEP = rootUrl + "/register-login";
const loginEp = loginRegisterEP + "/login";
const catEP = rootUrl + "/category";
const paymentMethodEP = rootUrl + "/paymentMethod";
const adminEP = rootUrl + "/admin";
const productEP = rootUrl + "/product";

const apiProcessor = async ({ method, url, data, privateAPI }) => {
  try {
    const headers = privateAPI
      ? {
          Authorization: sessionStorage.getItem("accessJWT"),
        }
      : null;

    const response = await axios({
      method,
      url,
      data,
      headers,
    });
    return response.data;
  } catch (error) {
    return {
      status: "error",
      message: error.message,
    };
  }
};

export const postAdminUser = (obj) => {
  return apiProcessor("post", loginRegisterEP, obj);
};

export const emailVerificationAdminUser = (obj) => {
  return apiProcessor("patch", loginRegisterEP, obj);
};

export const loginAdminUser = (data) => {
  const option = {
    method: "post",
    url: loginEp,
    data,
  };
  return apiProcessor(option);
};

export const fetchCategory = (_id) => {
  const url = _id ? catEP + "/" + _id : catEP;

  const option = {
    method: "get",
    url,
    privateAPI: true,
  };
  return apiProcessor(option);
};

export const postCategory = (data) => {
  const option = {
    method: "post",
    url: catEP,
    data,
    privateAPI: true,
  };
  return apiProcessor(option);
};

export const deleteCategory = (data) => {
  const option = {
    method: "delete",
    url: catEP,
    data,
    privateAPI: true,
  };
  return apiProcessor(option);
};

export const updateCategory = (data) => {
  const option = {
    method: "put",
    url: catEP,
    data,
    privateAPI: true,
  };
  return apiProcessor(option);
};

// api for paymentMethod

export const fetchPaymentMethod = () => {
  return apiProcessor("get", paymentMethodEP);
};
export const postPaymentMethod = (obj) => {
  return apiProcessor("post", paymentMethodEP, obj);
};

export const putPaymentMethod = (obj) => {
  return apiProcessor("put", paymentMethodEP, obj);
};

export const deletePaymentMethod = (_id) => {
  return apiProcessor("delete", paymentMethodEP + "/" + _id);
};

// admin user api
export const updateAdminPassword = (obj) => {
  console.log(obj);
  return apiProcessor("patch", adminEP, obj);
};

export const updateAdminProfile = (obj) => {
  return apiProcessor("put", adminEP, obj);
};

// password reset
export const requestOTP = (obj) => {
  return apiProcessor("post", loginRegisterEP + "/otp-request", obj);
};

export const resetPassword = (obj) => {
  return apiProcessor("patch", loginRegisterEP + "/password", obj);
};

// product call api

export const getProducts = () => {
  const option = {
    method: "get",
    url: productEP,
    privateAPI: true,
  };

  return apiProcessor(option);
};
