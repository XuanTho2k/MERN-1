/* eslint-disable @typescript-eslint/no-explicit-any */
import { Footer, Header } from "@/components/Shop";
import ProductDetails from "@/components/Shop/ProductDetails";
import RelatedProducts from "@/components/Shop/RelatedProducts";
import Step from "@/components/Shop/Step";
import { useProductQuery } from "@/hooks/useProductsQuery";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import React, { createContext } from "react";
import { useParams } from "react-router-dom";

export const CategoryContext = createContext([] as any);
const DetailsProductPage: React.FC = () => {
  const { id } = useParams();
  const product = useProductQuery(id);
  const relatedProduct = useQuery({
    queryKey: ["RELATED_PRODUCT"],
    queryFn: async () => {
      const { data } = await axios.get(
        `http://localhost:8080/api/v1/products/${product.data.category[0]}/related/${product.data._id}`
      );
      return data;
    },
  });
  return (
    <>
      <Header />
      <Step />
      <ProductDetails product={product.data as any} />
      <RelatedProducts
        products={relatedProduct.data as any}
      />
      <Footer />
    </>
  );
};

export default DetailsProductPage;
