const express = require("express");
//const Product = require("../models/product");
const productRouter = new express.Router();
const {hello,createProduct, getProduct, deleteTheProduct, updateTheProduct, getSingleProduct
, getProductOnSearch} = require('../controllers/product.js');

productRouter.get("/", hello);

// productRouter.get("/", (req, res) => {
//     res.send("hello from the express")
// })
// productRouter.post("/products", async (req, res) => {
//     try {
//         const product = new Product(req.body);
//         const createProduct = await product.save();
//         res.status(201).send(createProduct)
//     }
//     catch (e) {
//         res.status(400).send(e);
//     }
// });
productRouter.post("/products", createProduct);
productRouter.get("/products", getProduct);
productRouter.get("/products/:id", getProductOnSearch);
// productRouter.get("/products", async (req, res) => {
//     try {
//         const productsData = await Product.find();
//         res.send(productsData);
//     }
//     catch (e) {
//         res.send(e);
//     }
// });

//productRouter.get("/products/:id", getSingleProduct);
// productRouter.get("/products/:id", async (req, res) => {
//     try {
//         const id = req.params.id;
//         const productData = await Product.find({ asin: id }, { _id:0});
//         if (!productData) {
//             return res.status(404).send();
//         }
//         else {
//             res.send(productData);
//         }
//     } catch (error) {
//         res.status(500).send(error);
//     }
// })

productRouter.delete("/products/:id", deleteTheProduct);
// productRouter.delete("/products/:id", async (req, res) => {
//     try {
//         const asin = req.params.id;
//         const deletedProduct = await Product.findOneAndDelete({asin});
//         if (!req.params.id) {
//             return res.status(400).send()
//         }
//         res.send(deletedProduct);
//     } catch (error) {
//         res.status(500).send(error)
//     }
// });
// update the students document using its id
productRouter.patch("/products/:id", updateTheProduct);
// productRouter.patch("/products/:id", async (req, res) => {
//     try {
//         const asin = req.params.id;
//         const updatedProduct = await Product.findOneAndUpdate({ asin }, req.body,
//             { new: true });
//         res.send(updatedProduct);
//     } catch (error) {
//         res.status(400).send(error)
//     }
// })
module.exports = productRouter;