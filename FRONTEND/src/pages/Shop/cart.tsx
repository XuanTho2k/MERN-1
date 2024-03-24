import { Footer, Header, Service } from "@/components/Shop";
import CartBanner from "@/components/Shop/Banners/CartBanner";
import CartList from "@/components/Shop/CartList";
import React from "react";

const CartPage = () => {
  return (
    <div>
      <Header />
      <CartBanner />
      <CartList />
      <Service />
      <Footer />
    </div>
  );
};

export default CartPage;
