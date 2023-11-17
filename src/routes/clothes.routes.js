import { Router } from "express";
import { getClothes, getClotheById, postClothe, putClothe, deleteClothe } from "../controller/clothes.controller.js";

const clotheRouter = Router();

clotheRouter.get("/", getClothes);

clotheRouter.get("/:id", getClotheById);

clotheRouter.post("/", postClothe);

clotheRouter.put("/:id", putClothe);

clotheRouter.delete("/:id", deleteClothe);

export default clotheRouter;