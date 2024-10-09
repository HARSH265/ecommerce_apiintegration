import React from "react";
import { Layout, Tabs } from "antd";
import Header from "../components/Header";
import Footer from "../components/Footer";
import ProductListingPage from "./ProductListing";
import CartPage from "./CartPage";
import AdminPage from "./AdminPage";

const { Content } = Layout;
const { TabPane } = Tabs;

const HomePage = () => {
  return (
    <Layout style={{ minHeight: "100vh" }}>
      <Header />
      <Content style={{ padding: "20px", textAlign: "center" }}>
        <Tabs defaultActiveKey="home">
          <TabPane tab="Home" key="home">
            <h2>Welcome to the E-Commerce App</h2>

            <div>
              <ProductListingPage />
            </div>
          </TabPane>
          {/* <TabPane tab="Products" key="products">
            <ProductListingPage /> 
          </TabPane> */}
          <TabPane tab="Cart" key="cart">
            <CartPage />
          </TabPane>
          <TabPane tab="Admin" key="admin">
            <AdminPage />
          </TabPane>
        </Tabs>
      </Content>
      <Footer style={{ textAlign: "center" }}>
        © 2024 E-Commerce App. All Rights Reserved.
      </Footer>
    </Layout>
  );
};

export default HomePage;
