import React from "react";
import { Form, Input, Button, message } from "antd";
import { Formik } from "formik";
import { useDispatch } from "react-redux";
import { register } from "../features/auth/authSlice";
import { Link, useNavigate } from "react-router-dom";

const SignupPage = () => {
  const [form] = Form.useForm();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const initialValues = {
    name: "",
    email: "",
    password: "",
  };
  const onFinish = async (values) => {
    const SignUpData = {
      name: values.name,
      email: values.email,
      password: values.password,
    };

    try {
      await dispatch(register(SignUpData)).unwrap();
      console.log("Received values of form: ", values);
      message.success("Signup successful!");
      navigate("/login");
      form.resetFields();
    } catch (error) {
      message.error("Signup failed!");
      console.error("signup errro", error);
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
              name="name"
              label="Name"
              rules={[{ required: true, message: "Please input your name!" }]}
            >
              <Input
                placeholder="Enter your name"
                value={values.name}
                onChange={handleChange}
                onBlur={handleBlur}
                name="name"
              />
              {errors.name && touched.name && <div>{errors.name}</div>}
            </Form.Item>

            <Form.Item
              name="email"
              label="Email"
              rules={[
                { required: true, message: "Please input your email!" },
                { type: "email", message: "Please enter a valid email!" },
              ]}
            >
              <Input
                placeholder="Email"
                value={values.email}
                onChange={handleChange}
                onBlur={handleBlur}
                name="email"
              />
              {errors.email && touched.email && <div>{errors.email}</div>}
            </Form.Item>

            <Form.Item
              name="password"
              label="Password"
              rules={[
                { required: true, message: "Please input your password!" },
              ]}
            >
              <Input.Password
                placeholder="Password"
                value={values.password}
                onChange={handleChange}
                onBlur={handleBlur}
                name="password"
              />
              {errors.password && touched.password && (
                <div>{errors.password}</div>
              )}
            </Form.Item>

            <Form.Item>
              <Button
                type="primary"
                htmlType="submit"
                style={{ width: "100%" }}
              >
                Sign Up
              </Button>
              <Link to={"/login"}>Already a user,Login</Link>
            </Form.Item>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default SignupPage;
