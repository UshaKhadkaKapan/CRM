import { loginAdminUser } from "../../helper/axios-helper";
import { setUser } from "./loginRegisterSlice";
import { toast } from "react-toastify";

export const loginAction = (obj) => async (dispatch) => {
  // show toastify spinner
  // call axios helper

  const resultPromise = loginAdminUser(obj);

  toast.promise(resultPromise, {
    pending: "Please wait......",
  });

  const { status, message, result } = await resultPromise;
  toast[status](message);
  console.log(result);
  // show toastify message , success or error
  // if response comes succes them call setUser and pass the user data
  status === "success" && dispatch(setUser(result));
};
