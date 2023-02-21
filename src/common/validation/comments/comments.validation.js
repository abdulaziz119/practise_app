import Joi from "joi";

export default Joi.object({
  add_new_recipe_id: Joi.string().required(),
  userId: Joi.string().required(),
  comment: Joi.string().trim().min(1).max(200000).required(),
});
