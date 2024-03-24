import { Footer, Header } from "@/components/Shop";
import ProductDetails from "@/components/Shop/ProductDetails";
import RelatedProducts from "@/components/Shop/RelatedProducts";
import Step from "@/components/Shop/Step";
import React from "react";

const DetailsProductPage: React.FC = () => {
  return (
    <>
      <Header />
      <Step />
      <ProductDetails />
      <RelatedProducts />
      <Footer />
    </>
  );
};

export default DetailsProductPage;
