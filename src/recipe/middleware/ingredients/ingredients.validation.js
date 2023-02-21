import ingredientsValidationSchema from "../../../common/validation/ingredients/ingredients.validation.js";

export async function ingredientsValidation(request, response, next) {
  try {
    const value = await ingredientsValidationSchema.validateAsync(request.body);
    console.log(value);
    next();
  } catch (err) {
    response.json({
      status: 404,
      message: err.message,
    });
  }
}
