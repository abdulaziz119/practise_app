import commentsValidationSchema from "../../../common/validation/comments/comments.validation.js";
export async function commentsValidation(request, response, next) {
  try {
    const value = await commentsValidationSchema.validateAsync(request.body);
    console.log(value);
    next();
  } catch (err) {
    response.json({
      status: 404,
      message: err.message,
    });
  }
}
