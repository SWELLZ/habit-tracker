import React, { useState } from "react";
import { Link } from "react-router-dom";
import { SignIn } from "../userComponents/SignIn";
import { SignUp } from "../userComponents/SignUp";
import "./Nav.css";

export function Nav() {
  const [isToggled, setIsToggled] = useState(false);

  const toggleSlider = () => {
    setIsToggled(!isToggled);
  };

  return (
    <nav className="flex justify-between absolute top-0 w-full items-center h-[70px] bg-amber-200 overflow-hidden z-50">
      <div className="ml-4">
        <Link to="/" className="text-2xl font-bold">
          HT
        </Link>
      </div>
      <div className="mr-4 flex gap-4 items-center">
        <div className={`flex gap-4 ${isToggled ? 'nav-toggled' : ''} nav-slider`}>
          <Link
            className="underline hover:no-underline"
            to="/sign-up"
            element={<SignUp />}
          >
            Sign Up
          </Link>
          <Link
            className="underline hover:no-underline"
            to="/sign-in"
            element={<SignIn />}
          >
            Sign In
          </Link>
        </div>
        <button
          onClick={toggleSlider}
          className={`flex flex-col gap-1 justify-between h-[20px] transition-all sm:hidden ${
            isToggled ? "toggled" : ""
          }`}
        >
          <div className="w-[25px] bg-black h-[3px] burger-1 transition-all"></div>
          <div className="w-[25px] bg-black h-[3px] burger-2 transition-all"></div>
          <div className="w-[25px] bg-black h-[3px] burger-3 transition-all"></div>
        </button>
      </div>
    </nav>
  );
}
