import jwt from "jsonwebtoken";

export default {
  sign: (data) => jwt.sign(data, "KEY"),
  verify: (token) => jwt.verify(token, "KEY"),
};
