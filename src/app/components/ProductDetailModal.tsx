import { Dialog, DialogContent, DialogHeader, DialogTitle } from "./ui/dialog";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import { Star, ShoppingCart, Shield, Truck, Award } from "lucide-react";
import { Product } from "./ProductCard";

interface ProductDetailModalProps {
  product: Product | null;
  open: boolean;
  onClose: () => void;
  onAddToCart: (product: Product) => void;
}

export function ProductDetailModal({ product, open, onClose, onAddToCart }: ProductDetailModalProps) {
  if (!product) return null;

  const benefits = [
    "100% Authentic and certified",
    "Sourced directly from Madinah",
    "Premium quality guaranteed",
    "Carefully packaged for freshness"
  ];

  return (
    <Dialog open={open} onOpenChange={onClose}>
      <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-2xl text-[#2D2D2D]">{product.name}</DialogTitle>
        </DialogHeader>

        <div className="grid md:grid-cols-2 gap-8 mt-4">
          {/* Product Image */}
          <div className="space-y-4">
            <div className="relative rounded-xl overflow-hidden">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-96 object-cover"
              />
              {product.badge && (
                <Badge className="absolute top-4 left-4 bg-[#D4AF37] text-white border-none">
                  {product.badge}
                </Badge>
              )}
            </div>
            
            {/* Trust Badges */}
            <div className="grid grid-cols-3 gap-4">
              <div className="flex flex-col items-center p-4 bg-[#F5F5DC]/50 rounded-lg">
                <Shield className="h-8 w-8 text-[#D4AF37] mb-2" />
                <p className="text-xs text-center text-[#8B7355]">Halal Certified</p>
              </div>
              <div className="flex flex-col items-center p-4 bg-[#F5F5DC]/50 rounded-lg">
                <Truck className="h-8 w-8 text-[#D4AF37] mb-2" />
                <p className="text-xs text-center text-[#8B7355]">Fast Delivery</p>
              </div>
              <div className="flex flex-col items-center p-4 bg-[#F5F5DC]/50 rounded-lg">
                <Award className="h-8 w-8 text-[#D4AF37] mb-2" />
                <p className="text-xs text-center text-[#8B7355]">Premium Quality</p>
              </div>
            </div>
          </div>

          {/* Product Details */}
          <div className="space-y-6">
            {/* Rating */}
            <div className="flex items-center space-x-2">
              <div className="flex items-center space-x-1">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`h-5 w-5 ${
                      i < Math.floor(product.rating)
                        ? "fill-[#D4AF37] text-[#D4AF37]"
                        : "text-gray-300"
                    }`}
                  />
                ))}
              </div>
              <span className="text-sm text-[#6B5D4F]">
                {product.rating} ({product.reviews} reviews)
              </span>
            </div>

            {/* Price */}
            <div>
              <span className="text-4xl text-[#D4AF37]">${product.price.toFixed(2)}</span>
              <p className="text-sm text-[#8B7355] mt-1">Price includes all taxes</p>
            </div>

            {/* Description */}
            <div>
              <h3 className="text-lg mb-2 text-[#2D2D2D]">Description</h3>
              <p className="text-[#6B5D4F] leading-relaxed">{product.description}</p>
            </div>

            {/* Benefits */}
            <div>
              <h3 className="text-lg mb-3 text-[#2D2D2D]">Health Benefits & Features</h3>
              <ul className="space-y-2">
                {benefits.map((benefit, index) => (
                  <li key={index} className="flex items-start space-x-2">
                    <div className="w-1.5 h-1.5 bg-[#D4AF37] rounded-full mt-2"></div>
                    <span className="text-sm text-[#6B5D4F]">{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Origin Story */}
            <div className="bg-gradient-to-br from-[#F5F5DC] to-white p-6 rounded-xl border border-[#D4AF37]/20">
              <h3 className="text-lg mb-2 text-[#2D2D2D]">Origin</h3>
              <p className="text-sm text-[#6B5D4F] leading-relaxed">
                {product.category === "zamzam" 
                  ? "Sacred water from the blessed well in Mecca, known for its spiritual significance and purity. Each bottle is carefully filled and sealed to preserve its authenticity."
                  : "Premium dates harvested from the date palms of Madinah, following traditional methods passed down through generations. These dates are known for their exceptional sweetness and nutritional value."}
              </p>
            </div>

            {/* Stock Status & Actions */}
            <div className="space-y-3 pt-4 border-t border-[#D4AF37]/20">
              {product.inStock ? (
                <>
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                    <span className="text-sm text-green-600">In Stock - Ships within 1-2 business days</span>
                  </div>
                  <Button
                    onClick={() => {
                      onAddToCart(product);
                      onClose();
                    }}
                    className="w-full bg-gradient-to-r from-[#D4AF37] to-[#B8941E] hover:from-[#B8941E] hover:to-[#D4AF37] text-white py-6"
                  >
                    <ShoppingCart className="mr-2 h-5 w-5" />
                    Add to Cart
                  </Button>
                </>
              ) : (
                <>
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                    <span className="text-sm text-red-600">Currently Out of Stock</span>
                  </div>
                  <Button disabled className="w-full py-6">
                    Out of Stock
                  </Button>
                </>
              )}
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
