import { useDispatch } from "react-redux";
import { toast } from "react-toastify";
import {
  deletePaymentMethod,
  fetchPaymentMethod,
} from "../../helper/axios-helper";
import { setPaymentMethods } from "./paymentMethodSlice";

export const getPaymentMethodAction = () => async (dispatch) => {
  const { status, result } = await fetchPaymentMethod();
  console.log(result);

  status === "success" && dispatch(setPaymentMethods(result));
};

export const deletePaymentMethodAction = () => async (dispatch) => {
  const responsePromise = deletePaymentMethod();
  toast.promise(responsePromise, { pending: "Please Wait" });
  const { status, message } = await responsePromise;
  toast[status](message);
  status === "success" && dispatch(getPaymentMethodAction());
};
