const mongoose = require("mongoose");
const { Schema } = mongoose;

// Define the item schema
const itemSchema = new Schema({
  name: {
    type: String,
    required: true,
    trim: true,
  },
  description: {
    type: String,
    trim: true,
  },
  price: {
    type: Number,
    required: true,
    min: 0,
  },
  stock: {
    type: Number,
    required: true,
    min: 0,
  },
  category: {
    type: String,
    enum: ["electronics", "clothing", "accessories", "books", "other"],
    default: "other",
  },
  images: [String], // Array of image URLs
  createdAt: {
    type: Date,
    default: Date.now,
  },
  updatedAt: {
    type: Date,
    default: Date.now,
  },
});

// Middleware to update 'updatedAt' field before saving
itemSchema.pre("save", function (next) {
  this.updatedAt = Date.now();
  next();
});

// Create and export the Item model
const Item = mongoose.model("Item", itemSchema);
module.exports = Item;
