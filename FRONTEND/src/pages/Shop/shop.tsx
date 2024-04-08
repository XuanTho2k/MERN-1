import { Footer, Header, Service } from "@/components/Shop";
import ShopBanner from "@/components/Shop/Banners/ShopBanner";
import ShopProducts from "@/components/Shop/ShopProducts";
import { Toaster } from "@/components/ui/sonner";
import { createContext, useState } from "react";

export const CategoryContext = createContext();
export const PaginateContext = createContext();
export const LimitContext = createContext();
const ShopPage = () => {
  const [category, setCategory] = useState(undefined);
  const [paginate, setPaginate] = useState({});
  const [limit, setLimit] = useState(8);
  return (
    <>
      <Header />
      <CategoryContext.Provider
        value={[category, setCategory]}
      >
        <PaginateContext.Provider
          value={[paginate, setPaginate]}
        >
          <LimitContext.Provider value={[limit, setLimit]}>
            <ShopBanner />
            <ShopProducts />
          </LimitContext.Provider>
        </PaginateContext.Provider>
      </CategoryContext.Provider>
      <Toaster />
      <Service />
      <Footer />
    </>
  );
};

export default ShopPage;
