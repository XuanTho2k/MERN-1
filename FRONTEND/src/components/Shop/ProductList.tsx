import { IProduct } from "@/interfaces/product";
import { getAllProducts } from "@/services/product";
import { useQuery } from "@tanstack/react-query";
import { Link } from "react-router-dom";
type ProductListProp = {
  ratingProp: number;
};

const ProductList = (rating?: ProductListProp) => {
  const {
    data: products,
    isLoading,
    isError,
  } = useQuery({
    queryKey: ["PRODUCT_KEY"],
    queryFn: getAllProducts,
  });
  if (isLoading) return <div>Loading...</div>;
  if (isError) return <div>Error</div>;
  const filterProducts = products?.filter(
    (item: IProduct) => {
      return item.rating > (rating?.ratingProp ?? 0);
    }
  );
  return (
    <div>
      <section className="news">
        <div className="container">
          <div className="section-heading">
            <h2 className="section-heading__title">New</h2>
          </div>
          <div className="section-body">
            <div className="product-list">
              {filterProducts?.map(
                (prod: IProduct, idx: number) => {
                  return (
                    <div key={idx} className="product-item">
                      <div className="product-image">
                        <img
                          src={prod.thumbnail}
                          className="product__thumbnail"
                        />
                        <span className="product-sale">
                          {prod.discountPercentage}%
                        </span>
                      </div>
                      <div className="product-info">
                        <h3 className="product__name">
                          <a className="product__link">
                            {prod.title}
                          </a>
                        </h3>
                        <a className="product__category">
                          {prod.category}
                        </a>
                        <div className="product-price">
                          <span className="product-price__new">
                            ${" "}
                            {prod.price -
                              (prod.price *
                                (prod.discountPercentage ??
                                  0)) /
                                100}
                          </span>
                          <span className="product-price__old">
                            $ {prod.price}
                          </span>
                        </div>
                      </div>
                      <div className="product-actions">
                        <Link
                          to={`/product/${prod.id}`}
                          className="btn  product-action__quickview"
                        >
                          Quick View
                        </Link>
                        <button className="btn product-action__addtocart">
                          Add To Cart
                        </button>
                        <div className="product-actions-more">
                          <span className="product-action__share">
                            Share
                          </span>
                          <span className="product-action__compare">
                            Compare
                          </span>
                          <span className="product-action__like">
                            Like
                          </span>
                        </div>
                      </div>
                    </div>
                  );
                }
              )}

              {/*End .product-item*/}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ProductList;
