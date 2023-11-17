import { Router } from "express";
import { getClothes, getClotheById, getClotheByType, postClothe, putClothe, deleteClothe } from "../controller/clothes.controller.js";

const clotheRouter = Router();

clotheRouter.get("/", getClothes);

clotheRouter.get("/:id", getClotheById);

clotheRouter.get("/type", getClotheByType);

clotheRouter.post("/", postClothe);

clotheRouter.put("/:id", putClothe);

clotheRouter.delete("/:id", deleteClothe);

export default clotheRouter;