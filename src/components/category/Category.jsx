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
    <div className="w-full h-auto py-3  flex justify-center items-center mt-5">
      <div className="w-full md:w-5/6   flex flex-col justify-center items-center gap-5">
        <p className="text-red-400 font-semibold text-4xl md:text-xl">CUSTOMER FAVORITES </p>
        <p className="text-5xl text-black font-bold md:text-3xl">Popular Categories</p>
        <div className="w-full flex  justify-center flex-row flex-wrap items-center gap-5">
          <div className="rounded-xl  bg-white w-72 h-72 md:w-48 md:h-48 flex flex-col justify-center items-center gap-1 drop-shadow-xl hover:cursor-pointer"  onClick={handleLunchBtn}
              type="button">
            <div
              className="w-36 h-36 md:h-20 md:w-20 rounded-full overflow-hidden bg-blue-300 "
             
            >
              <img src={BurgerIcon} alt="burger-icon" />
            </div>
            <p className="text-black font-semibold text-2xl md:text-base">Lunch</p>
            <p className="text-gray-600 text-2xl md:text-base">(80+ Dishes)</p>
          </div>
          <div
            className="rounded-xl bg-white w-72 h-72 md:w-48 md:h-48 flex flex-col justify-center items-center gap-1 drop-shadow-xl  hover:cursor-pointer"
            type="button"
            onClick={handleBreakfastBtn}
          >
            <div className="w-36 h-36 md:h-20 md:w-20 rounded-full overflow-hidden bg-blue-300">
              <img src={SandwichIcon} alt="sandwich-icon" />
            </div>
            <p className="text-black font-semibold text-2xl md:text-base">Break Fast</p>
            <p className="text-gray-600 text-2xl md:text-base">(80+ Dishes)</p>
          </div>
          <div className="rounded-xl bg-white  w-72 h-72 md:w-48 md:h-48 flex flex-col justify-center items-center gap-1 drop-shadow-xl hover:cursor-pointer" type='button' onClick={handleDessertBtn}>
            <div className="w-36 h-36 md:h-20 md:w-20 rounded-full overflow-hidden bg-blue-300">
              <img src={DessertIcon} alt="dessert-icon" />
            </div>
            <p className="text-black font-semibold text-2xl md:text-base">Dessert</p>
            <p className="text-gray-600 text-2xl md:text-base">(80+ Dishes)</p>
          </div>
          <div
            className="rounded-xl bg-white  w-72 h-72 md:w-48 md:h-48 flex flex-col justify-center items-center gap-1 drop-shadow-xl hover:cursor-pointer"
            type="button"
            onClick={handleDinnerBtn}
          >
            <div className="w-36 h-36 md:h-20 md:w-20 rounded-full overflow-hidden bg-blue-300">
              <img src={Browser} alt="Browser-icon" />
            </div>
            <p className="text-black font-semibold text-2xl md:text-base">Dinner</p>
            <p className="text-gray-600 text-2xl md:text-base">(80+ Dishes)</p>
          </div>
          <div
            className="rounded-xl bg-white  w-72 h-72 md:w-48 md:h-48 flex flex-col justify-center items-center gap-1 drop-shadow-xl hover:cursor-pointer"
            type="button"
            onClick={handleMenuBtn}
          >
            <div className="w-36 h-36 md:h-20 md:w-20 rounded-full overflow-hidden bg-blue-300">
              <img src={Browser} alt="Browser-icon" />
            </div>
            <p className="text-black font-semibold text-2xl md:text-base">Browser All</p>
            <p className="text-gray-600 text-2xl md:text-base">(80+ Dishes)</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Category;
