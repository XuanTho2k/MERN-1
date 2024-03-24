import React, { useState } from "react";
import { Link } from "react-router-dom";

const RelatedProducts = () => {
  const a = Array.from({ length: 8 }, (_, i) => i + 1);

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
                {a.map(() => {
                  return (
                    <div key="" className="product-item">
                      <div className="product-image">
                        <img
                          src=""
                          className="product__thumbnail"
                        />
                        <span className="product-sale">
                          ""
                        </span>
                      </div>
                      <div className="product-info">
                        <h3 className="product__name">
                          <a className="product__link">
                            ""
                          </a>
                        </h3>
                        <a className="product__category">
                          ""
                        </a>
                        <div className="product-price">
                          <span className="product-price__new">
                            ""
                          </span>
                          <span className="product-price__old">
                            ''
                          </span>
                        </div>
                      </div>
                      <div className="product-actions">
                        <Link
                          to=""
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
                })}
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
