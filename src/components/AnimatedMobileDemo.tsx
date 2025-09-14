import React, { useState, useEffect } from "react";
import demoScreen1 from "@/assets/demo-screen-1.jpg";
import demoScreen2 from "@/assets/demo-screen-2.jpg";
import demoScreen3 from "@/assets/demo-screen-3.jpg";
import demoScreen4 from "@/assets/demo-screen-4.jpg";

const AnimatedMobileDemo = () => {
  const [currentScreen, setCurrentScreen] = useState(0);
  
  const screens = [
    {
      image: demoScreen1,
      title: "Browse Services",
      description: "Find local jobs in your area"
    },
    {
      image: demoScreen2,
      title: "View Opportunities",
      description: "See available gigs with details"
    },
    {
      image: demoScreen3,
      title: "Apply Instantly",
      description: "One-click application process"
    },
    {
      image: demoScreen4,
      title: "Get Paid",
      description: "Track earnings and withdraw funds"
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentScreen((prev) => (prev + 1) % screens.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [screens.length]);

  return (
    <div className="relative flex flex-col items-center">
      {/* Mobile Phone Frame */}
      <div className="relative">
        {/* Outer Phone Case */}
        <div className="relative bg-gradient-to-br from-gray-800 to-gray-900 rounded-[3rem] p-3 shadow-2xl">
          {/* Inner Screen Container */}
          <div className="relative bg-black rounded-[2.5rem] overflow-hidden w-72 h-[580px]">
            {/* Notch */}
            <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-32 h-6 bg-black rounded-b-2xl z-20"></div>
            
            {/* Screen Content */}
            <div className="relative w-full h-full overflow-hidden">
              {screens.map((screen, index) => (
                <div
                  key={index}
                  className={`absolute inset-0 transition-all duration-1000 ease-in-out ${
                    index === currentScreen 
                      ? 'opacity-100 transform translate-y-0' 
                      : index < currentScreen 
                        ? 'opacity-0 transform -translate-y-full'
                        : 'opacity-0 transform translate-y-full'
                  }`}
                >
                  <img
                    src={screen.image}
                    alt={screen.title}
                    className="w-full h-full object-cover"
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Phone Glow Effect */}
          <div className="absolute inset-0 bg-gradient-primary opacity-20 blur-3xl scale-110 rounded-[3rem] -z-10"></div>
          <div className="absolute inset-0 bg-accent opacity-10 blur-2xl scale-105 rounded-[3rem] animate-pulse -z-10"></div>
        </div>
      </div>

      {/* Screen Info */}
      <div className="mt-8 text-center">
        <h3 className="text-xl font-bold text-primary-foreground mb-2 transition-all duration-500">
          {screens[currentScreen].title}
        </h3>
        <p className="text-primary-foreground/70 transition-all duration-500">
          {screens[currentScreen].description}
        </p>
      </div>

      {/* Progress Indicators */}
      <div className="flex space-x-2 mt-6">
        {screens.map((_, index) => (
          <div
            key={index}
            className={`w-2 h-2 rounded-full transition-all duration-300 ${
              index === currentScreen 
                ? 'bg-accent scale-125' 
                : 'bg-primary-foreground/30'
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default AnimatedMobileDemo;