import React from 'react'

export default function Feature() {
  return (
    <div className="overflow-hidden rounded-t-[2vw]" id="project">
        <div class="p-8  text-[8vw] md:text-[5vw] border-b-[1px] border-black">Services</div>
        <div class="cardOuterBox grid justify-between grid-cols-1 md:grid-cols-2"> 
          <div class="cardInnerbox p-8 ">
             <h2 className="text-[6vw] md:text-[2vw]">• Compact Industrial Injection Molding Machine</h2>
             <div class="card bg-center bg-no-repeat bg-cover bg-[url('/about2.webp')] w-full h-[30vh] md:w-[40vw] md:h-[30vw] border-zinc-950 border-[1px] rounded-[10px] my-[4vw] md:my-[2vw]"></div>
       
             <p className="">Perfect for small to medium manufacturing units, this compact machine offers reliable output while saving floor space and operating costs.</p>

          </div>
          <div class="cardInnerbox p-8">
             <h2 className="text-[6vw] md:text-[2vw]">• Advanced Servo-Driven Injection Molding Machine</h2>
             <div class="card bg-center  bg-no-repeat bg-cover bg-[url('about1.webp')] w-full h-[30vh] md:w-[40vw] md:h-[30vw] border-zinc-950 border-[1px] rounded-[10px] my-[4vw]  md:my-[2vw]"></div>
            
             <span>Built with energy-efficient servo technology, this machine delivers faster cycles, lower power consumption, and precise molding control.</span>
          </div>
          <div class="cardInnerbox p-8">
             <h2 className="text-[6vw] md:text-[2vw]">• Heavy-Duty Injection Molding Machine for Large Components</h2>
             <div class="card bg-center bg-no-repeat bg-cover bg-[url('about3.webp')] w-full h-[30vh] md:w-[40vw] md:h-[30vw] border-zinc-950 border-[1px] rounded-[10px] my-[4vw] md:my-[2vw]"></div>
          
             <span>Engineered for high clamping force and continuous operation, this machine is suitable for producing large and complex plastic parts.</span>
          </div>
          <div class="cardInnerbox p-8">
             <h2 className="text-[6vw] md:text-[2vw]">• High-Precision Hydraulic Injection Molding Machine</h2>
             <div class="card bg-center bg-no-repeat bg-cover bg-[url('about4.webp')] w-full h-[30vh] md:w-[40vw] md:h-[30vw] border-zinc-950 border-[1px] rounded-[10px] my-[4vw]  md:my-[2vw]"></div>
            
             <span>Designed for stable performance and high accuracy, this machine is ideal for mass production of durable plastic components with consistent quality.</span>
          </div>
        </div>
        <a  href="https://instagram.com/new_taj_industries_"
    target="_blank"
    rel="noopener noreferrer">
         <div class="w-full grid place-items-center py-5">
             <button className="bg-black text-white p-4 rounded-[100px] flex gap-2 items-center">FOLLOW ME ON INSTAGRAM 
               <svg className="w-[25px]" href="https://instagram.com/new_taj_industries_" viewBox="0 0 24 24" 
               fill="currentColor"><path d="M16.0037 9.41421L7.39712 18.0208L5.98291 16.6066L14.5895
                8H7.00373V6H18.0037V17H16.0037V9.41421Z"></path></svg></button>
        </div>
        </a>
    </div>
  )
}