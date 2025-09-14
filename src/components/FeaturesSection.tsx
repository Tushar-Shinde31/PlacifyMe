import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { 
  MapPin, 
  Zap, 
  CreditCard, 
  Shield, 
  Heart, 
  Star 
} from "lucide-react";

const FeaturesSection = () => {
  const features = [
    {
      icon: <MapPin className="w-8 h-8" />,
      title: "Geo-Location Matching",
      description: "Find jobs within walking distance",
      color: "primary",
      gradient: "bg-gradient-primary"
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: "One-Click Apply",
      description: "Apply instantly with your profile",
      color: "accent",
      gradient: "bg-accent"
    },
    {
      icon: <CreditCard className="w-8 h-8" />,
      title: "Instant Payouts",
      description: "Get paid the same day via UPI or Wallet",
      color: "primary",
      gradient: "bg-gradient-primary"
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Profile Badge",
      description: "Trusted flexers and verified businesses",
      color: "accent",
      gradient: "bg-accent"
    },
    {
      icon: <Heart className="w-8 h-8" />,
      title: "Saved Favourites",
      description: "Bookmark gigs for later application",
      color: "primary",
      gradient: "bg-gradient-primary"
    },
    {
      icon: <Star className="w-8 h-8" />,
      title: "Rating System",
      description: "Build your reputation with 5-star reviews",
      color: "accent",
      gradient: "bg-accent"
    }
  ];

  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 fade-in">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
            Powerful <span className="gradient-text">Features</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Everything you need to find work or hire talent, all in one intuitive platform.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {features.map((feature, index) => (
            <div key={index} className="fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
              <Card className="floating-card border-0 hover:shadow-float transition-all duration-500 group h-full">
                <CardContent className="p-8 text-center">
                  <div className={`w-16 h-16 ${feature.gradient} rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    <div className="text-white">{feature.icon}</div>
                  </div>
                  
                  <h3 className="text-xl font-bold mb-4 text-foreground group-hover:text-primary transition-colors">
                    {feature.title}
                  </h3>
                  
                  <p className="text-muted-foreground leading-relaxed">
                    {feature.description}
                  </p>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>

        {/* Stats Section */}
        <div className="mt-20 fade-in">
          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="text-4xl sm:text-5xl font-bold gradient-text mb-2 pulse-glow">
                10,000+
              </div>
              <p className="text-muted-foreground">Gigs posted this week</p>
            </div>
            <div className="text-center">
              <div className="text-4xl sm:text-5xl font-bold gradient-text mb-2 pulse-glow">
                90%
              </div>
              <p className="text-muted-foreground">Filled within 24 hours</p>
            </div>
            <div className="text-center">
              <div className="text-4xl sm:text-5xl font-bold gradient-text mb-2 pulse-glow">
                4.8★
              </div>
              <p className="text-muted-foreground">Average user rating</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;