import add_new_recipeModel from "../../db/model/add_new_recipe/add_new_recipe.model.js";
import { Types } from "mongoose";
export async function createAdd_new_recipeService(data) {
  try {
    data.date = Date();
    const create = await add_new_recipeModel.create(data);
    return create;
  } catch (error) {
    console.log(error.message);
    throw error;
  }
}

export async function getAdd_new_recipeByQueryService(data) {
  try {
    const $match = {
      $match: {
        _id: new Types.ObjectId(data._id),
      },
    };

    const $lookupRecipe = {
      $lookup: {
        from: "ingredients",
        localField: "_id",
        foreignField: "add_new_recipe_id",
        as: "ingredients",
      },
    };
    const $lookupComments = {
      $lookup: {
        from: "comments",
        localField: "_id",
        foreignField: "add_new_recipe_id",
        pipeline: [
          {
            $sort: {
              date: -1,
            },
          },
        ],
        as: "comments",
      },
    };
    const $sort = {
      $sort: {
        date: -1,
      },
    };

    const pipeline = [$match, $lookupRecipe, $lookupComments, $sort];
    const get = await add_new_recipeModel.aggregate(pipeline);
    return get;
  } catch (error) {
    console.log(error.message);
    throw error;
  }
}

export async function deleteAdd_new_recipeByQueryService(query) {
  try {
    query._id = new Types.ObjectId(query._id);
    const deleted = await add_new_recipeModel.deleteOne({ _id: query._id });
    return deleted;
  } catch (error) {
    console.log(error.message);
    throw error;
  }
}

export async function updateAdd_new_recipeByQueryService(query) {
  try {
    if (query._id) {
      if (typeof query._id === "string") {
        query._id = new Types.ObjectId(query._id);
      }
    } else {
      throw new Error("_id must be provided!");
    }
    console.log(query);
    const updated = await add_new_recipeModel.updateOne(
      { _id: query._id },
      query
    );
    return updated;
  } catch (error) {
    console.log(error.message);
    throw error;
  }
}

export async function get_all_the_recipesByQueryService(query) {
  try {
    console.log(query);
    const get = await add_new_recipeModel.find(query);
    return get;
  } catch (error) {
    console.log(error.message);
    throw error;
  }
}
