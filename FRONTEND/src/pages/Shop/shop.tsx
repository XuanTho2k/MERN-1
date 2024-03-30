import { Footer, Header, Service } from "@/components/Shop";
import ShopBanner from "@/components/Shop/Banners/ShopBanner";
import ShopProducts from "@/components/Shop/ShopProducts";
import { createContext, useState } from "react";

export const CategoryContext = createContext();
const ShopPage = () => {
  const [category, setCategory] = useState(undefined);

  return (
    <>
      <Header />
      <CategoryContext.Provider
        value={[category, setCategory]}
      >
        <ShopBanner />
        <ShopProducts />
      </CategoryContext.Provider>
      <Service />
      <Footer />
    </>
  );
};

export default ShopPage;
