const item = require("../models/items");
exports.additems = async (req, res, next) => {
  try {

    const { name, category, description, image, price } = req.body;
    console.log(name, category, description, image, price);
    const product = new item({
      name: name,
      category: category,
      description: description,
      image: image,
      price: price,
    });
    const add = await product.save();
    res.status(201).json({ data: add, message: "product added succesfully" });
  } catch (error) {
    console.log(req.body)
    console.log(error);
    res.status(500).json({
      error: error,
    });
  }
};
exports.getitems = async (req, res,next) => {
  try {
    const items = await item.find({}).exec();
    console.log(items)
    res
      .status(201)
      .json({ data: items, message: "product retrieved succesfully" });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      error: error,
    });
  }
};
