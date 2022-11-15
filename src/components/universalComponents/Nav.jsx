import React, { useState } from "react";
import { Link } from "react-router-dom";
import { SignIn } from "../userComponents/SignIn";
import { SignUp } from "../userComponents/SignUp";

export function Nav() {
  const [dropdown, setDropdown] = useState(false);
  const [dropdownToggled, setDropdownToggled] = useState(
    "w-screen h-screen absolute left-full top-0 bg-amber-200 flex flex-col justify-evenly items-center"
  );

  const toggleVisible = () => {
    setDropdownToggled(
      dropdown
        ? "w-screen h-screen left-full absolute top-0 bg-amber-200 flex flex-col justify-evenly items-center z-50 animate-left" //HIDDEN
        : "w-screen h-screen absolute left-0 top-0 bg-amber-200 flex flex-col justify-evenly items-center z-50 animate-left" //SHOWING
    );
    setDropdown(!dropdown);
  };

  return (
    <nav
      className={`flex justify-between absolute top-0 w-full items-center h-[70px] bg-amber-200 overflow-hidden ${
        dropdown ? "overflow-visible" : ""
      }`}
    >
      <div className="ml-4">
        <Link to="/" className="text-lg font-bold">
          HT
        </Link>
      </div>
      <div className="mr-4 flex gap-4">
        <div className={dropdownToggled}>
          <Link
            className="underline hover:no-underline"
            to="/sign-up"
            element={<SignUp />}
          >
            Sign Up
          </Link>{" "}
          <Link
            className="underline hover:no-underline"
            to="/sign-in"
            element={<SignIn />}
          >
            Sign In
          </Link>
        </div>
        <button
          className="flex flex-col justify-center items-center gap-1"
          onClick={toggleVisible}
        >
          <div className="w-[25px] h-[3px] bg-black"></div>
          <div className="w-[25px] h-[3px] bg-black"></div>
          <div className="w-[25px] h-[3px] bg-black"></div>
        </button>
        {dropdown && (
          <button
            className="flex flex-col justify-center items-center gap-1 absolute z-50"
            onClick={toggleVisible}
          >
            <div className="w-[25px] h-[3px] bg-black"></div>
            <div className="w-[25px] h-[3px] bg-black"></div>
            <div className="w-[25px] h-[3px] bg-black"></div>
          </button>
        )}
      </div>
    </nav>
  );
}
