import PlayCircleFilledWhiteOutlinedIcon from "@mui/icons-material/PlayCircleFilledWhiteOutlined";
import HeroImage from '../../assets/image/banner-image.png'

function Hero() {
  return (
    <div className="w-full min-h-[520px] flex justify-center items-center mt-5 ">
    <div className="w-11/12 md:w-5/6 h-auto py-3 flex justify-center   flex-col flex-wrap-reverse md:flex-row md:flex-wrap items-center  ">
        <div className="w-full md:w-1/2 h-full flex justify-start items-center ">
          <div className="w-full  h-full flex justify-start items-center flex-col gap-10 ">
            <div className="w-full  text-6xl flex flex-col items-center md:items-start justify-center md:text-5xl  lg:text-xl  font-bold text-black">
              <p className="">Dive into Delights </p>
              <p>
                Of Delectable <span className="text-[#39DB4A]">Food</span>
              </p>
            </div>

            <div className="text-2xl sm:text-xl flex md:block justify-center items-center flex-col text-gray-600 w-full ">
              <p>Where Each Plate Weaves a Story of Culinary</p>
              <p> Mastery and Passionate Craftsmanship</p>
            </div>

            <div className="w-1/3 md:w-full flex justify-between items-center  gap-5">
              <button className="bg-[#39DB4A] h-12 w-32 text-white rounded-lg hover:rounded-full text-medium">
                Order Now
              </button>
              <p className="text-black">Watch Video</p>
              <PlayCircleFilledWhiteOutlinedIcon
                fontSize="large"
                sx={{ color: "black" }}
              />
            </div>
          </div>
        </div>
        <div className="w-full md:w-1/2 h-full flex justify-center md:justify-end items-center">
            <img src={HeroImage} alt="hero" className="h-2/3"/>
        </div>
      </div>
    </div>
  );
}

export default Hero;
