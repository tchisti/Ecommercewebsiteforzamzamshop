import image_b84be59d6464a60d2eeb92a3d3cf386c97988819 from 'figma:asset/b84be59d6464a60d2eeb92a3d3cf386c97988819.png';
import { useState, useEffect } from "react";
import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { ProductGrid } from "./components/ProductGrid";
import { ShoppingCartSheet, CartItem } from "./components/ShoppingCartSheet";
import { ProductDetailModal } from "./components/ProductDetailModal";
import { TrustSection } from "./components/TrustSection";
import { Footer, WhatsAppButton } from "./components/Footer";
import { Product } from "./components/ProductCard";
import { toast, Toaster } from "sonner";

// Mock product data
const zamzamProducts: Product[] = [
  {
    id: "zw-1",
    name: "Zamzam Water - 5L Premium Bottle",
    price: 29.99,
    image: "https://i.etsystatic.com/52001314/r/il/93773c/6575870837/il_794xN.6575870837_hnmj.jpg",
    category: "zamzam",
    description: "Authentic Zamzam water sourced directly from Mecca. Blessed and pure, perfect for daily use and special occasions.",
    rating: 5,
    reviews: 127,
    badge: "Bestseller",
    inStock: true
  },
  {
    id: "zw-2",
    name: "Zamzam Water - 1L Bottle (Pack of 6)",
    price: 34.99,
    image: "https://images.unsplash.com/photo-1616118132534-381148898bb4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx6YW16YW0lMjB3YXRlciUyMGJvdHRsZXxlbnwxfHx8fDE3Njc5MzMxMzd8MA&ixlib=rb-4.1.0&q=80&w=1080",
    category: "zamzam",
    description: "Convenient 1L bottles perfect for families. Each bottle sealed to maintain purity and authenticity.",
    rating: 4.9,
    reviews: 89,
    badge: "Family Pack",
    inStock: true
  },
  {
    id: "zw-3",
    name: "Zamzam Water - 500ml Bottle (Pack of 12)",
    price: 34.99,
    image: "https://images.unsplash.com/photo-1616118132534-381148898bb4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx6YW16YW0lMjB3YXRlciUyMGJvdHRsZXxlbnwxfHx8fDE3Njc5MzMxMzd8MA&ixlib=rb-4.1.0&q=80&w=1080",
    category: "zamzam",
    description: "Individual 500ml bottles, ideal for gifting and personal use. Easy to carry and store.",
    rating: 4.8,
    reviews: 64,
    inStock: true
  },
  {
    id: "zw-4",
    name: "Zamzam Water - 10L Premium Container",
    price: 49.99,
    image: "https://images.unsplash.com/photo-1616118132534-381148898bb4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx6YW16YW0lMjB3YXRlciUyMGJvdHRsZXxlbnwxfHx8fDE3Njc5MzMxMzd8MA&ixlib=rb-4.1.0&q=80&w=1080",
    category: "zamzam",
    description: "Large 10L container for extended use. Perfect for communities and gatherings.",
    rating: 5,
    reviews: 42,
    badge: "Value Pack",
    inStock: true
  }
];

const datesProducts: Product[] = [
  {
    id: "dt-1",
    name: "Ajwa Dates from Madinah - Premium 500g",
    price: 34.99,
    image: image_b84be59d6464a60d2eeb92a3d3cf386c97988819,
    category: "dates",
    description: "Premium Ajwa dates from Madinah, known for their unique taste and health benefits. Rich in nutrients.",
    rating: 5,
    reviews: 156,
    badge: "Premium",
    inStock: true
  },
  {
    id: "dt-2",
    name: "Medjool Dates - Organic 1kg",
    price: 28.99,
    image: image_b84be59d6464a60d2eeb92a3d3cf386c97988819,
    category: "dates",
    description: "Large, succulent Medjool dates. Natural sweetness and soft texture, perfect for snacking.",
    rating: 4.9,
    reviews: 203,
    badge: "Bestseller",
    inStock: true
  },
  {
    id: "dt-3",
    name: "Sukkari Dates - Golden Premium 750g",
    price: 31.99,
    image: image_b84be59d6464a60d2eeb92a3d3cf386c97988819,
    category: "dates",
    description: "Golden Sukkari dates with exceptional sweetness. Soft, caramel-like texture.",
    rating: 4.8,
    reviews: 98,
    inStock: true
  },
  {
    id: "dt-4",
    name: "Safawi Dates - Dark Delight 500g",
    price: 26.99,
    image: image_b84be59d6464a60d2eeb92a3d3cf386c97988819,
    category: "dates",
    description: "Dark Safawi dates from Madinah. Rich flavor with a slightly chewy texture.",
    rating: 4.7,
    reviews: 76,
    inStock: true
  }
];

