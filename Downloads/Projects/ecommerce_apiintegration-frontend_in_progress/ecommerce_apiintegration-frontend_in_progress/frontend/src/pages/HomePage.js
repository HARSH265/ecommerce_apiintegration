import React from "react";
import { Layout, Tabs } from "antd";
import Header from "../components/Header";
import Footer from "../components/Footer";
import ProductListingPage from "./ProductListing";
import CartPage from "./CartPage";
import AdminPage from "./AdminPage";

const { Content } = Layout;

const HomePage = () => {
  const tabsItems = [
    {
      key: "home",
      label: "Home",
      children: (
        <>
          <h2>Welcome to the E-Commerce App</h2>
          <ProductListingPage />
        </>
      ),
    },
    {
      key: "cart",
      label: "Cart",
      children: <CartPage />,
    },
    {
      key: "admin",
      label: "Admin",
      children: <AdminPage />,
    },
  ];

  return (
    <Layout style={{ minHeight: "100vh" }}>
      <Header />
      <Content style={{ padding: "20px", textAlign: "center" }}>
        <Tabs defaultActiveKey="home" items={tabsItems} />{" "}
        {/* Updated to use items prop */}
      </Content>
      <Footer style={{ textAlign: "center" }}>
        © 2024 E-Commerce App. All Rights Reserved.
      </Footer>
    </Layout>
  );
};

export default HomePage;
