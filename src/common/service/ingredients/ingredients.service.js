import ingredientsModel from "../../db/model/ingredients/ingredients.model.js";
import { Types } from "mongoose";
export async function creatIngredientsService(data) {
  try {
    data.add_new_recipe_id = new Types.ObjectId(data.add_new_recipe_id);
    const get = await ingredientsModel.findOne({
      add_new_recipe_id: data.add_new_recipe_id,
      sequence: data.sequence,
    });
    if (get) {
      throw Error("Such a procedure already exists");
    }
    const create = await ingredientsModel.create(data);
    return create;
  } catch (error) {
    console.log(error.message);
    throw error;
  }
}

export async function deleteIngredientsByQueryService(query = {}) {
  try {
    query.add_new_recipe_id = new Types.ObjectId(query.add_new_recipe_id);
    const deleted = await ingredientsModel.deleteMany(query, { __v: 0 });
    return deleted;
  } catch (error) {
    console.log(error.message);
    throw error;
  }
}
export async function deleteIngredientsIDQueryService(query = {}) {
  try {
    const deleted = await ingredientsModel.deleteMany(query, { __v: 0 });
    return deleted;
  } catch (error) {
    console.log(error.message);
    throw error;
  }
}

export async function updateIngredientsByQueryService(query) {
  try {
    if (query._id) {
      if (typeof query._id === "string") {
        query._id = new Types.ObjectId(query._id);
      }
    } else {
      throw new Error("_id must be provided!");
    }

    console.log(query);
    const updated = await ingredientsModel.updateOne({ _id: query._id }, query);
    if (query._id === updated._id) {
      return updated;
    }
  } catch (error) {
    console.log(error.message);
    throw error;
  }
}
