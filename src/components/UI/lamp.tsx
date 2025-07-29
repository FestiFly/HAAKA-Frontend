"use client";
import React from "react";
import { motion } from "framer-motion";
import { cn } from "../../lib/utils";

export const LampContainer = ({ children, className }) => {
  return (
    <div
      className={cn(
        "relative flex min-h-screen flex-col items-center justify-center overflow-hidden  w-full rounded-md z-0",
        className
      )}
    >
      {/* Desktop and Tablet View */}
      <div className="relative hidden md:flex w-full  md:scale-y-150 scale-y-100 items-center justify-center isolate mb-80 z-0">
        <motion.div
          initial={{ opacity: 0.5, width: "10rem" }}
          whileInView={{ opacity: 0.75, width: "30rem" }}
          transition={{
            delay: 0.3,
            duration: 0.8,
            ease: "easeInOut",
          }}
          style={{
            backgroundImage: `conic-gradient(var(--conic-position), var(--tw-gradient-stops))`,
          }}
          className="absolute rounded-l-full inset-auto right-1/2 h-56 overflow-visible w-[30rem] bg-gradient-conic from-white via-transparent to-transparent text-white [--conic-position:from_70deg_at_center_top]"
        >
          <div className="absolute w-full left-0 bg-transparent h-40 bottom-0 z-20 [mask-image:linear-gradient(to_top,white,transparent)]" />
          <div className="absolute w-40 h-full left-0 bg-transparent bottom-0 z-20 [mask-image:linear-gradient(to_right,white,transparent)]" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0.5, width: "10rem" }}
          whileInView={{ opacity: 0.75, width: "30rem" }}
          transition={{
            delay: 0.3,
            duration: 0.8,
            ease: "easeInOut",
          }}
          style={{
            backgroundImage: `conic-gradient(var(--conic-position), var(--tw-gradient-stops))`,
          }}
          className="absolute   rounded-r-full inset-auto left-1/2 h-56 w-[30rem] bg-gradient-conic from-transparent via-transparent to-white text-white [--conic-position:from_290deg_at_center_top]"
        >
          <div className="absolute w-40 h-full right-0 rounded-full bottom-0 z-20 [mask-image:linear-gradient(to_left,white,transparent)]" />
        <div className="absolute w-full rounded-full right-0 bg-transparent h-40 bottom-0 z-20 [mask-image:linear-gradient(to_right,transparent,white,transparent)]" />
        </motion.div>
        <div className="absolute top-1/2 h-48 w-full translate-y-12 scale-x-150 bg-black blur-2xl"></div>
        <div className="absolute top-1/2 z-50 h-48 w-full bg-transparent opacity-7.5"></div>
        <div className="absolute inset-auto z-50 h-36 w-[28rem] -translate-y-1/2 rounded-full"></div>

        <motion.div
          initial={{ width: "6rem" }}
          whileInView={{ width: "16rem" }}
          transition={{
            delay: 0.3,
            duration: 0.8,
            ease: "easeInOut",
          }}
          className="absolute inset-auto z-30 h-36 w-64 -translate-y-[6rem] rounded-full bg-white blur-2xl opacity-75"
        ></motion.div>
        <motion.div
          initial={{ width: "10rem" }}
          whileInView={{ width: "30rem" }}
          transition={{
            delay: 0.3,
            duration: 0.8,
            ease: "easeInOut",
          }}
          className="absolute inset-auto z-50 h-0.5 w-[30rem] -translate-y-[7rem] bg-white opacity-75"
        ></motion.div>
        <div className="container mx-auto px-6 relative z-10 flex flex-col items-center justify-center h-full">
          <motion.h1
            className="font-bold text-[180px] text-center mt-40 flex justify-center"
            style={{ fontFamily: 'Boldonse' }}
          >
            {[...'HAAKA'].map((char, i) => (
              <motion.span
                key={i}
                initial={{ y: 200, opacity: 0, scale: 0.8, marginLeft: 0, marginRight: 0 }}
                animate={{ y: 0, opacity: 0.75, scale: 1, marginLeft: '2rem', marginRight: '2rem' }}
                transition={{
                  y: { type: 'spring', stiffness: 80, damping: 18, delay: 0.1 + i * 0.09 },
                  opacity: { duration: 0.4, ease: 'easeOut', delay: 0.1 + i * 0.09 },
                  scale: { type: 'spring', stiffness: 120, damping: 12, delay: 0.1 + i * 0.09 },
                  marginLeft: { duration: 0.7, ease: 'easeOut', delay: 0.5 },
                  marginRight: { duration: 0.7, ease: 'easeOut', delay: 0.5 }
                }}
                className="inline-block"
              >
                {char}
              </motion.span>
            ))}
          </motion.h1>
        </div>
        <div className="absolute inset-auto z-40 h-44 w-full -translate-y-[12.5rem]  bg-black"></div>
      </div>

      {/* Mobile View */}
