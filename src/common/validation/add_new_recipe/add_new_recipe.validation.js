import Joi from "joi";

export default Joi.object({
  meal_name: Joi.string().trim().min(2).max(30).required(),
  photo: Joi.string().min(4).required(),
  description: Joi.string().min(1).max(150000),
});
