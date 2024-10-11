import React from "react";
import { Card, Button, message } from "antd";
import { useDispatch } from "react-redux";
import { addToCart } from "../features/cart/cartSlice";

const ProductCard = ({ product }) => {
  const dispatch = useDispatch();

  const handleAddToCart = () => {
    dispatch(addToCart(product));
    message.success("🎉 Success! The item has been added to your cart.");
  };

  return (
    <Card
      title={product.name}
      extra={
        <span style={{ fontSize: "16px", fontWeight: "bold" }}>
          ${product.price.toFixed(2)} {/* Format price to 2 decimal places */}
        </span>
      }
      cover={
        <img
          alt={product.name}
          src={product.images[0]}
          style={{ height: 200, objectFit: "cover" }}
        />
      } // Display the first image
      style={{
        width: 300,
        borderRadius: "8px",
        boxShadow: "0 2px 8px rgba(0, 0, 0, 0.1)",
      }}
    >
      <div style={{ textAlign: "center" }}>
        <p style={{ minHeight: "40px", color: "#555" }}>
          {product.description}
        </p>
        <Button
          type="primary"
          style={{ width: "100%" }}
          onClick={handleAddToCart}
        >
          Add to Cart
        </Button>
      </div>
    </Card>
  );
};

export default ProductCard;
