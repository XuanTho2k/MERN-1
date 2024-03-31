import React, { ChangeEvent, useContext } from "react";
import styles from "./ShopBanner.module.css";
import { useQuery } from "@tanstack/react-query";
import CategoryService from "@/services/category";
import {
  CategoryContext,
  LimitContext,
  PaginateContext,
} from "@/pages/Shop/shop";
import { ICategory } from "@/interfaces/category";
import useCategoryQuery from "@/hooks/useCategoryQuery";

const ShopBanner = () => {
  const [category, setCategory] =
    useContext(CategoryContext);
  const { data: dataCategories, refetch } =
    useCategoryQuery();
  const [filter, setFilter] = React.useState(true);
  const Btn_filter = () => {
    setFilter(!filter);
  };

  const handleCategory = (id: string | number) => {
    setCategory(id);
  };

  const [paginate, setPaginate] =
    useContext(PaginateContext);

  const [limit, setLimit] = useContext(LimitContext);
  //goi lai api voi limit moi va trang dau
  const handleLimitChange = (e: ChangeEvent<any>) => {
    setLimit(e.target.value === "" ? 1 : e.target.value);
    refetch();
  };
  return (
    <div>
      <section className=" banner  relative">
        <div className="z-10 absolute  left-[700px] top-[150px] text-[48px]">
          Shop
        </div>
        <div className="z-10 absolute left-[700px] text-[16px] top-[250px]">
          Home {">"} Shop
        </div>
        <img
          src="/assets/banners/ShopBanner.svg"
          className="banner__img z-1000 opacity-50  "
        />
        <div className="absolute bottom-0 h-[100px] bg-[#F9F1E7] w-full ">
          <div className="flex flex-row gap-[30px] mx-[120px] my-[40px]">
            <div className="flex flex-row gap-[15px] relative ">
              <img src="/assets/icons/Vector.svg" alt="" />
              <button
                onClick={Btn_filter}
                className="text-[20px]"
              >
                Filter
              </button>
              <div
                className={`${styles.arrow_filter} ${
                  filter ? "hidden" : ""
                }`}
              ></div>
              <div
                className={` ${styles.list_filter_child}  ${
                  filter ? "" : styles.active
                }`}
              >
                <div
                  className={`${styles.list_filter} flex flex-row gap-[200px]`}
                >
                  <div>
                    <p className="text-[30px] mb-2">
                      Categories
                    </p>
                    <ul className="flex flex-wrap gap-[10px] max-w-[170px]">
                      {dataCategories?.map(
                        (item: ICategory, idx) => {
                          return (
                            <li key={idx}>
                              <button
                                onClick={() =>
                                  handleCategory(item._id)
                                }
                                className="border p-3 rounded-lg text-[#444] bg-[#f3f4f6] focus:border-[#B88E2F] focus:text-[#B88E2F] focus:bg-[#fef2f2]"
                              >
                                {item.name}
                              </button>
                            </li>
                          );
                        }
                      )}
                      <li>
                        <button className="border p-3 rounded-lg text-[#444] bg-[#f3f4f6] focus:border-[#B88E2F] focus:text-[#B88E2F] focus:bg-[#fef2f2]">
                          ALL
                        </button>
                      </li>
                    </ul>
                  </div>
                  <div>
                    <p className="text-[30px] mb-2">
                      Brand
                    </p>
                    <ul className="flex flex-wrap gap-[10px] max-w-[170px]">
                      <li>
                        <button className="border p-3 rounded-lg text-[#444] bg-[#f3f4f6] focus:border-[#B88E2F] focus:text-[#B88E2F] focus:bg-[#fef2f2]">
                          Iphone
                        </button>
                      </li>
                      <li>
                        <button className="border p-3 rounded-lg text-[#444] bg-[#f3f4f6] focus:border-[#B88E2F] focus:text-[#B88E2F] focus:bg-[#fef2f2]">
                          fdfsdfdsfdsfs
                        </button>
                      </li>
                      <li>
                        <button className="border p-3 rounded-lg text-[#444] bg-[#f3f4f6] focus:border-[#B88E2F] focus:text-[#B88E2F] focus:bg-[#fef2f2]">
                          fdsdfasdfasdf
                        </button>
                      </li>
                    </ul>
                  </div>
                  <div>
                    <p className="text-[30px] mb-2 w-[220px]">
                      Price
                    </p>
                    <ul className="flex flex-wrap gap-[10px] max-w-[220px]">
                      <li>
                        <button className=" w-auto border p-3 rounded-lg text-[#444] bg-[#f3f4f6] focus:border-[#B88E2F] focus:text-[#B88E2F] focus:bg-[#fef2f2]">
                          99-199$
                        </button>
                      </li>
                      <li>
                        <button className="border p-3 rounded-lg text-[#444] bg-[#f3f4f6] focus:border-[#B88E2F] focus:text-[#B88E2F] focus:bg-[#fef2f2]">
                          299-399$
                        </button>
                      </li>
                      <li>
                        <button className="border p-3 rounded-lg text-[#444] bg-[#f3f4f6] focus:border-[#B88E2F] focus:text-[#B88E2F] focus:bg-[#fef2f2]">
                          999-1999$
                        </button>
                      </li>
                    </ul>
                  </div>
                </div>
                <div
                  className={`${styles.btn_filter_group} flex flex-row justify-between`}
                >
                  <button
                    onClick={Btn_filter}
                    className="w-[49%] m-2 text-[18px] text-[#B88E2F] p-2 bg-[#f0efeb] hover:bg-[#e7e3d4] active:bg-[#e8dcaf]"
                  >
                    Close
                  </button>
                  <button className="w-[49%] m-2 text-[18px] text-white p-2 bg-[#b88e2f]  active:scale-90 duration-300">
                    Results
                  </button>
                </div>
              </div>
            </div>
            <img src="/assets/icons/dotdot.svg" alt="" />
            <img src="/assets/icons/idk.svg" alt="" />
            <img
              className="w-[5px]"
              src="/assets/Line.svg"
              alt=""
            />
            <span className=" ">
              Showing 1-{limit} of {paginate.totalItems}{" "}
              results
            </span>
            <div className="flex flex-row gap-[15px] ml-[520px]">
              <span>Show</span>
              <span className="bg-white opacity-50 ">
                <input
                  type="text"
                  value={limit}
                  className="w-[20px] p-1"
                  onChange={handleLimitChange}
                />
              </span>
              <span>Short by</span>
              <span className="bg-white opacity-50 px-">
                Default
              </span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ShopBanner;
