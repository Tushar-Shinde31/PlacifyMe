import React from "react";
import { MapPin, Users, Briefcase } from "lucide-react";

const LocationsSection = () => {
  const locations = [
    {
      city: "Pune",
      state: "Maharashtra",
      position: { top: "45%", left: "35%" },
      stats: { workers: "2,500+", businesses: "800+" }
    },
    {
      city: "Bangalore",
      state: "Karnataka", 
      position: { top: "65%", left: "42%" },
      stats: { workers: "3,200+", businesses: "1,200+" }
    },
    {
      city: "Aurangabad",
      state: "Maharashtra",
      position: { top: "40%", left: "38%" },
      stats: { workers: "1,800+", businesses: "600+" }
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-background via-background/95 to-primary/5 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-secondary/10 rounded-full blur-3xl animate-pulse delay-1000"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Map Section */}
          <div className="relative">
            <div className="bg-card/80 backdrop-blur-sm rounded-3xl p-8 shadow-2xl border border-border/20 hover:shadow-3xl transition-all duration-500">
              {/* India Map SVG */}
              <div className="relative w-full max-w-md mx-auto aspect-square">
                <svg
                  viewBox="0 0 400 500"
                  className="w-full h-full drop-shadow-lg"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  {/* Simplified India Map Path */}
                  <path
                    d="M120 180 L140 160 L160 140 L180 130 L200 125 L220 128 L240 135 L260 145 L280 160 L295 180 L305 200 L310 220 L315 240 L318 260 L320 280 L315 300 L305 320 L290 340 L270 360 L250 375 L230 385 L210 390 L190 385 L170 375 L155 360 L145 340 L140 320 L138 300 L140 280 L145 260 L150 240 L155 220 L160 200 L140 190 L125 185 Z"
                    fill="hsl(var(--primary))"
                    fillOpacity="0.1"
                    stroke="hsl(var(--primary))"
                    strokeWidth="2"
                    className="animate-pulse"
                  />
                  
                  {/* Location Dots */}
                  {locations.map((location, index) => (
                    <g key={index}>
                      {/* Pulsing Ring */}
                      <circle
                        cx={parseFloat(location.position.left) * 4}
                        cy={parseFloat(location.position.top) * 5}
                        r="20"
                        fill="hsl(var(--primary))"
                        fillOpacity="0.2"
                        className="animate-ping"
                      />
                      {/* Main Dot */}
                      <circle
                        cx={parseFloat(location.position.left) * 4}
                        cy={parseFloat(location.position.top) * 5}
                        r="8"
                        fill="hsl(var(--primary))"
                        className="animate-pulse hover:scale-125 transition-transform cursor-pointer"
                      />
                      {/* City Label */}
                      <text
                        x={parseFloat(location.position.left) * 4}
                        y={parseFloat(location.position.top) * 5 - 15}
                        textAnchor="middle"
                        className="fill-foreground text-xs font-medium"
                      >
                        {location.city}
                      </text>
                    </g>
                  ))}
                </svg>
              </div>
            </div>
          </div>

          {/* Content Section */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h2 className="text-4xl lg:text-5xl font-bold bg-gradient-to-r from-primary via-primary/80 to-secondary bg-clip-text text-transparent">
                There's a PlacifyMe around. Always.
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                More Cities. More Opportunities. More Convenience.
              </p>
            </div>

            {/* Statistics */}
            <div className="grid grid-cols-2 gap-6">
              <div className="bg-card/60 backdrop-blur-sm rounded-2xl p-6 border border-border/20 hover:shadow-lg transition-all duration-300">
                <div className="flex items-center gap-3 mb-2">
                  <Users className="h-6 w-6 text-primary" />
                  <span className="text-2xl font-bold text-foreground">8,500+</span>
                </div>
                <p className="text-sm text-muted-foreground">Active Workers</p>
              </div>
              
              <div className="bg-card/60 backdrop-blur-sm rounded-2xl p-6 border border-border/20 hover:shadow-lg transition-all duration-300">
                <div className="flex items-center gap-3 mb-2">
                  <Briefcase className="h-6 w-6 text-primary" />
                  <span className="text-2xl font-bold text-foreground">2,600+</span>
                </div>
                <p className="text-sm text-muted-foreground">Partner Businesses</p>
              </div>
            </div>

            {/* Location List */}
            <div className="space-y-4">
              {locations.map((location, index) => (
                <div
                  key={index}
                  className="flex items-center justify-between p-4 bg-card/40 backdrop-blur-sm rounded-xl border border-border/10 hover:bg-card/60 transition-all duration-300 group"
                >
                  <div className="flex items-center gap-3">
                    <div className={`w-3 h-3 rounded-full bg-primary animate-pulse`}></div>
                    <span className="font-medium text-foreground group-hover:text-primary transition-colors">
                      {location.city}, {location.state}
                    </span>
                  </div>
                  <div className="text-sm text-muted-foreground">
                    {location.stats.workers} workers • {location.stats.businesses} businesses
                  </div>
                </div>
              ))}
            </div>

            <div className="pt-6">
              <p className="text-sm text-muted-foreground leading-relaxed">
                Expanding to more cities across India. Join thousands of workers and businesses 
                already connected through PlacifyMe in Maharashtra and Karnataka.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LocationsSection;