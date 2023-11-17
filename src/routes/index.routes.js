import { Router } from "express";
import clotheRouter from "./clothes.routes.js";

const rotas = Router();

rotas.use("/clothes", clotheRouter);

rotas.get("/", (req, res) => {
    return res.status(200).send(
        { message : "Welcome to the API Clothes Store" }
    )
});

export default rotas;