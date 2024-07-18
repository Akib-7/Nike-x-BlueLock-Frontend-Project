import React from "react";
import bc from "../assets/bc.jpg";
import bl from "../assets/bl.jpg";
import br from "../assets/br.jpg";
import { FiPlayCircle } from "react-icons/fi";
import { ImPlay } from "react-icons/im";
import { GiThunderBlade } from "react-icons/gi";
import { AiOutlineThunderbolt } from "react-icons/ai";
import { IoSettingsOutline } from "react-icons/io5";
import { BiSearchAlt } from "react-icons/bi";
import { BiWorld } from "react-icons/bi";
import { IoGameController } from "react-icons/io5";
import { GiHoneycomb } from "react-icons/gi";
import { GiSwordsEmblem } from "react-icons/gi";
import Navbar from "./../components/NavBar/Navbar";
const Careers = () => {
  return (
    <>
      <Navbar bColor="black" textColor="black" />
      <div className="w-screen h-screen overflow-auto p-3 from-amber-400 to-black bg-gradient-to-b ">
        <div className="main  space-x-2 text-white mt-[150px] flex   justify-between rounded-2xl flex-row">
          {/* LEFT  */}
          <div className="left space-y-4 bg-transparent rounded-3xl  justify-center items-center flex flex-col  flex-grow-0 flex-shrink-0 basis-[25%]">
            {/* LEFT TOP */}
            <div className="top w-full rounded-3xl hover:scale-105 transition-all bg-stone-900  px-5 py-5 space-y-2 ">
              <div className="flex flex-row items-center justify-center space-x-2">
                <GiSwordsEmblem size={35} />
                <h1 className="text-center">B-Knight</h1>
              </div>
              <div className="overflow-hidden">
                <img src={bl} className="w-full rounded-3xl" alt="" />
              </div>
              <div className="bottom flex flex-col justify-center items-center  w-full rounded-3xl">
                <h3 className="">
                  Immerse yourself in Ben Buzzwing's epic journey through a
                  richly detailed narrative.
                </h3>
                <button className=" w-full mt-3 text-sm font-semibold  transition-all transform hover:bg-amber-500 bg-black px-7 py-3 rounded-3xl">
                  STORY MODE
                </button>
              </div>
            </div>
            {/* LEFT BOTTOM */}
            <div className="hover:scale-105 transition-all  flex flex-col bg-stone-900  px-5 py-5 w-full rounded-3xl">
              <div className="flex flex-row justify-between">
                <h1 className=" text-wrap font-bold text-3xl">Slots</h1>
                <IoGameController size={30} />
              </div>
              <div className="squareBOXES flex flex-row space-x-2 justify-center items-center my-3">
                <div className="w-8 h-8 rounded-lg bg-gray-100"></div>
                <div className="w-8 h-8 rounded-lg bg-gray-200"></div>
                <div className="w-8 h-8 rounded-lg bg-gray-300"></div>
                <div className="w-8 h-8 rounded-lg bg-gray-400"></div>
                <div className="w-8 h-8 rounded-lg bg-gray-500"></div>
              </div>
              <h3 className=" text-gray-400">
                Discover a wide array of areas where The Buzz Knight have
                narrated his mission and fought for it.
              </h3>
            </div>
          </div>

          {/* CENTER */}
          <div className="center overflow-hidden rounded-3xl p-2  flex flex-col space-y-2 flex-grow">
            {/* CENTER TOP */}
            <div className="top bg-stone-900  flex flex-row space-x-4 py-2 justify-around border-white w-full rounded-3xl">
              <AiOutlineThunderbolt size={25} style={{ cursor: "pointer" }} />
              <BiWorld size={25} style={{ cursor: "pointer" }} />
              <BiSearchAlt size={25} style={{ cursor: "pointer" }} />
              <IoSettingsOutline size={23} style={{ cursor: "pointer" }} />
            </div>
            {/* CENTER BOTTOM */}
            <div className="relative bottom w-full h-full rounded-3xl">
              <div className="overflow-hidden w-full h-full ">
                <img
                  className="rounded-3xl w-full h-full hover:scale-125 duration-1000 "
                  src={bc}
                  alt=""
                />
              </div>
              {/* ABSOLUTE BOX */}
              <div className=" absolute top-[470px] p-2 left-4  w-[220px] h-[130px] bg-transparent backdrop-filter backdrop-blur-sm hover:scale-105 hover:bg-amber-500 transition-all border-[1px] border-amber-800 rounded-3xl shadow-inner shadow-amber-500 r">
                <div className="flex flex-row items-center justify-evenly">
                  <span className="text-3xl font-bold text-amber-200">
                    BEE-X
                  </span>

                  <div className="icon cursor-pointer rounded-full">
                    <ImPlay size={43} color="#f9e40d" />
                  </div>
                </div>
                <div className="flex flex-col space-y-2 justify-center items-center w-full">
                  <span className="text-md  font-extrabold text-black ">
                    Competitive Matches
                  </span>

                  <button className="w-full px-5 py-1 text-sm font-bold bg-black rounded-3xl">
                    Watch Now
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT */}

          <div className="right overflow-hidden rounded-3xl bg-stone-900 p-5 py-6 flex justify-between flex-col space-y-9 flex-grow-0 flex-shrink-0 basis-[25%] h-max hover:scale-105 transition-all">
            {/* RIGHT TOP */}
            <div className="top  w-full rounded-3xl">
              <h1 className="font-semibold text-lg">
                Ben The Bee - The Heroic Commander
              </h1>
              <p className="text-gray-400">
                Ben is a fearless and skilled commander known for his unmatched
                agility and brave actions
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
                <img src={br} className="w-full h-full rounded-3xl" alt="" />
              </div>

              <FiPlayCircle
                className="icon absolute top-[175px] left-1/2 transform -translate-x-1/2 rounded-full cursor-pointer bg-white "
                color="black"
                size={50}
              />

              <h1 className=" font-semibold text-center mt-10">
                Jump into the action and start your adventure with Ben Buzzwing
              </h1>
              <button className=" w-full mt-7 text-sm font-semibold bg-amber-400 hover:bg-amber-500 px-7 py-3 rounded-3xl transform transition-all  ">
                PLAY NOW
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Careers;
