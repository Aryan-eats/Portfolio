import React from "react";
import { Spotlight } from "./ui/Spotlight";
import { cn } from "@/lib/utils";
import { TextGenerateEffect } from "./ui/TextGenerateEffect";
import MagicButton from "./ui/MagicButton";
import { FaLocationArrow } from "react-icons/fa";

function Hero() {
  return (
    <div className="pb-20 pt-36">
      <div>
        <Spotlight
          className="-top-40 -left-10 md:-left-32 md:top-20 h-screen"
          fill="white"
        />
        <Spotlight
          className="top-10 left-full h-[80vh] w-[50vw]"
          fill="purple"
        />
        <Spotlight className="top-28 left-80 h-[80vh] w-[50vw]" fill="blue" />
      </div>
      <div className="flex h-screen w-full items-center justify-center bg-black-100 bg-grid-white/[0.03] bg-grid-black-100/[0.2] absolute top-0 left-0">
        <div
          className={cn(
            "absolute inset-0",
            "bg-size-[40px_40px]",
            "bg-[linear-gradient(to_right,#262626_1px,transparent_1px),linear-gradient(to_bottom,#262626_1px,transparent_1px)]"
          )}
        />
        <div className="pointer-events-none absolute inset-0 flex items-center justify-center bg-black-100 mask-[radial-gradient(ellipse_at_center,transparent_20%,black)]" />
      </div>
      <div className="flex justify-center relative my-20 z-10 ">
        <div className="max-w-{89w} md:max-w-2xl lg:max-w-[60vw] flex flex-col items-center justify-center">
          <h2 className="uppercase tracking-widest text-xs text-center text-blue-100 max-w-80">
            More than just a developer.
          </h2>
          <TextGenerateEffect
          className="text-center text-[40px] md:text-5xl lg:text-6xl text-white"
          words="I build with precision, passion, and purpose."
          />

          <p className="text-center md:tracking-wider mb-4 text-sm md:text-lg lg:text-2xl">
            Hi, I&apos;m Aryan, A full-stack developer based in India.
          </p>

          <div className="flex gap-12">
            <a href="#about">
              <MagicButton
                title="My Work"
                icon={<FaLocationArrow />}
                position="right"
              />
            </a>
            <a href="https://drive.google.com/file/d/1Qbfcaj3KIQlaLZoU1p21YMbSMQFscCQB/view?usp=drive_link">
              <MagicButton
                title="Resume"
                icon={<FaLocationArrow />}
                position="right"
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
