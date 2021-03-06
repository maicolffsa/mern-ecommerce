import express from "express";
import Product from "../models/Product";

const router = express.Router();

router.get("/", async (req, res) => {
  const category = req.query.category ? { category: req.query.category } : {};
  const products = await Product.find({ ...category });
  if (products) {
    return res.send(products);
  } else {
    return res.status(404).send({ msg: "Productos no encontrados." });
  }
});

router.get("/:id", async (req, res) => {
  const productId = req.params.id;
  const product = await Product.findById(productId);
  if (product) {
    res.send(product);
  } else {
    res.status(404).send({ msg: "Producto no encontrado." });
  }
});

router.get("/all/category", async (req, res) => {
  const categories = await Product.find({}, { category: 1 }).distinct(
    "category"
  );
  if (categories) {
    return res.send(categories);
  } else {
    return res.status(404).send({ msg: "Categorías no encontradas." });
  }
});

router.post("/", async (req, res) => {
  const product = new Product({
    name: req.body.name,
    price: req.body.price,
    image: req.body.image,
    category: req.body.category,
    countInStock: req.body.countInStock, 
    desc: req.body.desc,
  });
  const newProduct = await product.save();
  if (newProduct) {
    return res
      .status(201)
      .send({ msg: "Producto nuevo creado.", data: newProduct });
  }
  return res.status(500).send({ msg: "Error al crear el producto." });
});
export default router;
