import React from "react";

function Featured() {
  return (
    <div className="w-full text-white py-10  ">
      <div className="  w-full px-10 border-b-[1px] border-zinc-700 pb-10">
        <h1 className="   tracking-tight text-7xl"> Featured projects</h1>
      </div>
      <div className="pb-10  px-10">
        <div className="cardcontainer  mt-10 w-full flex gap-10 ">
          <div className="card relative w-1/2  h-[80vh]">
            <div className="flex  align-center  gap-3">
              <div className="h-2 w-2 mb-3 bg-white rounded-full"></div>
              <h1 className="mb-4 -mt-[10px]">FYDE</h1>
            </div>
            <h1 className="absolute top-[50%] z-999 left-full text-6xl text-[#CDEA68]  font-bold translate-x-[-50%] translate-y-[50%]"> </h1>

            <div className="w-full  h-full bg-yellow-600 overflow-hidden rounded-lg ">
              <img
                className="w-full h-full bg-cover"
                src="https://ochi.design/wp-content/uploads/2023/08/Frame-3875-663x551.jpg"
                alt=""
              />
            </div>
          </div>

          <div className=" card  w-1/2  h-[80vh]">

            <div className=" cardcontainer flex relative align-center  gap-3">
            <h1 className="absolute top-[40vh]  right-full text-6xl text-[#CDEA68] 
font-bold translate-x-[31%] translate-y-[50%]"> VISE</h1>
              <div className="h-2 w-2 mb-3 bg-white rounded-full"></div>
              <h1 className="mb-4 -mt-[10px]">VISE</h1>
            </div>
            <div className="w-full h-full bg-yellow-600 overflow-hidden rounded-lg ">
              <img
                className="w-full h-full bg-cover"
                src="https://ochi.design/wp-content/uploads/2022/12/PB-Front-4-663x551.png"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Featured;
