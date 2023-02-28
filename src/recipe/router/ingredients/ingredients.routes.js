import { Router } from "express";
import {
  ingredientsCreateHandler,
  ingredientsDeleteHandler,
  ingredentsUpdateHandler,
  ingredients_idDeleteHandler,
} from "../../handler/ingredients/ingredients.handler.js";
import { ingredientsValidation } from "../../middleware/ingredients/ingredients.validation.js";
const router = Router();

router
  .route("/")
  .post(ingredientsValidation, ingredientsCreateHandler)
  .delete(ingredientsDeleteHandler)
  .put(ingredentsUpdateHandler);
router.delete("/sorting", ingredients_idDeleteHandler);
export default router;
