import React from "react";
import { HiOutlineArrowUpRight } from "react-icons/hi2";
function LandingPage() {
  return (
    <div className="w-full h-screen text-white bg-zinc-900 pt-3">
      <div className="textstructure mt-32 px-10">
        {["we create", "eye opening", "presentations"].map((item, index) => {
          return (
            <div className="masker" key={index}>
              <div className="w-fit flex items-end overflow-hidden">
                {index === 1 && (
                  <div className="mr-[1vw] w-[8vw] rounded-md h-[5.7vw] -top-[0.001vw] relative bg-green-500"></div>
                )}
                <h1 className="uppercase text-[8vw] leading-[6.5vw] tracking-tighter font-bold">
                  {item}
                </h1>
              </div>
            </div>
          );
        })}
      </div>

      <div className="border-t-[2px] border-zinc-700 bg- mt-32 flex items-center justify-between py-5 px-12">
        {[
          "For public and private Companies",
          "From the first pitch to IPO",
        ].map((item, index) => (
          <p
            key={index}
            className="text-md font-light leading-none tracking-tight"
          >
            {item}
          </p>
        ))}
        <div className="start flex items-center  ">
          <div className="text-sm font-light px-5 py-2 border-[1px] rounded-full border-zinc-500 capitalize ">
            start the project
          </div>
          <div className=" rounded-full bg-zinc-800 border-[1px]  border-zinc-500 py-2 px-2 ml-3">
            <HiOutlineArrowUpRight />
          </div>
        </div>
      </div>
    </div>
  );
}

export default LandingPage;
