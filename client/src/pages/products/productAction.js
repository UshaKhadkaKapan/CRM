import { toast } from "react-toastify";
import {
  getProducts,
  getSingleProducts,
  postProducts,
  updateProduct,
} from "../../helper/axios-helper";
import { setProduct, setSelectedProduct } from "./productSlice";

export const fetchProductionAction = () => async (dispatch) => {
  const { status, message, products } = await getProducts();

  status === "success" && dispatch(setProduct(products));
};

export const fetchSingleProductionAction = (_id) => async (dispatch) => {
  const { status, message, products } = await getSingleProducts(_id);

  status === "success" && dispatch(setSelectedProduct(products));
};

export const postProductionAction = (data) => async (dispatch) => {
  const responsePromise = postProducts(data);

  toast.promise(responsePromise, { pending: "Please wait" });
  const { status, message } = await responsePromise;
  toast[status](message);

  status === "success" && dispatch(fetchProductionAction());
};

export const updateProductionAction = (data, _id) => async (dispatch) => {
  console.log(data, _id);
  const responsePromise = updateProduct(data);

  toast.promise(responsePromise, { pending: "Please wait" });
  const { status, message } = await responsePromise;
  toast[status](message);

  status === "success" && dispatch(fetchSingleProductionAction(data._id));
};
