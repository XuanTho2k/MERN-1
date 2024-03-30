import useProductsCategory from "@/hooks/useProductsCategory";
import { IProduct } from "@/interfaces/product";
import { CategoryContext } from "@/pages/Shop/details";
import { useContext, useState } from "react";
import { Link } from "react-router-dom";

const RelatedProducts = ({ products }) => {
  const [divHeight, setDivHeight] = useState("448px");
  const [showMore, setShowMore] = useState(true);

  const handleButtonClick = () => {
    setDivHeight(showMore ? "100%" : "448px");
    setShowMore(!showMore);
  };
  return (
    <div className="max-w-[1440px] mx-auto flex flex-col gap-[40px] justify-center items-center border-t-2 pt-[40px]">
      <span className="text-[36px]">Related Products</span>
      <div
        className="w-[1440px] overflow-hidden duration-300 "
        style={{ height: divHeight }}
      >
        <section className="news">
          <div className="container">
            <div className="section-body">
              <div className="product-list">
                {/*End .product-item*/}
                {products?.map(
                  (item: IProduct, idx: number) => {
                    return (
                      <div
                        key={idx}
                        className="product-item"
                      >
                        <div className="product-image">
                          <img
                            src={item.thumbnail}
                            className="product__thumbnail"
                          />
                          <span className="product-sale">
                            {item.discountPercentage}
                          </span>
                        </div>
                        <div className="product-info">
                          <h3 className="product__name">
                            <a className="product__link">
                              {item.title}
                            </a>
                          </h3>
                          <a className="product__category">
                            {item.category.map((cate) => {
                              return cate.name;
                            })}
                          </a>
                          <div className="product-price">
                            <span className="product-price__new">
                              {item.price -
                                (item.price *
                                  item.discountPercentage) /
                                  100}
                            </span>
                            <span className="product-price__old">
                              {item.price}
                            </span>
                          </div>
                        </div>
                        <div className="product-actions">
                          <Link
                            to={`/product/${item._id}`}
                            className="btn  product-action__quickview"
                          >
                            View Details
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
              </div>
            </div>
          </div>
        </section>
      </div>
      {showMore ? (
        <button
          onClick={handleButtonClick}
          className="text-[#B88E2F]   w-[245px] h-[48px] border border-[#B88E2F] hover:bg-[#B88E2F] hover:text-white duration-300"
        >
          Show More
        </button>
      ) : (
        <button
          onClick={handleButtonClick}
          className="text-[#B88E2F]   w-[245px] h-[48px] border border-[#B88E2F] hover:bg-[#B88E2F] hover:text-white duration-300"
        >
          Show Less
        </button>
      )}
    </div>
  );
};

export default RelatedProducts;
