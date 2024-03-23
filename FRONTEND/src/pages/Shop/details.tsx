import { Footer, Header } from "@/components/Shop";
import ProductDetails from "@/components/Shop/ProductDetails";
import { getProductById } from "@/services/product";
import { useQuery } from "@tanstack/react-query";
import React from "react";
import { useParams } from "react-router-dom";

const DetailsProductPage: React.FC = () => {
  const { id } = useParams();
  const {
    data: product,
    isLoading,
    isError,
  } = useQuery({
    queryKey: ["PRODUCT_KEY", id],
    queryFn: async () => await getProductById(id),
  });
  console.log(product);
  if (isLoading) return <div>Loading...</div>;
  if (isError) return <div>Error</div>;
  return (
    <>
      <Header />
      <ProductDetails prod={product} />
      <Footer />
    </>
  );
};

export default DetailsProductPage;
