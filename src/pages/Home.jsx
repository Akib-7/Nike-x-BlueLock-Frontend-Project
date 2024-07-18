import React from "react";
import Navbar from "./../components/NavBar/Navbar";
import { SiNike } from "react-icons/si";

import rin from "../assets/rin.webp";
import kunigami from "../assets/kunigami.webp";
import barou from "../assets/barou.webp";
import nagi from "../assets/nagi.webp";
import isagi from "../assets/isagi.webp";
import chigiri from "../assets/chigiri.webp";
import bachira from "../assets/bachira.jpg";
import reo from "../assets/reo.png";
import yellow from "../assets/yellow.png";
import teal from "../assets/teal.png";
import purple from "../assets/purple.png";
import pink from "../assets/pink.png";
import blue from "../assets/blue.png";
import gold from "../assets/gold.png";
import red from "../assets/red.png";
import orange from "../assets/orange.png";

import { MdOutlineArrowForward } from "react-icons/md";

import { useNavigate } from "react-router";
import { RiArrowGoBackFill } from "react-icons/ri";

import logo from "../assets/logo.png";

const ContactUs = () => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate(-1);
  };
  return (
    <>
      <Navbar textColor="black" />

      <div
        className="w-screen  h-screen  bg-zinc-100 overflow-auto"
        style={{
          overflow: "hidden",
          overflowY: "scroll",
        }}
      >
        <div
          onClick={handleClick}
          className="z-20 absolute flex cursor-pointer  hover:shadow-black hover:scale-105  justify-center items-center  top-10 left-20 rounded-full w-9 h-9 shadow-md shadow-gray-500 border-[0.5px] border-gray-200 bg-white"
        >
          <RiArrowGoBackFill size={20} color="grey" />
        </div>
        <div
          className="main  
          mt-[0px] grid grid-cols-1 just items-center  bg-cover  w-screen h-auto p-0"
          style={{
            transform: "scale(1)", // Adjust the scale value for zoom effect
            zIndex: -1, // Ensures the background is behind the content
          }}
        >
          {/* CARD 6- Kunigami*/}
          <div className=" cardWrapper relative py-[115px] flex flex-row items-center    bg-gradient-to-l to-lime-400 from-orange-500">
            {/* CONCEPT-DIV */}
            <div className="CONCEPT-DIV absolute pt-5 right-28 space-y-4 top-20 bg-transparent flex flex-col items-center justify-center">
              <div className="TOP flex justify-center items-center space-x-1">
                <div className=" pt-2 ">
                  <SiNike size={35} color="black" />
                </div>
                <div className="  w-[30px] h-[30px]">
                  <div className="">
                    <img className=" " src={logo} alt="" />
                  </div>
                </div>
              </div>

              <h1 className="text-9xl font-extrabold">NIKE </h1>

              <h1 className="text-3xl">x </h1>
              <h1 className="text-7xl font-semibold">BLUE LOCK </h1>
              <h1 className="text-3xl pt-5 font-semibold">Kunigami Rensuke </h1>
            </div>
            {/* CARD */}
            <div className=" ml-16 group  CARD-DIV  p-3  w-fit relative ">
              {/* LEFT*/}
              <div className="  z-10 p-2  cursor-pointer group relative shadow-lg shadow-orange-600  rounded-2xl  bg-gradient-to-br from-orange-600 to-lime-400 transform scale-110">
                {/* ICON */}
                <div className="absolute top-4 left-6 ">
                  <SiNike size={60} color="white" />
                </div>

                {/* NUMBER */}
                <div className=" flex justify-center items-center  bg-gradient-to-br from-orange-600 to-red-600 absolute bottom-[303px]  bg-clip-text -right-10">
                  <span className="text-transparent leading-none font-sans  font-bold text-[8rem]">
                    09
                  </span>
                </div>
                {/* IMAGE */}
                <div className=" group w-[290px] h-[380px]">
                  <div className="">
                    <img
                      className="absolute top-[74px] rotate-[25deg] cursor-pointer transform scale-125 group-hover:rotate-0 transition-all group-hover:scale-150 duration-500"
                      src={orange}
                      alt=""
                    />
                  </div>
                </div>

                {/* THREE DOTS */}
                <div className="bottom-7 left-[130px] absolute flex items-center justify-center flex-row space-x-2">
                  <span className="w-3 h-3 rounded-full block bg-orange-700 cursor-pointer"></span>
                  <span className="w-3 h-3 rounded-full block bg-orange-500 hover:bg-orange-700 cursor-pointer"></span>
                  <span className="w-3 h-3 rounded-full block bg-orange-500 hover:bg-orange-700 cursor-pointer"></span>
                </div>
              </div>
              {/* RIGHT */}
              <div className="bg-orange-500 translate-x-[77px] h-fit absolute bottom-[8px]  shadow-lg shadow-orange-500  rounded-r-2xl  group-hover:translate-x-[310px]  duration-500 transform transition-all">
                {/* IMAGE */}
                <div className="image mb-2  w-[300px] h-[230px] overflow-hidden rounded-tr-2xl">
                  <img src={kunigami} alt="" />
                </div>

                {/* LOWER SECTION */}

                <div className=" mb-3 flex flex-col items-center justify center space-y-3">
                  {/* DETAILS */}
                  <div className="text-black px-4 flex flex-row space-x-4 justify-center items-center  max-w-[300px]">
                    <div className="flex font-semibold text-sm flex-col">
                      <span>Name</span>
                      <span>Position</span>
                      <span>Weapon</span>
                    </div>
                    <div className="flex flex-col">
                      <span className="text-sm break-words ">
                        Rensuke Kunigami
                      </span>
                      <span className="text-sm break-words ">OMF</span>
                      <span className="text-sm break-words">Power Kick</span>
                    </div>
                  </div>
                  {/* SIZES */}

                  <div className="flex text-orange-950 w-fit mx-auto flex-row border-[0.5px] border-orange-950 space-x-4 bg-transparent py-1 px-2 rounded-3xl cursor-pointer">
                    <p className="font-bold text-orange-950">Size</p>

                    <p className="hover:font-bold hover:scale-105 text-[13px] transition-all transform">
                      7.5
                    </p>
                    <p className="hover:font-bold hover:scale-105 text-[13px] transition-all transform">
                      8
                    </p>
                    <p className=" hover:font-bold hover:scale-105 text-[13px] transition-all transform">
                      9
                    </p>
                    <p className="hover:font-bold hover:scale-105 text-[13px] transition-all transform">
                      9.5
                    </p>
                    <p className="hover:font-bold hover:scale-105 text-[13px] transition-all transform">
                      10
                    </p>
                  </div>
                </div>
                {/* BUTTON */}
                <div className="  mb-2 space-x-5 flex flex-row justify-center items-center">
                  <span className="text-orange-950 text-sm font-semibold cursor-pointer">
                    Buy Now
                  </span>
                  <div className="flex cursor-pointer w-10 h-10 hover:bg-orange-900 hover:scale-110 flex-row items-center justify-center relative transition-all transform bg-lime-500  rounded-full shadow-lg shadow-orange-950 ">
                    <button className="text-sm  text-white font-semibold  "></button>
                    <MdOutlineArrowForward
                      size={20}
                      color="white"
                      className="absolute"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* CARD 3- CHIGIRI*/}
          <div className=" cardWrapper relative  py-[132px] flex flex-row items-center    bg-rose-600">
            <div className="CONCEPT-DIV absolute pt-5 right-28 space-y-4 top-20 bg-transparent flex flex-col items-center justify-center">
              <div className="TOP flex justify-center items-center space-x-1">
                <div className=" pt-2 ">
                  <SiNike size={35} color="black" />
                </div>
                <div className="  w-[30px] h-[30px]">
                  <div className="">
                    <img className=" " src={logo} alt="" />
                  </div>
                </div>
              </div>

              <h1 className="text-9xl font-extrabold">NIKE </h1>

              <h1 className="text-3xl">x </h1>
              <h1 className="text-7xl font-semibold">BLUE LOCK </h1>
              <h1 className="text-3xl pt-5 font-semibold">Chigiri Hyoma </h1>
            </div>
            <div className="group ml-16 CARD-DIV  p-3  w-fit relative ">
              {/* LEFT*/}
              <div className="  z-10 p-2  cursor-pointer group relative shadow-lg shadow-rose-300  rounded-2xl  bg-gradient-to-br from-rose-600 to-white transform scale-110">
                {/* ICON */}
                <div className="absolute top-4 left-6 ">
                  <SiNike size={60} color="white" />
                </div>

                {/* NUMBER */}
                <div className=" flex justify-center items-center  bg-gradient-to-br from-rose-600 to-black absolute bottom-[303px]  bg-clip-text -right-10">
                  <span className="text-transparent leading-none font-sans  font-bold text-[8rem]">
                    04
                  </span>
                </div>
                {/* IMAGE */}
                <div className="group w-[290px] h-[380px]">
                  <div className="-scale-x-100">
                    <img
                      className="-rotate-[25deg] cursor-pointer transform scale-110 group-hover:rotate-0 transition-all group-hover:scale-150 duration-500"
                      src={pink}
                      alt=""
                    />
                  </div>
                </div>

                {/* THREE DOTS */}
                <div className="bottom-7 left-[130px] absolute flex items-center justify-center flex-row space-x-2">
                  <span className="w-3 h-3 rounded-full block bg-rose-800 cursor-pointer"></span>
                  <span className="w-3 h-3 rounded-full block bg-rose-500 hover:bg-rose-800 cursor-pointer"></span>
                  <span className="w-3 h-3 rounded-full block bg-rose-500 hover:bg-rose-800 cursor-pointer"></span>
                </div>
              </div>
              {/* RIGHT */}
              <div className="bg-rose-600 translate-x-[77px] h-fit absolute bottom-[8px]  shadow-lg shadow-rose-300  rounded-r-2xl  group-hover:translate-x-[310px]  duration-500 transform transition-all">
                {/* IMAGE */}
                <div className="image mb-2  w-[300px] h-[230px] overflow-hidden rounded-tr-2xl">
                  <img src={chigiri} alt="" />
                </div>

                {/* LOWER SECTION */}

                <div className=" mb-3 flex flex-col items-center justify center space-y-3">
                  {/* DETAILS */}
                  <div className=" px-4 flex flex-row space-x-4 justify-center items-center  max-w-[300px]">
                    <div className="flex font-semibold text-sm flex-col">
                      <span>Name</span>
                      <span>Position</span>
                      <span>Weapon</span>
                    </div>
                    <div className="flex flex-col">
                      <span className="text-sm break-words ">
                        Chigiri Hyoma
                      </span>
                      <span className="text-sm break-words ">RW</span>
                      <span className="text-sm break-words">Top Speed</span>
                    </div>
                  </div>
                  {/* SIZES */}

                  <div className="flex w-fit mx-auto flex-row border-[0.5px] border-rose-300 space-x-4 bg-transparent py-1 px-2 rounded-3xl cursor-pointer">
                    <p className="font-bold text-rose-300">Size</p>

                    <p className="hover:font-bold hover:scale-105 text-[13px] transition-all transform">
                      7.5
                    </p>
                    <p className="hover:font-bold hover:scale-105 text-[13px] transition-all transform">
                      8
                    </p>
                    <p className=" hover:font-bold hover:scale-105 text-[13px] transition-all transform">
                      9
                    </p>
                    <p className="hover:font-bold hover:scale-105 text-[13px] transition-all transform">
                      9.5
                    </p>
                    <p className="hover:font-bold hover:scale-105 text-[13px] transition-all transform">
                      10
                    </p>
                  </div>
                </div>
                {/* BUTTON */}
                <div className="  mb-2 space-x-5 flex flex-row justify-center items-center">
                  <span className="text-sm font-semibold cursor-pointer">
                    Buy Now
                  </span>
                  <div className="flex cursor-pointer w-10 h-10 hover:bg-rose-400 hover:scale-110 flex-row items-center justify-center relative transition-all transform bg-rose-500  rounded-full shadow-lg shadow-rose-950 ">
                    <button className="text-sm  text-white font-semibold  "></button>
                    <MdOutlineArrowForward
                      size={20}
                      color="white"
                      className="absolute"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* CARD 6- ISAGI*/}
          <div className=" cardWrapper relative py-[132px] flex flex-row items-center     bg-lime-500">
            <div className="CONCEPT-DIV absolute pt-5 right-28 space-y-4 top-20 bg-transparent flex flex-col items-center justify-center">
              <div className="TOP flex justify-center items-center space-x-1">
                <div className=" pt-2 ">
                  <SiNike size={35} color="black" />
                </div>
                <div className="  w-[30px] h-[30px]">
                  <div className="">
                    <img className=" " src={logo} alt="" />
                  </div>
                </div>
              </div>

              <h1 className="text-9xl font-extrabold">NIKE </h1>

              <h1 className="text-3xl">x </h1>
              <h1 className="text-7xl font-semibold">BLUE LOCK </h1>
              <h1 className="text-3xl pt-5 font-semibold">Isagi Yoichi </h1>
            </div>
            <div className="group ml-16 CARD-DIV  p-3  w-fit relative ">
              {/* LEFT*/}
              <div className="  z-10 p-2  cursor-pointer group relative shadow-lg shadow-blue-900  rounded-2xl  bg-gradient-to-br from-blue-900 to-black transform scale-110">
                {/* ICON */}
                <div className="absolute top-4 left-6 ">
                  <SiNike size={60} color="white" />
                </div>

                {/* NUMBER */}
                <div className=" flex justify-center items-center  bg-gradient-to-br to-yellow-400 from-lime-500 absolute bottom-[303px]  bg-clip-text -right-10">
                  <span className="text-transparent leading-none font-sans  font-bold text-[8rem]">
                    11
                  </span>
                </div>
                {/* IMAGE */}
                <div className="group w-[290px] h-[380px]">
                  <div className="-scale-x-100 ">
                    <img
                      className="-rotate-[25deg] cursor-pointer transform scale-110 absolute top-16 right-4 group-hover:-rotate-3 transition-all group-hover:scale-125 duration-500"
                      src={blue}
                      alt=""
                    />
                  </div>
                </div>

                {/* THREE DOTS */}
                <div className="bottom-7 left-[130px] absolute flex items-center justify-center flex-row space-x-2">
                  <span className="w-3 h-3 rounded-full block bg-lime-500 cursor-pointer"></span>
                  <span className="w-3 h-3 rounded-full block bg-lime-800 hover:bg-lime-500 cursor-pointer"></span>
                  <span className="w-3 h-3 rounded-full block bg-lime-800 hover:bg-lime-500 cursor-pointer"></span>
                </div>
              </div>
              {/* RIGHT */}
              <div className="bg-lime-500 translate-x-[77px] h-fit absolute bottom-[8px]  shadow-lg shadow-blue-900  rounded-r-2xl  group-hover:translate-x-[310px]  duration-500 transform transition-all">
                {/* IMAGE */}
                <div className="image mb-2  w-[300px] h-[230px] overflow-hidden rounded-tr-2xl">
                  <img src={isagi} alt="" />
                </div>

                {/* LOWER SECTION */}

                <div className=" mb-3 flex flex-col items-center justify center space-y-3">
                  {/* DETAILS */}
                  <div className=" px-4 flex flex-row space-x-4 justify-center items-center  max-w-[300px]">
                    <div className="flex font-semibold text-sm flex-col">
                      <span>Name</span>
                      <span>Position</span>
                      <span>Weapon</span>
                    </div>
                    <div className="flex flex-col">
                      <span className="text-sm break-words ">Isagi Yoichi</span>
                      <span className="text-sm break-words ">OMF</span>
                      <span className="text-sm break-words">Meta Vision</span>
                    </div>
                  </div>
                  {/* SIZES */}

                  <div className="flex w-fit mx-auto flex-row border-[0.5px] border-black space-x-4 bg-transparent py-1 px-2 rounded-3xl cursor-pointer">
                    <p className="font-bold text-black">Size</p>

                    <p className="hover:font-bold hover:scale-105 text-[13px] transition-all transform">
                      7.5
                    </p>
                    <p className="hover:font-bold hover:scale-105 text-[13px] transition-all transform">
                      8
                    </p>
                    <p className=" hover:font-bold hover:scale-105 text-[13px] transition-all transform">
                      9
                    </p>
                    <p className="hover:font-bold hover:scale-105 text-[13px] transition-all transform">
                      9.5
                    </p>
                    <p className="hover:font-bold hover:scale-105 text-[13px] transition-all transform">
                      10
                    </p>
                  </div>
                </div>
                {/* BUTTON */}
                <div className="  mb-2 space-x-5 flex flex-row justify-center items-center">
                  <span className=" text-sm font-semibold cursor-pointer">
                    Buy Now
                  </span>
                  <div className="flex cursor-pointer w-10 h-10 hover:bg-blue-900 hover:scale-110 flex-row items-center justify-center relative transition-all transform bg-blue-950  rounded-full shadow-lg shadow-blue-950 ">
                    <button className="text-sm  text-white font-semibold  "></button>
                    <MdOutlineArrowForward
                      size={20}
                      color="white"
                      className="absolute"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* CARD 4- REO*/}
          <div className=" cardWrapper relative py-[132px] flex flex-row items-center     bg-purple-400">
            <div className="CONCEPT-DIV absolute pt-5 right-28 space-y-4 top-20 bg-transparent flex flex-col items-center justify-center">
              <div className="TOP flex justify-center items-center space-x-1">
                <div className=" pt-2 ">
                  <SiNike size={35} color="black" />
                </div>
                <div className="  w-[30px] h-[30px]">
                  <div className="">
                    <img className=" " src={logo} alt="" />
                  </div>
                </div>
              </div>

              <h1 className="text-9xl font-extrabold">NIKE </h1>

              <h1 className="text-3xl">x </h1>
              <h1 className="text-7xl font-semibold">BLUE LOCK </h1>
              <h1 className="text-3xl pt-5 font-semibold">Reo Mikage </h1>
            </div>
            <div className="group ml-16 CARD-DIV  p-3  w-fit relative ">
              {/* LEFT*/}
              <div className="  z-10 p-2  cursor-pointer group relative shadow-lg shadow-purple-800  rounded-2xl  bg-gradient-to-br from-purple-800 to-white transform scale-110">
                {/* ICON */}
                <div className="absolute top-4 left-6 ">
                  <SiNike size={60} color="white" />
                </div>

                {/* NUMBER */}
                <div className=" flex justify-center items-center  bg-gradient-to-br from-purple-500 to-purple-950 absolute bottom-[303px]  bg-clip-text -right-10">
                  <span className="text-transparent leading-none font-sans  font-bold text-[8rem]">
                    09
                  </span>
                </div>
                {/* IMAGE */}
                <div className=" group w-[290px] h-[380px]">
                  <div className="-scale-x-100">
                    <img
                      className="absolute top-14 -rotate-[25deg] cursor-pointer transform scale-125 group-hover:rotate-0 transition-all group-hover:scale-150 duration-500"
                      src={purple}
                      alt=""
                    />
                  </div>
                </div>

                {/* THREE DOTS */}
                <div className="bottom-7 left-[130px] absolute flex items-center justify-center flex-row space-x-2">
                  <span className="w-3 h-3 rounded-full block bg-purple-800 cursor-pointer"></span>
                  <span className="w-3 h-3 rounded-full block bg-purple-500 hover:bg-purple-800 cursor-pointer"></span>
                  <span className="w-3 h-3 rounded-full block bg-purple-500 hover:bg-purple-800 cursor-pointer"></span>
                </div>
              </div>
              {/* RIGHT */}
              <div className="bg-purple-600 translate-x-[77px] h-fit absolute bottom-[8px]  shadow-lg shadow-purple-950  rounded-r-2xl  group-hover:translate-x-[310px]  duration-500 transform transition-all">
                {/* IMAGE */}
                <div className="image mb-2  w-[300px] h-[230px] overflow-hidden rounded-tr-2xl">
                  <img src={reo} alt="" />
                </div>

                {/* LOWER SECTION */}

                <div className=" mb-3 flex flex-col items-center justify center space-y-3">
                  {/* DETAILS */}
                  <div className=" px-4 flex flex-row space-x-4 justify-center items-center  max-w-[300px]">
                    <div className="flex font-semibold text-sm flex-col">
                      <span>Name</span>
                      <span>Position</span>
                      <span>Weapon</span>
                    </div>
                    <div className="flex flex-col">
                      <span className="text-sm break-words ">Reo Mikage</span>
                      <span className="text-sm break-words ">CMF</span>
                      <span className="text-sm break-words">Chameleon</span>
                    </div>
                  </div>
                  {/* SIZES */}

                  <div className="flex w-fit mx-auto flex-row border-[0.5px] border-purple-950 space-x-4 bg-transparent py-1 px-2 rounded-3xl cursor-pointer">
                    <p className="font-bold text-purple-950">Size</p>

                    <p className="hover:font-bold hover:scale-105 text-[13px] transition-all transform">
                      7.5
                    </p>
                    <p className="hover:font-bold hover:scale-105 text-[13px] transition-all transform">
                      8
                    </p>
                    <p className=" hover:font-bold hover:scale-105 text-[13px] transition-all transform">
                      9
                    </p>
                    <p className="hover:font-bold hover:scale-105 text-[13px] transition-all transform">
                      9.5
                    </p>
                    <p className="hover:font-bold hover:scale-105 text-[13px] transition-all transform">
                      10
                    </p>
                  </div>
                </div>
                {/* BUTTON */}
                <div className="  mb-2 space-x-5 flex flex-row justify-center items-center">
                  <span className="text-sm font-semibold cursor-pointer">
                    Buy Now
                  </span>
                  <div className="flex cursor-pointer w-10 h-10 hover:bg-purple-500 hover:scale-110 flex-row items-center justify-center relative transition-all transform bg-purple-950  rounded-full shadow-lg shadow-purple-950 ">
                    <button className="text-sm  text-white font-semibold  "></button>
                    <MdOutlineArrowForward
                      size={20}
                      color="white"
                      className="absolute"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* CARD 3- NAGI*/}
          <div className=" cardWrapper relative py-[132px] flex flex-row items-center  bg-gradient-to-l to-amber-300  from-amber-700">
            <div className="CONCEPT-DIV absolute pt-5 right-28 space-y-4 top-20 bg-transparent flex flex-col items-center justify-center">
              <div className="TOP flex justify-center items-center space-x-1">
                <div className=" pt-2 ">
                  <SiNike size={35} color="black" />
                </div>
                <div className="  w-[30px] h-[30px]">
                  <div className="">
                    <img className=" " src={logo} alt="" />
                  </div>
                </div>
              </div>

              <h1 className="text-9xl font-extrabold">NIKE </h1>

              <h1 className="text-3xl">x </h1>
              <h1 className="text-7xl font-semibold">BLUE LOCK </h1>
              <h1 className="text-3xl pt-5 font-semibold">Nagi Seishiro </h1>
            </div>
            <div className="group ml-16 CARD-DIV  p-3  w-fit relative ">
              {/* LEFT*/}
              <div className="  z-10 p-2  cursor-pointer group relative shadow-lg shadow-amber-600  rounded-2xl  bg-gradient-to-br from-amber-950 to-amber-700 transform scale-110">
                {/* ICON */}
                <div className="absolute top-4 left-6 ">
                  <SiNike size={60} color="white" />
                </div>

                {/* NUMBER */}
                <div className=" flex justify-center items-center  bg-gradient-to-br from-amber-400 to-white absolute bottom-[303px]  bg-clip-text -right-10">
                  <span className="text-transparent leading-none font-sans  font-bold text-[8rem]">
                    07
                  </span>
                </div>
                {/* IMAGE */}
                <div className="group w-[290px] h-[380px]">
                  <div className="-scale-x-100">
                    <img
                      className="-rotate-[25deg] absolute right-3 cursor-pointer transform scale-110 group-hover:rotate-0 transition-all group-hover:scale-150 duration-500"
                      src={gold}
                      alt=""
                    />
                  </div>
                </div>

                {/* THREE DOTS */}
                <div className="bottom-7 left-[130px] absolute flex items-center justify-center flex-row space-x-2">
                  <span className="w-3 h-3 rounded-full block bg-amber-400 cursor-pointer"></span>
                  <span className="w-3 h-3 rounded-full block bg-amber-200 hover:bg-amber-400 cursor-pointer"></span>
                  <span className="w-3 h-3 rounded-full block bg-amber-200 hover:bg-amber-400 cursor-pointer"></span>
                </div>
              </div>
              {/* RIGHT */}
              <div className="bg-amber-200 translate-x-[77px] h-fit absolute bottom-[8px]  shadow-lg shadow-amber-600  rounded-r-2xl  group-hover:translate-x-[310px]  duration-500 transform transition-all">
                {/* IMAGE */}
                <div className="image mb-2  w-[300px] h-[230px] overflow-hidden rounded-tr-2xl">
                  <img src={nagi} alt="" />
                </div>

                {/* LOWER SECTION */}

                <div className=" mb-3 flex flex-col items-center justify center space-y-3">
                  {/* DETAILS */}
                  <div className=" px-4 flex flex-row space-x-4 justify-center items-center  max-w-[300px]">
                    <div className="flex font-semibold text-sm flex-col">
                      <span>Name</span>
                      <span>Position</span>
                      <span>Weapon</span>
                    </div>
                    <div className="flex flex-col">
                      <span className="text-sm break-words ">
                        Nagi Seishiro
                      </span>
                      <span className="text-sm break-words ">FW</span>
                      <span className="text-sm break-words">Ball Control</span>
                    </div>
                  </div>
                  {/* SIZES */}

                  <div className="flex w-fit mx-auto flex-row border-[0.5px] border-amber-800 space-x-4 bg-transparent py-1 px-2 rounded-3xl cursor-pointer">
                    <p className="font-bold text-amber-800">Size</p>

                    <p className="hover:font-bold hover:scale-105 text-[13px] transition-all transform">
                      7.5
                    </p>
                    <p className="hover:font-bold hover:scale-105 text-[13px] transition-all transform">
                      8
                    </p>
                    <p className=" hover:font-bold hover:scale-105 text-[13px] transition-all transform">
                      9
                    </p>
                    <p className="hover:font-bold hover:scale-105 text-[13px] transition-all transform">
                      9.5
                    </p>
                    <p className="hover:font-bold hover:scale-105 text-[13px] transition-all transform">
                      10
                    </p>
                  </div>
                </div>
                {/* BUTTON */}
                <div className="  mb-2 space-x-5 flex flex-row justify-center items-center">
                  <span className="text-amber-800 text-sm font-semibold cursor-pointer">
                    Buy Now
                  </span>
                  <div className="flex cursor-pointer w-10 h-10 hover:bg-amber-600 hover:scale-110 flex-row items-center justify-center relative transition-all transform bg-amber-800  rounded-full shadow-lg shadow-amber-900 ">
                    <button className="text-sm  text-white font-semibold  "></button>
                    <MdOutlineArrowForward
                      size={20}
                      color="white"
                      className="absolute"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* CARD 2- RIN*/}
          <div className=" cardWrapper relative py-[132px] flex flex-row items-center     bg-white">
            <div className="CONCEPT-DIV absolute pt-5 right-28 space-y-4 top-20 bg-transparent flex flex-col items-center justify-center">
              <div className="TOP flex justify-center items-center space-x-1">
                <div className=" pt-2 ">
                  <SiNike size={35} color="black" />
                </div>
                <div className="  w-[30px] h-[30px]">
                  <div className="">
                    <img className=" " src={logo} alt="" />
                  </div>
                </div>
              </div>

              <h1 className="text-9xl font-extrabold">NIKE </h1>

              <h1 className="text-3xl">x </h1>
              <h1 className="text-7xl font-semibold">BLUE LOCK </h1>
              <h1 className="text-3xl pt-5 font-semibold">Rin Itoshi </h1>
            </div>
            <div className="group ml-16 CARD-DIV  p-3  w-fit relative ">
              {/* LEFT*/}
              <div className="  z-10 p-2  cursor-pointer group relative shadow-lg shadow-teal-500  rounded-2xl  bg-gradient-to-br from-teal-400 to-white transform scale-110">
                {/* ICON */}
                <div className="absolute top-4 left-6 ">
                  <SiNike size={60} color="white" />
                </div>

                {/* NUMBER */}
                <div className=" flex justify-center items-center  bg-gradient-to-br from-teal-600 to-black absolute bottom-[303px]  bg-clip-text -right-10">
                  <span className="text-transparent leading-none font-sans  font-bold text-[8rem]">
                    01
                  </span>
                </div>
                {/* IMAGE */}
                <div className="group w-[290px] h-[380px]">
                  <div className="-scale-x-100">
                    <img
                      className="-rotate-[25deg] cursor-pointer transform scale-110 group-hover:rotate-0 transition-all group-hover:scale-150 duration-500"
                      src={teal}
                      alt=""
                    />
                  </div>
                </div>

                {/* THREE DOTS */}
                <div className="bottom-7 left-[130px] absolute flex items-center justify-center flex-row space-x-2">
                  <span className="w-3 h-3 rounded-full block bg-teal-500 cursor-pointer"></span>
                  <span className="w-3 h-3 rounded-full block bg-teal-800 hover:bg-teal-500 cursor-pointer"></span>
                  <span className="w-3 h-3 rounded-full block bg-teal-800 hover:bg-teal-500 cursor-pointer"></span>
                </div>
              </div>
              {/* RIGHT */}
              <div className="bg-teal-400 translate-x-[77px] h-fit absolute bottom-[8px]  shadow-lg shadow-teal-500  rounded-r-2xl  group-hover:translate-x-[310px]  duration-500 transform transition-all">
                {/* IMAGE */}
                <div className="image mb-2  w-[300px] h-[230px] overflow-hidden rounded-tr-2xl">
                  <img src={rin} alt="" />
                </div>

                {/* LOWER SECTION */}

                <div className=" mb-3 flex flex-col items-center justify center space-y-3">
                  {/* DETAILS */}
                  <div className=" px-4 flex flex-row space-x-4 justify-center items-center  max-w-[300px]">
                    <div className="flex font-semibold text-sm flex-col">
                      <span>Name</span>
                      <span>Position</span>
                      <span>Weapon</span>
                    </div>
                    <div className="flex flex-col">
                      <span className="text-sm break-words ">Itoshi Rin</span>
                      <span className="text-sm break-words ">FW</span>
                      <span className="text-sm break-words">Kick Accuracy</span>
                    </div>
                  </div>
                  {/* SIZES */}

                  <div className="flex w-fit mx-auto flex-row border-[0.5px] border-teal-600 space-x-4 bg-transparent py-1 px-2 rounded-3xl cursor-pointer">
                    <p className="font-bold text-teal-900">Size</p>

                    <p className="hover:font-bold hover:scale-105 text-[13px] transition-all transform">
                      7.5
                    </p>
                    <p className="hover:font-bold hover:scale-105 text-[13px] transition-all transform">
                      8
                    </p>
                    <p className=" hover:font-bold hover:scale-105 text-[13px] transition-all transform">
                      9
                    </p>
                    <p className="hover:font-bold hover:scale-105 text-[13px] transition-all transform">
                      9.5
                    </p>
                    <p className="hover:font-bold hover:scale-105 text-[13px] transition-all transform">
                      10
                    </p>
                  </div>
                </div>
                {/* BUTTON */}
                <div className="  mb-2 space-x-5 flex flex-row justify-center items-center">
                  <span className="text-sm font-semibold cursor-pointer">
                    Buy Now
                  </span>
                  <div className="flex cursor-pointer w-10 h-10 hover:bg-teal-600 hover:scale-110 flex-row items-center justify-center relative transition-all transform bg-teal-800  rounded-full shadow-lg shadow-teal-950 ">
                    <button className="text-sm  text-white font-semibold  "></button>
                    <MdOutlineArrowForward
                      size={20}
                      color="white"
                      className="absolute"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* CARD 5- BAROU*/}
          <div className=" cardWrapper relative py-[132px] flex flex-row items-center  bg-red-700">
            <div className="CONCEPT-DIV absolute pt-5 right-28 space-y-4 top-20 bg-transparent flex flex-col items-center justify-center">
              <div className="TOP flex justify-center items-center space-x-1">
                <div className=" pt-2 ">
                  <SiNike size={35} color="black" />
                </div>
                <div className="  w-[30px] h-[30px]">
                  <div className="">
                    <img className=" " src={logo} alt="" />
                  </div>
                </div>
              </div>

              <h1 className="text-9xl font-extrabold">NIKE </h1>

              <h1 className="text-3xl">x </h1>
              <h1 className="text-7xl font-semibold">BLUE LOCK </h1>
              <h1 className="text-3xl pt-5 font-semibold">Barou Shoei </h1>
            </div>
            <div className="group ml-16 CARD-DIV  p-3  w-fit relative ">
              {/* LEFT*/}
              <div className="  z-10 p-2  cursor-pointer group relative shadow-xl shadow-black  rounded-2xl  bg-gradient-to-br from-red-600 to-black transform scale-110">
                {/* ICON */}
                <div className="absolute top-4 left-6 ">
                  <SiNike size={60} color="white" />
                </div>

                {/* NUMBER */}
                <div className=" flex justify-center items-center  bg-gradient-to-br from-black to-black absolute bottom-[303px]  bg-clip-text -right-10">
                  <span className="text-transparent leading-none font-sans  font-bold text-[8rem]">
                    10
                  </span>
                </div>
                {/* IMAGE */}
                <div className=" group w-[290px] h-[380px]">
                  <div className="">
                    <img
                      className="absolute top-11 rotate-[25deg] cursor-pointer transform  group-hover:rotate-2 transition-all group-hover:scale-125 duration-500"
                      src={red}
                      alt=""
                    />
                  </div>
                </div>

                {/* THREE DOTS */}
                <div className="bottom-7 left-[130px] absolute flex items-center justify-center flex-row space-x-2">
                  <span className="w-3 h-3 rounded-full block bg-red-500 cursor-pointer"></span>
                  <span className="w-3 h-3 rounded-full block bg-red-800 hover:bg-red-500 cursor-pointer"></span>
                  <span className="w-3 h-3 rounded-full block bg-red-800 hover:bg-red-500 cursor-pointer"></span>
                </div>
              </div>
              {/* RIGHT */}
              <div className="bg-stone-900  translate-x-[77px] h-fit absolute bottom-[8px]  shadow-xl shadow-black rounded-r-2xl  group-hover:translate-x-[310px]  duration-500 transform transition-all">
                {/* IMAGE */}
                <div className="image mb-2  w-[300px] h-[230px] overflow-hidden rounded-tr-2xl">
                  <img src={barou} alt="" />
                </div>

                {/* LOWER SECTION */}

                <div className=" mb-3 flex flex-col items-center justify center space-y-3">
                  {/* DETAILS */}
                  <div className="text-white px-4 flex flex-row space-x-4 justify-center items-center  max-w-[300px]">
                    <div className="flex font-semibold text-sm flex-col">
                      <span>Name</span>
                      <span>Position</span>
                      <span>Weapon</span>
                    </div>
                    <div className="flex flex-col">
                      <span className="text-sm break-words ">Shoei Barou</span>
                      <span className="text-sm break-words ">LW</span>
                      <span className="text-sm break-words">Chop Feints</span>
                    </div>
                  </div>
                  {/* SIZES */}

                  <div className="text-white flex w-fit mx-auto flex-row border-[0.5px] border-white space-x-4 bg-transparent py-1 px-2 rounded-3xl cursor-pointer">
                    <p className="font-bold">Size</p>

                    <p className="hover:font-bold hover:scale-105 text-[13px] transition-all transform">
                      7.5
                    </p>
                    <p className="hover:font-bold hover:scale-105 text-[13px] transition-all transform">
                      8
                    </p>
                    <p className=" hover:font-bold hover:scale-105 text-[13px] transition-all transform">
                      9
                    </p>
                    <p className="hover:font-bold hover:scale-105 text-[13px] transition-all transform">
                      9.5
                    </p>
                    <p className="hover:font-bold hover:scale-105 text-[13px] transition-all transform">
                      10
                    </p>
                  </div>
                </div>
                {/* BUTTON */}
                <div className=" text-white mb-2 space-x-5 flex flex-row justify-center items-center">
                  <span className="text-sm font-semibold cursor-pointer">
                    Buy Now
                  </span>
                  <div className="flex cursor-pointer w-10 h-10 hover:bg-red-700 hover:scale-110 flex-row items-center justify-center relative transition-all transform bg-red-900  rounded-full shadow-lg shadow-black ">
                    <button className="text-sm  text-white font-semibold  "></button>
                    <MdOutlineArrowForward
                      size={20}
                      color="white"
                      className="absolute"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* CARD 1- BACHIRA */}
          <div className=" relative cardWrapper py-[132px] flex flex-row items-center    bg-yellow-500">
            <div className="CONCEPT-DIV absolute pt-5 right-28 space-y-4 top-20 bg-transparent flex flex-col items-center justify-center">
              <div className="TOP flex justify-center items-center space-x-1">
                <div className=" pt-2 ">
                  <SiNike size={35} color="black" />
                </div>
                <div className="  w-[30px] h-[30px]">
                  <div className="">
                    <img className=" " src={logo} alt="" />
                  </div>
                </div>
              </div>

              <h1 className="text-9xl font-extrabold">NIKE </h1>

              <h1 className="text-3xl">x </h1>
              <h1 className="text-7xl font-semibold">BLUE LOCK </h1>
              <h1 className="text-3xl pt-5 font-semibold">Bachira Meguru </h1>
            </div>
            <div className="group ml-16 CARD-DIV  p-3  w-fit relative ">
              {/* LEFT*/}
              <div className="  z-10 p-2  cursor-pointer group relative shadow-lg shadow-yellow-950  rounded-2xl  bg-gradient-to-br from-yellow-500 to-white transform scale-110">
                {/* ICON */}
                <div className="absolute top-4 left-6 ">
                  <SiNike size={60} color="white" />
                </div>

                {/* NUMBER */}
                <div className=" flex justify-center items-center  bg-gradient-to-br from-yellow-400 to-black absolute bottom-[303px]  bg-clip-text -right-10">
                  <span className="text-transparent leading-none font-sans  font-bold text-[8rem]">
                    08
                  </span>
                </div>
                {/* IMAGE */}
                <div className="  w-[290px] h-[380px]">
                  <img
                    className=" -rotate-[15deg]   cursor-pointer transform scale-110 group-hover:-rotate-[35deg] transition-all group-hover:scale-150 duration-500  "
                    src={yellow}
                    alt=""
                  />
                </div>
                {/* THREE DOTS */}
                <div className="bottom-7 left-[130px] absolute flex items-center justify-center flex-row space-x-2">
                  <span className="w-3 h-3 rounded-full block bg-yellow-600 cursor-pointer"></span>
                  <span className="w-3 h-3 rounded-full block bg-yellow-400 hover:bg-yellow-600 cursor-pointer"></span>
                  <span className="w-3 h-3 rounded-full block bg-yellow-400 hover:bg-yellow-600 cursor-pointer"></span>
                </div>
              </div>
              {/* RIGHT */}
              <div className="bg-yellow-400 translate-x-[77px] h-fit absolute bottom-[8px]  shadow-lg shadow-yellow-950  rounded-r-2xl  group-hover:translate-x-[310px]  duration-500 transform transition-all">
                {/* IMAGE */}
                <div className="image mb-2  w-[300px] h-[230px] overflow-hidden rounded-tr-2xl">
                  <img src={bachira} alt="" />
                </div>

                {/* LOWER SECTION */}

                <div className=" mb-3 flex flex-col items-center justify center space-y-3">
                  {/* DETAILS */}
                  <div className=" px-4 flex flex-row space-x-4 justify-center items-center  max-w-[300px]">
                    <div className="flex font-semibold text-sm flex-col">
                      <span>Name</span>
                      <span>Position</span>
                      <span>Weapon</span>
                    </div>
                    <div className="flex flex-col">
                      <span className="text-sm break-words ">
                        Bachira Meguru
                      </span>
                      <span className="text-sm break-words ">CF</span>
                      <span className="text-sm break-words">Dribble</span>
                    </div>
                  </div>
                  {/* SIZES */}

                  <div className="flex w-fit mx-auto flex-row border-[0.5px] border-yellow-900 space-x-4 bg-transparent py-1 px-2 rounded-3xl cursor-pointer">
                    <p className="font-bold text-yellow-900">Size</p>

                    <p className="hover:font-bold hover:scale-105 text-[13px] transition-all transform">
                      7.5
                    </p>
                    <p className="hover:font-bold hover:scale-105 text-[13px] transition-all transform">
                      8
                    </p>
                    <p className=" hover:font-bold hover:scale-105 text-[13px] transition-all transform">
                      9
                    </p>
                    <p className="hover:font-bold hover:scale-105 text-[13px] transition-all transform">
                      9.5
                    </p>
                    <p className="hover:font-bold hover:scale-105 text-[13px] transition-all transform">
                      10
                    </p>
                  </div>
                </div>
                {/* BUTTON */}
                <div className="  mb-2 space-x-5 flex flex-row justify-center items-center">
                  <span className="text-sm font-semibold cursor-pointer">
                    Buy Now
                  </span>
                  <div className="flex cursor-pointer w-10 h-10 hover:bg-yellow-600 hover:scale-110 flex-row items-center justify-center relative transition-all transform bg-yellow-900  rounded-full shadow-lg shadow-yellow-950 ">
                    <button className="text-sm  text-white font-semibold  "></button>
                    <MdOutlineArrowForward
                      size={20}
                      color="white"
                      className="absolute"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* ADD CARDS ABOVE THIS COMMENT */}
        </div>
      </div>
    </>
  );
};

export default ContactUs;
