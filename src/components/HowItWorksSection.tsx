import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import step1Mockup from "@/assets/step1-mockup.jpg";
import step2Mockup from "@/assets/step2-mockup.jpg";
import step3Mockup from "@/assets/step3-mockup.jpg";

const HowItWorksSection = () => {
  const steps = [
    {
      number: "STEP 1",
      title: "Pick from a range of local services",
      mockup: step1Mockup,
      alt: "Browse job categories on PlacifyMe app"
    },
    {
      number: "STEP 2", 
      title: "Apply instantly to jobs you love",
      mockup: step2Mockup,
      alt: "Apply to jobs on PlacifyMe app"
    },
    {
      number: "STEP 3",
      title: "Complete work & get paid fast",
      mockup: step3Mockup,
      alt: "Get paid on PlacifyMe app"
    }
  ];

  return (
    <section id="how-it-works" className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16 fade-in">
          <div className="inline-flex items-center gap-2 bg-muted rounded-full px-4 py-2 text-sm text-muted-foreground mb-6">
            <span className="w-2 h-2 bg-primary rounded-full"></span>
            How it works
          </div>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 text-foreground">
            Simple steps to finding work
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Follow these simple steps to get lightning-fast access to local opportunities
          </p>
        </div>

        {/* Steps Cards */}
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8">
            {steps.map((step, index) => (
              <div key={index} className="fade-in" style={{ animationDelay: `${index * 0.2}s` }}>
                <Card className="bg-gradient-to-br from-accent to-accent-light border-0 shadow-2xl rounded-3xl overflow-hidden h-full transform hover:scale-105 transition-all duration-500">
                  <CardContent className="p-8 h-full flex flex-col">
                    {/* Step Badge */}
                    <div className="inline-flex items-center justify-center bg-white/20 backdrop-blur-sm rounded-full px-4 py-2 text-sm font-bold text-white mb-6 self-start">
                      {step.number}
                    </div>

                    {/* Title */}
                    <h3 className="text-2xl font-bold text-white mb-8 leading-tight">
                      {step.title}
                    </h3>

                    {/* Mobile Mockup */}
                    <div className="flex-1 flex items-center justify-center mt-4">
                      <div className="relative">
                        {/* Phone Bezel Effect */}
                        <div className="bg-white/20 backdrop-blur-sm rounded-[2.5rem] p-3 shadow-2xl">
                          <div className="bg-black rounded-[2rem] overflow-hidden shadow-inner">
                            <img
                              src={step.mockup}
                              alt={step.alt}
                              className="w-48 h-auto rounded-[1.8rem]"
                            />
                          </div>
                        </div>
                        
                        {/* Glow Effect */}
                        <div className="absolute inset-0 bg-white/10 rounded-[2.5rem] blur-xl scale-110 -z-10"></div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <p className="text-lg text-muted-foreground mb-6">
            Ready to start earning with PlacifyMe?
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-gradient-to-r from-accent to-accent-light text-white font-semibold px-8 py-4 rounded-full hover:shadow-glow transition-all duration-300 transform hover:scale-105">
              Find Jobs Now
            </button>
            <button className="border-2 border-accent text-accent font-semibold px-8 py-4 rounded-full hover:bg-accent hover:text-white transition-all duration-300">
              Post a Gig
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;