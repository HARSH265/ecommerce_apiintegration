const express = require("express");
const itemController = require("../Controllers/itemController");

const router = express.Router();

// GET all items
router.get("/auth/get-itemdata", itemController.getAllItems);

// GET a single item by ID
router.get("/:id/auth/get-itemdata", itemController.getItemById);

router.post("/auth/send-itemdata", itemController.createItem);

router.put("/:id/auth/update-itemdata", itemController.updateItem);

router.delete("/:id/auth/delete-itemdata", itemController.deleteItem);

module.exports = router;
