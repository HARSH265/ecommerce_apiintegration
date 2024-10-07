import React from 'react';
import { Button, Input, Form, message } from 'antd';

const LoginPage = () => {
  const [form] = Form.useForm();

  const onFinish = async (values) => {
    console.log('Form values: ', values);
    try {
      message.success('Login successful!'); 
      form.resetFields(); 
    } catch (error) {
      message.error('Login failed!'); 
    }
  };

  return (
    <div style={{ maxWidth: '400px', margin: '0 auto' }}>
      <h2>Login</h2>
      <p style={{ color: 'red' }}>error</p>
      <Form
        form={form}
        name="login"
        onFinish={onFinish}
        layout="vertical"
      >
        <Form.Item
          name="email"
          label="Email"
          rules={[
            { required: true, message: 'Please input your email!' },
            { type: 'email', message: 'Please enter a valid email!' }
          ]}
        >
          <Input placeholder="Enter your email" />
        </Form.Item>

        <Form.Item
          name="password"
          label="Password"
          rules={[{ required: true, message: 'Please input your password!' }]}
        >
          <Input.Password placeholder="Enter your password" />
        </Form.Item>

        <Form.Item>
          <Button type="primary" htmlType="submit" style={{ width: '100%' }}>
            Login
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default LoginPage;
