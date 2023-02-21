import Joi from "joi";

export default Joi.object({
  add_new_recipe_id: Joi.string().required(),
  name: Joi.string().trim().min(1).max(15).required(),
  amount: Joi.number().min(1).max(1000).required(),
  amount_type: Joi.string()
    .trim()
    .pattern(/kg|gr|liter|ta/, "type")
    .required(),
  sequence: Joi.number().min(0).max(20).required(),
});
