import jwt from "../../../common/utils/jwt.js";

import {
  createUserService,
  deleteUserByQueryService,
  loginUserByQueryService,
  updateUserByQueryService,
  getUserService,
} from "../../../common/service/user/user.service.js";

export async function userCreateHandler(request, response) {
  try {
    const data = request.body;
    const newUser = await createUserService(data);
    return response.json({
      status: 200,
      message: "Ok",
      token: jwt.sign({ _id: newUser._id }),
      data: newUser,
    });
  } catch (error) {
    response.json({
      status: 400,
      message: error.message,
    });
  }
}

export async function userGetHandler(request, response) {
  try {
    const data = request.params._id;
    if (data) {
      let res = await getUserService(data);
      return response.json({
        status: 200,
        message: "Ok",
        data: res,
      });
    }
  } catch (error) {
    response.json({
      status: 400,
      message: error.message,
    });
  }
}

export async function userDeleteHandler(request, response) {
  try {
    const data = request.body;
    await deleteUserByQueryService(data);
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

export async function userUpdateHandler(request, response) {
  try {
    const data = request.body;
    if (data.name) {
      if (typeof data.name !== "string" || !data.name.trim()) {
        throw new Error("data.name input is invalid! Try again.");
      } else if (data.name.length < 3 || data.name.length > 21) {
        throw new Error("name length must be between 3 and 21 letters");
      }
    }
    if (data.photo) {
      if (typeof data.email !== "string" || !data.email.trim()) {
        throw new Error("data.email input is invalid! Try again.");
      } else if (data.email.length < 3 || data.email.length > 30) {
        throw new Error("The email of the picture is wrong");
      }
    }
    if (data.password) {
      if (typeof data.password !== "string" || !data.password.trim()) {
        throw new Error("password input is invalid! Try again.");
      } else if (data.password.length < 3) {
        throw new Error("password should not be more than 3");
      }
    }

    await updateUserByQueryService(data);
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

export async function userLoginHandler(request, response) {
  try {
    const data = request.body;
    const query = {
      email: data.email,
      password: data.password,
    };
    const user = await loginUserByQueryService(query);
    return response.json({
      status: 200,
      message: "ok",
      token: jwt.sign({ _id: user._id }),
    });
  } catch (error) {
    response.json({
      status: 400,
      message: error.message,
    });
  }
}
