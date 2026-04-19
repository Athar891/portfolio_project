"use client";

import { WebcamPixelGrid } from "@/components/ui/webcam-pixel-grid";
import { Navbar } from "@/components/navbar";

export default function WebcamPixelGridDemo() {
  return (
    <>
      <Navbar />
      <div className="relative h-screen w-screen bg-black overflow-hidden">
        {/* Webcam pixel grid background */}
        <div className="absolute inset-0">
          <WebcamPixelGrid
            gridCols={60}
            gridRows={40}
            maxElevation={50}
            motionSensitivity={0.25}
            elevationSmoothing={0.2}
            colorMode="webcam"
            backgroundColor="#030303"
            mirror={true}
            gapRatio={0.05}
            invertColors={false}
            darken={0.6}
            borderColor="#ffffff"
            borderOpacity={0.06}
            className="w-full h-full"
            onWebcamReady={() => console.log("Webcam ready!")}
            onWebcamError={(err) => console.error("Webcam error:", err)}
          />
        </div>

        {/* Gradient overlay for better text readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/60 pointer-events-none" />

        {/* Hero content */}
        <div className="relative z-10 flex h-full flex-col items-center justify-center px-4">
          <div className="max-w-4xl text-center">
            {/* Title */}
            <h1 className="mb-6 text-xl font-bold tracking-tight text-white sm:text-6xl md:text-8xl">
              Build fast. Break less. Scale clean
            </h1>

            {/* Description */}
            <p className="mx-auto mb-10 max-w-2xl text-base text-white/60 sm:text-xl">
              Engineer scalable systems using modular components and proven patterns, without getting trapped in low-level implementation details.
            </p>

            {/* Buttons */}
            <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
              <a
                href="/Main-Resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex h-12 items-center justify-center gap-2 rounded-full border border-white/20 bg-white/5 px-8 text-base font-medium text-white backdrop-blur-sm transition-all hover:bg-white/10 hover:border-white/30"
              >
                View Resume
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
