import React from "react";
import Navbar from "./../components/NavBar/Navbar";
import { SiNike } from "react-icons/si";
import shoe from "../assets/shoe.png";

import is4 from "../assets/is4.jpg";

import { MdOutlineLabelImportant } from "react-icons/md";
import { useNavigate } from "react-router";

const ContactUs = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/products");
  };
  return (
    <>
      <Navbar textColor="white" bColor="black" />
      <div className="w-screen h-screen  overflow-auto flex justify-center p-2 bg-blue-950 ">
        <div className="main w-2/3 h-4/5  mt-[100px]  ">
          {/* INSIDE */}
          <div className="w-full h-full relative  flex flex-wrap  group  ">
            {/* LEFT*/}

            <div className=" z-10  cursor-pointer group relative shadow-lg shadow-blue-500 left left-2 rounded-2xl  w-1/2 h-full bg-gradient-to-br from-blue-300 to-white transform scale-105">
              {/* ICON */}
              <div className=" absolute top-4 left-6 ">
                <SiNike size={95} color="white" />
              </div>

              {/* NUMBER */}
              <div className=" bg-gradient-to-br from-blue-900 to-white  absolute number bottom-[220px]  bg-clip-text -right-10">
                <span className=" text-transparent  font-sans  font-bold text-[14rem]">
                  35
                </span>
              </div>
              {/* IMAGE */}
              <div className="shoeDiv relative top-9 right-4   ">
                <img
                  className="rotate-[30deg] cursor-pointer transform scale-110 group-hover:rotate-0 transition-all group-hover:scale-150 duration-500  "
                  src={shoe}
                  alt=""
                />
              </div>

              <div className="absolute bottom-5 left-48 flex items-center justify-center flex-row space-x-2">
                <span className="w-3 h-3 rounded-full block bg-indigo-500 cursor-pointer"></span>
                <span className="w-3 h-3 rounded-full block bg-indigo-800 hover:bg-indigo-500 cursor-pointer"></span>
                <span className="w-3 h-3 rounded-full block bg-indigo-800 hover:bg-indigo-500 cursor-pointer"></span>
              </div>
            </div>
            {/* RIGHT */}
            <div className=" -translate-y-[1200px] group-hover:-translate-y-0 group flex flex-col items-center shadow-blue-500 rounded-r-2xl left w-1/2 h-full space-y-3 bg-blue-100 shadow-lg duration-500 transform transition-all">
              {/* IMAGE */}
              <div className="image w-full h-1/2 overflow-hidden rounded-tr-2xl">
                <img src={is4} alt="" />
              </div>
              {/* HEADING */}
              <span className="text-center text-xl font-extrabold text-blue-900">
                BlueLock Edition!
              </span>
              {/* PARAGRAPH */}

              <p className="ml-10 text-md text-stone-950 font-semibold">
                Nike x BlueLock is the most awaited series which is launched
                today. Experience the futuristic feel of this{" "}
                <span className="mx-6">
                  limited edition powered by turbo-S features.
                </span>
              </p>
              <div className="flex flex-row border-[0.5px] border-blue-900 space-x-7 bg-transparent py-2 px-2 rounded-2xl cursor-pointer">
                <p className="font-bold text-blue-900">Size</p>
                <p></p>
                <p className=" text-sm">7.5</p>
                <p className=" text-sm">8</p>
                <p className=" text-sm">9</p>
                <p className=" text-sm">9.5</p>
                <p className=" text-sm">10</p>
              </div>
              {/* BUTTON */}

              <button
                onClick={handleClick}
                className="hidden group-hover:flex items-center mt-3 text-md text-white font-semibold transition-all transform hover:bg-indigo-700 bg-indigo-900 px-7 py-3 rounded-3xl shadow-lg shadow-indigo-950"
              >
                Explore
                <MdOutlineLabelImportant size={20} className="ml-4" />
                <MdOutlineLabelImportant
                  size={20}
                  className="absolute right-[14px]"
                />
              </button>

              {/* <button className=" w-1/2 mt-3 text-md text-indigo-900 font-semibold  transition-all border-[0.5px] shadow-lg shadow-indigo-700 border-indigo-700 px-7 py-3 rounded-3xl">
                Buy Now
              </button> */}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactUs;
