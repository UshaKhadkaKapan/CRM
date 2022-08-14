import { getCustomersDetails } from "../../helper/axios-helper";
import { setCustomers } from "./CustomerSlice";

export const getCustomersAction = (_id) => async (dispatch) => {
  const { status, orders } = await getCustomersDetails(_id);

  status === "success" && dispatch(setCustomers(orders));
};
