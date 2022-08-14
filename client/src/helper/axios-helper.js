import axios from "axios";
const rootUrl = "http://localhost:8000/api/v1";
const loginRegisterEP = rootUrl + "/register-login";
const loginEp = loginRegisterEP + "/login";
const catEP = rootUrl + "/category";
const paymentMethodEP = rootUrl + "/paymentMethod";
const adminEP = rootUrl + "/admin";
const productEP = rootUrl + "/product";
const jwtEP = adminEP + "/accessjwt";
const ordersEP = rootUrl + "/orders";
const customerEP = rootUrl + "/customer";
const reviewsEP = rootUrl + "/review";

const apiProcessor = async ({ method, url, data, privateAPI, token }) => {
  try {
    const headers = privateAPI
      ? {
          Authorization: token || sessionStorage.getItem("accessJWT"),
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
    let message = error.message;

    if (error.message && error.message.response === 401) {
      sessionStorage.removeItem("accessJWT");
      localStorage.removeItem("refreshJWT");

      return {
        status: "error",
        message: "Unauthenticated",
      };
    }

    if (error.message && error.message.data) {
      message = error.message.data.message;
    }

    if (message === "jwt expired") {
      const token = await requestNewAccessJWT();

      return apiProcessor({ method, url, data, privateAPI, token });
    }
    return {
      status: "error",
      message,
    };
  }
};

export const postAdminUser = (data) => {
  const option = {
    method: "post",
    url: loginRegisterEP,
    data,
  };
  return apiProcessor(option);
};

export const emailVerificationAdminUser = (data) => {
  const option = {
    method: "patch",
    url: loginRegisterEP,
    data,
  };
  return apiProcessor(option);
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
  const option = {
    method: "get",
    url: paymentMethodEP,
    privateAPI: true,
  };

  return apiProcessor(option);
};
export const postPaymentMethod = (data) => {
  const option = {
    method: "post",
    url: paymentMethodEP,
    privateAPI: true,
    data,
  };
  return apiProcessor(option);
};

export const putPaymentMethod = (data) => {
  const option = {
    method: "put",
    url: paymentMethodEP,
    privateAPI: true,
    data,
  };
  return apiProcessor(option);
};

export const deletePaymentMethod = (_id) => {
  const option = {
    method: "delete",
    url: paymentMethodEP + "/" + _id,
    privateAPI: true,
  };
  return apiProcessor(option);
};

// admin user api
export const updateAdminPassword = (data) => {
  const option = {
    method: "patch",
    url: adminEP,
    data,
    privateAPI: true,
  };
  return apiProcessor(option);
};

export const updateAdminProfile = (data) => {
  const option = {
    method: "put",
    url: adminEP,
    data,
    privateAPI: true,
  };
  return apiProcessor(option);
};

export const getAdminUser = () => {
  const option = {
    method: "get",
    url: adminEP,
    privateAPI: true,
  };
  return apiProcessor(option);
};

// password reset
export const requestOTP = (data) => {
  const option = {
    method: "post",
    url: loginRegisterEP + "/otp-request",
    data,
  };
  return apiProcessor(option);
};

export const resetPassword = (data) => {
  const option = {
    method: "patch",
    url: loginRegisterEP + "/password",
    data,
  };
  return apiProcessor(option);
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

export const getSingleProducts = (_id) => {
  const option = {
    method: "get",
    url: productEP + "/" + _id,
    privateAPI: true,
  };

  return apiProcessor(option);
};

export const postProducts = (data) => {
  const option = {
    method: "post",
    url: productEP,
    privateAPI: true,
    data,
  };

  return apiProcessor(option);
};

export const deleteProduct = (_id) => {
  const option = {
    method: "delete",
    url: productEP + "/" + "_id",
    privateAPI: true,
  };

  return apiProcessor(option);
};

export const updateProduct = (data) => {
  const option = {
    method: "put",
    url: productEP,
    privateAPI: true,
  };

  return apiProcessor(option);
};
// jwt api

export const requestNewAccessJWT = async () => {
  const option = {
    method: "get",
    url: jwtEP,
    privateAPI: true,
    token: localStorage.getItem("refreshJWT"),
  };
  const { accessJWT } = await apiProcessor(option);
  sessionStorage.setItem("accessJWT", accessJWT);
  return accessJWT;
};

// orders
export const getOrders = async (_id) => {
  const option = {
    method: "get",
    url: _id ? ordersEP + "/" + _id : ordersEP,
    privateAPI: true,
  };
  return apiProcessor(option);
};

export const getCustomersDetails = async (_id) => {
  const option = {
    method: "get",
    url: _id ? customerEP + "/" + _id : customerEP,
    privateAPI: true,
  };
  return apiProcessor(option);
};

export const getReviews = async (_id) => {
  const option = {
    method: "get",
    url: _id ? reviewsEP + "/" + _id : reviewsEP,
    privateAPI: true,
  };
  return apiProcessor(option);
};
