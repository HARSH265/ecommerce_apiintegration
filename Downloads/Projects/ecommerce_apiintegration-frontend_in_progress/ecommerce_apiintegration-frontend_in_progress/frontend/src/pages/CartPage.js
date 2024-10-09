import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Button } from 'antd';
import { removeFromCart} from '../features/cart/cartSlice';
import { useNavigate } from 'react-router-dom';

const CartPage = () => {
  const { items } = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleRemoveItem = (itemId) => {
    dispatch(removeFromCart(itemId));
  };

  const handleProceedToCheckout = () => {
    navigate('/checkout'); 
  };

 
  const totalPrice = items.reduce((total, item) => total + item.price, 0);

  return (
    <div>
      <h2>Shopping Cart</h2>
      {items.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        <>
          {items.map(item => (
            <div key={item.id} style={{ borderBottom: '1px solid #ccc', padding: '10px' }}>
              <h3>{item.name}</h3>
              <p>Price: ${item.price.toFixed(2)}</p>
              <Button onClick={() => handleRemoveItem(item.id)} type="primary" danger>
                Remove
              </Button>
            </div>
          ))}
          <h3>Total Price: ${totalPrice.toFixed(2)}</h3>
          <Button type="primary" onClick={handleProceedToCheckout} style={{ marginTop: '20px' }}>
            Proceed to Checkout
          </Button>
        </>
      )}
    </div>
  );
};

export default CartPage;
