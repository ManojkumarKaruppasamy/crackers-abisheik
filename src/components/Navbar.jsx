import React from "react";

export default function Navbar({ current, onNav }) {
  const linkStyle =
    "relative cursor-pointer transition font-semibold hover:text-yellow-300";

  const activeStyle =
    "text-yellow-300 font-bold after:w-full";

  return (
    <nav className="bg-gradient-to-r from-red-600 to-black  text-white shadow-lg border-b border-red-700 h-15 flex justify-between p-5">
      <ul className="flex h-full gap-10 items-center  text-lg tracking-wide">

        {/* Home */}
        <li
          onClick={() => onNav("home")}
          className={`${linkStyle} ${
            current === "home" ? activeStyle : ""
          }`}
        >
          <span>Home</span>
        </li>

        {/* About */}
        <li
          onClick={() => onNav("about")}
          className={`${linkStyle} ${
            current === "about" ? activeStyle : ""
          }`}
        >
          <span>About</span>
        </li>

        {/* Products */}
        <li
          onClick={() => onNav("pricelist")}
          className={`${linkStyle} ${
            current === "pricelist" ? activeStyle : ""
          }`}
        >
          <span>Products</span>
        </li>

        {/* Contact */}
        <li
          onClick={() => onNav("contact")}
          className={`${linkStyle} ${
            current === "contact" ? activeStyle : ""
          }`}
        >
          <span>Contact</span>
        </li>

        {/* Order Now Button */}
        <li>
          
        </li>
      </ul>
      <button
            onClick={() => onNav("estimate")}
            className="cursor-pointer border h-10 p-2 bg-red-400 text-black font-bold rounded-2xl"
            
          >
            Order Now →
          </button>
    </nav>
  );
}