<div className="relative flex md:hidden w-full scale-y-100 items-center justify-center isolate mb-80 z-0">
  <motion.div
    initial={{ opacity: 0.5, width: "3rem" }}
    whileInView={{ opacity: 0.75, width: "10rem" }}
    transition={{
      delay: 0.3,
      duration: 0.8,
      ease: "easeInOut",
    }}
    style={{
      backgroundImage: `conic-gradient(var(--conic-position), var(--tw-gradient-stops))`,
    }}
    className="absolute rounded-l-full inset-auto right-1/2 h-28 overflow-visible w-[10rem] bg-gradient-conic from-white via-transparent to-transparent text-white [--conic-position:from_70deg_at_center_top]"
  >
    <div className="absolute w-full left-0 bg-transparent h-20 bottom-0 z-20 [mask-image:linear-gradient(to_top,white,transparent)]" />
    <div className="absolute w-20 h-full left-0 bg-transparent bottom-0 z-20 [mask-image:linear-gradient(to_right,white,transparent)]" />
  </motion.div>
  <motion.div
    initial={{ opacity: 0.5, width: "3rem" }}
    whileInView={{ opacity: 0.75, width: "10rem" }}
    transition={{
      delay: 0.3,
      duration: 0.8,
      ease: "easeInOut",
    }}
    style={{
      backgroundImage: `conic-gradient(var(--conic-position), var(--tw-gradient-stops))`,
    }}
    className="absolute rounded-r-full inset-auto left-1/2 h-28 w-[10rem] bg-gradient-conic from-transparent via-transparent to-white text-white [--conic-position:from_290deg_at_center_top]"
  >
    <div className="absolute w-20 h-full right-0 rounded-full bottom-0 z-20 [mask-image:linear-gradient(to_left,white,transparent)]" />
    <div className="absolute w-full rounded-full right-0 bg-transparent h-20 bottom-0 z-20 [mask-image:linear-gradient(to_right,transparent,white,transparent)]" />
  </motion.div>
  <div className="absolute top-1/2 h-24 w-full translate-y-6 scale-x-150 bg-black blur-2xl"></div>
  <div className="absolute top-1/2 z-50 h-24 w-full bg-transparent opacity-7.5"></div>
  <div className="absolute inset-auto z-50 h-18 w-[10rem] -translate-y-1/2 rounded-full"></div>
  <motion.div
    initial={{ width: "2rem" }}
    whileInView={{ width: "6rem" }}
    transition={{
      delay: 0.3,
      duration: 0.8,
      ease: "easeInOut",
    }}
    className="absolute inset-auto z-30 h-18 w-24 -translate-y-[3rem] rounded-full bg-white blur-2xl opacity-75"
  ></motion.div>
  <motion.div
    initial={{ width: "3rem" }}
    whileInView={{ width: "10rem" }}
    transition={{
      delay: 0.3,
      duration: 0.8,
      ease: "easeInOut",
    }}
    className="absolute inset-auto z-50 h-0.5 w-[10rem] -translate-y-[3.5rem] bg-white opacity-75"
  ></motion.div>
  <div className="container mx-auto px-4 relative z-10 flex flex-col items-center justify-center h-full">
    <motion.h1
      className="font-bold text-[60px] text-center mt-20 flex justify-center"
      style={{ fontFamily: 'Boldonse' }}
    >
      {[...'HAAKA'].map((char, i) => (
        <motion.span
          key={i}
          initial={{ y: 100, opacity: 0, scale: 0.8, marginLeft: 0, marginRight: 0 }}
          animate={{ y: 0, opacity: 0.75, scale: 1, marginLeft: '0.3rem', marginRight: '0.3rem' }}
          transition={{
            y: { type: 'spring', stiffness: 80, damping: 18, delay: 0.1 + i * 0.09 },
            opacity: { duration: 0.4, ease: 'easeOut', delay: 0.1 + i * 0.09 },
            scale: { type: 'spring', stiffness: 120, damping: 12, delay: 0.1 + i * 0.09 },
            marginLeft: { duration: 0.7, ease: 'easeOut', delay: 0.5 },
            marginRight: { duration: 0.7, ease: 'easeOut', delay: 0.5 }
          }}
          className="inline-block"
        >
          {char}
        </motion.span>
      ))}
    </motion.h1>
  </div>
  <div className="absolute inset-auto z-40 h-24 w-full -translate-y-[6.25rem] bg-black"></div>
</div>



      <div className="relative z-50 flex -translate-y-10 md:-translate-y-40 flex-col items-center px-4 w-full">
        {children}
      </div>
    </div>
  );
};
