import express from "express";

const router = express.Router();

const fakeCustomers = [
  {
    fName: "Usha",
    lName: "Khadka",
    email: "Khadkausha83@gmail.com",
    phone: "24534",
  },
  {
    fName: "Usha",
    lName: "Khadka",
    email: "Khadkausha83@gmail.com",
    phone: "24534",
  },
];

router.get("/:_id?", (req, res, next) => {
  try {
    const { _id } = req.params;
    const orders = _id
      ? fakeCustomers.filter((item) => item?._id == _id)
      : fakeCustomers;

    res.json({
      status: "success",
      message: "the order lists",
      orders,
    });
  } catch (error) {
    next(error);
  }
});

export default router;
