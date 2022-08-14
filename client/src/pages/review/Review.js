import React, { useEffect, useState } from "react";
import { Table } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import AdminLayout from "../../layout/AdminLayout";
import { getReviewAction } from "./ReviewAction";

const Review = () => {
  const dispatch = useDispatch();
  const [showReviews, setShowReview] = useState([]);

  const { reviews } = useSelector((state) => state.reviews);

  useEffect(() => {
    dispatch(getReviewAction());
  }, [dispatch]);
  return (
    <AdminLayout>
      <h4>Review management</h4>
      <Table striped hover bordered>
        <thead>
          <tr>
            <th>#</th>
            <th>Product Name</th>
            <th>Product ID</th>
            <th>Reviews</th>
            <th>Rating</th>
          </tr>
        </thead>
        <tbody>
          {reviews.map((item, i) => (
            <tr key={i}>
              <td>{i + 1}</td>
              <td>{item.productName}</td>
              <td>{item.productId}</td>
              <td>{item.reviews}</td>
              <td>{item.rating}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </AdminLayout>
  );
};

export default Review;
