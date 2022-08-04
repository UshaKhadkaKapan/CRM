export const adminAuth = (req, res, next) => {
  try {
    const authorized = true;
    authorized
      ? next()
      : res.status(403).json({
          status: "error",
          message: "Unauthorized",
        });
  } catch (error) {
    next(error);
  }
};
