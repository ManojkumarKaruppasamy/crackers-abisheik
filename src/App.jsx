import React, { useState } from "react";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Estimate from "./components/Estimate";
import Payment from "./components/Payment";
import About from "./components/About";
import Contact from "./components/Contact";
import PriceList from "./components/PriceList";
import "./App.css";

function App() {
  const [route, setRoute] = useState("home");

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">

      {/* Top Strip */}
      <div className="w-full h-7 flex items-center justify-center bg-pink-100 text-center py-2 text-sm font-medium text-gray-700">
        Welcome to Sivakasi-abisheik Crackers
      </div>

      {/* Main Header */}
      <header className="flex justify-around items-center p-3 bg-white shadow-md">
        <div className="flex items-center ">
          <img
            src="./public/logo.png"
            alt="Sivakasi Crackers Logo"
            className="h-15 object-contain"
          />
        </div>

        <div className="text-sm text-gray-700 font-semibold hidden md:block">
          Need help? Call us:{" "}
          <span className="text-red-600 font-bold">+91 81245 26736</span>
        </div>
      </header>

      {/* Navbar */}
      <div className="shadow bg-white sticky top-0 z-50 ">
        <Navbar current={route} onNav={setRoute} />
      </div>

     

      {/* Main Content */}
      <div className="  px-4 py-8 ">
        {route === "home" && <Home onNav={setRoute} />}
        {route === "estimate" && <Estimate />}
        {route === "payment" && <Payment />}
        {route === "about" && <About />}
        {route === "contact" && <Contact />}
        {route === "pricelist" && <PriceList />}
      </div>

      {/* Footer */}
      <footer className="bg-gray-800 text-gray-200 text-center py-6 mt-10">
        <div className="text-lg font-semibold">
          Abishek Crackers & Dhanraj Crackers — GST:
          <span className="font-bold ml-1 text-white">33ABTFA1257D1ZN</span>
        </div>

        <div className="mt-2">
          📞 Cell:
          <span className="text-white font-medium ml-1">97879 54470</span> •
          <span className="text-white font-medium ml-1">84899 55565</span>
        </div>
      </footer>

    </div>
  );
}

export default App;
