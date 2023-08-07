import React from "react";
import GitHubCalendar from "react-github-calendar";

const GitCalendar = () => {
    
  return (
    <div className="flex px-5 flex-col items-center justify-center py-[50px] gap-y-20 text-slate-100 " >
    

    <div className="cursor-pointer border-4 lg:w-[40%] md:w-[80%] sm:w-[95%] group   rounded-tr-[190px] flex justify-center items-center hover:-sc p-4 shadow-orange-400 border-dashed shadow-2xl border-orange-400 rounded-bl-[120px]">
    <p className="inline p-2 text-4xl font-bold border-b-4 border-gray-500 hover:shadow-2xl group-hover:-scale-125 group-hover:rotate-180 duration-1000  rounded-bl-[40px] group-hover:rounded-[5px]">
    Git Calendar
        </p></div>

      <div m='auto' mt={10} mb={10} w='95%'>
        <GitHubCalendar username="Mritunjay0001" blockSize={15} blockMargin={5} fontSize={15}/>
      </div>


      <div  className="cursor-pointer border-4 lg:w-[40%] md:w-[80%] sm:w-[95%] group   rounded-tr-[190px] flex justify-center items-center hover:-sc p-4 shadow-orange-400 border-dashed shadow-2xl border-orange-400 rounded-bl-[120px]">
        <img className="group-hover:-scale-125 group-hover:rotate-180 duration-1000  rounded-bl-[90px] group-hover:rounded-[5px]" src="http://github-profile-summary-cards.vercel.app/api/cards/profile-details?username=Mritunjay0001&theme=github" />
      </div>
    
       
          <div  className="cursor-pointer border-4 lg:w-[40%] md:w-[80%] sm:w-[95%] group   rounded-tr-[190px] flex justify-center items-center hover:-sc p-4 shadow-orange-400 border-dashed shadow-2xl border-orange-400 rounded-bl-[120px]">
            <img className="group-hover:-scale-125 group-hover:rotate-180 duration-1000  rounded-bl-[90px] group-hover:rounded-[5px]"  src="http://github-profile-summary-cards.vercel.app/api/cards/stats?username=Mritunjay0001&theme=github" />
          </div>
          <div  className="cursor-pointer border-4 lg:w-[40%] md:w-[80%] sm:w-[95%] group   rounded-tr-[190px] flex justify-center items-center hover:-sc p-4 shadow-orange-400 border-dashed shadow-2xl border-orange-400 rounded-bl-[120px]">
            <img className="group-hover:-scale-125 group-hover:rotate-180 duration-1000  rounded-bl-[90px] group-hover:rounded-[5px]"  src="http://github-profile-summary-cards.vercel.app/api/cards/productive-time?username=Mritunjay0001&theme=github&utcOffset=8" />
          </div>
        
       

    </div>
  );
};

export default GitCalendar;