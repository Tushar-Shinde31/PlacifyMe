import React, { useRef, useState } from "react";
import { motion, useInView, useMotionValue, useSpring, useTransform } from "framer-motion";
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
  Wallet,
  Sparkles,
  ArrowRight
} from "lucide-react";

const SolutionsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [hoveredCard, setHoveredCard] = useState<string | null>(null);

  const flexerFeatures = [
    {
      icon: Search,
      title: "Browse Nearby Gigs",
      description: "Find jobs within walking distance using smart location matching",
      gradient: "from-blue-500 to-cyan-500"
    },
    {
      icon: Zap,
      title: "Smart Matching",
      description: "Get matched with gigs based on your skills and availability",
      gradient: "from-purple-500 to-pink-500"
    },
    {
      icon: MessageCircle,
      title: "In-App Chat & Offers",
      description: "Communicate directly with employers and negotiate terms",
      gradient: "from-green-500 to-emerald-500"
    },
    {
      icon: CreditCard,
      title: "Secure Mobile Payments",
      description: "Get paid instantly via UPI or digital wallet",
      gradient: "from-orange-500 to-red-500"
    }
  ];

  const merchantFeatures = [
    {
      icon: PlusCircle,
      title: "Post a Gig in Seconds",
      description: "Create job postings quickly with our intuitive interface",
      gradient: "from-indigo-500 to-purple-500"
    },
    {
      icon: Users,
      title: "View Applicants & Profiles",
      description: "Browse qualified candidates with verified profiles",
      gradient: "from-teal-500 to-cyan-500"
    },
    {
      icon: Clock,
      title: "Flexible Hiring Options",
      description: "Full-time, part-time, or one-time gig opportunities",
      gradient: "from-rose-500 to-pink-500"
    },
    {
      icon: Wallet,
      title: "Secure Payments",
      description: "Pay safely through our secure payment gateway",
      gradient: "from-amber-500 to-orange-500"
    }
  ];

  // Floating blob animation props
  const blobAnimation = {
    x: [0, 100, -50, 0],
    y: [0, -50, 100, 0],
    scale: [1, 1.2, 0.8, 1],
    transition: {
      duration: 20,
      repeat: Infinity,
      ease: "linear" as const
    }
  };

  return (
    <section 
      ref={ref}
      id="solutions" 
      className="relative py-32 overflow-hidden"
      style={{
        background: `
          radial-gradient(circle at 20% 80%, rgba(120, 119, 198, 0.3) 0%, transparent 50%),
          radial-gradient(circle at 80% 20%, rgba(255, 119, 198, 0.3) 0%, transparent 50%),
          radial-gradient(circle at 40% 40%, rgba(120, 219, 255, 0.2) 0%, transparent 50%),
          linear-gradient(135deg, hsl(var(--background)) 0%, hsl(var(--muted)) 100%)
        `
      }}
    >
      {/* Animated background blobs */}
      <motion.div
        className="absolute top-20 left-10 w-72 h-72 bg-gradient-to-r from-blue-400/20 to-purple-400/20 rounded-full blur-3xl"
        animate={blobAnimation}
      />
      <motion.div
        className="absolute bottom-20 right-10 w-96 h-96 bg-gradient-to-r from-pink-400/20 to-orange-400/20 rounded-full blur-3xl"
        animate={{
          ...blobAnimation,
          transition: {
            ...blobAnimation.transition,
            delay: 5
          }
        }}
      />
      <motion.div
        className="absolute top-1/2 left-1/2 w-64 h-64 bg-gradient-to-r from-cyan-400/20 to-green-400/20 rounded-full blur-3xl"
        animate={{
          ...blobAnimation,
          transition: {
            ...blobAnimation.transition,
            delay: 10
          }
        }}
      />

      {/* Grid pattern overlay */}
      <div 
        className="absolute inset-0 opacity-30" 
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%239C92AC' fill-opacity='0.05'%3E%3Ccircle cx='30' cy='30' r='1'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
        }}
      />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header Section */}
        <motion.div 
          className="text-center mb-20"
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <motion.div
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-blue-500/10 to-purple-500/10 border border-blue-500/20 mb-6"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={isInView ? { scale: 1, opacity: 1 } : { scale: 0.8, opacity: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <Sparkles className="w-4 h-4 text-blue-500" />
            <span className="text-sm font-medium text-blue-600 dark:text-blue-400">Solutions for Everyone</span>
          </motion.div>
          
          <motion.h2 
            className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-foreground via-foreground to-foreground/80 bg-clip-text text-transparent"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            Solutions for{" "}
            <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
              Everyone
            </span>
          </motion.h2>
          
          <motion.p 
            className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Whether you're looking for flexible work or need to hire talent quickly, 
            PlacifyMe connects the right people at the right time.
          </motion.p>
        </motion.div>

        {/* Cards Grid */}
        <div className="grid lg:grid-cols-2 gap-8 max-w-7xl mx-auto">
          {/* For Job Seekers Card */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            onMouseEnter={() => setHoveredCard("flexers")}
            onMouseLeave={() => setHoveredCard(null)}
            className="group"
          >
            <Card className="relative h-full overflow-hidden border-0 bg-gradient-to-br from-white/80 via-white/60 to-white/40 dark:from-gray-900/80 dark:via-gray-900/60 dark:to-gray-900/40 backdrop-blur-xl shadow-2xl hover:shadow-3xl transition-all duration-500 hover:-translate-y-2">
              {/* Card gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 via-purple-500/5 to-pink-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              {/* Animated border */}
              <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 opacity-0 group-hover:opacity-100 transition-opacity duration-500" style={{ padding: '1px' }}>
                <div className="w-full h-full rounded-lg bg-gradient-to-br from-white/80 via-white/60 to-white/40 dark:from-gray-900/80 dark:via-gray-900/60 dark:to-gray-900/40" />
              </div>

              <CardContent className="relative p-8 h-full flex flex-col">
                {/* Header */}
                <motion.div 
                  className="flex items-center mb-8"
                  whileHover={{ scale: 1.02 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <motion.div 
                    className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center mr-6 shadow-lg"
                    whileHover={{ rotate: 5, scale: 1.1 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <Search className="w-8 h-8 text-white" />
                  </motion.div>
                  <div>
                    <h3 className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-2">
                      For Job Seekers
                    </h3>
                    <p className="text-muted-foreground text-lg">Find flexible work opportunities</p>
                  </div>
                </motion.div>

                {/* Features */}
                <div className="space-y-6 mb-8 flex-1">
                  {flexerFeatures.map((feature, index) => {
                    const IconComponent = feature.icon;
                    return (
                      <motion.div 
                        key={index} 
                        className="flex items-start space-x-4 group/item"
                        initial={{ opacity: 0, x: -20 }}
                        animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                        transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
                        whileHover={{ x: 5 }}
                      >
                        <motion.div 
                          className={`w-12 h-12 bg-gradient-to-br ${feature.gradient} rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg group-hover/item:shadow-xl transition-all duration-300`}
                          whileHover={{ scale: 1.1, rotate: 5 }}
                          transition={{ type: "spring", stiffness: 300 }}
                        >
                          <IconComponent className="w-6 h-6 text-white" />
                        </motion.div>
                        <div className="flex-1">
                          <h4 className="font-semibold text-foreground mb-2 text-lg group-hover/item:text-blue-600 dark:group-hover/item:text-blue-400 transition-colors duration-300">
                            {feature.title}
                          </h4>
                          <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
                        </div>
                      </motion.div>
                    );
                  })}
                </div>

                {/* CTA Button */}
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Button className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold py-4 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 group/btn">
                    <span className="flex items-center justify-center gap-2">
                      Start Finding Jobs
                      <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform duration-300" />
                    </span>
                  </Button>
                </motion.div>
              </CardContent>
            </Card>
          </motion.div>

          {/* For Merchants Card */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            onMouseEnter={() => setHoveredCard("merchants")}
            onMouseLeave={() => setHoveredCard(null)}
            className="group"
          >
            <Card className="relative h-full overflow-hidden border-0 bg-gradient-to-br from-white/80 via-white/60 to-white/40 dark:from-gray-900/80 dark:via-gray-900/60 dark:to-gray-900/40 backdrop-blur-xl shadow-2xl hover:shadow-3xl transition-all duration-500 hover:-translate-y-2">
              {/* Card gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 via-pink-500/5 to-orange-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              {/* Animated border */}
              <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-purple-500 via-pink-500 to-orange-500 opacity-0 group-hover:opacity-100 transition-opacity duration-500" style={{ padding: '1px' }}>
                <div className="w-full h-full rounded-lg bg-gradient-to-br from-white/80 via-white/60 to-white/40 dark:from-gray-900/80 dark:via-gray-900/60 dark:to-gray-900/40" />
              </div>

              <CardContent className="relative p-8 h-full flex flex-col">
                {/* Header */}
                <motion.div 
                  className="flex items-center mb-8"
                  whileHover={{ scale: 1.02 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <motion.div 
                    className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-600 rounded-2xl flex items-center justify-center mr-6 shadow-lg"
                    whileHover={{ rotate: -5, scale: 1.1 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <PlusCircle className="w-8 h-8 text-white" />
                  </motion.div>
                  <div>
                    <h3 className="text-3xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent mb-2">
                      For Merchants
                    </h3>
                    <p className="text-muted-foreground text-lg">Hire talent instantly</p>
                  </div>
                </motion.div>

                {/* Features */}
                <div className="space-y-6 mb-8 flex-1">
                  {merchantFeatures.map((feature, index) => {
                    const IconComponent = feature.icon;
                    return (
                      <motion.div 
                        key={index} 
                        className="flex items-start space-x-4 group/item"
                        initial={{ opacity: 0, x: -20 }}
                        animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                        transition={{ duration: 0.6, delay: 0.7 + index * 0.1 }}
                        whileHover={{ x: 5 }}
                      >
                        <motion.div 
                          className={`w-12 h-12 bg-gradient-to-br ${feature.gradient} rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg group-hover/item:shadow-xl transition-all duration-300`}
                          whileHover={{ scale: 1.1, rotate: -5 }}
                          transition={{ type: "spring", stiffness: 300 }}
                        >
                          <IconComponent className="w-6 h-6 text-white" />
                        </motion.div>
                        <div className="flex-1">
                          <h4 className="font-semibold text-foreground mb-2 text-lg group-hover/item:text-purple-600 dark:group-hover/item:text-purple-400 transition-colors duration-300">
                            {feature.title}
                          </h4>
                          <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
                        </div>
                      </motion.div>
                    );
                  })}
                </div>

                {/* CTA Button */}
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Button className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-semibold py-4 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 group/btn">
                    <span className="flex items-center justify-center gap-2">
                      Start Posting Gigs
                      <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform duration-300" />
                    </span>
                  </Button>
                </motion.div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default SolutionsSection;
