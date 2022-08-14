import { getOrders } from "../../helper/axios-helper";
import { setOrders } from "./OrderSlice";

export const getOrderAction = (_id) => async (dispatch) => {
  const { status, orders } = await getOrders(_id);

  status === "success" && dispatch(setOrders(orders));
};
