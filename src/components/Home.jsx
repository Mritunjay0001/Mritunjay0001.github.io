import React from 'react'
import MyImage from '../assets/myImage.png'
import { MdOutlineKeyboardArrowRight } from 'react-icons/md'
import { Link } from 'react-scroll'

const Home = () => {
  return (
    <div
      name="home"
      className="w-full  p-10  "
    >
      <div className="flex flex-col lg:flex-row-reverse md:flex-col  items-center justify-around  max-w-screen-lg px-16 gap-x-16 m-auto  ">
      <div className=" flex justify-center items-center shadow-orange-400 bg-transparent shadow-xl  min-[320px]:px-[16px]  sm:px-16 md:px- py-8 mt-16 border-4 border-dashed rounded-tr-[390px] rounded-bl-[190px] border-orange-400 group md:flex  ">
      <img
        src={MyImage}
        alt="my profile"
        className=" duration-700 shadow-orange-400 shadow-md md:w-[70%] lg:w-[90%]   rounded-2xl rounded-tr-[50px] rounded-bl-[40px] sm:rounded-tr-[190px] group-hover:rounded-full group-hover:scale-105"
      />
    </div>
        <div className="mt-10  ">
          <h2 className=" font-bold text-[16px] text-white sm:text-4xl">
            I'am a Full Stack Web Developer
          </h2>
          <p className="max-w-md sm:text-[18px] py-4 text-gray-500 text-[12px] text-justify">
            I am a full stack web developer with excellent knowledge of HTML,
            CSS, JavaScript, React, NodeJS, Node, Python and other related
            technologies.
          </p>
          <div>
            <Link
              to="portfolio"
              smooth
              duration={500}
              className="flex items-center px-6 py-3 my-2 text-white rounded-md cursor-pointer group w-fit bg-gradient-to-r from-orange-500 to-orange-500"
            >
              Portfolio
              <span className="duration-300 group-hover:rotate-90">
                <MdOutlineKeyboardArrowRight size={25} className="ml-1" />
              </span>
            </Link>
          </div>
        </div>
      
      </div>
    </div>
  )
}

export default Home
