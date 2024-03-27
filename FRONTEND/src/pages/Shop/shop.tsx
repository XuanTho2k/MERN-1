import { Footer, Header, Service } from "@/components/Shop";
import ShopBanner from "@/components/Shop/Banners/ShopBanner";
import ShopProducts from "@/components/Shop/ShopProducts";
import { useState } from "react";

const ShopPage = () => {
  const [category, setCategory] = useState();
  return (
    <>
      <Header />
      <ShopBanner />
      <ShopProducts />
      <Service />
      <Footer />
    </>
  );
};

export default ShopPage;
