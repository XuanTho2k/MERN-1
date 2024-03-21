import { Route, Routes } from "react-router-dom";
import "./App.css";
import HomePage from "./pages/home";
import ShopPage from "./pages/shop";
import NotFoundPage from "./pages/notFound";
import AboutPage from "./pages/about";
import ContactPage from "./pages/contact";
import DetailsProductPage from "./pages/details";

function App() {
  return (
    <>
      <div>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/shop" element={<ShopPage />} />
          <Route path="/about" element={<AboutPage />} />
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
      </div>
    </>
  );
}

export default App;
