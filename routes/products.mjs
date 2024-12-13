import express from "express";
import { products } from "../db/mock-product.mjs";
import { success } from "./helper.mjs";
const productsRouter = express();
productsRouter.get("/", (req, res) => {
    let nbr_products = products.push()
    const message = `La liste des ${nbr_products} a bien été récupérée.`;
    res.json(success(message, products));
});
export { productsRouter }