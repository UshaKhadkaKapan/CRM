import axios from "axios";

const rootUrl = "http://localhost:8000/api/v1";
const loginRegisterEP = rootUrl + "/register-login";
const loginEp = loginRegisterEP + "/login";
const catEP = rootUrl + "/category";
const paymentMethodEP = rootUrl + "/paymentMethod";
const adminEP = rootUrl + "/admin";

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

export const postAdminUser = (obj) => {
  return apiProcessor("post", loginRegisterEP, obj);
};

export const emailVerificationAdminUser = (obj) => {
  return apiProcessor("patch", loginRegisterEP, obj);
};

export const loginAdminUser = (obj) => {
  return apiProcessor("post", loginEp, obj);
};

export const fetchCategory = (_id) => {
  const url = _id ? catEP + "/" + _id : catEP;
  return apiProcessor("get", url);
};

export const postCategory = (obj) => {
  return apiProcessor("post", catEP, obj);
};

export const deleteCategory = (obj) => {
  return apiProcessor("delete", catEP, obj);
};

export const updateCategory = (obj) => {
  return apiProcessor("put", catEP, obj);
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
