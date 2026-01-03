import React, {useEffect , useRef, useState} from 'react'

export default function Eye() {
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
    <div className="w-full h-fit relative">
      <img src="https://ochi.design/wp-content/uploads/2022/05/Top-Viewbbcbv-1-scaled.jpg" alt=""/>
      <div class="eyeBackground flex gap-[5vw]  absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
        <div class="eye h-[20vw] w-[20vw] bg-white rounded-[50%] grid place-items-center">
            <div class="eye h-[12.5vw] w-[12.5vw] bg-black rounded-[50%] relative">
               <div style={{transform: `translateY(-50%) rotate(${rotate}deg)`}} class="div w-full h-[3vw] absolute top-1/2 -translate-y-1/2">
                 <div class="eye h-[2.5vw] w-[2.5vw] bg-white rounded-[50%]"></div>
               </div>
           </div>
        </div>
        <div class="eye h-[20vw] w-[20vw] bg-white rounded-[50%] grid place-items-center">
            <div class="eye h-[12.5vw] w-[12.5vw] bg-black rounded-[50%] relative">
               <div style={{transform: `translateY(-50%) rotate(${rotate}deg)`}} class="div w-full h-[3vw] absolute top-1/2 -translate-y-1/2">
                 <div class="eye h-[2.5vw] w-[2.5vw] bg-white rounded-[50%]"></div>
               </div>
           </div>
        </div>
      </div>
    </div>
  )
}
