import { toast } from "react-toastify";
import {
  deletePaymentMethod,
  fetchPaymentMethod,
  postPaymentMethod,
} from "../../helper/axios-helper";
import { setPaymentMethods } from "./paymentMethodSlice";

export const getPaymentMethodAction = () => async (dispatch) => {
  const { status, result } = await fetchPaymentMethod();
  console.log(result);

  status === "success" && dispatch(setPaymentMethods(result));
};

export const deletePaymentMethodAction = (_id) => async (dispatch) => {
  const responsePromise = deletePaymentMethod(_id);
  console.log(responsePromise);
  toast.promise(responsePromise, { pending: "Please Wait" });
  const { status, message } = await responsePromise;
  toast[status](message);
  status === "success" && dispatch(getPaymentMethodAction());
};

export const postPaymentMethodAction = (obj) => async (dispatch) => {
  const responsePromise = postPaymentMethod(obj);

  toast.promise(responsePromise, { pending: "Please Wait" });
  const { status, message } = await responsePromise;
  toast[status](message);
  status === "success" && dispatch(getPaymentMethodAction());
};
