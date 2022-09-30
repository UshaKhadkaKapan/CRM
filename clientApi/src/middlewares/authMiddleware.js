import { verifyAccessToken } from "../helper/jwtHelper.js";
import { getOneClient } from "../models/clientUser/clientUserModel.js";
import { getSession } from "../models/session/SessionModal.js";

export const adminAuth = async (req, res, next) => {
  try {
    const { authorization } = req.headers;

    if (authorization) {
      //is token valid
      const decode = verifyAccessToken(authorization);

      if (decode === "jwt expired") {
        return res.status(403).json({
          status: "error",
          message: "jwt expired",
        });
      }

      if (decode?.email) {
        // is exist in the session table
        const existInDB = await getSession({
          type: "jwt",
          token: authorization,
        });
        // get the user information and do next
        if (existInDB?._id) {
          const admin = await getOneClient({
            email: decode.email,
          });
          if (admin?._id) {
            req.adminInfo = admin;
            return next();
          }
        }
      }
    }
    // otherwise return 401 status
    res.status(401).json({
      status: "error",
      message: "Unauthorized",
    });
  } catch (error) {
    next(error);
  }
};
