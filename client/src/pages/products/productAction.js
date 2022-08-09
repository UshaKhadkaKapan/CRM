import { toast } from "react-toastify";
import { getProducts, postProducts } from "../../helper/axios-helper";
import { setProduct } from "./productSlice";

export const fetchProductionAction = () => async (dispatch) => {
  const { status, message, products } = await getProducts();

  status === "success" && dispatch(setProduct(products));
};

export const postProductionAction = () => async (dispatch) => {
  const responsePromise = postProducts();

  toast.promise(responsePromise, { pending: "Please wait" });
  const { status, message } = await responsePromise;
  toast[status](message);

  status === "success" && dispatch(fetchProductionAction());
};
