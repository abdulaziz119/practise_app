import Joi from "joi";
export const userValidationSchema = Joi.object({
  name: Joi.string().trim().min(3).max(30).required(),
  email: Joi.string().trim().min(5).max(40).email().required(),
  password: Joi.string().pattern(new RegExp("^[a-zA-Z0-9]{3,30}$")),
});

export const userAnchovyValidationSchema = Joi.object({
  email: Joi.string().trim().min(5).max(40).email().required(),
  password: Joi.string().pattern(new RegExp("^[a-zA-Z0-9]{3,30}$")),
});
