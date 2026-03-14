import { Button } from "./ui/button";
import { ArrowRight, Droplet, Calendar } from "lucide-react";

interface HeroProps {
  onShopNow: () => void;
}

export function Hero({ onShopNow }: HeroProps) {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-white via-[#fafaf8] to-white">
      {/* Decorative Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#D4AF37] rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#8B7355] rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 py-16 md:py-24 relative">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="inline-flex items-center space-x-2 bg-[#F5F5DC] px-4 py-2 rounded-full">
              <div className="w-2 h-2 bg-[#D4AF37] rounded-full animate-pulse"></div>
              <span className="text-sm text-[#8B7355]">Sourced Directly from Madinah</span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl leading-tight">
              <span className="block text-[#2D2D2D]">Pure Zamzam Water &</span>
              <span className="block bg-gradient-to-r from-[#D4AF37] to-[#B8941E] bg-clip-text text-transparent mt-2">
                Original Dates
              </span>
              <span className="block text-[#2D2D2D] mt-2">from Madinah</span>
            </h1>

            <p className="text-lg text-[#6B5D4F] max-w-lg">
              Delivered to Your Doorstep – Experience the blessing of authentic Zamzam water and premium Arabian dates, sourced with care and delivered with trust.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                onClick={onShopNow}
                className="bg-gradient-to-r from-[#D4AF37] to-[#B8941E] hover:from-[#B8941E] hover:to-[#D4AF37] text-white px-8 py-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 group"
              >
                Shop Now
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button
                variant="outline"
                className="border-2 border-[#D4AF37] text-[#8B7355] hover:bg-[#F5F5DC] px-8 py-6 rounded-lg"
              >
                Learn Our Story
              </Button>
            </div>

            {/* Trust Indicators */}
            <div className="flex items-center space-x-8 pt-8 border-t border-[#D4AF37]/20">
              <div className="flex items-center space-x-2">
                <div className="w-12 h-12 bg-[#F5F5DC] rounded-full flex items-center justify-center">
                  <Droplet className="h-6 w-6 text-[#D4AF37]" />
                </div>
                <div>
                  <p className="text-sm text-[#6B5D4F]">100% Authentic</p>
                  <p className="text-xs text-[#8B7355]">Certified Zamzam</p>
                </div>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-12 h-12 bg-[#F5F5DC] rounded-full flex items-center justify-center">
                  <Calendar className="h-6 w-6 text-[#D4AF37]" />
                </div>
                <div>
                  <p className="text-sm text-[#6B5D4F]">Premium Dates</p>
                  <p className="text-xs text-[#8B7355]">From Madinah</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Content - Hero Images */}
          <div className="relative">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <div className="relative group overflow-hidden rounded-2xl shadow-xl">
                  <img
                    src="https://images.unsplash.com/photo-1616118132534-381148898bb4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx6YW16YW0lMjB3YXRlciUyMGJvdHRsZXxlbnwxfHx8fDE3Njc5MzMxMzd8MA&ixlib=rb-4.1.0&q=80&w=1080"
                    alt="Zamzam Water"
                    className="w-full h-80 object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                  <div className="absolute bottom-4 left-4 text-white">
                    <p className="text-sm">Sacred Water</p>
                    <p className="text-xs opacity-80">Blessed from Mecca</p>
                  </div>
                </div>
                <div className="bg-gradient-to-br from-[#D4AF37] to-[#B8941E] rounded-2xl p-6 text-white shadow-lg">
                  <p className="text-3xl mb-1">500+</p>
                  <p className="text-sm opacity-90">Happy Customers</p>
                </div>
              </div>
              <div className="space-y-4 pt-8">
                <div className="bg-[#F5F5DC] rounded-2xl p-6 shadow-lg">
                  <p className="text-3xl text-[#D4AF37] mb-1">100%</p>
                  <p className="text-sm text-[#8B7355]">Halal Certified</p>
                </div>
                <div className="relative group overflow-hidden rounded-2xl shadow-xl">
                  <img
                    src="https://images.unsplash.com/photo-1717276850243-80657c246333?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkYXRlcyUyMGZydWl0JTIwcHJlbWl1bXxlbnwxfHx8fDE3Njc5MzMxMzh8MA&ixlib=rb-4.1.0&q=80&w=1080"
                    alt="Premium Dates"
                    className="w-full h-80 object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                  <div className="absolute bottom-4 left-4 text-white">
                    <p className="text-sm">Premium Dates</p>
                    <p className="text-xs opacity-80">Madinah's Finest</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
