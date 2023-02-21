import { Router } from "express";

import {
  userCreateHandler,
  userDeleteHandler,
  userLoginHandler,
  userUpdateHandler,
  userGetHandler,
} from "../../handler/user/user.handler.js";
import {
  userValidation,
  useranchovyValidation,
} from "../../middleware/user/user.validation.js";
const router = Router();

router
  .route("/")
  .post(userValidation, userCreateHandler)
  .delete(userDeleteHandler)
  .put(userUpdateHandler);

router.get("/:_id", userGetHandler);
router.post("/login", useranchovyValidation, userLoginHandler);

export default router;
