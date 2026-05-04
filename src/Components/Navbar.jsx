import React from "react";

export default function Navbar() {
  return (
    <nav className="navbar">
      <h2>MyPortfolio</h2>
      <ul>
        <li><a href="#about">About</a></li>
        <li><a href="#projects">Projects</a></li>
        <li><a href="#skills">Skills</a></li>
        <li><a href="#resume">Resume</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
    </nav>
  );
}