const bundleProducts: Product[] = [
  {
    id: "bn-1",
    name: "Ramadan Blessing Bundle",
    price: 79.99,
    image: "https://images.unsplash.com/photo-1572358899655-f63ece97bfa5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtYWRpbmFoJTIwbW9zcXVlfGVufDF8fHx8MTc2NzkzMzEzOHww&ixlib=rb-4.1.0&q=80&w=1080",
    category: "bundle",
    description: "Complete Ramadan bundle with 5L Zamzam water and 500g Ajwa dates. Perfect for the blessed month.",
    rating: 5,
    reviews: 187,
    badge: "Save 15%",
    inStock: true
  },
  {
    id: "bn-2",
    name: "Family Essentials Bundle",
    price: 119.99,
    image: "https://images.unsplash.com/photo-1572358899655-f63ece97bfa5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtYWRpbmFoJTIwbW9zcXVlfGVufDF8fHx8MTc2NzkzMzEzOHww&ixlib=rb-4.1.0&q=80&w=1080",
    category: "bundle",
    description: "Family pack with 10L Zamzam water and 1kg premium dates assortment.",
    rating: 4.9,
    reviews: 134,
    badge: "Save 20%",
    inStock: true
  },
  {
    id: "bn-3",
    name: "Gift Box - Premium Selection",
    price: 89.99,
    image: "https://images.unsplash.com/photo-1572358899655-f63ece97bfa5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtYWRpbmFoJTIwbW9zcXVlfGVufDF8fHx8MTc2NzkzMzEzOHww&ixlib=rb-4.1.0&q=80&w=1080",
    category: "bundle",
    description: "Elegantly packaged gift box with Zamzam water and assorted premium dates. Perfect for gifting.",
    rating: 5,
    reviews: 92,
    badge: "Gift Ready",
    inStock: true
  },
  {
    id: "bn-4",
    name: "Monthly Subscription Box",
    price: 149.99,
    image: "https://images.unsplash.com/photo-1572358899655-f63ece97bfa5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtYWRpbmFoJTIwbW9zcXVlfGVufDF8fHx8MTc2NzkzMzEzOHww&ixlib=rb-4.1.0&q=80&w=1080",
    category: "bundle",
    description: "Monthly delivery of Zamzam water and rotating selection of premium dates.",
    rating: 4.8,
    reviews: 68,
    badge: "Subscription",
    inStock: true
  }
];

const allProducts = [...zamzamProducts, ...datesProducts, ...bundleProducts];

