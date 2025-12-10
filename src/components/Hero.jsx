import React from "react";
import { Link } from "react-router-dom";
import CountUp from "./../components/CountUp";
import ImageSlider from "./ImageSlider";
import bg1 from "../assets/backgroundimage1.jpg";
import bg2 from "../assets/backgroundimage2.jpg";

export default function Hero() {
  return (
    <header className="hero relative h-[72vh] md:h-[78vh] overflow-hidden">
      {/* background slider (fills hero area) */}
      <ImageSlider images={[bg1, bg2]} interval={5000} />

      {/* dark overlay to improve text contrast */}
      <div className="hero-overlay absolute inset-0 bg-black/55 z-0 pointer-events-none" />

      {/* content (kept above slider) */}
      <div className="hero-inner container mx-auto text-center text-white relative z-10 flex flex-col items-center justify-center h-full px-4">
        <h1 className="text-4xl md:text-6xl font-extrabold leading-tight mb-4 animate-hero-fade">
          Building Tomorrow
          <br />
          Together
        </h1>
        <p className="text-lg text-white/80 mb-8 max-w-2xl">
          Join us in creating lasting change for our community
        </p>

        <div className="flex justify-center gap-4 mb-8 z-10">
          <Link to="/signup" className="btn btn-primary">Join Us →</Link>
          <Link to="/donations" className="btn btn-outline">Donate Now</Link>
        </div>

        <div className="flex justify-center gap-12 mt-6 z-10">
          <div className="stat-card text-white/95 bg-white/5 px-8 py-6 rounded-md backdrop-blur-sm">
            <div className="text-3xl font-bold"><CountUp end={500} duration={1200} />+</div>
            <div className="text-sm mt-1">Members</div>
          </div>

          <div className="stat-card text-white/95 bg-white/5 px-8 py-6 rounded-md backdrop-blur-sm">
            <div className="text-3xl font-bold"><CountUp end={50} duration={1200} />+</div>
            <div className="text-sm mt-1">Projects</div>
          </div>
        </div>

        <div className="scroll-indicator mt-10 z-10" aria-hidden>
          <span className="dot" />
        </div>
      </div>
    </header>
  );
}