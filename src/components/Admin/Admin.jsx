import { useState } from "react";

import { useDispatch } from "react-redux";
import { uploadProducts } from "../../redux/slice/productSlice";

function Admin() {
  const dispatch = useDispatch();
  const [formData, setFormData] = useState({
    dish_name: "",
    description: "",
    category: "",
    price: "",
    rating: "",
    avatar: null,
  });

  const handleOnChange = (event) => {
    const { name, value, type } = event.target;
    if (type === "file") {
      const file = event.target.files[0];
      setFormData((prevData) => ({ ...prevData, [name]: file }));
    } else {
      setFormData((prevData) => ({ ...prevData, [name]: value }));
    }
  };

  const handleOnSubmit = async (event) => {
    event.preventDefault();

    const formDataToSend = new FormData();

    formDataToSend.append("dish_name", formData.dish_name);
    formDataToSend.append("description", formData.description);
    formDataToSend.append("category", formData.category);
    formDataToSend.append("price", formData.price);
    formDataToSend.append("rating", formData.rating);
    if (formData.avatar) {
      formDataToSend.append("avatar", formData.avatar);
    }

    dispatch(uploadProducts(formData));
    setFormData({
      dish_name: "",
      description: "",
      category: "",
      price: "",
      rating: "",
      avatar: null,
    });
  };

  

  return (
    <div className="w-screen h-full flex justify-center items-center overflow-x:hidden">
      <div className="w-5/6 h-full">
        <p className="text-4xl text-black font-semibold my-5">
          Hi! Admin. Welcome to the Admin panel
        </p>
        <div className="w-full h-full ">
          <p className="text-black text-xl font-semibold text-center my-5">
            Add your new Dishes in the Menu
          </p>
          <div className="w-full h-full flex justify-between items-center">
            <div className="image w-full h-full">Image</div>
            <div className="form w-full h-full text-black flex justify-center items-center flex-col gap-5 mb-5 bg-gray-200">
              <p className="text-center text-2xl font-semibold">New Dish</p>
              <form
                className="w-96 h-auto py-3 px-3 bg-white rounded-md flex flex-col gap-3"
                encType="multipart/formdata"
                method="post"
                onSubmit={handleOnSubmit}
              >
                <div className="w-full h-10 flex justify-between items-center text-black text-medium  font-semibold ">
                  <label>Dishname</label>
                  <input
                    className="border-1 border-gray-300 h-8 rounded-md"
                    name="dish_name"
                    value={formData.dish_name}
                    onChange={handleOnChange}
                  />
                </div>
                <div className="w-full h-10 flex justify-between items-center text-black text-medium  font-semibold ">
                  <label>Description</label>
                  <input
                    className="border-1 border-gray-300 h-8 rounded-md"
                    name="description"
                    value={formData.description}
                    onChange={handleOnChange}
                  />
                </div>
                <div className="w-full h-10 flex justify-between items-center text-black text-medium  font-semibold ">
                  <label>Category</label>
                  <input
                    className="border-1 border-gray-300 h-8 rounded-md"
                    name="category"
                    value={formData.category}
                    onChange={handleOnChange}
                  />
                </div>
                <div className="w-full h-10 flex justify-between items-center text-black text-medium  font-semibold ">
                  <label>Price</label>
                  <input
                    className="border-1 border-gray-300 h-8 rounded-md"
                    name="price"
                    value={formData.price}
                    onChange={handleOnChange}
                  />
                </div>
                <div className="w-full h-10 flex justify-between items-center text-black text-medium  font-semibold ">
                  <label>Rating</label>
                  <input
                    className="border-1 border-gray-300 h-8 rounded-md"
                    name="rating"
                    value={formData.rating}
                    onChange={handleOnChange}
                  />
                </div>
                <div className="w-full h-10 flex justify-between items-center text-black text-medium  font-semibold ">
                  <label>Avatar</label>
                  <input
                    type="file"
                    className="border-1 border-gray-300 h-8 rounded-md w-56 px-2"
                    name="avatar"
                    accept="image/*"
                    onChange={handleOnChange}
                  />
                </div>
                <div className="w-full flex justify-center items-center text-white">
                  <button className="bg-[#39DB4A] w-full h-8 rounded-md">
                    Submit
                  </button>{" "}
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Admin;
