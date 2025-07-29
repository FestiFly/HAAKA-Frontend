"use client";
import React from "react";
import { LampContainer } from "./UI/lamp";
import { Globe } from "./UI/globe"

const Hero = () => {
  return (
    <div className="relative w-full h-screen">
      <div className="relative z-10">
        <LampContainer />
      </div>
    </div>

    
  );
};

export default Hero;
