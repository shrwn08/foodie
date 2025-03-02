import BurgerIcon from "../../assets/image/burger-image.png";
import SandwichIcon from "../../assets/image/sandwich.png";
import DessertIcon from "../../assets/image/dessert.png";
import Browser from "../../assets/image/browser.png";
import { useNavigate } from "react-router-dom";


function Category() {
  
  const navigateMenu = useNavigate();
  const navigateBreakfast = useNavigate();
  const navigateLunch = useNavigate();
  const navigateDinner = useNavigate();
  const navigateDessert = useNavigate();

  const handleMenuBtn = () => {
    navigateMenu("/menu");
    
  };

  const handleBreakfastBtn = () => {
    navigateBreakfast("/breakfast");
  
  };

  const handleLunchBtn = () => {
    navigateLunch("/lunch");

  };

  const handleDinnerBtn = () => {
    navigateDinner("/dinner");
   
  };

  const handleDessertBtn = () => {
    navigateDessert("/dessert");
   
  };

  return (
    <div className="w-full h-[520px]  flex justify-center items-center">
      <div className="w-5/6  flex flex-col justify-center items-center gap-5">
        <p className="text-red-400 font-semibold">CUSTOMER FAVORITES </p>
        <p className="text-3xl text-black font-bold">Popular Categories</p>
        <div className="flex justify-between items-center gap-5">
          <div className="rounded-xl bg-white w-48 h-48 flex flex-col justify-center items-center gap-1 drop-shadow-xl hover:cursor-pointer"  onClick={handleLunchBtn}
              type="button">
            <div
              className="h-20 w-20 rounded-full overflow-hidden bg-blue-300 "
             
            >
              <img src={BurgerIcon} alt="burger-icon" />
            </div>
            <p className="text-black font-semibold ">Lunch</p>
            <p className="text-gray-600">(80+ Dishes)</p>
          </div>
          <div
            className="rounded-xl bg-white w-48 h-48 flex flex-col justify-center items-center gap-1 drop-shadow-xl  hover:cursor-pointer"
            type="button"
            onClick={handleBreakfastBtn}
          >
            <div className="h-20 w-20 rounded-full overflow-hidden bg-blue-300">
              <img src={SandwichIcon} alt="sandwich-icon" />
            </div>
            <p className="text-black font-semibold ">Break Fast</p>
            <p className="text-gray-600">(80+ Dishes)</p>
          </div>
          <div className="rounded-xl bg-white w-48 h-48 flex flex-col justify-center items-center gap-1 drop-shadow-xl hover:cursor-pointer" type='button' onClick={handleDessertBtn}>
            <div className="h-20 w-20 rounded-full overflow-hidden bg-blue-300">
              <img src={DessertIcon} alt="dessert-icon" />
            </div>
            <p className="text-black font-semibold ">Dessert</p>
            <p className="text-gray-600">(80+ Dishes)</p>
          </div>
          <div
            className="rounded-xl bg-white w-48 h-48 flex flex-col justify-center items-center gap-1 drop-shadow-xl hover:cursor-pointer"
            type="button"
            onClick={handleDinnerBtn}
          >
            <div className="h-20 w-20 rounded-full overflow-hidden bg-blue-300">
              <img src={Browser} alt="Browser-icon" />
            </div>
            <p className="text-black font-semibold ">Dinner</p>
            <p className="text-gray-600">(80+ Dishes)</p>
          </div>
          <div
            className="rounded-xl bg-white w-48 h-48 flex flex-col justify-center items-center gap-1 drop-shadow-xl hover:cursor-pointer"
            type="button"
            onClick={handleMenuBtn}
          >
            <div className="h-20 w-20 rounded-full overflow-hidden bg-blue-300">
              <img src={Browser} alt="Browser-icon" />
            </div>
            <p className="text-black font-semibold ">Browser All</p>
            <p className="text-gray-600">(80+ Dishes)</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Category;
