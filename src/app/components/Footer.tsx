import { MessageCircle, MapPin, Mail, Phone } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-gradient-to-b from-[#2D2D2D] to-[#1a1a1a] text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-gradient-to-br from-[#D4AF37] to-[#B8941E] rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-lg">Z</span>
              </div>
              <div>
                <h3 className="text-xl">
                  <span className="text-[#D4AF37]">ZamZam</span>
                  <span className="text-white">shop</span>
                  <span className="text-[#D4AF37] text-sm">.ca</span>
                </h3>
              </div>
            </div>
            <p className="text-sm text-gray-400 leading-relaxed">
              Your trusted source for authentic Zamzam water and premium dates from Madinah, delivered with care across Canada.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="mb-4 text-[#D4AF37]">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="text-gray-400 hover:text-[#D4AF37] transition-colors">Zamzam Water</a></li>
              <li><a href="#" className="text-gray-400 hover:text-[#D4AF37] transition-colors">Dates from Madinah</a></li>
              <li><a href="#" className="text-gray-400 hover:text-[#D4AF37] transition-colors">Bundles & Offers</a></li>
              <li><a href="#" className="text-gray-400 hover:text-[#D4AF37] transition-colors">About Us</a></li>
            </ul>
          </div>

          {/* Customer Service */}
          <div>
            <h4 className="mb-4 text-[#D4AF37]">Customer Service</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="text-gray-400 hover:text-[#D4AF37] transition-colors">Shipping Info</a></li>
              <li><a href="#" className="text-gray-400 hover:text-[#D4AF37] transition-colors">Return Policy</a></li>
              <li><a href="#" className="text-gray-400 hover:text-[#D4AF37] transition-colors">FAQ</a></li>
              <li><a href="#" className="text-gray-400 hover:text-[#D4AF37] transition-colors">Privacy Policy</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="mb-4 text-[#D4AF37]">Contact Us</h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start space-x-2">
                <MapPin className="h-4 w-4 text-[#D4AF37] mt-1 flex-shrink-0" />
                <span className="text-gray-400">Toronto, Ontario, Canada</span>
              </li>
              <li className="flex items-start space-x-2">
                <Mail className="h-4 w-4 text-[#D4AF37] mt-1 flex-shrink-0" />
                <a href="mailto:info@zamzamshop.ca" className="text-gray-400 hover:text-[#D4AF37] transition-colors">
                  info@zamzamshop.ca
                </a>
              </li>
              <li className="flex items-start space-x-2">
                <Phone className="h-4 w-4 text-[#D4AF37] mt-1 flex-shrink-0" />
                <a href="tel:+16471234567" className="text-gray-400 hover:text-[#D4AF37] transition-colors">
                  +1 (647) 123-4567
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-gray-800 flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
          <p className="text-sm text-gray-400">
            © 2026 ZamZamshop.ca. All rights reserved.
          </p>
          <div className="flex items-center space-x-6">
            <a href="#" className="text-gray-400 hover:text-[#D4AF37] transition-colors text-sm">
              Terms of Service
            </a>
            <a href="#" className="text-gray-400 hover:text-[#D4AF37] transition-colors text-sm">
              Privacy
            </a>
            <a href="#" className="text-gray-400 hover:text-[#D4AF37] transition-colors text-sm">
              Cookies
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

// WhatsApp Floating Button Component
export function WhatsAppButton() {
  const phoneNumber = "16471234567"; // Replace with actual WhatsApp business number
  const message = "Hi! I'm interested in your products.";
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 group"
    >
      <div className="relative">
        <div className="w-14 h-14 bg-gradient-to-br from-[#25D366] to-[#128C7E] rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-300 group-hover:scale-110">
          <MessageCircle className="h-7 w-7 text-white" />
        </div>
        <div className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full animate-pulse"></div>
        
        {/* Tooltip */}
        <div className="absolute right-full mr-3 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
          <div className="bg-[#2D2D2D] text-white text-sm px-3 py-2 rounded-lg whitespace-nowrap">
            Chat with us on WhatsApp
          </div>
        </div>
      </div>
    </a>
  );
}
