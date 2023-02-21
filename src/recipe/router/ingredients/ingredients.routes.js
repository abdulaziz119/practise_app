import { Router } from "express";
import {
  ingredientsCreateHandler,
  ingredientsDeleteHandler,
  ingredentsUpdateHandler,
} from "../../handler/ingredients/ingredients.handler.js";
import { ingredientsValidation } from "../../middleware/ingredients/ingredients.validation.js";
const router = Router();

router
  .route("/")
  .post(ingredientsValidation, ingredientsCreateHandler)
  .delete(ingredientsDeleteHandler)
  .put(ingredentsUpdateHandler);
export default router;
