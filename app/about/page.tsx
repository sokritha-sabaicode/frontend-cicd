import React from "react";
import Navbar from "../components/Navbar";

const About: React.FC = () => {
  return (
    <div>
      <Navbar/>
      <h1 className="text-red-400">hello from about</h1>
    </div>
  );
};

export default About;
