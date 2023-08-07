import React from "react";
import {FaMobileAlt} from "react-icons/fa"
import {AiOutlineMail} from "react-icons/ai";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const Contact = () => {
  return (
    <div
      name="contact"
      className="w-full p-4 text-white bg-gradient-to-b "
    >
      <div className="flex flex-col justify-center h-full max-w-screen-lg p-4 mx-auto">
        <div className="pb-8">
          <p className="inline text-4xl font-bold border-b-4 border-gray-500">
            Contact
          </p>
       
          <p className="py-6">Submit the form below to get in touch with me</p>
          <div className="flex flex-col gap-y-5">
          <a className="flex text-lg cursor-pointer gap-x-5" title="Mobile Number"> <FaMobileAlt  size={30} /> <p>+91 - 7667628457</p></a>
          <a className="flex text-lg gap-x-5" title="Eamil Address" href="mailto:akshaysingh906022@gmail.com"> 
          <AiOutlineMail size={30}/>
          <p>akshaysingh906022@gmail.com</p>
          </a>
          <a className="flex text-lg gap-x-5" title="LinkedIn" href="https://www.linkedin.com/in/mritunjay-kumar-6911561b0/"> 
          <FaLinkedin size={30}/>
          <p>Mritunjay Kumar</p>
          </a>
          <a className="flex text-lg gap-x-5" title="GitHub" href="https://github.com/Mritunjay0001"> 
          <FaGithub size={30}/>
          <p>Mritunjay0001</p>
          </a>
          
          </div>
         
         
        </div>
        {/* <div className="flex items-center justify-center">
          <form
            action="https://getform.io/f/87439ba9-c648-43c3-a50b-c782e09e8e08"
            method="POST"
            className="flex flex-col w-full md:w-1/2"
          >
            <input
              type="text"
              name="name"
              placeholder="Enter your name"
              className="p-2 text-white bg-transparent border-2 rounded-md focus:outline-none"
            />
            <input
              type="text"
              name="email"
              placeholder="Enter your email"
              className="p-2 my-4 text-white bg-transparent border-2 rounded-md focus:outline-none"
            />
            <textarea
              name="message"
              placeholder="Enter your message"
              rows="10"
              className="p-2 text-white bg-transparent border-2 rounded-md focus:outline-none"
            ></textarea>

            <button className="flex items-center px-6 py-3 mx-auto my-8 text-white duration-300 rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 hover:scale-110">
              Let's Talk
            </button>
          </form>
        </div> */}
      </div>
    </div>
  );
};

export default Contact;
