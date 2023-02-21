import { Router } from "express";
import { photoCreateHandler } from "../../handler/photo/photo.handler.js";
const router = Router();

router.route("/").post(photoCreateHandler);

export default router;
