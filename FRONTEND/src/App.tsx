import { Route, Routes } from "react-router-dom";
import "./App.css";
import HomePage from "./pages/Shop/home";
import ShopPage from "./pages/Shop/shop";
import NotFoundPage from "./pages/Shop/notFound";
import AboutPage from "./pages/Shop/about";
import ContactPage from "./pages/Shop/contact";
import DetailsProductPage from "./pages/Shop/details";
import CartPage from "./pages/Shop/cart";
import CheckOutPage from "./pages/Shop/checkout";
import LoginPage from "./pages/Shop/login";
import AdminHomePage from "./pages/Admin/home";
import ListProductsPage from "./pages/Admin/listProducts";
import EditProductPage from "./pages/Admin/editProduct";
import AddProductPage from "./pages/Admin/addProduct";
import SignUpPage from "./pages/Shop/signup";

function App() {
  return (
    <>
      <Routes>
        <Route path="/">
          <Route index element={<HomePage />} />
          <Route path="shop" element={<ShopPage />} />
          <Route path="about" element={<AboutPage />} />
          <Route path="cart" element={<CartPage />} />
          <Route path="login" element={<LoginPage />} />
          <Route path="signup" element={<SignUpPage />} />
          <Route
            path="checkout"
            element={<CheckOutPage />}
          />

          <Route path="contact" element={<ContactPage />} />
          <Route
            path="product/:id"
            element={<DetailsProductPage />}
          />
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
      <Routes>
        <Route path="/admin/">
          <Route index element={<AdminHomePage />} />
          <Route path="products/">
            <Route index element={<ListProductsPage />} />
            <Route
              path="edit/:id"
              element={<EditProductPage />}
            />
            <Route
              path="add"
              element={<AddProductPage />}
            />
          </Route>
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