export default function App() {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [cartOpen, setCartOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [currentSection, setCurrentSection] = useState("home");

  // Load cart from localStorage on mount
  useEffect(() => {
    const savedCart = localStorage.getItem("zamzamshop-cart");
    if (savedCart) {
      setCartItems(JSON.parse(savedCart));
    }
  }, []);

  // Save cart to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem("zamzamshop-cart", JSON.stringify(cartItems));
  }, [cartItems]);

  const handleAddToCart = (product: Product) => {
    setCartItems((prev) => {
      const existing = prev.find((item) => item.id === product.id);
      if (existing) {
        toast.success(`Updated ${product.name} quantity in cart`);
        return prev.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      } else {
        toast.success(`Added ${product.name} to cart`);
        return [...prev, { ...product, quantity: 1 }];
      }
    });
  };

  const handleUpdateQuantity = (productId: string, quantity: number) => {
    setCartItems((prev) =>
      prev.map((item) =>
        item.id === productId ? { ...item, quantity } : item
      )
    );
  };

  const handleRemoveItem = (productId: string) => {
    const item = cartItems.find((i) => i.id === productId);
    if (item) {
      toast.error(`Removed ${item.name} from cart`);
    }
    setCartItems((prev) => prev.filter((item) => item.id !== productId));
  };

  const handleCheckout = () => {
    toast.info("Checkout functionality would integrate with a payment gateway like Stripe or PayPal", {
      duration: 4000
    });
  };

  const handleNavigate = (section: string) => {
    setCurrentSection(section);
    // Smooth scroll to section
    const element = document.getElementById(section);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const cartItemCount = cartItems.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <div className="min-h-screen bg-white">
      <Toaster position="top-center" richColors />
      
      <Header
        cartItemCount={cartItemCount}
        onCartClick={() => setCartOpen(true)}
        onNavigate={handleNavigate}
      />

      <main>
        {/* Hero Section */}
        <div id="home">
          <Hero onShopNow={() => handleNavigate("zamzam")} />
        </div>

        {/* Zamzam Water Products */}
        <div id="zamzam">
          <ProductGrid
            products={zamzamProducts}
            title="Premium Zamzam Water"
            subtitle="Blessed water from Mecca, delivered with care and authenticity"
            onAddToCart={handleAddToCart}
            onViewDetails={setSelectedProduct}
          />
        </div>

        {/* Dates Products */}
        <div id="dates" className="bg-[#fafaf8]">
          <ProductGrid
            products={datesProducts}
            title="Authentic Dates from Madinah"
            subtitle="Premium quality dates harvested from the blessed land of Madinah"
            onAddToCart={handleAddToCart}
            onViewDetails={setSelectedProduct}
          />
        </div>

        {/* Bundles */}
        <div id="bundles">
          <ProductGrid
            products={bundleProducts}
            title="Special Bundles & Offers"
            subtitle="Save more with our carefully curated bundles"
            onAddToCart={handleAddToCart}
            onViewDetails={setSelectedProduct}
          />
        </div>

        {/* Trust Section */}
        <div id="trust">
          <TrustSection />
        </div>

        {/* About Us Section */}
        <div id="about" className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center space-y-6">
              <h2 className="text-3xl md:text-4xl text-[#2D2D2D]">
                Our Story
              </h2>
              <div className="flex items-center justify-center space-x-2 mb-6">
                <div className="w-16 h-1 bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent"></div>
                <div className="w-2 h-2 bg-[#D4AF37] rounded-full"></div>
                <div className="w-16 h-1 bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent"></div>
              </div>
              <div className="relative rounded-2xl overflow-hidden mb-8">
                <img
                  src="https://images.unsplash.com/photo-1572358899655-f63ece97bfa5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtYWRpbmFoJTIwbW9zcXVlfGVufDF8fHx8MTc2NzkzMzEzOHww&ixlib=rb-4.1.0&q=80&w=1080"
                  alt="Madinah"
                  className="w-full h-96 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
              </div>
              <p className="text-lg text-[#6B5D4F] leading-relaxed">
                ZamZamshop.ca was founded with a mission to bring authentic Zamzam water and premium dates from the blessed lands of Mecca and Madinah directly to Canadian homes. We understand the spiritual significance and health benefits of these products, and we're committed to maintaining the highest standards of authenticity and quality.
              </p>
              <p className="text-lg text-[#6B5D4F] leading-relaxed">
                Every bottle of Zamzam water and every date we deliver is sourced directly from trusted suppliers in Saudi Arabia, ensuring you receive products that are genuine, fresh, and blessed. We take pride in serving our community with trust, transparency, and dedication.
              </p>
            </div>
          </div>
        </div>

        {/* Contact Section */}
        <div id="contact" className="py-16 bg-gradient-to-b from-[#fafaf8] to-white">
          <div className="container mx-auto px-4">
            <div className="max-w-2xl mx-auto text-center space-y-6">
              <h2 className="text-3xl md:text-4xl text-[#2D2D2D]">
                Get In Touch
              </h2>
              <div className="flex items-center justify-center space-x-2 mb-6">
                <div className="w-16 h-1 bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent"></div>
                <div className="w-2 h-2 bg-[#D4AF37] rounded-full"></div>
                <div className="w-16 h-1 bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent"></div>
              </div>
              <p className="text-lg text-[#8B7355]">
                Have questions? We're here to help! Reach out to us via WhatsApp, email, or phone.
              </p>
              <div className="grid md:grid-cols-3 gap-6 mt-8">
                <div className="p-6 bg-white rounded-xl border border-[#D4AF37]/20 hover:shadow-lg transition-shadow">
                  <div className="w-12 h-12 bg-gradient-to-br from-[#D4AF37] to-[#B8941E] rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <h4 className="mb-2 text-[#2D2D2D]">Email</h4>
                  <a href="mailto:info@zamzamshop.ca" className="text-sm text-[#D4AF37] hover:underline">
                    info@zamzamshop.ca
                  </a>
                </div>
                <div className="p-6 bg-white rounded-xl border border-[#D4AF37]/20 hover:shadow-lg transition-shadow">
                  <div className="w-12 h-12 bg-gradient-to-br from-[#D4AF37] to-[#B8941E] rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <h4 className="mb-2 text-[#2D2D2D]">Phone</h4>
                  <a href="tel:+16471234567" className="text-sm text-[#D4AF37] hover:underline">
                    +1 (647) 123-4567
                  </a>
                </div>
                <div className="p-6 bg-white rounded-xl border border-[#D4AF37]/20 hover:shadow-lg transition-shadow">
                  <div className="w-12 h-12 bg-gradient-to-br from-[#25D366] to-[#128C7E] rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="h-6 w-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.890-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                    </svg>
                  </div>
                  <h4 className="mb-2 text-[#2D2D2D]">WhatsApp</h4>
                  <a href="https://wa.me/16471234567" target="_blank" rel="noopener noreferrer" className="text-sm text-[#25D366] hover:underline">
                    Chat with us
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
      <WhatsAppButton />

      {/* Shopping Cart Sheet */}
      <ShoppingCartSheet
        open={cartOpen}
        onClose={() => setCartOpen(false)}
        cartItems={cartItems}
        onUpdateQuantity={handleUpdateQuantity}
        onRemoveItem={handleRemoveItem}
        onCheckout={handleCheckout}
      />

      {/* Product Detail Modal */}
      <ProductDetailModal
        product={selectedProduct}
        open={!!selectedProduct}
        onClose={() => setSelectedProduct(null)}
        onAddToCart={handleAddToCart}
      />
    </div>
  );
}
