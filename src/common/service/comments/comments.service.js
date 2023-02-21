import commentsModel from "../../db/model/comments/comments.model.js";
import { Types } from "mongoose";
export async function createCommentsService(data) {
  try {
    data.date = Date();
    const create = await commentsModel.create(data);
    return create;
  } catch (error) {
    console.log(error.message);
    throw error;
  }
}

export async function deleteCommentsByQueryService(query) {
  try {
    query._id = new Types.ObjectId(query._id);
    const deleted = await commentsModel.deleteOne({ _id: query._id });
    return deleted;
  } catch (error) {
    console.log(error.message);
    throw error;
  }
}

export async function updateCommentsByQueryService(query) {
  try {
    query._id = new Types.ObjectId(query._id);
    const updated = await commentsModel.updateOne({ _id: query._id }, query);
    if (query._id === updated._id) {
      return updated;
    }
  } catch (error) {
    console.log(error.message);
    throw error;
  }
}
