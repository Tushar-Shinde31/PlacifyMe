import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Star, Quote } from "lucide-react";

const TestimonialsSection = () => {
  const testimonials = [
    {
      name: "Priya Sharma",
      role: "Part-time Designer",
      content: "Found 3 design gigs this week alone! The location-based matching is incredible.",
      rating: 5,
      avatar: "PS",
      location: "Mumbai"
    },
    {
      name: "Rajesh Kumar",
      role: "Food Delivery Partner",
      content: "Best gig platform ever! Instant payments and transparent ratings system.",
      rating: 5,
      avatar: "RK",
      location: "Delhi"
    },
    {
      name: "Anita Patel",
      role: "Freelance Writer",
      content: "Love how easy it is to connect with local businesses. Great community!",
      rating: 5,
      avatar: "AP",
      location: "Bangalore"
    },
    {
      name: "Vikram Singh",
      role: "Event Manager",
      content: "Posted a gig and got 10+ applications within hours. Super efficient!",
      rating: 5,
      avatar: "VS",
      location: "Pune"
    },
    {
      name: "Meera Joshi",
      role: "Photographer",
      content: "The in-app chat feature makes coordination so much easier. Highly recommend!",
      rating: 5,
      avatar: "MJ",
      location: "Chennai"
    },
    {
      name: "Arjun Verma",
      role: "Tutor",
      content: "Finally a platform that understands local needs. Perfect for part-time work!",
      rating: 5,
      avatar: "AV",
      location: "Hyderabad"
    }
  ];

  // Duplicate testimonials for infinite scroll effect
  const scrollingTestimonials = [...testimonials, ...testimonials];

  return (
    <section className="py-16 bg-gradient-glow overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 mb-12">
        <div className="text-center fade-in">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            What our <span className="gradient-text">community</span> says
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Join thousands of satisfied users who are earning and hiring through PlacifyMe
          </p>
        </div>
      </div>

      {/* Horizontal Scrolling Container */}
      <div className="relative">
        <div className="flex space-x-6 animate-scroll-left">
          {scrollingTestimonials.map((testimonial, index) => (
            <Card 
              key={index} 
              className="flex-shrink-0 w-80 floating-card border-primary/10 bg-card/80 backdrop-blur-sm hover:shadow-glow transition-all duration-300"
            >
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-gradient-primary rounded-full flex items-center justify-center text-primary-foreground font-semibold mr-4">
                    {testimonial.avatar}
                  </div>
                  <div className="flex-1">
                    <h4 className="font-semibold text-foreground">{testimonial.name}</h4>
                    <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                    <p className="text-xs text-primary">{testimonial.location}</p>
                  </div>
                  <Quote className="w-6 h-6 text-primary/30" />
                </div>
                
                <p className="text-foreground mb-4 leading-relaxed">"{testimonial.content}"</p>
                
                <div className="flex items-center">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;