const express = require("express");
const Router = express.Router();
const {
    getAll,
    createProduct,
    getOneByCtegory,
    getOneByName,
    deletProduct

    }=require("../controllers/product.controller")
Router.get("/", getAll);
Router.post("/",createProduct);
router.get("/category",getOneByCtegory);
router.get("/query/:name",getOneByName);
router.delete("/:id",deletProduct)
module.exports = Router;
