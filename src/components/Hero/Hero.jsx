import PlayCircleFilledWhiteOutlinedIcon from "@mui/icons-material/PlayCircleFilledWhiteOutlined";
import HeroImage from '../../assets/image/banner-image.png'

function Hero() {
  return (
    <div className="w-full min-h-[520px] flex justify-center items-center ">
      <div className="w-5/6 h-1/3 flex justify-center items-center  ">
        <div className="w-1/2 h-full flex justify-start items-center ">
          <div className="w-2/3 h-full flex justify-center items-start flex-col gap-10">
            <div className="w-full text-4xl font-bold text-black">
              <p className="w-full">Dive into Delights </p>
              <p>
                Of Delectable <span className="text-[#39DB4A]">Food</span>
              </p>
            </div>

            <div className="text-medium text-gray-600 w-full">
              <p>Where Each Plate Weaves a Story of Culinary</p>
              <p> Mastery and Passionate Craftsmanship</p>
            </div>

            <div className="w-full flex justify-between items-center  gap-5">
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
        <div className="w-1/2 h-full flex justify-end items-center">
            <img src={HeroImage} alt="hero" className="h-2/3"/>
        </div>
      </div>
    </div>
  );
}

export default Hero;
