import React from "react";

import { FiPlayCircle } from "react-icons/fi";
import { ImPlay } from "react-icons/im";
import { GiThunderBlade } from "react-icons/gi";
import { IoGameController } from "react-icons/io5";
import { GiHoneycomb } from "react-icons/gi";
import { GiSwordsEmblem } from "react-icons/gi";
import Navbar from "./../components/NavBar/Navbar";
import back from "../assets/field.jpg";
import back2 from "../assets/players3.jpg";
import { useNavigate } from "react-router";

const Careers = () => {
  const navigate = useNavigate();
  const handleProducts = () => {
    navigate("/products");
  };
  const handleWatchNow = () => {};
  const handleConcept = () => {
    navigate("/contactUs");
  };

  return (
    <>
      <Navbar bColor="blue-900" textColor="blue-900" />
      <div className="w-screen h-screen overflow-auto p-3 from-blue-400 to-blue-900 bg-gradient-to-b ">
        <div className="main  space-x-2 text-blue-900 mt-[50px] flex   justify-between rounded-2xl flex-row">
          {/* LEFT  */}
          <div className="left space-y-4 bg-transparent rounded-3xl  justify-center items-center flex flex-col  flex-grow-0 flex-shrink-0 basis-[25%]">
            {/* LEFT TOP */}
            <div className="top w-full  rounded-3xl hover:scale-105 transition-all bg-zinc-200  px-5 py-5 space-y-2 ">
              <div className="flex flex-row items-center justify-center space-x-2">
                <GiSwordsEmblem size={35} />
                <h1 className="text-center">EGOIST</h1>
              </div>
              <div className="overflow-hidden">
                <img src={back2} className="w-full rounded-3xl" alt="" />
              </div>
              <div className="bottom flex flex-col justify-center items-center  w-full rounded-3xl">
                <h3 className="">
                  Immerse yourself in Nike's new Bluelock series journey through
                  a richly detailed narrative.
                </h3>
                <button
                  onClick={handleProducts}
                  className=" w-full mt-3 text-md font-semibold text-white transition-all transform hover:bg-blue-500 bg-blue-900 px-7 py-3 rounded-3xl"
                >
                  PRODUCTS
                </button>
              </div>
            </div>
            {/* LEFT BOTTOM */}
            <div className="hover:scale-105 transition-all  flex flex-col bg-zinc-200  px-5 py-5 w-full rounded-3xl">
              <div className="flex flex-row justify-between">
                <h1 className=" text-wrap font-bold text-3xl">Slots</h1>
                <IoGameController size={30} />
              </div>
              <div className="squareBOXES flex flex-row space-x-2 justify-center items-center my-3">
                <div className="w-8 h-8 rounded-lg bg-blue-400"></div>
                <div className="w-8 h-8 rounded-lg bg-blue-500"></div>
                <div className="w-8 h-8 rounded-lg bg-blue-600"></div>
                <div className="w-8 h-8 rounded-lg bg-blue-700"></div>
                <div className="w-8 h-8 rounded-lg bg-blue-800"></div>
              </div>
              <h3 className=" text-blue-800">
                Discover a wide array of this futuristic collection by nike and
                book your slots for pre-order.
              </h3>
            </div>
          </div>

          {/* CENTER */}
          <div className="center overflow-hidden rounded-3xl p-2  flex flex-col space-y-2 flex-grow">
            {/* CENTER TOP */}
            <div
              onClick={handleConcept}
              className=" cursor-pointer font-mono top text-5xl font-extrabold bg-zinc-200  flex flex-row space-x-4 py-2 justify-center items-center border-blue-900 w-full rounded-3xl"
            >
              <span>NIKE</span>
              <span className="text-lg">x</span>
              <span>BLUELOCK</span>
            </div>
            {/* CENTER BOTTOM */}
            <div className="relative bottom w-full h-full rounded-3xl">
              <div className="overflow-hidden w-full h-full ">
                <img
                  className="rounded-3xl w-full h-full hover:scale-125 duration-1000 "
                  src={back}
                  alt=""
                />
              </div>
              {/* ABSOLUTE BOX */}
              <div className=" absolute top-[470px] p-2 left-4  w-[220px] h-[130px] bg-transparent backdrop-filter backdrop-blur-md hover:scale-105 hover:bg-blue-100 transition-all border-[1px] border-blue-800 rounded-3xl shadow-inner shadow-blue-500 r">
                <div className="flex flex-row items-center justify-evenly">
                  <span className="text-2xl font-bold text-blue-900">
                    BLUELOCK
                  </span>

                  <div className="icon cursor-pointer rounded-full">
                    <ImPlay size={43} color="#1e3a8a" />
                  </div>
                </div>
                <div className="flex flex-col space-y-2 justify-center items-center w-full">
                  <span className="text-md  font-extrabold text-blue-900 ">
                    Watch Trailer
                  </span>

                  <button
                    onClick={handleWatchNow}
                    className="w-full text-white px-5 py-1 text-sm font-bold bg-blue-900 rounded-3xl"
                  >
                    Watch Now
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT */}

          <div className="right overflow-hidden rounded-3xl bg-zinc-200 p-5 py-6 flex justify-between flex-col space-y-9 flex-grow-0 flex-shrink-0 basis-[25%] h-max hover:scale-105 transition-all">
            {/* RIGHT TOP */}
            <div className="top  w-full rounded-3xl">
              <h1 className="font-semibold text-lg">
                Nike x Bluelock - The Fututistic Series
              </h1>
              <p className="text-gray-700">
                Check the concept of this unexpected collab with your favourite
                anime series Bluelock
              </p>
              <div className=" rounded-3xl flex flex-row justify-evenly space-x-3 mt-5">
                <GiThunderBlade size={40} />
                <GiHoneycomb size={40} />
                <IoGameController size={40} />
              </div>
            </div>
            {/* RIGHT BOTTOM */}
            <div className=" relative bottom  h-full  w-full rounded-3xl">
              <div className=" overflow-hidden h-[200px]">
                <img src={back} className="w-full h-full rounded-3xl" alt="" />
              </div>

              <FiPlayCircle
                onClick={handleWatchNow}
                className="icon absolute top-[175px] left-1/2 transform -translate-x-1/2 rounded-full cursor-pointer bg-blue-900 "
                color="white"
                size={45}
              />

              <h1 className=" font-semibold text-center mt-10">
                Jump into the field and start your soccer adventure. Select
                shoes that align best with your playstyle.
              </h1>
              <button
                onClick={handleConcept}
                className=" w-full mt-7  text-white text-sm font-semibold bg-blue-900 hover:bg-blue-500 px-7 py-3 rounded-3xl transform transition-all  "
              >
                CHECK CONCEPT
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Careers;
