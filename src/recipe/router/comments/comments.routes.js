import { Router } from "express";
import {
  commentsCreateHandler,
  commentsUpdateHandler,
  commentsDeleteHandler,
} from "../../handler/comments/comments.handler.js";
import { commentsValidation } from "../../middleware/comments/comments.validation.js";
const router = Router();

router
  .route("/")
  .post(commentsValidation, commentsCreateHandler)
  .delete(commentsDeleteHandler)
  .put(commentsUpdateHandler);
export default router;
