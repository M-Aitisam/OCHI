import React from 'react'

function Img1() {
  return (
   
    <div className="img_text   bg-[#CDEA68]  mt-0 flex p-10 pt-3 border-t-2 border-blue-900  w-full">
   <div className="left_sec w-[50%] pl-5 pt-2">
     <h1 className="font-semibold text-4xl">Our approach:</h1>
     <div className="border-2  gap-10 mt-5 h-[4vw] w-[12vw]  bg-black text-white flex items-center 
justify-center rounded-3xl border-purple-300">
       {" "}
       Read More{" "}
       <div className="items-center justify-center text-[6vw]  pb-[3.9vw] ">
         .
       </div>{" "}
     </div>
   </div>
   <div className="right_sec pt-2 w-[50%] flex items-center justify-center ">
     <img
       className="w-[60vw]  border-t-10 ] rounded-[1vw] h-[33vw]"
       src="https://images.unsplash.com/photo-1472214103451-9374bd1c798e?q=80&w=1000&auto=format&fit=crop&
ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cGljfGVufDB8fDB8fHww"
       alt=""
     />
   </div>
 </div> 
   
  )
}

export default Img1
