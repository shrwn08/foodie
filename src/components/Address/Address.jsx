import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateUserAddress, updateUserWallet } from "../../redux/slice/userSlice";
import { useNavigate } from "react-router-dom"; 
import { clearCart } from "../../redux/slice/cartSlice";

const Address = () => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user.user);
  const cart = useSelector((state)=>state.cart)
  const [address, setAddress] = useState("");
  const navigate = useNavigate();

  const handleAddress = (e) => {
    e.preventDefault();
    if (!address.trim()) return;
    dispatch(updateUserAddress(address))
      .unwrap()
      .then(() => setAddress(""))
      .catch((error) => alert("update Failed ", error));
  };

  const handlePlaceOrderBtn = () =>{
    if (user.wallet < cart.totalPrice) {
      alert("Insufficient balance!");
      return;
    }
    dispatch(updateUserWallet(cart.totalPrice))
    .unwrap()
    .then(() => {
      navigate("/thankyou");
    })
    .catch((error) => {
      alert("Order failed: " + error);
    });

    dispatch(clearCart())
  }

  return (
    <div className="w-3/12 min-w-[520px] bg-white rounded-lg shadow-lg p-6">
      <form className="text-black flex flex-col gap-4" onSubmit={handleAddress}>
        
          <label className="font-semibold text-lg"> Update Address</label>
      
        <input
          type="text"
          className="bg-gray-100 h-24 w-full p-2 border border-gray-300 rounded"
          value={address}
          onChange={(e) => setAddress(e.target.value)}
          required
          style={{ whiteSpace: "wrap", overflow: "auto" }}
        />
        <div className="w-full flex justify-end">
          <button className="h-10 w-24 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition">
            Save
          </button>
        </div>
      </form>

      {/* Display user addresses */}
      <div className="mt-4">
        <h2 className="font-semibold text-lg">Saved Addresses:</h2>
        {user?.address ? (
          <div className="bg-gray-100 p-2 mt-2 rounded text-black font-semibold">
            {user.address}
          </div>
        ) : (
          <p className="text-gray-500">No address saved yet.</p>
        )}
      </div>


      <div className="mt-4 text-black flex flex-col gap-4 w-56 justify-between items-start p-5">
        <p className="text-white font-bold bg-blue-500 w-auto px-2 py-2 rounded-lg">Wallet : ₹ {user.wallet}</p>
        <div> <p className="text-black font-bold">Total Price : <span>{cart.totalPrice}</span> </p></div>
       
        <p className="text-black font-bold">Discount : <span>00</span></p>
        <p className="text-black font-bold">Delivery :<span className="">00</span></p>
        <button onClick={handlePlaceOrderBtn} className="hover:cursor-pointer bg-[#39DB4A] px-2 py-3 rounded-xl">Place Order <span className="font-bold ">₹{cart.totalPrice}</span></button>
      </div>
    </div>
  );
};

export default Address;
