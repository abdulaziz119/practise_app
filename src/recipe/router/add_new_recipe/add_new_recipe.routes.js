import { Router } from "express";
import {
  add_new_recipeCreateHandler,
  add_new_recipeDeleteHandler,
  add_new_recipeGetHandler,
  add_new_recipeUpdateHandler,
  get_all_the_recipesCreateHandler,
} from "../../handler/add_new_recipe/add_new_recipe.handler.js";
import { add_new_recipeValidation } from "../../middleware/add_new_recipe/add_new_recipe.validation.js";
const router = Router();

router
  .route("/")
  .post(add_new_recipeValidation, add_new_recipeCreateHandler)
  .delete(add_new_recipeDeleteHandler)
  .put(add_new_recipeUpdateHandler);
router.route("/all").post(get_all_the_recipesCreateHandler);
router.route("/get").post(add_new_recipeGetHandler);
export default router;
