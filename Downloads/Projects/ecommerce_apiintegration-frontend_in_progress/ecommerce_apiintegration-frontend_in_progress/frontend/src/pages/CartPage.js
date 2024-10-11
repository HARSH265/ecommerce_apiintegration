import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Button } from "antd";
import {
  removeFromCart,
  addToCart,
  decreaseQuantity,
} from "../features/cart/cartSlice";
import { useNavigate } from "react-router-dom";
import { MinusOutlined, PlusOutlined } from "@ant-design/icons"; // Import icons

const CartPage = () => {
  const { items } = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleRemoveItem = (itemId) => {
    dispatch(removeFromCart(itemId));
  };

  const handleDecreaseQuantity = (itemId) => {
    dispatch(decreaseQuantity(itemId)); // Decrease the quantity of an item
  };

  const handleIncreaseQuantity = (item) => {
    dispatch(addToCart(item)); // Increase the quantity of an item
  };

  const handleProceedToCheckout = () => {
    navigate("/checkout");
  };

  const totalPrice = items.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  return (
    <div>
      <h2>Shopping Cart</h2>
      {items.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        <>
          {items.map((item) => (
            <div
              key={item._id}
              style={{ borderBottom: "1px solid #ccc", padding: "10px" }}
            >
              <h3>{item.name}</h3>
              <p>Price: ${item.price.toFixed(2)}</p>
              <p>
                Quantity:
                <Button
                  onClick={() => handleDecreaseQuantity(item._id)}
                  icon={<MinusOutlined />}
                  style={{ marginLeft: "10px", marginRight: "10px" }}
                />
                {item.quantity}
                <Button
                  onClick={() => handleIncreaseQuantity(item)}
                  icon={<PlusOutlined />}
                  style={{ marginLeft: "10px", marginRight: "10px" }}
                />
              </p>
              <Button
                onClick={() => handleRemoveItem(item._id)}
                type="primary"
                danger
                style={{ marginTop: "10px" }}
              >
                Remove
              </Button>
            </div>
          ))}
          <h3>Total Price: ${totalPrice.toFixed(2)}</h3>
          <Button
            type="primary"
            onClick={handleProceedToCheckout}
            style={{ marginTop: "20px" }}
          >
            Proceed to Checkout
          </Button>
        </>
      )}
    </div>
  );
};

export default CartPage;
