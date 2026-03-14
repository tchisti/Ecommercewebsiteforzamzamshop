import { ProductCard, Product } from "./ProductCard";

interface ProductGridProps {
  products: Product[];
  title: string;
  subtitle?: string;
  onAddToCart: (product: Product) => void;
  onViewDetails: (product: Product) => void;
}

export function ProductGrid({ products, title, subtitle, onAddToCart, onViewDetails }: ProductGridProps) {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12 space-y-4">
          <h2 className="text-3xl md:text-4xl text-[#2D2D2D]">
            {title}
          </h2>
          {subtitle && (
            <p className="text-lg text-[#8B7355] max-w-2xl mx-auto">
              {subtitle}
            </p>
          )}
          <div className="flex items-center justify-center space-x-2">
            <div className="w-16 h-1 bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent"></div>
            <div className="w-2 h-2 bg-[#D4AF37] rounded-full"></div>
            <div className="w-16 h-1 bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent"></div>
          </div>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {products.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              onAddToCart={onAddToCart}
              onViewDetails={onViewDetails}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
