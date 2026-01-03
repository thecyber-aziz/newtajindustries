import React from 'react'

export default function About() {
  return (
    <div className="bg-[#CDEA68] rounded-t-[2vw] mt-[-2vw]">
      <h1 className="text-[8vw] leading-[7vw] md:text-[5vw] md:leading-[5vw] p-8">
       New Taj Industries <span className="text-xl">Manufacturer of Injection Moulding Machines with high precision and durability. Based in Industrial Area, New Delhi.</span>
      </h1>
      <div className="w-full border-t-[0.5px] border-[#88984d]"></div>
      <div class="about2 p-8 grid md:grid-cols-3 gap-5">
        <p class="">About:</p>
        <p class="">New Taj Industreis specializes in precision injection moulding and industrial machinery repair. We have years of experience providing high-quality services for various plastic industries.</p>  
        <p class="">Our team of expert technicians ensures timely maintenance, accurate repairs, and professional consultancy to optimize your machine performance. We also provide specialized services in PLC maintenance, screw barrel repair, honing, and other industrial solutions.

</p> 
      </div>
      <div className="w-full border-t-[0.5px] border-[#88984d]"></div>
      <div class="p-8 flex flex-col gap-10 md:flex-row justify-between">
         <div>
           <h1 className="text-[8vw] md:text-[5vw]">Our Approach :</h1>
           <button className="bg-black py-2 px-3 md:py-4 md:px-6 text-white rounded-[100px]">READ MORE</button>
         </div>
         <div class="card bg-center bg-no-repeat bg-cover bg-[url(https://ochi.design/wp-content/uploads/2022/06/Frame-3898-1-1326x1100.jpg)] w-full h-[30vh] md:w-[40vw] md:h-[30vw] bg-zinc-500 rounded-xl my-[4vw]  md:my-[2vw]"></div>
       </div>

      
    </div>
  )
}