import { authUserByQueryService } from "../../../common/service/user/user.service.js";
import jwt from "../../../common/utils/jwt.js";
export default async function authToken(request, response, next) {
  try {
    let userId = jwt.verify(request.headers.token);
    let user = await authUserByQueryService({ _id: userId });
    if (!user) {
      throw new Error("user not found");
    }
    request.user = user;
    next();
  } catch (error) {
    return response.json({
      status: 401,
      message: error.message,
    });
  }
}
