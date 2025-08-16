function Foodie() {
  return (
    <div className="w-full h-auto flex justify-center items-center">
      <div className="w-5/6 h-full flex flex-col md:flex-row justify-between items-center">
        <div className="flex justify-start items-start flex-col gap-8">
          <div className="w-full md:w-auto px-2 flex justify-center items-center">
            <div className="w-8 h-8 bg-[#39DB4A] text-white font-bold text-3xl flex justify-center items-center rounded-md">
              F
            </div>
            <p className="font-bold text-2xl text-black">oodie</p>
          </div>
          <p className="md:w-56 h-28 text-[#555555] md:text-base font-semibold text-xl md:text-left text-center">
            Savor the artistry where every dish is a culinary masterpiece
          </p>
        </div>
        <div className="w-full md:w-1/2 flex justify-between">
          <div className="flex justify-start items-start flex-col gap-3">
            <p className="text-black font-bold">Useful links</p>
            <p className="text-[#555555] text-base">About us</p>
            <p className="text-[#555555] text-base">Events</p>
            <p className="text-[#555555] text-base">Blogs</p>
            <p className="text-[#555555] text-base">FAQs</p>
          </div>
          <div className="flex justify-start items-start flex-col gap-3">
            <p className="text-black font-bold">Main Menu</p>
            <p className="text-[#555555] text-base">Home</p>
            <p className="text-[#555555] text-base">Offers</p>
            <p className="text-[#555555] text-base">Menus</p>
            <p className="text-[#555555] text-base">Reservations</p>
          </div>
          <div className="flex justify-start items-start flex-col gap-3">
            <p className="text-black font-bold">Contact US</p>
            <p className="text-[#555555] text-base">example@email.com</p>
            <p className="text-[#555555] text-base">+xx xxxxx-xxxxx</p>
            <p className="text-[#555555] text-base">Social Media</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Foodie;
