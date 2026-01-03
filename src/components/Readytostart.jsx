import React, {useEffect , useRef, useState} from 'react'

export default function Readytostart() {
  const [rotate, setRotate] = useState(0);
  useEffect(() => {
    window.addEventListener('mousemove', (e) => {
      let mouseX = e.clientX;
      let mouseY = e.clientY;
      let deltaX = mouseX - window.innerWidth/2;
      let deltaY = mouseY - window.innerHeight/2;
      let angle = Math.atan2(deltaY, deltaX) * (180/Math.PI);
      setRotate(angle-180)
    })
  })
  return (
    <div className="px-8 py-16 w-full bg-[#CDEA68]">
       <div class="flex flex-col items-center justify-center w-full">
       {["WE ARE A", "GST-REGISTERED","BUSINESS"]
       .map((item, index) => {
         return  <h1 className="font-semibold GroteskFont text-[14vw] leading-[11vw] md:text-[9vw] md:leading-[7vw]">{item}</h1>
       })}
       </div>
       
       <div class="flex gap-5 justify-center">
           <div class="eye h-[10vw] w-[10vw] bg-white rounded-[50%] grid place-items-center">
            <div class="eye h-[6vw] w-[6vw] bg-black rounded-[50%] relative">
               <div style={{transform: `translateY(-50%) rotate(${rotate}deg)`}} class="div w-full h-[3vw] absolute top-1/2 -translate-y-1/2">
                 <div class="eye h-[1.5vw] w-[1.5vw] bg-white rounded-[50%]"></div>
               </div>
           </div>
        </div>
        <div class="eye h-[10vw] w-[10vw] bg-white rounded-[50%] grid place-items-center">
            <div class="eye h-[6vw] w-[6vw] bg-black rounded-[50%] relative">
               <div style={{transform: `translateY(-50%) rotate(${rotate}deg)`}} class="div w-full h-[3vw] absolute top-1/2 -translate-y-1/2">
                 <div class="eye h-[1.5vw] w-[1.5vw] bg-white rounded-[50%]"></div>
               </div>
           </div>
        </div>
      </div>
      <div class="w-full grid place-items-center py-8">
             <button className="bg-black text-white p-4 rounded-[100px] flex gap-2 items-center">GSTIN: 07EXNPM6777E1ZT<svg className="w-[25px]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M16.0037 9.41421L7.39712 18.0208L5.98291 16.6066L14.5895 8H7.00373V6H18.0037V17H16.0037V9.41421Z"></path></svg></button>
      </div>
      <div class="w-full grid place-items-center">
             <button className="border-black border-2 text-black p-4 rounded-[100px] flex gap-2 items-center">NEWTAJINDUSTRIES <svg className="w-[25px]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M16.0037 9.41421L7.39712 18.0208L5.98291 16.6066L14.5895 8H7.00373V6H18.0037V17H16.0037V9.41421Z"></path></svg></button>
      </div>
    </div>
  )
}