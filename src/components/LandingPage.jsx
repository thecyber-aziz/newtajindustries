import React from 'react'
import { motion } from 'framer-motion'

export default function LandingPage() {
  
  return (
    <div className="h-screen w-full">
     <div className="textbox  absolute top-[60vw] md:top-2/4 left-8 -translate-y-2/4">
     {["All Types", "Injection", "Molding Machine Manufacturer & Repairing"]
       .map((item, index) => {
         return  <div class="masker">
                 <div class="w-fit flex items-center gap-2">
                 {index === 1 && (<div  className="w-[14vw] h-[9.5vw] bg-center bg-cover bg-[url('/loog.jpg')]  md:w-[9vw] md:h-[6vw] bg-[#CDEA68] rounded mb-[7%]"></div>)}
                 <h1 className="font-semibold GroteskFont text-[14vw] leading-[9vw] md:text-[9vw] md:leading-[5vw]">{item}</h1>
                 </div>
                 </div>
       })}
     </div>
     
     <div class="bottomDiv w-full border-t-[0.5px] border-zinc-500 flex justify-between gap-5 md:flex-row flex-col  absolute bottom-0 left-0 px-8 pt-4  pb-4 md:pb-20">
     {["Your trusted partner for machine maintenance | Innovative Plastic Machinery", "Wanna see my Company?", "EXPLORE COMPANY"]
      .map((item, index) => <a key={index} className={`text-zinc ${index == 2 && "border-zinc-950 border-[1px] rounded-[100px] px-3 w-fit"}`}>{item}</a>)
     }
     </div>
    </div>
  )
} 