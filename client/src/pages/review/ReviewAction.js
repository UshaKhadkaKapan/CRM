import { getReviews } from "../../helper/axios-helper";
import { setReviews } from "./ReviewSlice";

export const getReviewAction = () => async (dispatch) => {
  const { status, reviews } = await getReviews();

  status === "success" && dispatch(setReviews(reviews));
};
