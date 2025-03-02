import About from "./About_us/About";
import Category from "./category/Category";
import Foodie from "./Foodie/Foodie";
import Hero from "./Hero/Hero";
import Standout from "./Standout/Standout";
import Service from "./Service/Service";
function Home() {

  
  return (
    <>
      <Hero />
      <Category />
      <Standout />
      <About />
      <Service />
      <Foodie />
    </>
  );
}
export default Home;
