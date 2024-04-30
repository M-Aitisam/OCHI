import React from "react";
import Navbar from "./components/Navbar";
import Landing from "./components/Landing";
import Marquee from "./components/Marquee";
import About from "./components/About";
import Text from "./components/Text";
import Img1 from "./components/Img1";
import Eyes from "./components/Eyes";
import Featured from "./components/Featured";

function App() {
  return (
    <div className=" w-full min-h-screen bg-zinc-900 ">
      <Navbar />
      <Landing />
      <Marquee />
      <About />
      <Text />
      <Img1 />
      <Eyes />
      <Featured />
    </div>
  );
}

export default App;
