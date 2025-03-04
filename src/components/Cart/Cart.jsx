import { useDispatch, useSelector } from "react-redux";
import { removeFromCart, clearCart } from "../../redux/slice/cartSlice";
import Address from "../Address/Address";

function Cart() {
  const dispatch = useDispatch();
  const { cartItems, totalPrice } = useSelector((state) => state.cart);
console.log("cartItems", cartItems)
  return (
    <div className="flex w-screen h-screen md:min-h-[200px]">
    <div className="w-9/12  bg-white  shadow-lg rounded-lg">
      <h2 className="text-xl font-bold">Your Cart</h2>
      {cartItems.length === 0 ? (
        <p className="text-gray-500">Cart is empty.</p>
      ) : (
        <>
          <ul>
            {cartItems.map((item) => (
              <li key={item._id} className="flex justify-between items-center border-b p-2">
              <div className=" flex justify-start items-center gap-5">
              <img src={item.avatar} className="h-20"/>
                <p className="text-black">{item.dish_name} x {item.quantity}</p>
                <p>₹{item.price * item.quantity}</p>
                </div>
                <button 
                  className="text-red-500" 
                  onClick={() => dispatch(removeFromCart(item._id))}
                >
                  Remove
                </button>
              </li>
            ))}
          </ul>
          <p className="text-lg font-semibold mt-3">Total: ₹{totalPrice}</p>
          <button 
            className="bg-red-500 text-white w-full p-2 mt-3 rounded-md" 
            onClick={() => dispatch(clearCart())}
          >
            Clear Cart
          </button>
        </>
      )}
    </div>
    <Address />
    </div>
  );
}

export default Cart;
