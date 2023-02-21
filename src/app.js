import express from "express";
import fileUpload from "express-fileupload";
import path from "path";
import { ENV } from "./common/config.js";
import ConnectDb from "./common/db/connect.db.js";

const app = new express();
//router
import user_router from "./recipe/router/user/user.routes.js";
import authToken from "./recipe/middleware/authToken/authToken.js";
import photoRouter from "./recipe/router/photo/photo.routes.js";
import add_new_recipeRouter from "./recipe/router/add_new_recipe/add_new_recipe.routes.js";
import eingredientsRouter from "./recipe/router/ingredients/ingredients.routes.js";
import commentsRouter from "./recipe/router/comments/comments.routes.js";
app.use(express.json());
app.use(fileUpload());

app.use("/user", user_router);
app.use(authToken);
app.use(
  "/image",
  express.static(path.resolve(process.cwd(), "uploads", "images"))
);
app.use("/files", photoRouter);
app.use("/recipe", add_new_recipeRouter);
app.use("/ingredients", eingredientsRouter);
app.use("/comments", commentsRouter);

async function start() {
  console.log("server is running");
  ConnectDb();
}

app.listen(ENV.PORT, start());
