import instance from "@/configs/axios";
import useCategoryQuery from "@/hooks/useCategoryQuery";
import useProductsCategory from "@/hooks/useProductsCategory";
import { ICategory } from "@/interfaces/category";
import { IProduct } from "@/interfaces/product";
import { CategoryContext } from "@/pages/Shop/shop";
import CategoryService from "@/services/category";
import { getAllProducts } from "@/services/product";
import axios from "axios";
import React, { useContext } from "react";
import { Link } from "react-router-dom";

const ShopProducts = () => {
  const [category] = useContext(CategoryContext);
  console.log(category);
  const { data, isLoading, isError } =
    useProductsCategory(category);

  const cate = useCategoryQuery(category);

  if (isLoading) return <div>Loading ....</div>;
  if (isError) return <div>isError</div>;
  return (
    <div>
      <section className="news mt-[80px]">
        <div className="container">
          <div className="section-heading">
            <h2 className="section-heading__title">
              {cate.data?.name}
            </h2>
          </div>
          <div className="section-body">
            <div className="product-list">
              {/*End .product-item*/}
              {data.map((item: IProduct, idx: number) => {
                return (
                  <div key={idx} className="product-item">
                    <div className="product-image">
                      <img
                        src={item.thumbnail}
                        className="product__thumbnail"
                      />
                      <span className="product-sale">
                        ""
                      </span>
                    </div>
                    <div className="product-info">
                      <h3 className="product__name">
                        <a className="product__link">
                          {item.title}
                        </a>
                      </h3>
                      <a className="product__category">
                        {item.category.map(
                          (cate: ICategory) => {
                            return cate.name;
                          }
                        )}
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
