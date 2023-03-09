import {
  createCommentsService,
  updateCommentsByQueryService,
  deleteCommentsByQueryService,
  deleteCommentsRecipeByQueryService,
} from "../../../common/service/comments/comments.service.js";
import { getCommentsrecipesByQueryService } from "../../../common/service/add_new_recipe/add_new_recipe.service.js";
import { getIngredientsUserService } from "../../../common/service/user/user.service.js";

export async function commentsCreateHandler(request, response) {
  try {
    const data = request.body;
    const pos = await getIngredientsUserService(data.userId);
    const get = await getCommentsrecipesByQueryService(data.add_new_recipe_id);
    if (pos._id === get._id && get._id === pos._id) {
      throw new Error("IDs are the same, please enter from another place");
    }
    const newUser = await createCommentsService(data);
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

export async function commentsDeleteHandler(request, response) {
  try {
    const data = request.body;
    await deleteCommentsByQueryService(data);
    return response.json({
      status: 200,
      message: "ok",
      data: data,
    });
  } catch (error) {
    response.json({
      status: 400,
      message: error.message,
    });
  }
}

export async function commentsUpdateHandler(request, response) {
  try {
    const data = request.body;
    console.log(data);
    await updateCommentsByQueryService(data);
    return response.json({
      status: 200,
      message: "OK",
      data: data,
    });
  } catch (error) {
    response.json({
      status: 400,
      message: error.message,
    });
  }
}

export async function commentsRecipeDeleteHandler(request, response) {
  try {
    const data = request.body;
    const { add_new_recipe_id } = data;
    await deleteCommentsRecipeByQueryService({
      add_new_recipe_id,
    });
    return response.json({
      status: 200,
      message: "ok",
      data: data,
    });
  } catch (error) {
    response.json({
      status: 400,
      message: error.message,
    });
  }
}
