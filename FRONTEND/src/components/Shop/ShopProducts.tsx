import useCategoryQuery from "@/hooks/useCategoryQuery";
import useProductsCategory from "@/hooks/useProductsCategory";
import { ICategory } from "@/interfaces/category";
import { IProduct } from "@/interfaces/product";
import {
  CategoryContext,
  LimitContext,
  PaginateContext,
} from "@/pages/Shop/shop";
import { Link, useSearchParams } from "react-router-dom";
import Pagination from "../Pagination";
import {
  ChangeEvent,
  useContext,
  useEffect,
  useState,
} from "react";
import { ref } from "joi";

const ShopProducts = () => {
  //
  const [params] = useSearchParams();
  const page = params.get("page");

  const [limit, setLimit] = useContext(LimitContext);
  console.log(limit);
  const [currentPage, setCrurentPage] = useState(page || 1);

  //data category
  const [category] = useContext(CategoryContext);
  const cate = useCategoryQuery(category);
  console.log(category);

  //data product
  const { data, isLoading, isError, refetch } =
    useProductsCategory({
      _page: page,
      _limit: limit,
      id: category,
    });

  useEffect(() => {
    if (page && +page !== currentPage) {
      setCrurentPage(+page);
    }
  }, [page, currentPage]);

  const { product, pagination } = data || {
    product: [],
    pagination: {},
  };

  const [paginate, setPaginate] =
    useContext(PaginateContext);
  useEffect(() => {
    setPaginate(pagination);
    refetch();
  }, [pagination, limit]);
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
              {product.map(
                (item: IProduct, idx: number) => {
                  return (
                    <div key={idx} className="product-item">
                      <div className="product-image">
                        <img
                          src={item.thumbnail}
                          className="product__thumbnail"
                        />
                        <span className="product-sale">
                          {item.discountPercentage} %
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
                            {item.price} $
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
                }
              )}
            </div>
          </div>
        </div>
        <Pagination totalPages={pagination?.totalPage} />
      </section>
    </div>
  );
};

export default ShopProducts;
