import {
  creatIngredientsService,
  updateIngredientsByQueryService,
  deleteIngredientsByQueryService,
} from "../../../common/service/ingredients/ingredients.service.js";

export async function ingredientsCreateHandler(request, response) {
  try {
    const data = request.body;
    const newUser = await creatIngredientsService(data);
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

export async function ingredentsUpdateHandler(request, response) {
  try {
    const data = request.body;
    if (data.name) {
      if (typeof data.name !== "string" || !data.name.trim()) {
        throw new Error("data.name input is invalid! Try again.");
      } else if (data.name.length < 3 || data.name.length > 21) {
        throw new Error("name length must be between 3 and 21 letters");
      }
    }
    if (data.amount) {
      if (typeof data.amount !== "number" || !data.amount) {
        throw new Error("Please try again without entering an data.amount");
      } else if (!(data.amount > 1 && data.amount < 1000)) {
        throw new Error("quantity is limited from 1 to 1000");
      }
    }

    if (data.amount_type) {
      if (typeof data.amount_type !== "string" || !data.amount_type.trim()) {
        throw new Error("amount_type input is invalid! Try again.");
      } else if (
        data.amount_type !== "kg" &&
        data.amount_type !== "gr" &&
        data.amount_type !== "liter"
      ) {
        throw new Error("wrong type given.");
      }
    }
    if (data.sequence) {
      if (typeof data.sequence !== "number" || !data.sequence) {
        throw new Error("data.sequence input is invalid! Try again.");
      } else if (!(data.sequence > 1 && age < 20)) {
        throw new Error("sequence must be between 1 and 20");
      }
    }
    console.log(data);
    await updateIngredientsByQueryService(data);
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

export async function ingredientsDeleteHandler(request, response) {
  try {
    const data = request.body;
    const { add_new_recipe_id } = data;
    await deleteIngredientsByQueryService({
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
