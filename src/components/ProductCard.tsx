import { Button } from "@/components/ui/button";
import { ShoppingCart } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

interface ProductCardProps {
  image: string;
  name: string;
  category: string;
  price: string;
  badge?: string;
}

const ProductCard = ({ image, name, category, price, badge }: ProductCardProps) => {
  return (
    <div className="group relative bg-card-gradient rounded-2xl border border-border overflow-hidden shadow-card hover:shadow-card-hover transition-all duration-500 hover:-translate-y-2">
      {badge && (
        <div className="absolute top-4 left-4 z-10 px-3 py-1 bg-primary rounded-full text-xs font-semibold text-primary-foreground">
          {badge}
        </div>
      )}

      {/* Image Container */}
      <div className="relative h-64 overflow-hidden bg-secondary/50">
        <Image
          src={image}
          alt={name}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-card to-transparent opacity-60" />
      </div>

      {/* Content */}
      <div className="p-6 space-y-4">
        <div>
          <p className="text-sm text-primary font-medium mb-1">{category}</p>
          <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors">
            {name}
          </h3>
        </div>

        <div className="flex items-center justify-between">
          <span className="text-2xl font-bold text-foreground">{price}</span>
          <Button size="sm" className="gap-2">
            <ShoppingCart className="w-4 h-4" />
            Add to Cart
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
