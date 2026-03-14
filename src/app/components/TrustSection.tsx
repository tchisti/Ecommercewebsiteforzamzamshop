import { Shield, Lock, Truck, Phone, Star } from "lucide-react";

export function TrustSection() {
  const trustElements = [
    {
      icon: Shield,
      title: "Halal Certified",
      description: "All products are 100% Halal certified and verified"
    },
    {
      icon: Lock,
      title: "Secure Payment",
      description: "SSL encrypted checkout for safe transactions"
    },
    {
      icon: Truck,
      title: "Fast Delivery",
      description: "Ships within 1-2 business days across Canada"
    },
    {
      icon: Phone,
      title: "24/7 Support",
      description: "WhatsApp support available anytime"
    }
  ];

  const reviews = [
    {
      name: "Ahmed K.",
      rating: 5,
      comment: "Authentic Zamzam water! Fast delivery and excellent packaging. May Allah bless this business.",
      date: "2 days ago"
    },
    {
      name: "Fatima M.",
      rating: 5,
      comment: "The dates are absolutely delicious and fresh. You can tell they're premium quality from Madinah.",
      date: "1 week ago"
    },
    {
      name: "Ibrahim S.",
      rating: 5,
      comment: "Been ordering from ZamZamshop for months. Always consistent quality and great customer service.",
      date: "2 weeks ago"
    }
  ];

  return (
    <section className="py-16 bg-gradient-to-b from-white to-[#fafaf8]">
      <div className="container mx-auto px-4">
        {/* Trust Badges */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {trustElements.map((item, index) => (
            <div
              key={index}
              className="flex flex-col items-center text-center p-6 bg-white rounded-xl border border-[#D4AF37]/20 hover:shadow-lg transition-shadow duration-300"
            >
              <div className="w-16 h-16 bg-gradient-to-br from-[#D4AF37] to-[#B8941E] rounded-full flex items-center justify-center mb-4">
                <item.icon className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-lg mb-2 text-[#2D2D2D]">{item.title}</h3>
              <p className="text-sm text-[#8B7355]">{item.description}</p>
            </div>
          ))}
        </div>

        {/* Customer Reviews */}
        <div className="space-y-8">
          <div className="text-center space-y-4">
            <h2 className="text-3xl md:text-4xl text-[#2D2D2D]">
              What Our Customers Say
            </h2>
            <div className="flex items-center justify-center space-x-2">
              <div className="w-16 h-1 bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent"></div>
              <div className="w-2 h-2 bg-[#D4AF37] rounded-full"></div>
              <div className="w-16 h-1 bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent"></div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {reviews.map((review, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-xl border border-[#D4AF37]/20 hover:shadow-lg transition-shadow duration-300"
              >
                <div className="flex items-center space-x-1 mb-3">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`h-4 w-4 ${
                        i < review.rating
                          ? "fill-[#D4AF37] text-[#D4AF37]"
                          : "text-gray-300"
                      }`}
                    />
                  ))}
                </div>
                <p className="text-[#6B5D4F] mb-4 leading-relaxed">"{review.comment}"</p>
                <div className="flex items-center justify-between text-sm">
                  <span className="text-[#2D2D2D]">{review.name}</span>
                  <span className="text-[#8B7355]">{review.date}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Payment & Certification Badges */}
        <div className="mt-16 flex flex-wrap items-center justify-center gap-8">
          <div className="flex items-center space-x-2 px-6 py-3 bg-white rounded-lg border border-[#D4AF37]/20">
            <Shield className="h-6 w-6 text-[#D4AF37]" />
            <span className="text-sm text-[#8B7355]">Halal Certified</span>
          </div>
          <div className="flex items-center space-x-2 px-6 py-3 bg-white rounded-lg border border-[#D4AF37]/20">
            <Lock className="h-6 w-6 text-[#D4AF37]" />
            <span className="text-sm text-[#8B7355]">Secure Payment</span>
          </div>
          <div className="flex items-center space-x-2 px-6 py-3 bg-white rounded-lg border border-[#D4AF37]/20">
            <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none">
              <rect x="2" y="5" width="20" height="14" rx="2" stroke="#D4AF37" strokeWidth="2"/>
              <path d="M2 10h20" stroke="#D4AF37" strokeWidth="2"/>
            </svg>
            <span className="text-sm text-[#8B7355]">Visa & Mastercard</span>
          </div>
        </div>
      </div>
    </section>
  );
}
