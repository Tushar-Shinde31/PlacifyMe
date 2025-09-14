import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { 
  Search, 
  Zap, 
  MessageCircle, 
  CreditCard, 
  PlusCircle, 
  Users, 
  Clock, 
  Wallet 
} from "lucide-react";

const SolutionsSection = () => {
  const flexerFeatures = [
    {
      icon: <Search className="w-6 h-6" />,
      title: "Browse Nearby Gigs",
      description: "Find jobs within walking distance using smart location matching"
    },
    {
      icon: <Zap className="w-6 h-6" />,
      title: "Smart Matching",
      description: "Get matched with gigs based on your skills and availability"
    },
    {
      icon: <MessageCircle className="w-6 h-6" />,
      title: "In-App Chat & Offers",
      description: "Communicate directly with employers and negotiate terms"
    },
    {
      icon: <CreditCard className="w-6 h-6" />,
      title: "Secure Mobile Payments",
      description: "Get paid instantly via UPI or digital wallet"
    }
  ];

  const merchantFeatures = [
    {
      icon: <PlusCircle className="w-6 h-6" />,
      title: "Post a Gig in Seconds",
      description: "Create job postings quickly with our intuitive interface"
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "View Applicants & Profiles",
      description: "Browse qualified candidates with verified profiles"
    },
    {
      icon: <Clock className="w-6 h-6" />,
      title: "Flexible Hiring Options",
      description: "Full-time, part-time, or one-time gig opportunities"
    },
    {
      icon: <Wallet className="w-6 h-6" />,
      title: "Secure Payments",
      description: "Pay safely through our secure payment gateway"
    }
  ];

  return (
    <section id="solutions" className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 fade-in">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
            Solutions for <span className="gradient-text">Everyone</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Whether you're looking for flexible work or need to hire talent quickly, 
            PlacifyMe connects the right people at the right time.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-7xl mx-auto">
          {/* For Job Seekers (Flexers) */}
          <div className="fade-in">
            <Card className="floating-card border-primary/20 hover:shadow-float transition-all duration-500 h-full">
              <CardContent className="p-8">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-gradient-primary rounded-xl flex items-center justify-center mr-4">
                    <Search className="w-6 h-6 text-primary-foreground" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-primary">For Job Seekers</h3>
                    <p className="text-muted-foreground">Find flexible work opportunities</p>
                  </div>
                </div>

                <div className="space-y-6 mb-8">
                  {flexerFeatures.map((feature, index) => (
                    <div key={index} className="flex items-start space-x-4">
                      <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                        <div className="text-primary">{feature.icon}</div>
                      </div>
                      <div>
                        <h4 className="font-semibold text-foreground mb-1">{feature.title}</h4>
                        <p className="text-sm text-muted-foreground">{feature.description}</p>
                      </div>
                    </div>
                  ))}
                </div>

                <Button className="w-full bg-gradient-primary hover:shadow-glow transition-all duration-300">
                  Start Finding Jobs
                </Button>
              </CardContent>
            </Card>
          </div>

          {/* For Merchants (Gig Posters) */}
          <div className="fade-in">
            <Card className="floating-card border-accent/20 hover:shadow-float transition-all duration-500 h-full">
              <CardContent className="p-8">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-accent rounded-xl flex items-center justify-center mr-4">
                    <PlusCircle className="w-6 h-6 text-accent-foreground" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-accent">For Merchants</h3>
                    <p className="text-muted-foreground">Hire talent instantly</p>
                  </div>
                </div>

                <div className="space-y-6 mb-8">
                  {merchantFeatures.map((feature, index) => (
                    <div key={index} className="flex items-start space-x-4">
                      <div className="w-10 h-10 bg-accent/10 rounded-lg flex items-center justify-center flex-shrink-0">
                        <div className="text-accent">{feature.icon}</div>
                      </div>
                      <div>
                        <h4 className="font-semibold text-foreground mb-1">{feature.title}</h4>
                        <p className="text-sm text-muted-foreground">{feature.description}</p>
                      </div>
                    </div>
                  ))}
                </div>

                <Button className="w-full bg-accent hover:bg-accent-light hover:shadow-glow transition-all duration-300">
                  Start Posting Gigs
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SolutionsSection;