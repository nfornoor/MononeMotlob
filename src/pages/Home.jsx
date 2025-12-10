import React from "react";
import { Link } from "react-router-dom";
import Logo from "../components/Logo";
import Hero from "../components/Hero";
import StatsGrid from "../components/StatsGrid";
import ProjectsPreview from "../components/ProjectsPreview";
import NoticesPreview from "../components/NoticesPreview";
import FooterLanding from "../components/FooterLanding";
import "../styles/home.css";

export default function Home() {
  return (
    <div className="home-page">
      <nav className="navbar bg-white shadow-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-3 flex justify-between items-center">
          <Logo size="md" to="/" />
          <div className="hidden md:flex gap-6 text-sm">
            <Link to="/" className="hover:text-gray-700">Home</Link>
            <Link to="#about" className="hover:text-gray-700">About</Link>
            <Link to="/programs" className="hover:text-gray-700">Programs</Link>
            <Link to="/notices" className="hover:text-gray-700">Notice</Link>
            <Link to="/donations" className="hover:text-gray-700">Donation</Link>
          </div>
          <div className="flex gap-2">
            <Link to="/login" className="btn btn-outline-sm">Login</Link>
            <Link to="/signup" className="btn btn-primary-sm">Sign Up</Link>
          </div>
        </div>
      </nav>

      <Hero />
      <section className="py-12 container mx-auto">
        <StatsGrid />
      </section>

      <section className="py-16 bg-gray-50">
        <div className="container mx-auto">
          <h2 className="text-2xl font-bold text-center mb-6">Current Projects</h2>
          <ProjectsPreview />
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto">
          <h2 className="text-2xl font-bold text-center mb-6">Latest Notice</h2>
          <NoticesPreview />
        </div>
      </section>

      <FooterLanding />
    </div>
  );
}