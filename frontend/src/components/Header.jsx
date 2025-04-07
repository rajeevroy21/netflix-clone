import React from "react";
import { IoIosArrowDropdown } from "react-icons/io";
import { useRecoilState } from "recoil";
import { userState } from "../../recoil/UserState";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { API_END_POINT } from "../../utils/constant";
import toast from "react-hot-toast";
import { toggleState } from "../../recoil/movieState";

const Header = () => {
    const [user, setUser] = useRecoilState(userState);
    const [toggle, setToggle] = useRecoilState(toggleState);
    const navigate = useNavigate();
    const toggleHandler = () => {
      setToggle((prev) => !prev);
     };
    const logoutHandler = async () => {
        try {
            const res = await axios.get(`${API_END_POINT}/logout`);
            if (res.data.success) {
                toast.success(res.data.message);
            }
            setUser(null); // Set user to null on logout
            navigate("/");
        } catch (error) {
            console.log(error);
        }
    };
  return (
    <div className="absolute z-10 top-0 left-0 w-full flex justify-between items-center px-10 py-4 bg-gradient-to-b from-black">
      {/* Netflix Logo */}
      <img
        className="w-36"
        src="https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg"
        alt="Netflix Logo"
      />

      {/* Right Section */}
      {
        user && (<div className="flex items-center space-x-6">
            {/* Profile Section */}
            <div className="flex items-center text-white cursor-pointer">
              <h1 className="text-lg font-semibold">{user?.fullName || "Guest"}</h1>
              <IoIosArrowDropdown className="ml-1 text-xl" />
            </div>
    
            {/* Buttons */}
            <button onClick={logoutHandler}  className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-md transition cursor-pointer">
              Log Out
            </button>
            <button onClick={toggleHandler} className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-md transition cursor-pointer">
              {toggle?"Home":" Search Movie"}
             
            </button>
          </div>)
      }
      
    </div>
  );
};

export default Header;
