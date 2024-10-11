import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import ProductListingPage from "./pages/ProductListing";
import CartPage from "./pages/CartPage";
import AdminPage from "./pages/AdminPage";
import SignupPage from "./pages/SignupPage";
import CheckoutPage from "./pages/CheckoutPage";
import AddProductForm from "./pages/AddProductForm";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<SignupPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/cart" element={<CartPage />} />
        <Route path="/products" element={<ProductListingPage />} />
        <Route path="/homepage" element={<HomePage />} />
        <Route path="/admin" element={<AdminPage />} />
        <Route path="/addproduct" element={<AddProductForm />} />
        <Route path="/checkout" element={<CheckoutPage />} />
      </Routes>
    </Router>
  );
}

export default App;
