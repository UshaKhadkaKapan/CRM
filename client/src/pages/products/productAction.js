import { getProducts } from "../../helper/axios-helper";
import { setProduct } from "./productSlice";

export const fetchProductionAction = () => async (dispatch) => {
  const { status, message, products } = await getProducts();

  status === "success" && dispatch(setProduct(products));
};
