import React, { useRef, useState, useEffect } from "react";
import { Form, Input, Button, message } from "antd";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { signup } from "../features/auth/authSlice";
import { Formik } from "formik";

const SignupPage = () => {
  const [form] = Form.useForm();
  const dispatch = useDispatch();
  const initialValues = {
    name: "",
    email: "",
    password: "",
  };

  const onFinish = async (values) => {
    console.log("Form values: ", values);

    const signupData = {
      name: values.name,
      email: values.email,
      password: values.password,
    };
    try {
      await dispatch(signup(signupData)).unwrap();
      message.success("Signup successful!");
      form.resetFields();
    } catch (error) {
      message.error("Signup failed!");
    }
  };

  return (
    <div style={{ maxWidth: "400px", margin: "0 auto" }}>
      <h2>Sign Up</h2>
      <Formik initialValues={initialValues} onSubmit={onFinish}>
        {({
          values,
          errors,
          touched,
          handleChange,
          handleBlur,
          handleSubmit,
        }) => (
          <Form
            form={form}
            name="signup"
            onFinish={handleSubmit}
            layout="vertical"
          >
            <Form.Item
              label="Name"
              rules={[{ required: true, message: "Please input your name!" }]}
            >
              <Input
                placeholder="Enter your Name"
                value={values.name}
                onChange={handleChange}
                onBlur={handleBlur}
                name="name"
              />
            </Form.Item>

            <Form.Item
              label="Email"
              rules={[
                { required: true, message: "Please input your email!" },
                { type: "email", message: "Please enter a valid email!" },
              ]}
            >
              <Input
                placeholder="Enter your Email"
                value={values.email}
                onChange={handleChange}
                onBlur={handleBlur}
                name="email"
              />
            </Form.Item>

            <Form.Item
              label="Password"
              rules={[
                { required: true, message: "Please input your password!" },
              ]}
            >
              <Input.Password
                placeholder="Enetr your Password"
                value={values.password}
                onChange={handleChange}
                onBlur={handleBlur}
                name="password"
              />
            </Form.Item>

            <Form.Item>
              <Button
                type="primary"
                htmlType="submit"
                style={{ width: "100%" }}
              >
                Sign Up
              </Button>
            </Form.Item>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default SignupPage;
