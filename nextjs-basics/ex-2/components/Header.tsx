"use client";
import Link from "next/link";

const Header = () => {
  return (
    <header className="w-full bg-[#231942] text-white p-6  text-center shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        {/* Branding */}
        <h1 className="text-2xl  font-bold">Sonia App</h1>

        {/* Navigation */}
        <nav>
          <ul className="flex space-x-6">
            <li>
              <Link href="/" className="hover:text-gray-500">
                Home
              </Link>
            </li>
            <li>
              <Link href="/about" className="hover:text-gray-500">
                About
              </Link>
            </li>
            <li>
              <Link href="/contact" className="hover:text-gray-500">
                Contact
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
