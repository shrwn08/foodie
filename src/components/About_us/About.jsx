import Chef from "../../assets/image/chef.png";
import StarOutlinedIcon from '@mui/icons-material/StarOutlined';
import Girl1 from '../../assets/image/g2.jpg'
import Girl2 from '../../assets/image/g3.jpg'
import Girl3 from '../../assets/image/g4.jpg'

function About() {
  return (
    <div className="h-[520px] w-full flex justify-center items-center mb-5 pb-5">
      <div className="w-5/6 flex justify-between items-center px-28">
        <div className="chef relative w-full flex justify-center items-center">
          <div
            className="h-56 w-[350px] bg-[#39DB4A] absolute "
            style={{
              bottom: "0",
              left: "50%",
              transform: "translate(-50%, 0)",
              borderTopLeftRadius: "100%",
              borderTopRightRadius: "100%",
              borderBottomLeftRadius: "50%",
            }}
          ></div>
          <img src={Chef} alt="chef-img" className="h-96 relative z-10" />
        </div>

        <div className="about w-full ">
          <div>
            <p className="text-red-700 text-semibold">TESTIMONIAL</p>
            <p className="text-5xl text-black font-bold">What Our Customers Say About Us</p>
            <p className="text-medium text-gray-500 font-normal">“I had the pleasure of dining at Foodi last night, and I am still raving about the experience! The attention to detail in presentation and service was impeccable”</p>
            <div className="flex justify-start items-center gap-5">
                <div className="img flex justify-start items-center ">
                    <img src={Girl1} alt="girl_1" className="h-10 w-10 rounded-full border-4 border-white"/>
                    <img src={Girl2} alt="girl_2" className="h-10 w-10 rounded-full border-4 border-white"/>
                    <img src={Girl3} alt="girl_3" className="h-10 w-10 rounded-full border-4 border-white"/>
                </div>
                <div className="g">
                    <p className="text-black font-bold ">Customer Feedback</p>
                    <p className="text-black font-semibold "><StarOutlinedIcon /> 4.9  (18.6k Reviews)</p>
                </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
