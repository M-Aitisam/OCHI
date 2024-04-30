import React from "react";

function Cards() {
  return (
    <div className="w-full h-[90vh] p-10 overflow-hidden text-white bg-white">
      <div className="w-full flex items-center justify-center h-full ">
        <div className="w-full gap-10  flex   h-full ">
          {/* ****** */}
          <div className="w-[50%] bg-[#004D43] h-[60vh] p-2 text-4xl  rounded-[1vw] grid  ">
            <div className="w-full  p-5  rounded-[1vw]  ">
              <h1 className="  text-[19px] font-bold flex items-center justify-center p-[20vh]  pt-[22vh]  ">
               
                ochi
              </h1>
              <button className=" w-[1in]  h-[0.3in] flex items-center justify-center  text-[12px]   border-[1px] rounded-[1.5vw] border-white font-bold ">
                ©2024-2030
              </button>
            </div>
          </div>
          {/* ******* */}
          <div className="w-[25%] h-[60vh] relative rounded-[1vw]  bg-[#212121] ">
            <div className="w-full  h-full absolute rounded-[1vw] ">
              <div className=" w-full  h-[40vh] top-1/2 ">
                <h1 className=" text-[14px] font-bold flex  pt-[26vh]   justify-center items-center  ">
                  Clutch
                </h1>
                <div className="  w-full  text-[7px]   flex items-center justify-center">
                  ✨✨✨✨✨
                </div>
              </div>
              <button
                className="w-[1.5in]   ml-5 mt-20 tracking-tighter text-[14px] h-[0.29in] flex items-center justify-center
              rounded-[1.5vw] border-[2px] border-white"
              >
                Raiting 5.0 on CLUTCH
              </button>
            </div>
          </div>


          {/* *********** */}
          <div className="w-[25%] h-[60vh]  rounded-[1vw] bg-[#212121] ">
   <div className="w-full h-full ">
    <div className="w-full h-[40vh] flex items-center justify-center">
    <img className="  mt-[15vh] h-[5vh] " src="https://ochi.design/wp-content/uploads/2022/04/logo003.png"  alt="" />
    </div>
    <button className="text-[14px] pl-[7px] h-[0.29in]  flex items-center justify-center pr-[7px] p-1 tracking-tighter mt-[0.81in] ml-5 border-[2px] border-white rounded-[1.5vw] ">BUSINESS BOOTCAMP ALUMNI</button>
   </div>
   

          </div>
        </div>
      </div>
    </div>
  );
}

export default Cards;
