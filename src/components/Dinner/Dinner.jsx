import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { fetchCategoryProducts } from "../../redux/slice/productSlice";
import FavoriteIcon from "@mui/icons-material/Favorite";

function Dinner() {
  const dispatch = useDispatch();
  const { categories, isLoading, isError } = useSelector(
    (state) => state.products
  );
  const { token } = useSelector((state) => state.user);

  useEffect(() => {
    dispatch(fetchCategoryProducts("dinner"));
  }, [dispatch]);

  {
    isLoading.dinner && <p>Loading products...</p>;
  }
  {
    isError && <p>Error fetching products.</p>;
  }
  const handleAddToCartBtn = () => {
    if (!token) {
      return alert("Please login to add to cart");
    }
  };
  return (
    <div className="w-screen min-h-[520px] flex justify-center items-center flex-col gap-5 mt-5">
      <div className="w-5/6 h-full justify-center items-center flex flex-col">
        <p className="text-4xl font-bold text-black">Dinner Menu</p>
        <p className="font-[Hurricane] text-2xl text-black">
          A delicious food of Foodie
        </p>
      </div>
      <div className="w-5/6 h-full  grid grid-cols-4 gap-y-5">
        {categories.dinner &&
          categories.dinner.map((product) => (
            <div
              className="card w-60 h-84   rounded-xl overflow-hidden flex flex-col items-center bg-white border-black"
              key={product._id}
            >
              <div className="image h-36 w-full">
                <img src={product.avatar} className="h-36 w-full " />
              </div>
              <div className="h-full w-full flex flex-col gap-y-1 ">
                <div className="text-base text-black font-semibold w-9/12 px-2">
                  {product.dish_name}
                </div>
                <div className="text-sm text-gray-800 font-semibold  px-2 w-full">
                  {product.description.substring(0, 40)}...
                </div>
                <div className="text-sm text-black font-semibold w-9/12 px-2">
                  {product.category}
                </div>
                <div className=" w-11/12 text-right flex justify-between px-2">
                  <p className="text-xl text-black font-semibold">
                    ₹ {product.price}
                  </p>
                  <span className="py-1 px-2 rounded-md text-sm text-white font-semibold bg-[#39DB4A]">
                    {product.rating} <FavoriteIcon sx={{ color: "Red" }} />
                  </span>
                </div>
                <div className="w-full h-10 flex justify-center items-center">
                  <button
                    className="bg-[#39DB4A] w-11/12 h-full rounded-md text-white hover:cursor-pointer font-semibold"
                    onClick={handleAddToCartBtn}
                  >
                    Add to Cart
                  </button>
                </div>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
}

export default Dinner;
