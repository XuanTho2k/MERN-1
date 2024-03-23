import {
  Banner,
  Blog,
  Footer,
  Header,
  ProductList,
  Service,
  Shop,
} from "@/components/Shop";

const HomePage = () => {
  return (
    <div>
      <div>
        <Header />
        <Banner />
        {/*End .banner*/}
        <ProductList ratingProp={0} />
        <div className="container">
          <hr />
        </div>
        {/*End .news*/}
        <Shop />
        {/*End .shop*/}
        <Blog />
        {/*End .blog*/}
        <Service />
        {/*End .services*/}
        <Footer />
      </div>
    </div>
  );
};

export default HomePage;
