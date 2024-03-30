import { useProductQuery } from "@/hooks/useProductsQuery";
import { useLocalStorage } from "@/hooks/useStorage";
import { ICategory } from "@/interfaces/category";
import { IProduct } from "@/interfaces/product";
import CartService from "@/services/cart";
import {
  useMutation,
  useQueryClient,
} from "@tanstack/react-query";
import { Link } from "react-router-dom";
type ProductListProp = {
  ratingProp: number;
};

const ProductList = (rating?: ProductListProp) => {
  // add to cart btn
  const queryClient = useQueryClient();
  const [user] = useLocalStorage("user", {});
  const userId = user?.user?._id;
  const { mutate } = useMutation({
    mutationFn: async ({
      productId,
      quantity,
    }: {
      productId: string | number;
      quantity: number;
    }) => {
      const { data } = CartService.addItem({
        userId,
        productId,
        quantity,
      });
      return data;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["CARTS_KEY", userId],
      });
    },
  });

  //lay products tu api
  const {
    data: products,
    isLoading,
    isError,
  } = useProductQuery();
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
                          {prod.category.map(
                            (cate: ICategory) => {
                              return cate.name;
                            }
                          )}
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
                          to={`/product/${prod._id}`}
                          className="btn  product-action__quickview"
                        >
                          View Details
                        </Link>
                        <button
                          onClick={() =>
                            mutate({
                              productId: prod._id,
                              quantity: 1,
                            })
                          }
                          className="btn product-action__addtocart"
                        >
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
