
import ShoppingBagOutlinedIcon from "@mui/icons-material/ShoppingBagOutlined";
import CallOutlinedIcon from "@mui/icons-material/CallOutlined";
import KeyboardArrowDownOutlinedIcon from "@mui/icons-material/KeyboardArrowDownOutlined";
import KeyboardArrowUpOutlinedIcon from "@mui/icons-material/KeyboardArrowUpOutlined";
import { Link, useNavigate } from "react-router-dom";
import "./navbar.css";
import { useState } from "react";
import logo from "../../assets/svg/foodie_logo.svg";
import { useDispatch, useSelector } from "react-redux";
import { logoutUser } from "../../redux/slice/userSlice";

function Navbar() {
  const [serviceBtn, setServiceBtn] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { user, isAuthenticated} =
    useSelector((state) => state.user) 



  const {totalQuantity} = useSelector(state=> state.cart)

  const handleServiceBtn = () => {
    setServiceBtn((prev) => !prev);
  };

  const handleLogout =  () => {
     dispatch(logoutUser());
    
    navigate("/login");
  };

  
  return (
    <div className="w-full h-12 flex justify-center items-center">
      <div className="w-11/12 sm:w-5/6 h-full  flex justify-between items-center">
        <Link to="/" className="w-auto px-2 flex justify-center items-center">
          <div className="w-8 h-8 bg-[#39DB4A] text-white font-bold text-3xl flex justify-center items-center rounded-md">
            <img src={logo} alt="logo" />
          </div>
          <p className="font-bold text-2xl text-black">oodie</p>
        </Link>
        <div className="flex justify-between items-center h-12 w-56 font-semibold">
          <div>
            <Link to="/" className="home_link">
              Home
            </Link>{" "}
          </div>

          <div className="service_link text-black hover:text-[#39DB4A]">
            <div type="button" onClick={handleServiceBtn}>
              Services{" "}
              {!serviceBtn ? (
                <KeyboardArrowDownOutlinedIcon sx={{ color: "#39DB4A" }} />
              ) : (
                <KeyboardArrowUpOutlinedIcon sx={{ color: "#39DB4A" }} />
              )}
            </div>
            {serviceBtn && (
              <div className="h-auto w-28 absolute z-10 bg-white rounded-lg py-1 ">
                <Link to="/dine-out">
                  <p className="h-8 w-full text-center border-b-2 border-[#39DB4A] text-black hover:bg-[#39DB4A] hover:text-white">
                    Dine Out
                  </p>
                </Link>
                <Link to="/home-delivery">
                  <p className="h-8 w-full text-center  hover:bg-[#39DB4A] text-black hover:text-white">
                    Home Delivery
                  </p>
                </Link>
              </div>
            )}
          </div>
          <div>
            <Link to="/offers" className="offers_link">
              Offers
            </Link>
          </div>
        </div>
        <div className="max-w-2/5 px-2 flex justify-between items-center gap-5">
         
          <button className="relative" onClick={()=>navigate("/cart")}>
            {" "}
            <ShoppingBagOutlinedIcon
              fontSize="medium"
              sx={{ color: "black" }}
            />{" "}
            <span className="h-4 w-4 bg-[#39DB4A] absolute top-[-5px] right-[-5px] font-semibold text-center rounded-full flex justify-center items-center">
             {totalQuantity}
            </span>
          </button>

          <button className="bg-[#39DB4A] w-28 h-10 text-white font-semibold rounded-lg hover:rounded-full">
            {" "}
            <CallOutlinedIcon fontSize="medium" sx={{ color: "white" }} />{" "}
            Contact
          </button>
          {!isAuthenticated? (
            <div className="bg-[#39DB4A] w-28 h-10  font-semibold rounded-lg hover:rounded-full flex justify-center items-center">
              <Link to="/login" style={{ color: "white" }}>
                Log in
              </Link>
            </div>
          ) : (
            <div className="flex justify-between items-center">
              <button
                className="text-white bg-[#39DB4A] w-28 h-10 font-semibold rounded-lg hover:rounded-full flex justify-center items-center hover:cursor-pointer"
                onClick={handleLogout}
              >
                Log out
              </button>
              {(isAuthenticated) && (
                <div className="bg-none w-auto flex justify-between items-center gap-5 px-3">
                <p className="text-black">{user && user.name}</p>
                <img
                  className="h-8 w-8 rounded-full "
                  src={user && user.avatar}
                  alt="avatar"
                />
              </div>
              )}
             
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
export default Navbar;
