import { useDispatch } from "react-redux";
import { fetchPaymentMethod } from "../../helper/axios-helper";
import { setPaymentMethods } from "./paymentMethodSlice";

export const getPaymentMethodAction = () => async (dispatch) => {
  const { status, result } = await fetchPaymentMethod();
  console.log(result);

  result && result.length && dispatch(setPaymentMethods(result));
};
