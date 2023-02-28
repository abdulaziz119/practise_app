import userModel from "../../db/model/user/user.model.js";
import { Types } from "mongoose";
import sha256 from "sha256";

export async function createUserService(data) {
  try {
    data.password = sha256(data.password);
    const email = data.email;
    let user = await userModel.findOne({ email: email });
    if (!user) {
      user = await userModel.create(data);
      return user;
    } else {
      throw new Error("This user already exists");
    }
  } catch (error) {
    console.log(error.message);
    throw error;
  }
}

export async function getUserService(id) {
  try {
    id = new Types.ObjectId(id);
    const user = await userModel.findById(id);
    return user;
  } catch (error) {
    console.log(error.message);
    throw error;
  }
}

export async function deleteUserByQueryService(query) {
  try {
    query._id = new Types.ObjectId(query._id);
    const deleted = await userModel.deleteOne({ _id: query._id });
    return deleted;
  } catch (error) {
    console.log(error.message);
    throw error;
  }
}

export async function updateUserByQueryService(query) {
  try {
    query._id = new Types.ObjectId(query._id);
    if (query.email) {
      let user = await userModel.findOne({ email: query.email });
      if (user) {
        throw new Error("This user already exists, the change did not occur");
      } else {
        const updated = await userModel.updateOne({ _id: query._id }, query);
        return updated;
      }
    }
    const updated = await userModel.updateOne({ _id: query._id }, query);
    return updated;
  } catch (error) {
    console.log(error.message);
    throw error;
  }
}

export async function authUserByQueryService(query = {}) {
  try {
    const get = await userModel.findOne(query, { __v: 0 });
    return get;
  } catch (error) {
    console.log(error.message);
    throw error;
  }
}

export async function loginUserByQueryService(query = {}) {
  try {
    query.password = sha256(query.password);
    const get = await userModel.findOne(query, { __v: 0 });
    if (query.email === get.email && query.password === get.password) {
      return get;
    }
  } catch (error) {
    console.log(error.message);
    throw error;
  }
}

export async function getIngredientsUserService(query) {
  try {
    query = new Types.ObjectId(query);
    const user = await userModel.findOne({ _id: query });
    return user;
  } catch (error) {
    console.log(error.message);
    throw error;
  }
}
