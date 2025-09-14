import React from "react";
import { Button } from "@/components/ui/button";
import { MapPin, Zap, Shield } from "lucide-react";
import heroElements from "@/assets/hero-elements.jpg";
import AnimatedMobileDemo from "@/components/AnimatedMobileDemo";

const HeroSection = () => {
  return (
    <section className="min-h-screen relative overflow-hidden pt-16">
      {/* Gradient Background */}
      <div className="absolute inset-0 bg-gradient-hero">
        <div className="absolute inset-0 bg-gradient-glow opacity-30"></div>
      </div>

      {/* Floating Elements */}
      <div className="absolute top-20 right-10 w-32 h-32 opacity-20 animate-float">
        <img
          src={heroElements}
          alt="Hero elements"
          className="w-full h-full object-cover rounded-2xl"
        />
      </div>

      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="text-center lg:text-left">
            <div className="space-y-6 fade-in">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-primary-foreground leading-tight">
                Find work.{" "}
                <span className="text-accent-light">Get paid.</span>
                <br />
                Your local gig app.
              </h1>
              
              <p className="text-lg sm:text-xl text-primary-foreground/80 max-w-lg mx-auto lg:mx-0">
                Discover nearby flexible jobs or post gigs instantly. 
                Connect with local talent and opportunities in your area.
              </p>

              {/* Feature Pills */}
              <div className="flex flex-wrap gap-3 justify-center lg:justify-start">
                <div className="flex items-center space-x-2 bg-primary-foreground/10 backdrop-blur-sm rounded-full px-4 py-2 border border-primary-foreground/20">
                  <MapPin className="w-4 h-4 text-accent-light" />
                  <span className="text-sm text-primary-foreground">Location-based</span>
                </div>
                <div className="flex items-center space-x-2 bg-primary-foreground/10 backdrop-blur-sm rounded-full px-4 py-2 border border-primary-foreground/20">
                  <Zap className="w-4 h-4 text-accent-light" />
                  <span className="text-sm text-primary-foreground">Instant Apply</span>
                </div>
                <div className="flex items-center space-x-2 bg-primary-foreground/10 backdrop-blur-sm rounded-full px-4 py-2 border border-primary-foreground/20">
                  <Shield className="w-4 h-4 text-accent-light" />
                  <span className="text-sm text-primary-foreground">Secure Payments</span>
                </div>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start pt-4">
                <Button 
                  size="lg" 
                  className="bg-accent hover:bg-accent-light text-accent-foreground hover:shadow-glow transition-all duration-300 transform hover:scale-105"
                >
                  Find Jobs Near Me
                </Button>
                <Button 
                  size="lg" 
                  variant="outline" 
                  className="border-white/50 text-white bg-white/10 hover:bg-white/20 hover:border-white/70 backdrop-blur-sm transition-all duration-300"
                >
                  Post a Gig
                </Button>
              </div>

              {/* Trust Metrics */}
              <div className="grid grid-cols-2 gap-6 pt-8 max-w-md mx-auto lg:mx-0">
                <div className="text-center lg:text-left">
                  <div className="text-2xl sm:text-3xl font-bold text-accent-light">1L+</div>
                  <div className="text-sm text-primary-foreground/70">Active Users</div>
                </div>
                <div className="text-center lg:text-left">
                  <div className="text-2xl sm:text-3xl font-bold text-accent-light">500+</div>
                  <div className="text-sm text-primary-foreground/70">Local Businesses</div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Content - Animated Mobile Demo */}
          <div className="relative flex justify-center lg:justify-end">
            <div className="relative">
              <AnimatedMobileDemo />

              {/* Floating Stats Cards */}
              <div className="absolute -left-8 top-16 floating-card rounded-2xl p-4 backdrop-blur-xl border border-primary-foreground/20 animate-float">
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-gradient-primary rounded-full flex items-center justify-center">
                    <Zap className="w-4 h-4 text-primary-foreground" />
                  </div>
                  <div>
                    <div className="text-sm font-semibold text-primary-foreground">₹5,000</div>
                    <div className="text-xs text-primary-foreground/70">Today's Earnings</div>
                  </div>
                </div>
              </div>

              <div className="absolute -right-6 bottom-32 floating-card rounded-2xl p-4 backdrop-blur-xl border border-primary-foreground/20 animate-float" style={{ animationDelay: '1s' }}>
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-accent rounded-full flex items-center justify-center">
                    <MapPin className="w-4 h-4 text-accent-foreground" />
                  </div>
                  <div>
                    <div className="text-sm font-semibold text-primary-foreground">12 Jobs</div>
                    <div className="text-xs text-primary-foreground/70">Within 2km</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Wave */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 120" className="w-full h-24 text-background">
          <path
            fill="currentColor"
            d="M0,64L48,69.3C96,75,192,85,288,80C384,75,480,53,576,48C672,43,768,53,864,64C960,75,1056,85,1152,80C1248,75,1344,53,1392,42.7L1440,32L1440,120L1392,120C1344,120,1248,120,1152,120C1056,120,960,120,864,120C768,120,672,120,576,120C480,120,384,120,288,120C192,120,96,120,48,120L0,120Z"
          />
        </svg>
      </div>
    </section>
  );
};

export default HeroSection;