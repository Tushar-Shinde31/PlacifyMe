import React from "react";

const PartnersSection = () => {
  const partners = [
    { name: "Zomato", logo: "🍽️" },
    { name: "Swiggy", logo: "🛵" },
    { name: "Urban Company", logo: "🏠" },
    { name: "Dunzo", logo: "📦" },
    { name: "BigBasket", logo: "🛒" },
    { name: "Flipkart", logo: "🛍️" },
    { name: "Paytm", logo: "💳" },
    { name: "PhonePe", logo: "📱" },
    { name: "Amazon", logo: "📦" },
    { name: "Ola", logo: "🚗" },
    { name: "Uber", logo: "🚕" },
    { name: "BookMyShow", logo: "🎬" }
  ];

  // Duplicate partners for infinite scroll effect
  const scrollingPartners = [...partners, ...partners, ...partners];

  return (
    <section className="py-12 bg-background/50 overflow-hidden relative">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 mb-8">
        <div className="text-center fade-in">
          <h3 className="text-xl font-semibold text-muted-foreground mb-2">
            Trusted by leading brands across India
          </h3>
          <div className="w-24 h-1 bg-gradient-primary mx-auto rounded-full"></div>
        </div>
      </div>

      {/* Two rows of scrolling logos for better visual effect */}
      <div className="space-y-8">
        {/* First row - scrolling left */}
        <div className="relative">
          <div className="flex space-x-12 animate-scroll-left">
            {scrollingPartners.map((partner, index) => (
              <div 
                key={index}
                className="flex-shrink-0 flex items-center space-x-4 bg-card/60 backdrop-blur-sm rounded-2xl px-6 py-4 border border-border/50 hover:shadow-float transition-all duration-300 group"
              >
                <div className="text-3xl group-hover:scale-110 transition-transform duration-300">
                  {partner.logo}
                </div>
                <span className="font-semibold text-foreground whitespace-nowrap">
                  {partner.name}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Second row - scrolling right */}
        <div className="relative">
          <div className="flex space-x-12 animate-scroll-right">
            {scrollingPartners.slice().reverse().map((partner, index) => (
              <div 
                key={index}
                className="flex-shrink-0 flex items-center space-x-4 bg-card/60 backdrop-blur-sm rounded-2xl px-6 py-4 border border-border/50 hover:shadow-float transition-all duration-300 group"
              >
                <div className="text-3xl group-hover:scale-110 transition-transform duration-300">
                  {partner.logo}
                </div>
                <span className="font-semibold text-foreground whitespace-nowrap">
                  {partner.name}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Gradient fade effects on sides */}
      <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-background to-transparent pointer-events-none z-10"></div>
      <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-background to-transparent pointer-events-none z-10"></div>
    </section>
  );
};

export default PartnersSection;