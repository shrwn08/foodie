import "./App.css";
import Navbar from "./components/Header/Navbar";
import Home from "./components/Home";
import Footer from "./components/Footer/Footer";
import { Routes,Route } from "react-router-dom";
import Login from "./components/Login/Login";
import SignUp from "./components/Singup/SignUp";
import Offer from "./components/Offer/Offer";
import Snacks from "./components/Snacks/Snacks";
import BreakFast from "./components/BreakFast/BreakFast";
import Lunch from "./components/Lunch/Lunch";
import Dinner from "./components/Dinner/Dinner";
import Admin from "./components/Admin/Admin";
import Menu from "./components/Menu/Menu";
import Dessert from "./components/Dessert/Dessert"


function App() {


  return (
    <div className="min-h-screen w-full bg-[#EEEEEE] p-0 m-0 overflow-x-hidden">
      <Navbar />

        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/offers" element={<Offer />} />
          <Route path="/breakfast" element={<BreakFast />} />
          <Route path="/lunch" element={<Lunch />} />
          <Route path="/snacks" element={<Snacks />} />
          <Route path="/dinner" element={<Dinner />} />
          <Route path="/admin" element={<Admin />} />
          <Route path="/menu" element={<Menu/>} />
          <Route path="/dessert" element={<Dessert />} />
        </Routes>
      <Footer />
    </div>
  );
}

export default App;
