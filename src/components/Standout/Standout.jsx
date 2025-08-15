import ArrowBackIosOutlinedIcon from "@mui/icons-material/ArrowBackIosOutlined";
import ArrowForwardIosOutlinedIcon from "@mui/icons-material/ArrowForwardIosOutlined";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import Fattoush_salad from "../../assets/image/Fattoush-salad.png";
import StarOutlinedIcon from "@mui/icons-material/StarOutlined";
// import {useEffect, useState} from 'react';
// import axios from 'axios'

function Standout() {
//   const [products, setProducts] = useState([]);


//   useEffect(()=>{
//     const fetchAllProducts = async () => {
//       try{
//       const response = await axios.get('http://localhost:3000/auth/products');
//       setProducts(response.data.products)
//       console.log(response.data.products);
//     }catch(error){
//       console.error("failed to fetch all products", error);
//     }
// }
//     fetchAllProducts();
//   },[]);

  return (
    <div className="w-full h-auto flex justify-center items-center py-5">
      <div className="w-full md:w-5/6 h-full px-3 md:px-0">
        <p className="text-red-500 font-semibold text-2xl md:text-base text-center md:text-left">SPECIAL DISH</p>
        <div className="flex md:justify-between justify-center  items-center">
          <div className="text-black  font-bold text-6xl md:text-5xl">
            <p>Standout Dishes </p>
            <p>From Our Menu</p>
          </div>
          <div className=" gap-5 hidden md:flex">
            <div className="w-12 h-12 rounded-full bg-gray-300 flex justify-center items-center">
              <ArrowBackIosOutlinedIcon />
            </div>
            <div className="w-12 h-12 rounded-full bg-gray-300 flex justify-center items-center">
              <ArrowForwardIosOutlinedIcon />
            </div>
          </div>
        </div>
        <div className="w-full h-auto   mt-5 flex justify-center items-center">
          <div className="flex justify-between flex-wrap flex-row items-center gap-8">
            <div className="w-72 h-72 md:h-56 md:w-56 bg-white rounded-2xl relative overflow-hidden flex flex-col justify-center items-center drop-shadow-xl">
              <div
                className="absolute w-10 h-10 top-0 right-0 bg-[#39DB4A] flex justify-center items-center"
                style={{ borderRadius: "0 1rem 0 1rem" }}
              >
                <FavoriteBorderOutlinedIcon />
              </div>
              <div className="h-28 w-28  rounded-full">
                <img src={Fattoush_salad} alt="Fattoush_salad" />
              </div>
              <div className="w-4/5 flex flex-col justify-center items-start">
                <p className="text-black text-lg font-semibold ">
                  Fattoush Salad
                </p>
                <p className="text-gray-400 text-md font-normal">
                  Description of the item
                </p>
                <div className=" w-full text-md text-black font-normal flex justify-between items-center">
                  <p>₹140.00</p>
                  <p>
                    <StarOutlinedIcon fontSize="medium" /> 4.9
                  </p>
                </div>
              </div>
            </div>

            <div className="w-72 h-72 md:h-56 md:w-56 bg-white rounded-2xl relative overflow-hidden flex flex-col justify-center items-center drop-shadow-xl">
              <div
                className="absolute w-10 h-10 top-0 right-0 bg-[#39DB4A] flex justify-center items-center"
                style={{ borderRadius: "0 1rem 0 1rem" }}
              >
                <FavoriteBorderOutlinedIcon />
              </div>
              <div className="h-28 w-28  rounded-full">
                <img src={Fattoush_salad} alt="Fattoush_salad" />
              </div>
              <div className="w-4/5 flex flex-col justify-center items-start">
                <p className="text-black text-lg font-semibold ">
                  Fattoush Salad
                </p>
                <p className="text-gray-400 text-md font-normal">
                  Description of the item
                </p>
                <div className=" w-full text-md text-black font-normal flex justify-between items-center">
                  <p>₹140.00</p>
                  <p>
                    <StarOutlinedIcon fontSize="medium" /> 4.9
                  </p>
                </div>
              </div>
            </div>

            <div className="w-72 h-72 md:h-56 md:w-56 bg-white rounded-2xl relative overflow-hidden flex flex-col justify-center items-center drop-shadow-xl">
              <div
                className="absolute w-10 h-10 top-0 right-0 bg-[#39DB4A] flex justify-center items-center"
                style={{ borderRadius: "0 1rem 0 1rem" }}
              >
                <FavoriteBorderOutlinedIcon />
              </div>
              <div className="h-28 w-28  rounded-full">
                <img src={Fattoush_salad} alt="Fattoush_salad" />
              </div>
              <div className="w-4/5 flex flex-col justify-center items-start">
                <p className="text-black text-lg font-semibold ">
                  Fattoush Salad
                </p>
                <p className="text-gray-400 text-md font-normal">
                  Description of the item
                </p>
                <div className=" w-full text-md text-black font-normal flex justify-between items-center">
                  <p>₹140.00</p>
                  <p>
                    <StarOutlinedIcon fontSize="medium" /> 4.9
                  </p>
                </div>
              </div>
            </div>
            <div className="w-72 h-72 md:h-56 md:w-56 bg-white rounded-2xl relative overflow-hidden flex flex-col justify-center items-center drop-shadow-xl">
              <div
                className="absolute w-10 h-10 top-0 right-0 bg-[#39DB4A] flex justify-center items-center"
                style={{ borderRadius: "0 1rem 0 1rem" }}
              >
                <FavoriteBorderOutlinedIcon />
              </div>
              <div className="h-28 w-28  rounded-full">
                <img src={Fattoush_salad} alt="Fattoush_salad" />
              </div>
              <div className="w-4/5 flex flex-col justify-center items-start">
                <p className="text-black text-lg font-semibold ">
                  Fattoush Salad
                </p>
                <p className="text-gray-400 text-md font-normal">
                  Description of the item
                </p>
                <div className=" w-full text-md text-black font-normal flex justify-between items-center">
                  <p>₹140.00</p>
                  <p>
                    <StarOutlinedIcon fontSize="medium" /> 4.9
                  </p>
                </div>
              </div>
            </div>

            </div>
        </div>


      </div>
    </div>
  );
}

export default Standout;
