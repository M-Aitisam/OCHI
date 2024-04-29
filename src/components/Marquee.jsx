import React from "react";
import { motion } from "framer-motion";

function Marquee() {
  return (
    <div className="w-full py-20 rounded-tl-3xl text-white pt-20 rounded-tr-3xl bg-[#004D43] ">
      <div className="text border-t-2 -mb-[4vw] uppercase  border-b-2 font-semibold overflow-hidden gap-5 border-zinc-300 flex whitespace-nowrap  "> 
        <motion.h1
          initial={{ x: 0 }}
          animate={{ x: "-100%" }}
          transition={{ ease: "linear", repeat:Infinity ,duration:5  }}
          className="text-[19vw] leading-none "
        >
          we are ochi
        </motion.h1>
        <motion.h1
          initial={{ x: 0 }}
          animate={{ x: "-100%" }}
          transition={{ ease: "linear", repeat:Infinity ,duration:5  }}
          className="text-[19vw] leading-none "
        >
          we are ochi
        </motion.h1>
        <motion.h1
          initial={{ x: 0 }}
          animate={{ x: "-100%" }}
          transition={{ ease: "linear", repeat:Infinity ,duration:5  }}
          className="text-[19vw] leading-none "
        >
          we are ochi
        </motion.h1>
      </div>
    </div>
  );
}

export default Marquee;
