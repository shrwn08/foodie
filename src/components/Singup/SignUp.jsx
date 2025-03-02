import { Link } from "react-router-dom";
import Chef from "../../assets/image/chef-signup.png";
import VisibilityOutlinedIcon from "@mui/icons-material/VisibilityOutlined";
import VisibilityOffOutlinedIcon from "@mui/icons-material/VisibilityOffOutlined";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { registerUser } from "../../redux/slice/userSlice";

function SignUp() {
  const dispatch = useDispatch();
  const [password, setPassword] = useState("");
  const [rePassword, setRePassword] = useState("");
  const [formData, setFormData] = useState({
    name: "",
    username: "",
    email: "",
    password: "",
  });
  const [passVisible, setPassVisible] = useState(false);
  const [rePassVisible, setRePassVisible] = useState(false);

  const handlePassVisible = () => {
    setPassVisible((prev) => !prev);
  };

  const handleRePassVisible = () => {
    setRePassVisible((prev) => !prev);
  };

  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };
  const handleOnSubmit = async (event) => {
    event.preventDefault();
    if(password !== rePassword){
     
      alert("Password is not matching")

    }

    const updatedFormData = {...formData, password}
    dispatch(registerUser(updatedFormData))
    setFormData({
      name : "",
      username : "",
      email: "",
      password : ""
    });
    setPassword("")
    setRePassword("")
  };

  return (
    <div className="w-full h-[565px] flex justify-center items-center">
      <div className="w-5/6 h-full flex justify-between items-center ">
        <div className="img w-full">
          <img src={Chef} alt="Chef" />
        </div>
        <div className="Login w-full flex justify-center items-center">
          <div className="w-96 h-1/2 bg-gray-200 py-5 rounded-lg">
            <p className="text-black font-bold text-3xl text-center">Sign Up</p>
            <form className="flex flex-col justify-between items-center mt-5 gap-4" onSubmit={handleOnSubmit}>
              <div className="text-black flex justify-between items-center w-11/12">
                <label className="text-semibold font-semibold">Name</label>
                <input
                  className="text-semibold font-semibold h-10 w-60 rounded-lg px-2 bg-white"
                  name="name"
                  value={formData.name}
                  onChange={handleOnChange}
                />
              </div>
              <div className="text-black flex justify-between items-center w-11/12">
                <label className="text-semibold font-semibold">Username</label>
                <input
                  className="text-semibold font-semibold h-10 w-60 rounded-lg px-2 bg-white"
                  name="username"
                  value={formData.username}
                  onChange={handleOnChange}
                />
              </div>
              <div className="text-black flex justify-between items-center w-11/12">
                <label className="text-semibold font-semibold">Email</label>
                <input
                  className="text-semibold font-semibold h-10 w-60 rounded-lg px-2 bg-white"
                  name="email"
                  value={formData.email}
                  onChange={handleOnChange}
                />
              </div>
              <div className="text-black flex justify-between items-center w-11/12 relative">
                <label className="text-semibold font-semibold">Password </label>
                <input
                  className="text-semibold font-semibold h-10 w-60 rounded-lg px-2 bg-white"
                  type={passVisible ? "text" : "password"}
                  name="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
                <div
                  className="absolute hover:cursor-pointer right-2"
                  type="button"
                  onClick={handlePassVisible}
                >
                  {passVisible ? (
                    <VisibilityOffOutlinedIcon />
                  ) : (
                    <VisibilityOutlinedIcon />
                  )}
                </div>
              </div>
              <div className="text-black flex justify-between items-center w-11/12 relative">
                <label className="text-semibold font-semibold">
                  Re-password{" "}
                </label>
                <input
                  type={rePassVisible ? "text" : "password"}
                  className="text-semibold font-semibold h-10 w-60 rounded-lg px-2 bg-white"
                  name="rePassword"
                  value={rePassword}
                  onChange={(e) => setRePassword(e.target.value)}
                />
                <div
                  className="absolute hover:cursor-pointer right-2"
                  type="button"
                  onClick={handleRePassVisible}
                >
                  {rePassVisible ? (
                    <VisibilityOffOutlinedIcon />
                  ) : (
                    <VisibilityOutlinedIcon />
                  )}
                </div>
              </div>

              <button
                type="submit"
                className="w-11/12 h-10 bg-[#39DB4A] hover:bg-green-400 text-white text-lg font-bold rounded-lg"
              >
                Submit
              </button>
              <div className="flex justify-start items-center w-11/12 ">
                <Link to="/login" style={{ color: "#39db4a" }}>
                  Already have an account?
                </Link>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SignUp;
