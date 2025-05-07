import React, { useState } from "react";
import { Link } from "react-router";
import axios from "axios";

const Signup = () => {
  const [userData, setUserData] = useState({
    username: "",
    email: "",
    password: "",
    // role: "USER",
  });

  const handelSignup = async (e) => {
    e.preventDefault();

    const options = {
      method: "POST",
      url: "https://api.freeapi.app/api/v1/users/register",
      headers: {
        accept: "application/json",
        "content-type": "application/json",
      },
      data: userData,
    };

    try {
      const { data } = await axios.request(options);
      console.log(data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <section className="h-screen flex justify-center items-center">
      <form
        onSubmit={handelSignup}
        className="max-w-md bg-white shadow-2xl rounded-2xl overflow-hidden border-4 border-green-400 dark:border-green-600"
      >
        <div className="px-8 py-10 md:px-10">
          <img src="logo.png" alt="logo" className="text-white m-auto" />
          <p className="text-center text-zinc-600 dark:text-zinc-400 mt-3">
            We missed you, sign up to continue.
          </p>

          <div className="mt-10">
            <div className="relative">
              <label
                className="block mb-3 text-sm font-medium text-zinc-600"
                htmlFor="name"
              >
                Name
              </label>
              <input
                onChange={(e) =>
                  setUserData((prev) => ({ ...prev, username: e.target.value }))
                }
                placeholder="Name"
                className="block w-full px-4 py-3 mt-2 text-zinc-800 bg-white border-2 rounded-lg dark:border-zinc-600  dark:focus:border-green-400 focus:ring-opacity-50 focus:outline-none focus:ring focus:ring-green-400"
                name="username"
                id="username"
                type="text"
              />
            </div>
            <div className="mt-8">
              <label
                className="block mb-3 text-sm font-medium text-zinc-600"
                htmlFor="email"
              >
                Email
              </label>
              <input
                onChange={(e) =>
                  setUserData((prev) => ({ ...prev, email: e.target.value }))
                }
                placeholder="you@example.com"
                className="block w-full px-4 py-3 mt-2 text-zinc-800 bg-white border-2 rounded-lg dark:border-zinc-600  dark:focus:border-green-400 focus:ring-opacity-50 focus:outline-none focus:ring focus:ring-green-400"
                name="email"
                id="email"
                type="email"
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
                onChange={(e) =>
                  setUserData((prev) => ({ ...prev, password: e.target.value }))
                }
                placeholder="••••••••"
                className="block w-full px-4 py-3 mt-2 text-zinc-800 bg-white border-2 rounded-lg dark:border-zinc-600 focus:border-green-500 dark:focus:border-green-400 focus:ring-opacity-50 focus:outline-none focus:ring focus:ring-green-400"
                name="password"
                id="password"
                type="password"
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
            Have an account?
            <Link to="/login" className="font-medium underline" href="#">
              Log In
            </Link>
          </div>
        </div>
      </form>
    </section>
  );
};

export default Signup;
