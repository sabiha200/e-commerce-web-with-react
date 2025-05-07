import React from "react";
import { Link } from "react-router";

const LogIn = () => {
  return (
    <section className="h-screen flex justify-center items-center">
      <form className="max-w-md bg-white shadow-2xl rounded-2xl overflow-hidden border-4 border-green-400 dark:border-green-600">
        <div className="px-8 py-10 md:px-10">
          <img src="logo.png" alt="logo" className="text-white m-auto" />
          <p className="text-center text-zinc-600 dark:text-zinc-400 mt-3">
            We missed you, sign in to continue.
          </p>
          <div className="mt-10">
            <div className="relative">
              <label
                className="block mb-3 text-sm font-medium text-zinc-600"
                htmlFor="email"
              >
                Email
              </label>
              <input
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
