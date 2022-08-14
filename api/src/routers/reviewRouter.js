import express from "express";
const router = express.Router();

const fakeReview = [
  {
    _id: "jsuwuw",
    status: "active",
    reviews: "That is awesome",
    productId: "8739",
    productName: "Laptop",
    rating: 5,
    reviewedBy: "Usha",
    reviewedById: "8237929",
  },
  {
    _id: "84893",
    status: "active",
    reviews: "That is awesome",
    productId: "8739",
    productName: "Laptop",
    rating: 5,
    reviewedBy: "Usha",
    reviewedById: "8237929",
  },
  {
    _id: "jsuwuw",
    status: "active",
    reviews: "That is awesome",
    productId: "8739",
    productName: "Laptop",
    rating: 5,
    reviewedBy: "Usha",
    reviewedById: "8237929",
  },
];
router.get("/:_id?", (req, res, next) => {
  try {
    const { _id } = req.params;
    const reviews = _id
      ? fakeReview.filter((item) => item?._id == _id)
      : fakeReview;

    res.json({
      status: "success",
      message: "the review lists",
      reviews,
    });
  } catch (error) {
    next(error);
  }
});

export default router;
