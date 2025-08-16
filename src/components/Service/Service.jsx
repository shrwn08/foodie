import Catering from '../../assets/svg/Catering.svg'
import Fast from '../../assets/svg/Fast.svg'
import Cart from '../../assets/svg/Cart.svg'
import Gift from '../../assets/svg/Gift.svg'

function Service() {
  return (
    <div className="w-full h-auto py-5 flex justify-center items-center">
      <div className="w-11/12 md:w-5/6 h-full flex justify-center items-center flex-col md:flex-row">
        <div className="service flex flex-col justify-center items-center md:items-start gap-5 w-full ">
            <p className="text-red-600 md:text-base text-3xl font-bold md:text-left text-center  w-full">Our Story & Services</p>
            <p className="text-black text-4xl  md:text-xl  font-bold md:text-left text-center  w-full">Our Culinary Journey And Services</p>
            <p className="text-gray-500 
            text-3xl md:text-xl font-semibold  md:text-left text-center  w-full">Rooted in passion, we curate unforgettable dining experiences and offer exceptional services, blending culinary artistry with warm hospitality.</p>
            <button className="bg-[#39DB4A] w-40 h-20 md:w-28 md:h-12 rounded-lg hover:rounded-full  font-bold md:text-base text-3xl">Explore</button>
        </div>
        <div className="cards w-full mt-5">
            <div className="card-container flex justify-center items-center gap-6">
                <div className="h-72 w-72 md:h-46 md:w-46 bg-white rounded-2xl drop-shadow-2xl gap-3 flex flex-col justify-center items-center">
                        <img src={Catering} alt='Catering' className='md:h-10 h-14'/>
                        <p className='text-[#39DB4A] font-semibold md:text-base text-2xl'>CATERING</p>
                        <p className='text-[#90BD95]  md:text-sm text-base text-center '>
                        Delight your guests with our flavors and  presentation
                        </p>
                </div>
                <div className="h-72 w-72 md:h-46 md:w-46 bg-white rounded-2xl drop-shadow-2xl gap-3 flex flex-col justify-center items-center">
                        <img src={Fast} alt='Catering' className='md:h-10 h-14'/>
                        <p className='text-[#39DB4A] font-semibold md:text-base text-2xl'>Fast delivery</p>
                        <p className='text-[#90BD95]  md:text-sm text-base text-center '>
                        We deliver your order promptly to your door
                        </p>
                </div>
            </div>
            <div className="card-container flex justify-center items-center gap-6 mt-5">
                <div className="h-72 w-72 md:h-46 md:w-46 bg-white rounded-2xl drop-shadow-2xl gap-3 flex flex-col justify-center items-center">
                        <img src={Cart} alt='cart' className='md:h-10 h-14'/>
                        <p className='text-[#39DB4A] font-semibold md:text-base text-2xl'>ONLINE ORDERING</p>
                        <p className='text-[#90BD95]  md:text-sm text-base text-center '>
                        Explore menu & order with ease using our Online Ordering 
                        </p>
                </div>
                <div className="h-72 w-72 md:h-46 md:w-46 bg-white rounded-2xl drop-shadow-2xl gap-3 flex flex-col justify-center items-center ">
                        <img src={Gift} alt='gift' className='md:h-10 h-14'/>
                        <p className='text-[#39DB4A] font-semibold md:text-base text-2xl'>GIFT CARDS</p>
                        <p className='text-[#90BD95]  text-center  md:text-sm text-base'>
                        Give the gift of exceptional dining with Foodie Gift Cards
                        </p>
                </div>
            </div>
            
        </div>
      </div>
    </div>
  );
}
export default Service;
