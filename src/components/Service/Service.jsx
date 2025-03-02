import Catering from '../../assets/svg/Catering.svg'
import Fast from '../../assets/svg/Fast.svg'
import Cart from '../../assets/svg/Cart.svg'
import Gift from '../../assets/svg/Gift.svg'

function Service() {
  return (
    <div className="w-full h-[520px] flex justify-center items-center">
      <div className="w-5/6 h-full flex justify-center items-center">
        <div className="service flex flex-col justify-center items-start gap-5 w-full">
            <p className="text-red-600 text-medium font-bold">Our Story & Services</p>
            <p className="text-black text-4xl font-bold">Our Culinary Journey And Services</p>
            <p className="text-gray-500 text-xl font-semibold">Rooted in passion, we curate unforgettable dining experiences and offer exceptional services, blending culinary artistry with warm hospitality.</p>
            <button className="bg-[#39DB4A] w-28 h-12 rounded-lg hover:rounded-full  font-bold">Explore</button>
        </div>
        <div className="cards w-full ">
            <div className="card-container flex justify-center items-center gap-6">
                <div className="h-46 w-46 bg-white rounded-2xl drop-shadow-2xl gap-3 flex flex-col justify-center items-center">
                        <img src={Catering} alt='Catering' style={{width : "40px"}}/>
                        <p className='text-[#39DB4A] font-semibold'>CATERING</p>
                        <p className='text-[#90BD95] text-sm text-center '>
                        Delight your guests with our flavors and  presentation
                        </p>
                </div>
                <div className="h-46 w-46 bg-white rounded-2xl drop-shadow-2xl gap-3 flex flex-col justify-center items-center">
                        <img src={Fast} alt='Catering' style={{width : "40px"}}/>
                        <p className='text-[#39DB4A] font-semibold'>Fast delivery</p>
                        <p className='text-[#90BD95] text-sm text-center '>
                        We deliver your order promptly to your door
                        </p>
                </div>
            </div>
            <div className="card-container flex justify-center items-center gap-6 mt-5">
                <div className="h-46 w-46 bg-white rounded-2xl drop-shadow-2xl gap-3 flex flex-col justify-center items-center">
                        <img src={Cart} alt='cart' style={{width : "40px"}}/>
                        <p className='text-[#39DB4A] font-semibold'>ONLINE ORDERING</p>
                        <p className='text-[#90BD95] text-sm text-center '>
                        Explore menu & order with ease using our Online Ordering 
                        </p>
                </div>
                <div className="h-46 w-46 bg-white rounded-2xl drop-shadow-2xl gap-3 flex flex-col justify-center items-center ">
                        <img src={Gift} alt='gift' style={{width : "40px"}}/>
                        <p className='text-[#39DB4A] font-semibold'>GIFT CARDS</p>
                        <p className='text-[#90BD95] text-sm text-center '>
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
