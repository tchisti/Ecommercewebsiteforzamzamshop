import { ShoppingCart, Star } from "lucide-react";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";

export interface Product {
  id: string;
  name: string;
  price: number;
  image: string;
  category: "zamzam" | "dates" | "bundle";
  description: string;
  rating: number;
  reviews: number;
  badge?: string;
  inStock: boolean;
}

interface ProductCardProps {
  product: Product;
  onAddToCart: (product: Product) => void;
  onViewDetails: (product: Product) => void;
}

export function ProductCard({ product, onAddToCart, onViewDetails }: ProductCardProps) {
  return (
    <div className="group bg-white rounded-xl border border-[#D4AF37]/20 overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
      {/* Image */}
      <div className="relative overflow-hidden bg-[#F5F5DC]/30">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
        />
        {product.badge && (
          <Badge className="absolute top-4 left-4 bg-[#D4AF37] text-white border-none">
            {product.badge}
          </Badge>
        )}
        {!product.inStock && (
          <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
            <span className="bg-white px-4 py-2 rounded-lg text-sm">Out of Stock</span>
          </div>
        )}
      </div>

      {/* Content */}
      <div className="p-6 space-y-4">
        {/* Rating */}
        <div className="flex items-center space-x-1">
          {[...Array(5)].map((_, i) => (
            <Star
              key={i}
              className={`h-4 w-4 ${
                i < Math.floor(product.rating)
                  ? "fill-[#D4AF37] text-[#D4AF37]"
                  : "text-gray-300"
              }`}
            />
          ))}
          <span className="text-sm text-[#6B5D4F] ml-2">({product.reviews})</span>
        </div>

        {/* Name */}
        <h3 className="text-lg text-[#2D2D2D] line-clamp-2 min-h-[3.5rem]">
          {product.name}
        </h3>

        {/* Description */}
        <p className="text-sm text-[#8B7355] line-clamp-2">{product.description}</p>

        {/* Price & Actions */}
        <div className="flex items-center justify-between pt-4 border-t border-[#D4AF37]/20">
          <div>
            <span className="text-2xl text-[#D4AF37]">${product.price.toFixed(2)}</span>
          </div>
          <div className="flex space-x-2">
            <Button
              variant="outline"
              size="sm"
              onClick={() => onViewDetails(product)}
              className="border-[#D4AF37] text-[#8B7355] hover:bg-[#F5F5DC]"
            >
              Details
            </Button>
            <Button
              size="sm"
              onClick={() => onAddToCart(product)}
              disabled={!product.inStock}
              className="bg-gradient-to-r from-[#D4AF37] to-[#B8941E] hover:from-[#B8941E] hover:to-[#D4AF37] text-white"
            >
              <ShoppingCart className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
