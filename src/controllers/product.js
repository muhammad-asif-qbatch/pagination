const Product = require("../models/product");
const hello = (req, res) => res.send('Hello WOrld!');
const createProduct = async (req, res) => {
    try {
        const product = new Product(req.body);
        const createProduct = await product.save();
        res.status(201).send(createProduct)
    }
    catch (e) {
        res.status(400).send(e);
    }
}
const getProduct = async (req, res) => {
    try {
        const limit = req.query.body;
        const Limit = parseInt(limit, 10);
        console.log("Limit", typeof(Limit));
        const productsData = await Product.find({}).limit(Limit);
        //console.log(productsData);
        res.send(productsData);
    }
    catch (e) {
        res.send(e);
    }
}
const getSingleProduct = async (req, res) => {
    try {
        const id = req.params.id;
        const productData = await Product.find({ asin: id }, { _id:0});
        if (!productData) {
            return res.status(404).send();
        }
        else {
            res.send(productData);
        }
    } catch (error) {
        res.status(500).send(error);
    }
}
const deleteTheProduct = async (req, res) => {
    try {
        const asin = req.params.id;
        const deletedProduct = await Product.findOneAndDelete({asin});
        if (!req.params.id) {
            return res.status(400).send()
        }
        res.send(deletedProduct);
    } catch (error) {
        res.status(500).send(error)
    }
}
const updateTheProduct = async (req, res) => {
    try {
        const asin = req.params.id;
        const updatedProduct = await Product.findOneAndUpdate({ asin }, req.body,
            { new: true });
        res.send(updatedProduct);
    } catch (error) {
        res.status(400).send(error)
    }
}

const getProductOnSearch = async (req, res) => {
    try{
        const value = req.params.id;
        const products = await Product.find({
            $or: [
                { name: { $regex: `.*${value}.*`, $options: 'i' } },
                { asin: { $regex: `.*${value}.*`, $options: 'i' } },
              ]
        });
        res.status(201).send(products);
    }
    catch(e){
        res.status(400).send(e);
    }
}
module.exports = {hello, createProduct, getProduct, getSingleProduct, deleteTheProduct, updateTheProduct,
 getProductOnSearch};