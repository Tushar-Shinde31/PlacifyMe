import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight, Star } from "lucide-react";
import serviceShopHelper from "@/assets/service-shop-helper.jpg";
import serviceBillingCashier from "@/assets/service-billing-cashier.jpg";
import serviceCafeHelper from "@/assets/service-cafe-helper.jpg";
import serviceInventory from "@/assets/service-inventory.jpg";
import serviceLocalDelivery from "@/assets/service-local-delivery.jpg";
import serviceSalonAssistant from "@/assets/service-salon-assistant.jpg";
import serviceElectronics from "@/assets/service-electronics.jpg";
import serviceEventHelper from "@/assets/service-event-helper.jpg";

const HorizontalServicesSection = () => {
  const services = [
    {
      id: 1,
      title: "Shop Helper",
      description: "Assisting in kirana, clothing, stationery, and general stores",
      image: serviceShopHelper,
      rating: 4.8,
      jobs: "250+ jobs available",
      hourlyRate: "₹40-60/hr"
    },
    {
      id: 2,
      title: "Billing & Cashier Support",
      description: "Helping merchants manage checkout counters",
      image: serviceBillingCashier,
      rating: 4.9,
      jobs: "180+ jobs available",
      hourlyRate: "₹50-70/hr"
    },
    {
      id: 3,
      title: "Café & Restaurant Helper",
      description: "Supporting in kitchens, cleaning, or serving",
      image: serviceCafeHelper,
      rating: 4.7,
      jobs: "300+ jobs available",
      hourlyRate: "₹45-65/hr"
    },
    {
      id: 4,
      title: "Stock & Inventory Handler",
      description: "Arranging shelves, unpacking, restocking",
      image: serviceInventory,
      rating: 4.6,
      jobs: "220+ jobs available",
      hourlyRate: "₹40-60/hr"
    },
    {
      id: 5,
      title: "Delivery Support (Local)",
      description: "Small-distance shop deliveries or errands",
      image: serviceLocalDelivery,
      rating: 4.8,
      jobs: "400+ jobs available",
      hourlyRate: "₹30-50/hr"
    },
    {
      id: 6,
      title: "Salon Assistant",
      description: "Helping stylists and attending customers",
      image: serviceSalonAssistant,
      rating: 4.9,
      jobs: "120+ jobs available",
      hourlyRate: "₹35-55/hr"
    },
    {
      id: 7,
      title: "Mobile & Electronics Shop Helper",
      description: "Assisting with sales and small tasks",
      image: serviceElectronics,
      rating: 4.7,
      jobs: "150+ jobs available",
      hourlyRate: "₹50-70/hr"
    },
    {
      id: 8,
      title: "Printing/Stationery Shop Assistant",
      description: "Helping with orders, packaging, binding",
      image: serviceShopHelper,
      rating: 4.6,
      jobs: "100+ jobs available",
      hourlyRate: "₹40-60/hr"
    },
    {
      id: 9,
      title: "Event / Stall Helper",
      description: "Support during exhibitions, fairs, or stalls",
      image: serviceEventHelper,
      rating: 4.8,
      jobs: "200+ jobs available",
      hourlyRate: "₹60-100/hr"
    },
    {
      id: 10,
      title: "Packing Helper",
      description: "Assisting with bulk orders, boxes, and parcels",
      image: serviceInventory,
      rating: 4.5,
      jobs: "180+ jobs available",
      hourlyRate: "₹35-55/hr"
    },
    {
      id: 11,
      title: "Loading & Unloading Helper",
      description: "Supporting with heavy goods or stock movement",
      image: serviceInventory,
      rating: 4.7,
      jobs: "250+ jobs available",
      hourlyRate: "₹50-80/hr"
    },
    {
      id: 12,
      title: "Cleaning & Shop Arrangement",
      description: "Keeping shops/areas clean and organized",
      image: serviceCafeHelper,
      rating: 4.8,
      jobs: "300+ jobs available",
      hourlyRate: "₹30-50/hr"
    },
    {
      id: 13,
      title: "Leaflet Distributor",
      description: "Spreading flyers and basic promotions",
      image: serviceLocalDelivery,
      rating: 4.6,
      jobs: "150+ jobs available",
      hourlyRate: "₹25-40/hr"
    },
    {
      id: 14,
      title: "Seasonal Sales Helper",
      description: "Extra hands during Diwali, Eid, or wedding seasons",
      image: serviceShopHelper,
      rating: 4.9,
      jobs: "350+ jobs available",
      hourlyRate: "₹60-100/hr"
    },
    {
      id: 15,
      title: "Household Task Helper",
      description: "Small chores, shifting help, errands",
      image: serviceCafeHelper,
      rating: 4.7,
      jobs: "280+ jobs available",
      hourlyRate: "₹40-70/hr"
    },
    {
      id: 16,
      title: "Field Marketing Helper",
      description: "On-ground product sampling or brand support",
      image: serviceEventHelper,
      rating: 4.6,
      jobs: "120+ jobs available",
      hourlyRate: "₹50-80/hr"
    },
    {
      id: 17,
      title: "Counter Attendant",
      description: "Attending customers at small food joints or stores",
      image: serviceBillingCashier,
      rating: 4.8,
      jobs: "200+ jobs available",
      hourlyRate: "₹45-65/hr"
    },
    {
      id: 18,
      title: "Basic Delivery Runner",
      description: "Quick local pickup and drop tasks",
      image: serviceLocalDelivery,
      rating: 4.7,
      jobs: "320+ jobs available",
      hourlyRate: "₹30-50/hr"
    },
    {
      id: 19,
      title: "Retail Weekend Support",
      description: "Extra hands during Saturday–Sunday rush",
      image: serviceShopHelper,
      rating: 4.8,
      jobs: "180+ jobs available",
      hourlyRate: "₹50-80/hr"
    },
    {
      id: 20,
      title: "Errand Runner",
      description: "Small one-time jobs like bill payments, purchases, etc.",
      image: serviceLocalDelivery,
      rating: 4.6,
      jobs: "220+ jobs available",
      hourlyRate: "₹25-45/hr"
    }
  ];

  // Duplicate services for seamless infinite scroll
  const duplicatedServices = [...services, ...services];

  return (
    <section className="py-20 bg-background overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 mb-12">
        <div className="text-center mb-16 fade-in">
          <div className="inline-flex items-center gap-2 bg-muted rounded-full px-4 py-2 text-sm text-muted-foreground mb-6">
            <span className="w-2 h-2 bg-primary rounded-full"></span>
            Our Services
          </div>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 text-foreground">
            Find work in your <span className="gradient-text">expertise</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Discover opportunities across various service categories and start earning today
          </p>
        </div>
      </div>

      {/* Horizontal Scrolling Services */}
      <div className="relative">
        {/* Gradient Overlays */}
        <div className="absolute left-0 top-0 w-32 h-full bg-gradient-to-r from-background to-transparent z-10 pointer-events-none"></div>
        <div className="absolute right-0 top-0 w-32 h-full bg-gradient-to-l from-background to-transparent z-10 pointer-events-none"></div>
        
        {/* Scrolling Container */}
        <div className="flex gap-6 animate-scroll-horizontal">
          {duplicatedServices.map((service, index) => (
            <Card 
              key={`${service.id}-${index}`} 
              className="flex-shrink-0 w-80 h-96 floating-card border-primary/20 hover:shadow-float transition-all duration-500 group overflow-hidden"
            >
              <CardContent className="p-0 h-full flex flex-col">
                {/* Service Image */}
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                  
                  {/* Rating Badge */}
                  <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-full px-3 py-1 flex items-center gap-1">
                    <Star className="w-4 h-4 text-yellow-400 fill-current" />
                    <span className="text-sm font-semibold text-gray-800">{service.rating}</span>
                  </div>
                </div>

                {/* Service Content */}
                <div className="p-6 flex-1 flex flex-col">
                  <h3 className="text-xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                    {service.title}
                  </h3>
                  
                  <p className="text-muted-foreground text-sm mb-4 flex-1">
                    {service.description}
                  </p>

                  {/* Service Stats */}
                  <div className="space-y-2 mb-4">
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-muted-foreground">{service.jobs}</span>
                      <span className="font-semibold text-accent">{service.hourlyRate}</span>
                    </div>
                  </div>

                  {/* Action Button */}
                  <Button 
                    className="w-full bg-gradient-to-r from-primary to-primary-light hover:shadow-glow transition-all duration-300 group-hover:scale-105"
                  >
                    Browse Jobs
                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Bottom CTA */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 mt-16">
        <div className="text-center">
          <p className="text-lg text-muted-foreground mb-6">
            Don't see your service? We're always adding new categories!
          </p>
          <Button 
            size="lg"
            className="bg-gradient-to-r from-accent to-accent-light hover:shadow-glow transition-all duration-300 transform hover:scale-105"
          >
            View All Services
            <ArrowRight className="w-5 h-5 ml-2" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default HorizontalServicesSection;