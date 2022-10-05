const router = require("express").Router();
const Items = require("../Models/ItemModel");
const Joi = require("@hapi/joi");
const { route } = require("./AuthRoutes");

const ItemSchema = Joi.object({
  name: Joi.string().min(3).required(),
  price: Joi.number().min(1).required(),
  description: Joi.string(),
});

router.get("/getAllItems", async (req, res) => {
  try {
    const GetAllItems = await Items.find();
    return res.send(GetAllItems);
  } catch (e) {
    return res.send(e);
  }
});
router.get("/getItemById/:id", async (req, res) => {
  try {
    const { id } = req.params;
    console.log(id);
    const GetAllItems = await Items.findById(id);
    return res.send(GetAllItems);
  } catch (e) {
    return res.send(e);
  }
});

router.post("/saveItems", async (req, res) => {
  const { error } = ItemSchema.validate(req.body);
  if (error) return res.status(400).send(error.details[0].message);
  const ItemData = new Items({
    name: req.body.name,
    price: req.body.price,
    description: req.body.description,
  });
  try {
    const saveData = await ItemData.save();
    return res.send(saveData);
  } catch (error) {
    return res.status(400).send(error);
  }
});

router.get("/editItem", async (req, res) => {
  try {
    const { id } = req.params;
    console.log(id);
    const updateItem = await Items.findByIdAndUpdate(req.body.id, req.body, {
      new: true,
    });

    return res.send(updateItem);
  } catch (e) {
    return res.send(e);
  }
});

router.delete("/deleteItem", async (req, res) => {
  try {
    const updateItem = await Items.findByIdAndDelete(req.body.id);

    return res.send(updateItem);
  } catch (e) {
    return res.send(e);
  }
});

module.exports = router;
