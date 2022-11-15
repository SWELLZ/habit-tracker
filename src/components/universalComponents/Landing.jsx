import React from "react";
import { Link } from "react-router-dom";

export function Landing() {
  return (
    <div className="min-h-screen pt-[70px] grid place-items-center bg-amber-50">
      <div className="flex flex-col gap-4 items-center">
        <h1 className="text-4xl font-bold">Track Your Habits Today!</h1>
        <Link
          className="bg-[#6ADBA6] w-fit py-4 px-6 rounded-full shadow-lg hover:bg-[#5cc594] active:shadow-sm hover:shadow-md active:bg-[#4bbd88]"
          to="/sign-up"
        >
          Sign Up Now!
        </Link>
      </div>
    </div>
  );
}
