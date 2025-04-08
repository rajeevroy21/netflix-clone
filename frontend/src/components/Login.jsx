import React, { useState } from "react";
import Header from "./Header";
import toast from "react-hot-toast";
import axios from "axios";
import { API_END_POINT } from "../../utils/constant";
import { useNavigate } from "react-router-dom";
import { useRecoilState, useSetRecoilState } from "recoil";
import { loadingState, userState } from "../recoil/userState";

const Login = () => {
  const [isLogin, setIsLogin] = useState(false);
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  //const [user, setUser] = useRecoilState(userState);
  const setUser= useSetRecoilState(userState)
  const [isLoading, setLoading] = useRecoilState(loadingState);
  const navigate=useNavigate();
  const getInputData = async (e) => {
    e.preventDefault();
    setLoading(true);
    if (isLogin) {
        // Login
        const user = { email, password };
        try {
            const res = await axios.post(`${API_END_POINT}/login`, user, {
                headers: { 'Content-Type': 'application/json' },
                withCredentials: true
            });

            if (res.data.success) {
                toast.success(res.data.message);
            }
           setUser(res.data.user);
            navigate("/browse");
        } catch (error) {
            toast.error(error.response?.data?.message || "Login failed");
            console.log(error);
        } 
        finally{
          setLoading(false);
        }
    setEmail("");
    setPassword("");
    } else {
        // Register
        const user = { fullName, email, password };
        try {
            const res = await axios.post(`${API_END_POINT}/register`, user, {
                headers: { 'Content-Type': 'application/json' },
                withCredentials: true
            });

            if (res.data.success) {
                toast.success(res.data.message);
            }
           setIsLogin(true);
        } catch (error) {
            toast.error(error.response?.data?.message || "Signup failed");
            console.log(error);
        } 
        finally{
          setLoading(false);
        }
        setFullName("");
        setEmail("");
        setPassword("");
    }
};

  // Toggle Between Login & Signup
  const loginHandler = () => setIsLogin(!isLogin);

  return (
    <div className="relative h-screen flex flex-col">
      <Header />

      {/* Background Image */}
      <div className="absolute inset-0 -z-10">
        <img
          className="w-full h-full object-cover"
          src="https://assets.nflxext.com/ffe/siteui/vlv3/dc1cf82d-97c9-409f-b7c8-6ac1718946d6/14a8fe85-b6f4-4c06-8eaf-eccf3276d557/IN-en-20230911-popsignuptwoweeks-perspective_alpha_website_medium.jpg"
          alt="banner"
        />
      </div>

      {/* Login/Signup Form */}
      <form
        onSubmit={getInputData}
        className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-black bg-opacity-90 text-white p-12 rounded-lg flex flex-col max-w-md w-full"
      >
        <h1 className="text-3xl font-bold mb-5 text-center">
          {isLogin ? "Login" : "Signup"}
        </h1>

        {/* Full Name Field (Only for Signup) */}
        {!isLogin && (
          <input
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
            type="text"
            placeholder="Full Name"
            className="outline-none p-3 my-2 rounded-sm bg-gray-800 text-white"
            autoFocus
          />
        )}

        {/* Email Field */}
        <input
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          type="email"
          placeholder="Email"
          className="outline-none p-3 my-2 rounded-sm bg-gray-800 text-white"
          autoFocus={isLogin}
        />

        {/* Password Field */}
        <input
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          type="password"
          placeholder="Password"
          className="outline-none p-3 my-2 rounded-sm bg-gray-800 text-white"
        />

        {/* Submit Button */}
        <button
            type="submit"
            disabled={isLoading}
            className={`bg-red-600 mt-6 p-3 rounded-md font-medium text-white hover:bg-red-700 transition flex items-center justify-center gap-2 ${
              isLoading ? 'cursor-not-allowed opacity-80' : ''
            }`}
          >
            {isLoading && (
              <span className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></span>
            )}
            {isLogin ? "Login" : "Signup"}
        </button>

        {/* Toggle Between Login & Signup */}
        <p className="mt-4 text-center">
          {isLogin ? "New to Netflix?" : "Already have an account?"}{" "}
          <span
            onClick={loginHandler}
            className="ml-1 text-blue-500 font-medium cursor-pointer hover:underline"
          >
            {isLogin ? "Signup" : "Login"}
          </span>
        </p>
      </form>
    </div>
  );
};

export default Login;
