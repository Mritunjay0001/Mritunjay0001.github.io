import React from 'react'
import { portfolio_data } from '../all data/portfolio_data'
import { FaGithub } from 'react-icons/fa'
import { FiExternalLink } from 'react-icons/fi'

const Portfolio = () => {
  const portfolio = portfolio_data

  const handleDemo = (demo) => {
    window.open(demo)
  }

  const handleCode = (code) => {
    window.open(code)
  }
  return (
    <div
      name="projects"
      className="w-full h-full text-white "
    >
      <div className="flex flex-col justify-center  p-4 mx-auto xl:w-[80%] lg:w-[95%] ">
        <div className="pb-8">
          <p className="inline text-4xl font-bold border-b-4 border-gray-500">
            Projects
          </p>
          <p className="py-6">Check out some of my work right here</p>
        </div>

        <div className="flex flex-col justify-center items-center gap-y-20 px-12   lg:w-[100%] md:w-[80%] xl:w-[100%] sm:w-[85%] w-[100%] m-auto">
          {portfolio.map(({ id, src, demo, code, tech_stacks,desc ,title}) => (
            <div
              key={id}
              className="py-8 hover:shadow-lg  hover:animate-none rounded-bl-[180px] rounded-tr-[190px] duration-1000 hover:shadow-orange-400 group cursor-pointer"
            >
            <p className='px-5 text-base font-semibold lg:text-3xl md:text-xl sm:text-lg '>{title}</p>
              <div className="flex  flex-col lg:flex-row sm:flex-col text-center items-center justify-between gap-4 sm:gap-y-8 px-16 py-8  shadow-inner shadow-orange-400 rounded-tr-[190px] sm:rounded-bl-[280px] rounded-bl-[180px] ">
          
                <div
                  onClick={() => handleDemo(demo)}
                  className="cursor-pointer border-4 lg:w-[40%] md:w-[80%] sm:w-[95%]   rounded-tr-[190px] flex justify-center items-center p-4 animate-pulse group-hover:animate-none
                  shadow-orange-400 border-dashed shadow-2xl border-orange-400 rounded-bl-[120px] "
                >
                  <img
                    src={src}
                    alt="1"
                    className="
                    group-hover:-scale-150
                    max-[500px]:group-hover:-scale-[2] lg:group-hover:-scale-150 group-hover:rotate-180 duration-1000  rounded-bl-[90px] group-hover:rounded-[5px]   "
                  />
                </div>
                <div className="  sm:w-[75%] lg:w-[25%]   px-6 py-4 rounded-[30px] text-center shadow-inner shadow-orange-500">
                  <p className="underline underline-offset-[6px]  font-bold decoration-2 text-xl mb-2">
                    {' '}
                    Summary
                  </p>
                  <p className=" text-[9.1px]   xl:text-[14.5px]  lg:text-[12px] tracking-wide text-left">
                    {desc}
                  </p>
                </div>
                <div className="sm:w-[75%] lg:w-[25%] flex flex-col sm:gap-8 ">
                  <p className="lg:text-lg text-[11px] font-bold sm:text-[12px]">Tech Stack Used :</p>
                  <div className="grid justify-center w-full grid-cols-4 gap-4 px-1 py-2 ">
                    {tech_stacks.map(({ id, src, title, style }) => {
                      return (
                        <div
                          key={id}
                          title={title}
                          className={`shadow-inner animate-spin   w-8 py-4 group-hover:-scale-125  cursor-pointer  ${style} rounded-tr-[90px] rounded-bl-[190px] group-hover:rotate-[900deg] duration-700`}
                        >
                          <div
                            className={`shadow-inner  hover:scale-105 duration-500 py-4 cursor-pointer   ${style} rounded-tr-[190px] rounded-bl-[90px]`}
                          >
                            <img
                              src={src}
                              alt={src}
                              className={`w-full cursor-pointer  `}
                            />
                          </div>
                        </div>
                      )
                    })}
                  </div>
                  <div className="grid grid-cols-2 gap-3 px-2 my-5 gap-x-2 ">
                    <div
                      className="flex justify-center px-4 py-1 text-2xl font-bold rounded-md shadow-inner cursor-pointer animate-bounce text-slate-100 shadow-orange-500 hover:shadow-slate-700 "
                      title="Website"
                      onClick={()=>handleDemo(demo)}
                    >
                      <FiExternalLink />
                    </div>
                    <div
                      className="flex justify-center py-1 text-2xl font-bold rounded-md shadow-inner cursor-pointer animate-bounce hover:shadow-slate-700 x-4 text-slate-100 shadow-orange-500"
                      title="Github"
                      onClick={()=>handleCode(code)}
                    >
                      <FaGithub size={30} />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Portfolio
