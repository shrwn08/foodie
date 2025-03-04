import EmojiEmotionsIcon from "@mui/icons-material/EmojiEmotions";
import { useSelector } from "react-redux";

const Thankyou = () => {
  const user = useSelector((state) => state.user.user);
  console.log('user', user)
  return (
    <div className="flex items-center justify-center h-screen w-screen bg-gray-100">
      <div className="bg-white p-6 rounded-lg shadow-md text-center">
        <div>
          <EmojiEmotionsIcon sx={{ fontSize: "150px", color: "yellow" }} />
        </div>
        <div>
          <h1 className="text-2xl font-semibold text-gray-800">Thank You!</h1>
          <p className="text-gray-600 mt-2">Your action was successful.</p>
          <p className="text-gray-600 mt-2">You have ₹ {user && user.wallet} in your Wallet.</p>
        </div>
      </div>
    </div>
  );
};

export default Thankyou;
