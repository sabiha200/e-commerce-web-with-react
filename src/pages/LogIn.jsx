import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { toast, ToastContainer } from "react-toastify";
import { useDispatch } from "react-redux";
import { userAccountInfo } from "../slices/userSlice";

const LogIn = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [userData, setUserData] = useState({
    username: "",
    password: "",
  });

  const handelLogin = async (e) => {
    e.preventDefault();

    const options = {
      method: "POST",
      url: "https://api.freeapi.app/api/v1/users/login",
      headers: {
        accept: "application/json",
        "content-type": "application/json",
      },
      data: userData,
    };
    try {
      const res = await axios.request(options);
      console.log(res.data.data.accessToken);
      localStorage.setItem("token", res.data.data.accessToken);
      localStorage.setItem("user", JSON.stringify(res.data.data.user));
      dispatch(userAccountInfo(res.data.data.user));
      console.log(res.data.data.user);
      toast.success(res.data.message);
      setTimeout(() => {
        navigate("/");
      }, 2000);
    } catch (error) {
      toast.error(error.response.data.message);
      console.error(error.response);
    }
  };
  return (
    <section className="h-screen flex justify-center items-center">
      <ToastContainer
        position="top-right"
        autoClose={5000}
        rtl={false}
        pauseOnHover
        theme="dark"
      />
      <form
        onSubmit={handelLogin}
        className="max-w-md bg-white shadow-2xl rounded-2xl overflow-hidden border-4 border-green-400 dark:border-green-600"
      >
        <div className="px-8 py-10 md:px-10">
          <img src="logo.png" alt="logo" className="text-white m-auto" />
          <p className="text-center text-zinc-600 dark:text-zinc-400 mt-3">
            We missed you, sign in to continue.
          </p>
          <div className="mt-10">
            <div className="relative">
              <label
                className="block mb-3 text-sm font-medium text-zinc-600"
                htmlFor="username"
              >
                username
              </label>
              <input
                placeholder="username"
                className="block w-full px-4 py-3 mt-2 text-zinc-800 bg-white border-2 rounded-lg dark:border-zinc-600  dark:focus:border-green-400 focus:ring-opacity-50 focus:outline-none focus:ring focus:ring-green-400"
                name="username"
                id="username"
                type="text"
                value={userData.username}
                onChange={(e) =>
                  setUserData({ ...userData, username: e.target.value })
                }
              />
            </div>
            <div className="mt-6">
              <label
                className="block mb-3 text-sm font-medium text-zinc-600"
                htmlFor="password"
              >
                Password
              </label>
              <input
                placeholder="••••••••"
                className="block w-full px-4 py-3 mt-2 text-zinc-800 bg-white border-2 rounded-lg dark:border-zinc-600 focus:border-green-500 dark:focus:border-green-400 focus:ring-opacity-50 focus:outline-none focus:ring focus:ring-green-400"
                name="password"
                id="password"
                type="password"
                value={userData.password}
                onChange={(e) =>
                  setUserData({ ...userData, password: e.target.value })
                }
              />
            </div>
            <div className="mt-10">
              <button
                className="w-full px-4 py-3 tracking-wide text-white transition-colors duration-200 transform bg-gradient-to-r from-green-500 to-emerald-600 rounded-lg hover:from-green-600 hover:to-emerald-700 focus:outline-none focus:ring-4 focus:ring-green-400 dark:focus:ring-green-600"
                type="submit"
              >
                Let's Go
              </button>
            </div>
          </div>
        </div>
        <div className="px-8 py-4 bg-blue-200 dark:bg-green-200">
          <div className="text-sm text-emerald-900 dark:text-emerald-500 text-center">
            Don't have an account?
            <Link to="/signup" className="font-medium underline" href="#">
              Sign up
            </Link>
          </div>
        </div>
      </form>
    </section>
  );
};

export default LogIn;
