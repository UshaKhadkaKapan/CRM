import { getAdminUser, loginAdminUser } from "../../helper/axios-helper";
import { setUser } from "./loginRegisterSlice";
import { toast } from "react-toastify";

export const loginAction = (obj) => async (dispatch) => {
  // show toastify spinner
  // call axios helper

  const resultPromise = loginAdminUser(obj);

  toast.promise(resultPromise, {
    pending: "Please wait......",
  });

  const { status, message, result, accessJWT, refreshJWT } =
    await resultPromise;
  toast[status](message);
  console.log(result);
  // show toastify message , success or error
  // if response comes succes them call setUser and pass the user data
  if (status === "success") {
    dispatch(setUser(result));
    sessionStorage.setItem("accessJWT", accessJWT);
    localStorage.setItem("refreshJWT", refreshJWT);
  }
};

export const adminLogout = () => (dispatch) => {
  sessionStorage.removeItem("accessJWT");
  localStorage.removeItem("refreshJWT");
  dispatch(setUser({}));
};

export const fetchUser = () => async (dispatch) => {
  const result = await getAdminUser();
  console.log(result);
};

export const autoAdminLogin = () => (dispatch) => {
  const accessJWT = sessionStorage.getItem("accessJWT");
  const refreshJWT = sessionStorage.getItem("refreshJWT");

  // if accessJWT is exist, fetch user and mount to the redux store
  // else
  // if refreshJWT is exist, fetch new accessJWT and mount to the redux store
  dispatch(fetchUser());
};
