import React from "react";

function Eyes() {
  return (
    <div className=" eyes w-full h-screen  overflow-hidden">
      <div
        className="  relative w-full h-full
       bg-cover bg-center bg-[url('https://ochi.design/wp-content/uploads/2022/05/Top-Viewbbcbv-1-scaled.jpg')]"
      >
        <div className="absolute  top-[40%] flex  left-[50%] gap-10 -translate-x-1/2 -translate-y-1/2  min-h-[30vh] ">
          <div className=" flex items-center justify-center w-[15vw] h-[15vw]  rounded-full bg-white">
            <div className="w-[12vw] flex items-center justify-center h-[12vw] rounded-full bg-black">
              <div className="line w-full h-10 rotate-12 ">
                <div className="w-[2.5vw] h-[2.5vw] rounded-full bg-white"></div>
              </div>
            </div>
          </div>
          <div className=" flex items-center justify-center w-[15vw] h-[15vw]  rounded-full bg-white">
            <div className="w-[12vw] flex items-center justify-center h-[12vw] rounded-full bg-black">
              <div className="line w-full h-10 rotate-12 ">
                <div className="w-[2.5vw] h-[2.5vw] rounded-full bg-white"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Eyes;
