import express from "express";
const router = express.Router();

const fakeOrders = [
  {
    _id: 1,
    status: "processing", // processing, shipped, concelled
    buyer: {
      buyerId: "hsuiu23", // _id of the user
      fName: "Usha",
      lName: "Khadka",
      email: "Khadkausha83@gmail.com",
      phone: "9823279128",
    },
    card: [
      {
        productId: "hdjsju39",
        productName: "large Screen monitor",
        salesPrices: "333",
        qty: 2,
        thumbnail: "https://...",
      },
      {
        productId: "hdjsju39",
        productName: "large Screen monitor",
        salesPrices: "333",
        qty: 2,
        thumbnail: "https://...",
      },
    ],
    cardTotal: 888,
    discount: 88,
    discountCode: "78739388",
    totalAmount: 2729,
    paymentInfo: {
      status: "paid", // pending or paid
      method: "Cash on Pickup", // credit card bank tranfer
      paidAmount: 8000,
      transactionId: "828hsnaak",
    },
  },
  {
    _id: 2,
    status: "processing", // processing, shipped, concelled
    buyer: {
      buyerId: "hsuiu23", // _id of the user
      fName: "Usha",
      lName: "Khadka",
      email: "Khadkausha83@gmail.com",
      phone: "9823279128",
    },
    card: [
      {
        productId: "hdjsju39",
        productName: "large Screen monitor",
        salesPrices: "333",
        qty: 2,
        thumbnail: "https://...",
      },
      {
        productId: "hdjsju39",
        productName: "large Screen monitor",
        salesPrices: "333",
        qty: 2,
        thumbnail: "https://...",
      },
    ],
    cardTotal: 888,
    discount: 88,
    discountCode: "78739388",
    totalAmount: 2729,
    paymentInfo: {
      status: "paid", // pending or paid
      method: "Cash on Pickup", // credit card bank tranfer
      paidAmount: 8000,
      transactionId: "828hsnaak",
    },
  },
  {
    _id: 3,
    status: "processing", // processing, shipped, concelled
    buyer: {
      buyerId: "hsuiu23", // _id of the user
      fName: "Usha",
      lName: "Khadka",
      email: "Khadkausha83@gmail.com",
      phone: "9823279128",
    },
    card: [
      {
        productId: "hdjsju39",
        productName: "large Screen monitor",
        salesPrices: "333",
        qty: 2,
        thumbnail: "https://...",
      },
      {
        productId: "hdjsju39",
        productName: "large Screen monitor",
        salesPrices: "333",
        qty: 2,
        thumbnail: "https://...",
      },
    ],
    cardTotal: 888,
    discount: 88,
    discountCode: "78739388",
    totalAmount: 2729,
    paymentInfo: {
      status: "paid", // pending or paid
      method: "Cash on Pickup", // credit card bank tranfer
      paidAmount: 8000,
      transactionId: "828hsnaak",
    },
  },
  {
    _id: 4,
    status: "processing", // processing, shipped, concelled
    buyer: {
      buyerId: "hsuiu23", // _id of the user
      fName: "Usha",
      lName: "Khadka",
      email: "Khadkausha83@gmail.com",
      phone: "9823279128",
    },
    card: [
      {
        productId: "hdjsju39",
        productName: "large Screen monitor",
        salesPrices: "333",
        qty: 2,
        thumbnail: "https://...",
      },
      {
        productId: "hdjsju39",
        productName: "large Screen monitor",
        salesPrices: "333",
        qty: 2,
        thumbnail: "https://...",
      },
    ],
    cardTotal: 888,
    discount: 88,
    discountCode: "78739388",
    totalAmount: 2729,
    paymentInfo: {
      status: "paid", // pending or paid
      method: "Cash on Pickup", // credit card bank tranfer
      paidAmount: 8000,
      transactionId: "828hsnaak",
    },
  },
  {
    _id: 5,
    status: "processing", // processing, shipped, concelled
    buyer: {
      buyerId: "hsuiu23", // _id of the user
      fName: "Usha",
      lName: "Khadka",
      email: "Khadkausha83@gmail.com",
      phone: "9823279128",
    },
    card: [
      {
        productId: "hdjsju39",
        productName: "large Screen monitor",
        salesPrices: "333",
        qty: 2,
        thumbnail: "https://...",
      },
      {
        productId: "hdjsju39",
        productName: "large Screen monitor",
        salesPrices: "333",
        qty: 2,
        thumbnail: "https://...",
      },
    ],
    cardTotal: 888,
    discount: 88,
    discountCode: "78739388",
    totalAmount: 2729,
    paymentInfo: {
      status: "paid", // pending or paid
      method: "Cash on Pickup", // credit card bank tranfer
      paidAmount: 8000,
      transactionId: "828hsnaak",
    },
  },
  {
    _id: 6,
    status: "processing", // processing, shipped, concelled
    buyer: {
      buyerId: "hsuiu23", // _id of the user
      fName: "Usha",
      lName: "Khadka",
      email: "Khadkausha83@gmail.com",
      phone: "9823279128",
    },
    card: [
      {
        productId: "hdjsju39",
        productName: "large Screen monitor",
        salesPrices: "333",
        qty: 2,
        thumbnail: "https://...",
      },
      {
        productId: "hdjsju39",
        productName: "large Screen monitor",
        salesPrices: "333",
        qty: 2,
        thumbnail: "https://...",
      },
    ],
    cardTotal: 888,
    discount: 88,
    discountCode: "78739388",
    totalAmount: 2729,
    paymentInfo: {
      status: "paid", // pending or paid
      method: "Cash on Pickup", // credit card bank tranfer
      paidAmount: 8000,
      transactionId: "828hsnaak",
    },
  },
  {
    _id: 7,
    status: "processing", // processing, shipped, concelled
    buyer: {
      buyerId: "hsuiu23", // _id of the user
      fName: "Usha",
      lName: "Khadka",
      email: "Khadkausha83@gmail.com",
      phone: "9823279128",
    },
    card: [
      {
        productId: "hdjsju39",
        productName: "large Screen monitor",
        salesPrices: "333",
        qty: 2,
        thumbnail: "https://...",
      },
      {
        productId: "hdjsju39",
        productName: "large Screen monitor",
        salesPrices: "333",
        qty: 2,
        thumbnail: "https://...",
      },
    ],
    cardTotal: 888,
    discount: 88,
    discountCode: "78739388",
    totalAmount: 2729,
    paymentInfo: {
      status: "paid", // pending or paid
      method: "Cash on Pickup", // credit card bank tranfer
      paidAmount: 8000,
      transactionId: "828hsnaak",
    },
  },
  {
    _id: 8,
    status: "processing", // processing, shipped, concelled
    buyer: {
      buyerId: "hsuiu23", // _id of the user
      fName: "Usha",
      lName: "Khadka",
      email: "Khadkausha83@gmail.com",
      phone: "9823279128",
    },
    card: [
      {
        productId: "hdjsju39",
        productName: "large Screen monitor",
        salesPrices: "333",
        qty: 2,
        thumbnail: "https://...",
      },
      {
        productId: "hdjsju39",
        productName: "large Screen monitor",
        salesPrices: "333",
        qty: 2,
        thumbnail: "https://...",
      },
    ],
    cardTotal: 888,
    discount: 88,
    discountCode: "78739388",
    totalAmount: 2729,
    paymentInfo: {
      status: "paid", // pending or paid
      method: "Cash on Pickup", // credit card bank tranfer
      paidAmount: 8000,
      transactionId: "828hsnaak",
    },
  },
  {
    _id: 9,
    status: "processing", // processing, shipped, concelled
    buyer: {
      buyerId: "hsuiu23", // _id of the user
      fName: "Usha",
      lName: "Khadka",
      email: "Khadkausha83@gmail.com",
      phone: "9823279128",
    },
    card: [
      {
        productId: "hdjsju39",
        productName: "large Screen monitor",
        salesPrices: "333",
        qty: 2,
        thumbnail: "https://...",
      },
      {
        productId: "hdjsju39",
        productName: "large Screen monitor",
        salesPrices: "333",
        qty: 2,
        thumbnail: "https://...",
      },
    ],
    cardTotal: 888,
    discount: 88,
    discountCode: "78739388",
    totalAmount: 2729,
    paymentInfo: {
      status: "paid", // pending or paid
      method: "Cash on Pickup", // credit card bank tranfer
      paidAmount: 8000,
      transactionId: "828hsnaak",
    },
  },
  {
    _id: 10,
    status: "processing", // processing, shipped, concelled
    buyer: {
      buyerId: "hsuiu23", // _id of the user
      fName: "Usha",
      lName: "Khadka",
      email: "Khadkausha83@gmail.com",
      phone: "9823279128",
    },
    card: [
      {
        productId: "hdjsju39",
        productName: "large Screen monitor",
        salesPrices: "333",
        qty: 2,
        thumbnail: "https://...",
      },
      {
        productId: "hdjsju39",
        productName: "large Screen monitor",
        salesPrices: "333",
        qty: 2,
        thumbnail: "https://...",
      },
    ],
    cardTotal: 888,
    discount: 88,
    discountCode: "78739388",
    totalAmount: 2729,
    paymentInfo: {
      status: "paid", // pending or paid
      method: "Cash on Pickup", // credit card bank tranfer
      paidAmount: 8000,
      transactionId: "828hsnaak",
    },
  },
  {
    _id: 11,
    status: "processing", // processing, shipped, concelled
    buyer: {
      buyerId: "hsuiu23", // _id of the user
      fName: "Usha",
      lName: "Khadka",
      email: "Khadkausha83@gmail.com",
      phone: "9823279128",
    },
    card: [
      {
        productId: "hdjsju39",
        productName: "large Screen monitor",
        salesPrices: "333",
        qty: 2,
        thumbnail: "https://...",
      },
      {
        productId: "hdjsju39",
        productName: "large Screen monitor",
        salesPrices: "333",
        qty: 2,
        thumbnail: "https://...",
      },
    ],
    cardTotal: 888,
    discount: 88,
    discountCode: "78739388",
    totalAmount: 2729,
    paymentInfo: {
      status: "paid", // pending or paid
      method: "Cash on Pickup", // credit card bank tranfer
      paidAmount: 8000,
      transactionId: "828hsnaak",
    },
  },
  {
    _id: 12,
    status: "processing", // processing, shipped, concelled
    buyer: {
      buyerId: "hsuiu23", // _id of the user
      fName: "Usha",
      lName: "Khadka",
      email: "Khadkausha83@gmail.com",
      phone: "9823279128",
    },
    card: [
      {
        productId: "hdjsju39",
        productName: "large Screen monitor",
        salesPrices: "333",
        qty: 2,
        thumbnail: "https://...",
      },
      {
        productId: "hdjsju39",
        productName: "large Screen monitor",
        salesPrices: "333",
        qty: 2,
        thumbnail: "https://...",
      },
    ],
    cardTotal: 888,
    discount: 88,
    discountCode: "78739388",
    totalAmount: 2729,
    paymentInfo: {
      status: "paid", // pending or paid
      method: "Cash on Pickup", // credit card bank tranfer
      paidAmount: 8000,
      transactionId: "828hsnaak",
    },
  },
];
router.get("/:_id?", async (req, res, next) => {
  try {
    const { _id } = req.params;
    const orders = _id
      ? fakeOrders.filter((item) => item?._id == _id)
      : fakeOrders;

    res.json({
      status: "success",
      message: "the order lists",
      orders,
    });
  } catch (error) {
    error.status = 500;
    next(error);
  }
});

export default router;
