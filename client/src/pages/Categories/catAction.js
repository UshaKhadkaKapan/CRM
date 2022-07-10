import { toast } from "react-toastify";
import {
  deleteCategory,
  fetchCategory,
  postCategory,
  updateCategory,
} from "../../helper/axios-helper";
import { setCategories } from "./catSlice";

export const getCategoryAction = (_id) => async (dispatch) => {
  const { status, result } = await fetchCategory(_id);

  status === "success" && dispatch(setCategories(result));
};

export const postCategoryAction = (obj) => async (dispatch) => {
  const responsePromise = postCategory(obj);
  toast.promise(responsePromise, { pending: "Please wait..." });
  const { status, result } = await responsePromise;

  toast[status](result);

  status === "success" && dispatch(getCategoryAction());
};

export const deleteCategoryAction = (obj) => async (dispatch) => {
  const responsePromise = deleteCategory(obj);
  toast.promise(responsePromise, { pending: "Please wait..." });
  const { status, result } = await responsePromise;

  toast[status](result);

  status === "success" && dispatch(getCategoryAction());
};

export const updateCategoryAction = (obj) => async (dispatch) => {
  const responsePromise = updateCategory(obj);
  toast.promise(responsePromise, { pending: "Please wait..." });
  const { status, result } = await responsePromise;

  toast[status](result);

  status === "success" && dispatch(getCategoryAction());
};
