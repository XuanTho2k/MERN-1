import {
  Footer,
  Header,
  ProductList,
} from "@/components/Shop";

const ShopPage = () => {
  return (
    <>
      <Header />
      <ProductList ratingProp={4.5} />
      <Footer />
    </>
  );
};

export default ShopPage;
