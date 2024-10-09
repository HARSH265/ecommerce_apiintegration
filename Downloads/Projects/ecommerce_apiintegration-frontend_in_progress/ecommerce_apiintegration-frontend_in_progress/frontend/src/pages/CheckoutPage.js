import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Form, Input, Button, Card, message } from 'antd';
import { setOrderDetails, clearOrderDetails } from '../features/orders/orderSlice';

const CheckoutPage = () => {
  const [form] = Form.useForm();
  const dispatch = useDispatch();
  const orderDetails = useSelector((state) => state.orders.orderDetails); 

  const [orderSubmitted, setOrderSubmitted] = useState(false);

  const onFinish = (values) => {
   
    const order = {
      items: [
        { name: 'Product 1', price: 29.99, quantity: 2 },
        { name: 'Product 2', price: 19.99, quantity: 1 },
      ],
      total: 79.97,
      customer: values,
    };

    dispatch(setOrderDetails(order));
    message.success('Order placed successfully!');
    setOrderSubmitted(true); 
  };

  const handleClearOrder = () => {
    dispatch(clearOrderDetails());
    setOrderSubmitted(false);
    message.info('Order cleared.');
    form.resetFields();
  };

  return (
    <div style={{ maxWidth: '600px', margin: '0 auto', padding: '20px' }}>
      <h2>Checkout</h2>
      {!orderSubmitted ? (
        <>
          <Form
            form={form}
            layout="vertical"
            onFinish={onFinish}
          >
            <Form.Item
              name="name"
              label="Full Name"
              rules={[{ required: true, message: 'Please enter your name' }]}
            >
              <Input placeholder="John Doe" />
            </Form.Item>

            <Form.Item
              name="address"
              label="Shipping Address"
              rules={[{ required: true, message: 'Please enter your address' }]}
            >
              <Input placeholder="1234 Main St" />
            </Form.Item>

            <Form.Item
              name="email"
              label="Email"
              rules={[
                { required: true, message: 'Please enter your email' },
                { type: 'email', message: 'Please enter a valid email' },
              ]}
            >
              <Input placeholder="example@email.com" />
            </Form.Item>

            <Form.Item
              name="cardNumber"
              label="Credit Card Number"
              rules={[{ required: true, message: 'Please enter your credit card number' }]}
            >
              <Input placeholder="1234 5678 9101 1121" />
            </Form.Item>

            <Button type="primary" htmlType="submit" style={{ width: '100%' }}>
              Place Order
            </Button>
          </Form>
        </>
      ) : (
        <>
          <h3>Order Summary</h3>
          <Card>
            {orderDetails?.items.map((item, index) => (
              <div key={index}>
                <p>{item.name} x {item.quantity} - ${item.price}</p>
              </div>
            ))}
            <h4>Total: ${orderDetails?.total}</h4>
          </Card>
          <Button type="default" onClick={handleClearOrder} style={{ marginTop: '20px', width: '100%' }}>
            Clear Order
          </Button>
        </>
      )}
    </div>
  );
};

export default CheckoutPage;
