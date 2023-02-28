import {
  createCommentsService,
  updateCommentsByQueryService,
  deleteCommentsByQueryService,
} from "../../../common/service/comments/comments.service.js";
import { getIngredientsUserService } from "../../../common/service/user/user.service.js";
export async function commentsCreateHandler(request, response) {
  try {
    const data = request.body;
    if (data.userId) {
      await getIngredientsUserService(data.userId);
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
