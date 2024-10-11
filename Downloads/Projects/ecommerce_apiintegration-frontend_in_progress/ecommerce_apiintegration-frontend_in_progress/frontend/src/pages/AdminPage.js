import React from "react";
import { Layout } from "antd";
import Header from "../components/Header"; // Your header component
import Footer from "../components/Footer"; // Your footer component
import AddProductForm from "./AddProductForm"; // Adjust the import based on your structure

const AdminPage = () => {
  return (
    <Layout style={{ minHeight: "100vh" }}>
      <Header />
      <Layout.Content style={{ padding: "20px" }}>
        <h2>Add New Product</h2>
        <AddProductForm />
      </Layout.Content>
      <Footer style={{ textAlign: "center" }}>
        © 2024 E-Commerce App. All Rights Reserved.
      </Footer>
    </Layout>
  );
};

export default AdminPage;
