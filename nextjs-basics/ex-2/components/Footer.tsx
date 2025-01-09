"use client";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="w-full bg-[#231942] text-white p-6  text-center">
      <div className="container mx-auto">
 

        {/* Copyright Info */}
        <p>&copy; {new Date().getFullYear()} Sonia App. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
