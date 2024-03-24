import { Footer, Header, Service } from "@/components/Shop";
import CheckOutBanner from "@/components/Shop/Banners/CheckOutBanner";
import BillingDetails from "@/components/Shop/BillingDetails";
import React from "react";

const CheckOutPage = () => {
  return (
    <div>
      <Header />
      <CheckOutBanner />
      <BillingDetails />
      <Service />
      <Footer />
    </div>
  );
};

export default CheckOutPage;
