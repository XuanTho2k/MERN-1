import React from "react";
import { Link } from "react-router-dom";

const ShopProducts = () => {
  const a = Array.from({ length: 20 }, (_, i) => i + 1);

  return (
    <div>
      <section className="news mt-[80px]">
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
                        <a className="product__link">""</a>
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
            <div className="flex flex-row gap-[30px] justify-center items-center mt-[80px]">
              <span className="bg-[#F9F1E7] px-[2rem] text-[20px] py-[1rem] hover:bg-[#B88E2F] hover:text-white  border rounded-[1rem] duration-300">
                1
              </span>
              <span className="bg-[#F9F1E7] px-[2rem] text-[20px] py-[1rem] hover:bg-[#B88E2F] hover:text-white  border rounded-[1rem] duration-300">
                2
              </span>
              <span className="bg-[#F9F1E7] px-[2rem] text-[20px] py-[1rem] hover:bg-[#B88E2F] hover:text-white  border rounded-[1rem] duration-300">
                3
              </span>
              <span className="bg-[#F9F1E7] px-[2rem] text-[20px] py-[1rem] hover:bg-[#B88E2F] hover:text-white  border rounded-[1rem] duration-300">
                Next
              </span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ShopProducts;
