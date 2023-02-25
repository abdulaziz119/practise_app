import {
  createAdd_new_recipeService,
  getAdd_new_recipeByQueryService,
  updateAdd_new_recipeByQueryService,
  get_all_the_recipesByQueryService,
  deleteAdd_new_recipeByQueryService,
} from "../../../common/service/add_new_recipe/add_new_recipe.service.js";
export async function add_new_recipeCreateHandler(request, response) {
  try {
    const data = request.body;
    const user = request.user;
    data.userId = user._id;
    const newUser = await createAdd_new_recipeService(data);
    return response.json({
      status: 200,
      message: "Ok",
      data: newUser,
    });
  } catch (error) {
    response.json({
      status: 400,
      message: error.message,
    });
  }
}

export async function add_new_recipeGetHandler(request, response) {
  try {
    const data = request.body;
    const res = await getAdd_new_recipeByQueryService(data);
    return response.json({
      status: 200,
      message: "ok",
      data: res,
    });
  } catch (error) {
    response.json({
      status: 400,
      message: error.message,
    });
  }
}

export async function add_new_recipeDeleteHandler(request, response) {
  try {
    const data = request.body;
    await deleteAdd_new_recipeByQueryService(data);
    return response.json({
      status: 200,
      message: "ok",
      data: data._id,
    });
  } catch (error) {
    response.json({
      status: 400,
      message: error.message,
    });
  }
}

export async function add_new_recipeUpdateHandler(request, response) {
  try {
    const data = request.body;
    if (data.meal_name) {
      if (typeof data.meal_name !== "string" || !data.meal_name.trim()) {
        throw new Error("data.meal_name input is invalid! Try again.");
      } else if (data.meal_name.length < 3 || data.meal_name.length > 21) {
        throw new Error("meal_name length must be between 3 and 21 letters");
      }
    }
    if (data.photo) {
      if (typeof data.photo !== "string" || !data.photo.trim()) {
        throw new Error("data.photo input is invalid! Try again.");
      } else if (data.photo.length < 3 || data.photo.length > 20) {
        throw new Error("The name of the picture is wrong");
      }
    }
    if (data.description) {
      if (typeof data.description !== "string" || !data.description.trim()) {
        throw new Error("description input is invalid! Try again.");
      } else if (data.description.length < 3) {
        throw new Error("description should not be more than 3");
      }
    }
    console.log(data);
    await updateAdd_new_recipeByQueryService(data);
    return response.json({
      status: 200,
      message: "OK",
      data: data._id,
    });
  } catch (error) {
    response.json({
      status: 400,
      message: error.message,
    });
  }
}

export async function get_all_the_recipesCreateHandler(request, response) {
  try {
    const data = request.body;
    let get = await get_all_the_recipesByQueryService(data);
    return response.json({
      status: 200,
      message: "Ok",
      data: get,
    });
  } catch (error) {
    response.json({
      status: 400,
      message: error.message,
    });
  }
}
