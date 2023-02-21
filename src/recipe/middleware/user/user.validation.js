import {
  userValidationSchema,
  userAnchovyValidationSchema,
} from "../../../common/validation/user/user.validation.js";

export async function userValidation(request, response, next) {
  try {
    const value = await userValidationSchema.validateAsync(request.body);
    console.log(value);
    next();
  } catch (err) {
    response.json({
      status: 404,
      message: err.message,
    });
  }
}

export async function useranchovyValidation(request, response, next) {
  try {
    const value = await userAnchovyValidationSchema.validateAsync(request.body);
    console.log(value);
    next();
  } catch (err) {
    response.json({
      status: 404,
      message: err.message,
    });
  }
}
