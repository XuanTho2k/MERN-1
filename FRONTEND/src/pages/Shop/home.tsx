import {
  Banner,
  Blog,
  Footer,
  Header,
  ProductList,
  Service,
  Shop,
} from "@/components/Shop";
import { Toaster } from "@/components/ui/sonner";

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
        <Toaster expand={true} />
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
