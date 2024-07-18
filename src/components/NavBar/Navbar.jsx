import React from "react";
import { Link } from "react-router-dom";

const Navbar = ({ textColor, bColor }) => {
  return (
    <>
      <header className="z-20 flex justify-center fixed top-0 left-1/4 w-1/2 bg-transparent p-2 rounded-3xl shadow-lg">
        {/* <Link className={`text-${textColor}`} to="/">
          LOGO
        </Link> */}
        <nav>
          <div className={`flex gap-8 text-${textColor} font-normal`}>
            <Link
              className={`border-[1px] hover:bg-zinc-200 transform transition-all duration-300 border-zinc-300  rounded-3xl p-1 px-4`}
              to="/"
            >
              Home
            </Link>
            <Link
              className={`border-[1px] hover:bg-zinc-200 transform transition-all duration-300 border-zinc-300  rounded-3xl p-1 px-4`}
              to="/contactUs"
            >
              Concept
            </Link>

            <Link
              className={`border-[1px] hover:bg-zinc-200 transform transition-all duration-300 border-zinc-300  rounded-3xl p-1 px-4`}
              to="/products"
            >
              Products
            </Link>
          </div>
        </nav>
      </header>
    </>
  );
};

export default Navbar;
