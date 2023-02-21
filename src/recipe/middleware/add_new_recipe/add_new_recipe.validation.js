import add_new_recipeValidationSchema from "../../../common/validation/add_new_recipe/add_new_recipe.validation.js";
export async function add_new_recipeValidation(request, response, next) {
  try {
    const value = await add_new_recipeValidationSchema.validateAsync(
      request.body
    );
    console.log(value);
    next();
  } catch (err) {
    response.json({
      status: 404,
      message: err.message,
    });
  }
}
