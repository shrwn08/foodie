import { useEffect, useState } from "react";
import Chef from "../../assets/image/chef-login.png";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { loginUser } from "../../redux/slice/userSlice";


function Login() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const {isError, token} = useSelector(state=>state.user)
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });

  const handleOnChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleOnSubmit =async (e) => {
    e.preventDefault();

   await dispatch(loginUser(formData));

   
  };

  useEffect(()=>{
    if(isError){
      navigate("/login")
     return alert("Failed to login")
    }else if(token){
    formData.username !== "admin"?navigate("/"):navigate("/admin")
    }
  },[isError,token, formData.username, navigate])

  
  return (
    <div className="w-full h-[565px] flex justify-center items-center">
      <div className="w-5/6 h-full flex justify-between items-center ">
        <div className="img w-full">
          <img src={Chef} alt="Chef" />
        </div>
        <div className="Login w-full flex justify-center items-center">
          <div className="w-96 h-1/2 bg-gray-200 py-5 rounded-lg">
            <p className="text-black font-bold text-3xl text-center">Login</p>
            <form
              className="flex flex-col justify-between items-center mt-5 gap-4"
              onSubmit={handleOnSubmit}
            >
              <div className="text-black flex justify-between items-center w-11/12">
                <label className="text-semibold font-semibold">
                  Username :
                </label>
                <input
                  className="text-semibold font-semibold h-10 w-60 rounded-lg px-2 bg-white"
                  name="username"
                  value={formData.username}
                  onChange={handleOnChange}
                />
              </div>
              <div className="text-black flex justify-between items-center w-11/12">
                <label className="text-semibold font-semibold">Password </label>
                <input
                  className="text-semibold font-semibold h-10 w-60 rounded-lg px-2 bg-white"
                  name="password"
                  value={formData.password}
                  onChange={handleOnChange}
                />
              </div>
              <div className="flex justify-start items-center w-11/12 ">
                <p className="text-[#39db4a]">Forget Password?</p>
              </div>
              <button
                type="submit"
                className="w-11/12 h-10 bg-[#39DB4A] hover:bg-green-400 text-white text-lg font-bold rounded-lg"
              >
                Submit
              </button>
              <div className="flex justify-start items-center w-11/12 ">
                <Link to="/signup" style={{ color: "#39db4a" }}>
                  Create an account?
                </Link>
              </div>
            </form>
          </div>
        </div>
      </div>
      
    </div>
  );
}

export default Login;
