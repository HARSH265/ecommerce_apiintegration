import React from "react";
import { Form, Input, Button, Select, message } from "antd";
import { Formik } from "formik";
import * as Yup from "yup"; // For validation
import { useDispatch } from "react-redux";
import { createProduct } from "../features/products/productSlice";

const { Option } = Select;

const AddProductForm = () => {
  const dispatch = useDispatch();

  // Initial values for Formik
  const initialValues = {
    name: "",
    description: "",
    price: "",
    stock: "",
    category: "",
    images: "",
  };

  // Validation schema using Yup
  const validationSchema = Yup.object().shape({
    name: Yup.string().required("Product name is required"),
    description: Yup.string(),
    price: Yup.number()
      .required("Price is required")
      .positive("Price must be a positive number"),
    stock: Yup.number()
      .required("Stock is required")
      .integer("Stock must be an integer")
      .min(0, "Stock cannot be negative"),
    category: Yup.string().required("Category is required"),
    images: Yup.string()
      .url("Must be a valid URL")
      .required("Image URL is required"),
  });

  const onFinish = async (values, { resetForm }) => {
    const productData = {
      ...values,
      price: parseFloat(values.price),
      stock: parseInt(values.stock, 10),
      images: [values.images],
    };

    try {
      const resultAction = await dispatch(createProduct(productData)).unwrap();
      console.log("Product Data", resultAction);
      message.success("Product added successfully!");
      resetForm();
    } catch (error) {
      message.error("Failed to add product. Please try again.");
      console.error("Error adding product:", error);
    }
  };

  return (
    <div style={{ maxWidth: "600px", margin: "0 auto" }}>
      <h2>Add Product</h2>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={onFinish}
      >
        {({
          values,
          errors,
          touched,
          handleChange,
          handleBlur,
          handleSubmit,
        }) => (
          <Form name="addProduct" onFinish={handleSubmit} layout="vertical">
            <Form.Item
              label="Product Name"
              validateStatus={touched.name && errors.name ? "error" : ""}
            >
              <Input
                placeholder="Enter product name"
                value={values.name}
                onChange={handleChange}
                onBlur={handleBlur}
                name="name"
              />
              {errors.name && touched.name && (
                <div style={{ color: "red" }}>{errors.name}</div>
              )}
            </Form.Item>

            <Form.Item label="Description">
              <Input.TextArea
                rows={4}
                placeholder="Enter product description"
                value={values.description}
                onChange={handleChange}
                onBlur={handleBlur}
                name="description"
              />
            </Form.Item>

            <Form.Item
              label="Price"
              validateStatus={touched.price && errors.price ? "error" : ""}
            >
              <Input
                type="number"
                placeholder="Enter product price"
                value={values.price}
                onChange={handleChange}
                onBlur={handleBlur}
                name="price"
              />
              {errors.price && touched.price && (
                <div style={{ color: "red" }}>{errors.price}</div>
              )}
            </Form.Item>

            <Form.Item
              label="Stock"
              validateStatus={touched.stock && errors.stock ? "error" : ""}
            >
              <Input
                type="number"
                placeholder="Enter product stock"
                value={values.stock}
                onChange={handleChange}
                onBlur={handleBlur}
                name="stock"
              />
              {errors.stock && touched.stock && (
                <div style={{ color: "red" }}>{errors.stock}</div>
              )}
            </Form.Item>

            <Form.Item
              label="Category"
              validateStatus={
                touched.category && errors.category ? "error" : ""
              }
            >
              <Select
                placeholder="Select a category"
                value={values.category}
                onChange={(value) => {
                  handleChange({
                    target: { name: "category", value },
                  });
                }}
                onBlur={handleBlur}
                name="category"
              >
                <Option value="">Select a category</Option>
                <Option value="electronics">Electronics</Option>
                <Option value="clothing">Clothing</Option>
                <Option value="accessories">Accessories</Option>
                <Option value="books">Books</Option>
                <Option value="other">Other</Option>
              </Select>
              {errors.category && touched.category && (
                <div style={{ color: "red" }}>{errors.category}</div>
              )}
            </Form.Item>

            <Form.Item
              label="Image URL"
              validateStatus={touched.images && errors.images ? "error" : ""}
            >
              <Input
                placeholder="Enter image URL"
                value={values.images}
                onChange={handleChange}
                onBlur={handleBlur}
                name="images"
              />
              {errors.images && touched.images && (
                <div style={{ color: "red" }}>{errors.images}</div>
              )}
            </Form.Item>

            <Form.Item>
              <Button
                type="primary"
                htmlType="submit"
                style={{ width: "100%" }}
              >
                Add Product
              </Button>
            </Form.Item>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default AddProductForm;
