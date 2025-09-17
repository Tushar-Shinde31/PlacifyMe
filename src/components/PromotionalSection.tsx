import React from "react";
import { Button } from "@/components/ui/button";
import { Mail } from "lucide-react";

const PromotionalSection = () => {
  const handleEmailClick = () => {
    // Open email client
    window.location.href = "mailto:help@withpronto.com";
  };

  return (
    <section className="bg-white py-16 lg:py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          {/* Main Headline */}
          <div className="space-y-6 mb-12">
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
              Get expert house help
              <br />
              in minutes.
              <br />
              <span className="text-blue-600">Download PlacifyMe!</span>
            </h2>

            <p className="text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto">
              Thousands already trust us for hassle-free home upkeep.
            </p>
          </div>

          {/* Official Store Badges */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <a
              href="https://play.google.com/store/apps/details?id=com.placifyme.app"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Get it on Google Play"
              className="transition-transform duration-300 hover:scale-105"
            >
              <img
                src="https://play.google.com/intl/en_us/badges/static/images/badges/en_badge_web_generic.png"
                alt="Get it on Google Play"
                className="h-24 w-auto"
                loading="lazy"
              />
            </a>

            <a
              href="https://apps.apple.com/app/placifyme/id123456789"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Download on the App Store"
              className="transition-transform duration-300 hover:scale-105"
            >
              <img
                src="https://tools.applemediaservices.com/api/badges/download-on-the-app-store/black/en-us?size=250x83&releaseDate=1311120000"
                alt="Download on the App Store"
                className="h-16 "
                loading="lazy"
              />
            </a>
          </div>

          {/* Contact Information */}
          <div className="space-y-6">
            <p className="text-gray-600 text-lg">
              Feel free to reach us at:
            </p>

            <Button
              onClick={handleEmailClick}
              variant="outline"
              className="bg-gray-100 hover:bg-gray-200 text-gray-800 px-6 py-3 h-auto rounded-xl border-gray-300 transition-all duration-300"
            >
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5" />
                <span className="text-lg">placifyme@gmail.com</span>
              </div>
            </Button>
          </div>

          {/* Footer Links */}
          <div className="mt-16 pt-8 border-t border-gray-200">
            <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-8 text-sm text-gray-600">
              <a
                href="mailto:careers@withpronto.com"
                className="hover:text-gray-900 transition-colors"
              >
                Join us: careers@withpronto.com
              </a>
              <a
                href="#contact"
                className="hover:text-gray-900 transition-colors"
              >
                Contact Us
              </a>
              <a
                href="#terms"
                className="hover:text-gray-900 transition-colors"
              >
                Terms & Conditions
              </a>
              <a
                href="#privacy"
                className="hover:text-gray-900 transition-colors underline"
              >
                Privacy Policy
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PromotionalSection;
