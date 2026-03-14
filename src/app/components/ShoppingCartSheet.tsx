import { Sheet, SheetContent, SheetHeader, SheetTitle } from "./ui/sheet";
import { Button } from "./ui/button";
import { Minus, Plus, Trash2, ShoppingBag } from "lucide-react";
import { Product } from "./ProductCard";

export interface CartItem extends Product {
  quantity: number;
}

interface ShoppingCartSheetProps {
  open: boolean;
  onClose: () => void;
  cartItems: CartItem[];
  onUpdateQuantity: (productId: string, quantity: number) => void;
  onRemoveItem: (productId: string) => void;
  onCheckout: () => void;
}

export function ShoppingCartSheet({
  open,
  onClose,
  cartItems,
  onUpdateQuantity,
  onRemoveItem,
  onCheckout
}: ShoppingCartSheetProps) {
  const subtotal = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const tax = subtotal * 0.13; // 13% HST for Canada
  const total = subtotal + tax;

  return (
    <Sheet open={open} onOpenChange={onClose}>
      <SheetContent className="w-full sm:max-w-lg flex flex-col">
        <SheetHeader>
          <SheetTitle className="flex items-center space-x-2">
            <ShoppingBag className="h-5 w-5 text-[#D4AF37]" />
            <span>Shopping Cart ({cartItems.length})</span>
          </SheetTitle>
        </SheetHeader>

        {cartItems.length === 0 ? (
          <div className="flex-1 flex flex-col items-center justify-center space-y-4">
            <div className="w-24 h-24 bg-[#F5F5DC] rounded-full flex items-center justify-center">
              <ShoppingBag className="h-12 w-12 text-[#D4AF37]" />
            </div>
            <p className="text-[#8B7355]">Your cart is empty</p>
            <Button
              onClick={onClose}
              className="bg-gradient-to-r from-[#D4AF37] to-[#B8941E] text-white"
            >
              Continue Shopping
            </Button>
          </div>
        ) : (
          <>
            {/* Cart Items */}
            <div className="flex-1 overflow-y-auto space-y-4 py-6">
              {cartItems.map((item) => (
                <div
                  key={item.id}
                  className="flex space-x-4 p-4 bg-[#F5F5DC]/30 rounded-lg border border-[#D4AF37]/20"
                >
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-20 h-20 object-cover rounded-lg"
                  />
                  <div className="flex-1 space-y-2">
                    <h4 className="text-sm text-[#2D2D2D] line-clamp-2">{item.name}</h4>
                    <p className="text-[#D4AF37]">${item.price.toFixed(2)}</p>
                    <div className="flex items-center space-x-2">
                      <Button
                        size="icon"
                        variant="outline"
                        className="h-8 w-8 border-[#D4AF37]/30"
                        onClick={() => onUpdateQuantity(item.id, Math.max(1, item.quantity - 1))}
                      >
                        <Minus className="h-3 w-3" />
                      </Button>
                      <span className="w-8 text-center text-sm">{item.quantity}</span>
                      <Button
                        size="icon"
                        variant="outline"
                        className="h-8 w-8 border-[#D4AF37]/30"
                        onClick={() => onUpdateQuantity(item.id, item.quantity + 1)}
                      >
                        <Plus className="h-3 w-3" />
                      </Button>
                      <Button
                        size="icon"
                        variant="ghost"
                        className="h-8 w-8 ml-auto text-red-500 hover:text-red-600 hover:bg-red-50"
                        onClick={() => onRemoveItem(item.id)}
                      >
                        <Trash2 className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Cart Summary */}
            <div className="border-t border-[#D4AF37]/20 pt-6 space-y-4">
              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span className="text-[#8B7355]">Subtotal</span>
                  <span className="text-[#2D2D2D]">${subtotal.toFixed(2)}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-[#8B7355]">Tax (HST 13%)</span>
                  <span className="text-[#2D2D2D]">${tax.toFixed(2)}</span>
                </div>
                <div className="flex justify-between text-lg pt-2 border-t border-[#D4AF37]/20">
                  <span className="text-[#2D2D2D]">Total</span>
                  <span className="text-[#D4AF37]">${total.toFixed(2)}</span>
                </div>
              </div>

              <Button
                onClick={onCheckout}
                className="w-full bg-gradient-to-r from-[#D4AF37] to-[#B8941E] hover:from-[#B8941E] hover:to-[#D4AF37] text-white py-6"
              >
                Proceed to Checkout
              </Button>

              <p className="text-xs text-center text-[#8B7355]">
                Secure checkout with encrypted payment processing
              </p>
            </div>
          </>
        )}
      </SheetContent>
    </Sheet>
  );
}
