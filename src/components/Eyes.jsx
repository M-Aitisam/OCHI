import React , { useEffect, useRef, useState } from "react";



  function Eyes() {

    const[rotate, setRotate]=useState(0);
    
    useEffect(() => {     // useEffect is a hook that allows you to perform side effects in function components.
      window.addEventListener("mousemove", (e) => {
        let mouseX = e.clientX;
        let mouseY = e.clientY;
      
        let deltaX = mouseX - window.innerWidth / 2;
        let deltaY = mouseY - window.innerHeight / 2;
      
       var angle = Math.atan2(deltaY, deltaX) * (180 / Math.PI);  //57.2958
        setRotate(angle-180);
      })
    })
    
  return (
    <div className=" eyes w-full h-screen  overflow-hidden">
      <div
        className="  relative w-full h-full
       bg-cover bg-center bg-[url('https://ochi.design/wp-content/uploads/2022/05/Top-Viewbbcbv-1-scaled.jpg')]"
      >
        <div className="absolute  top-[40%] flex  left-[50%] gap-10 -translate-x-1/2 -translate-y-1/2  min-h-[30vh] ">
          <div className=" flex items-center justify-center w-[15vw] h-[15vw]  rounded-full bg-white">
            <div className="w-[10vw] relative h-[10vw] rounded-full bg-black">
            <div className="t flex items-center  p-[4vw] text-white justify-center font-bold text-2xl "> PLAY</div>
              <div style={{transform: `translate(-50%, -50%) rotate(${rotate}deg)`}} className="line absolute top-1/2 left-1/2 -translate-x-[50%]  -translate-y-1/2 w-full h-10 rotate-12 ">
                <div className="w-[1.5vw] h-[1.5vw] rounded-full bg-white"></div>
              </div>
            </div>
          </div>
          <div className=" flex items-center justify-center w-[15vw] h-[15vw]  rounded-full bg-white">
          
            <div className="w-[10vw] relative h-[10vw]   rounded-full bg-black"> 
            <div className="t flex items-center  p-[4vw] text-white justify-center font-bold text-2xl "> PLAY</div>
            <div style={{transform: `translate(-50%, -50%) rotate(${rotate}deg)`}} className="line   absolute top-1/2 left-1/2 -translate-x-
[50%]  -translate-y-1/2 w-full h-10 rotate-12 ">
    <div className="w-[1.5vw] h-[1.5vw] rounded-full bg-white"> 
     </div>
  </div>
             
             
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Eyes;
