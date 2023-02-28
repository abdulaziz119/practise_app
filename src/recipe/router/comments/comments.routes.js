import { Router } from "express";
import {
  commentsCreateHandler,
  commentsUpdateHandler,
  commentsDeleteHandler,
  commentsRecipeDeleteHandler,
} from "../../handler/comments/comments.handler.js";
import { commentsValidation } from "../../middleware/comments/comments.validation.js";
const router = Router();

router
  .route("/")
  .post(commentsValidation, commentsCreateHandler)
  .delete(commentsDeleteHandler)
  .put(commentsUpdateHandler);
router.delete("/recipe", commentsRecipeDeleteHandler);
export default router;
