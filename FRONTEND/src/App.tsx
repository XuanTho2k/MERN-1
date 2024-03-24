import { Route, Routes } from "react-router-dom";
import "./App.css";
import HomePage from "./pages/Shop/home";
import ShopPage from "./pages/Shop/shop";
import NotFoundPage from "./pages/Shop/notFound";
import AboutPage from "./pages/Shop/about";
import ContactPage from "./pages/Shop/contact";
import DetailsProductPage from "./pages/Shop/details";
import AddFormPage from "./pages/Admin/addProduct";
import CartPage from "./pages/Shop/cart";
import CheckOutPage from "./pages/Shop/checkout";

function App() {
  return (
    <>
      <div>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/shop" element={<ShopPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/cart" element={<CartPage />} />
          <Route
            path="/checkout"
            element={<CheckOutPage />}
          />

          <Route
            path="/contact"
            element={<ContactPage />}
          />
          <Route
            path="/product/:id"
            element={<DetailsProductPage />}
          />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
        <Routes>
          <Route path="/admin" element={<AddFormPage />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
