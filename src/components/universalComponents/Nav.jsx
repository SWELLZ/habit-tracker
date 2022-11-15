import React from "react";
import { Link } from "react-router-dom";
import { SignIn } from "../userComponents/SignIn";
import { SignUp } from "../userComponents/SignUp";

export function Nav() {
  return (
    <nav className="flex justify-between absolute top-0 w-full items-center h-[70px] bg-amber-200">
      <div className="ml-4">
        <Link to="/" className="text-lg font-bold">
          HT
        </Link>
      </div>
      <div className="mr-4 flex gap-4 underline">
        <Link to="/sign-up" element={<SignUp />}>
          Sign Up
        </Link>{" "}
        |
        <Link to="/sign-in" element={<SignIn />}>
          Sign In
        </Link>
      </div>
    </nav>
  );
}
