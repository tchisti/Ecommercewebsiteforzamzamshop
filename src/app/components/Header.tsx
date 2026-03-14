import { ShoppingCart, Menu, X } from "lucide-react";
import { useState } from "react";
import { Button } from "./ui/button";

interface HeaderProps {
  cartItemCount: number;
  onCartClick: () => void;
  onNavigate: (section: string) => void;
}

export function Header({ cartItemCount, onCartClick, onNavigate }: HeaderProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const menuItems = [
    { label: "Home", value: "home" },
    { label: "Zamzam Water", value: "zamzam" },
    { label: "Dates from Madinah", value: "dates" },
    { label: "Bundles", value: "bundles" },
    { label: "About Us", value: "about" },
    { label: "Contact", value: "contact" }
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-white/95 backdrop-blur">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center space-x-2">
          <div className="relative">
            <div className="w-10 h-10 bg-gradient-to-br from-[#D4AF37] to-[#B8941E] rounded-full flex items-center justify-center">
              <span className="text-white font-bold text-lg">Z</span>
            </div>
            <div className="absolute -top-1 -right-1 w-3 h-3 bg-[#D4AF37] rounded-full border-2 border-white"></div>
          </div>
          <div>
            <h1 className="text-xl md:text-2xl tracking-tight">
              <span className="bg-gradient-to-r from-[#D4AF37] to-[#B8941E] bg-clip-text text-transparent">ZamZam</span>
              <span className="text-[#8B7355]">shop</span>
              <span className="text-[#D4AF37] text-sm">.ca</span>
            </h1>
          </div>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center space-x-8">
          {menuItems.map((item) => (
            <button
              key={item.value}
              onClick={() => onNavigate(item.value)}
              className="text-sm text-[#6B5D4F] hover:text-[#D4AF37] transition-colors duration-200"
            >
              {item.label}
            </button>
          ))}
        </nav>

        {/* Cart & Mobile Menu */}
        <div className="flex items-center space-x-4">
          <Button
            variant="ghost"
            size="icon"
            className="relative hover:bg-[#F5F5DC]"
            onClick={onCartClick}
          >
            <ShoppingCart className="h-5 w-5 text-[#8B7355]" />
            {cartItemCount > 0 && (
              <span className="absolute -top-1 -right-1 bg-[#D4AF37] text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                {cartItemCount}
              </span>
            )}
          </Button>

          <Button
            variant="ghost"
            size="icon"
            className="lg:hidden hover:bg-[#F5F5DC]"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? (
              <X className="h-5 w-5 text-[#8B7355]" />
            ) : (
              <Menu className="h-5 w-5 text-[#8B7355]" />
            )}
          </Button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <nav className="lg:hidden border-t bg-white">
          <div className="container mx-auto px-4 py-4 flex flex-col space-y-4">
            {menuItems.map((item) => (
              <button
                key={item.value}
                onClick={() => {
                  onNavigate(item.value);
                  setMobileMenuOpen(false);
                }}
                className="text-left text-[#6B5D4F] hover:text-[#D4AF37] transition-colors duration-200 py-2"
              >
                {item.label}
              </button>
            ))}
          </div>
        </nav>
      )}
    </header>
  );
}
