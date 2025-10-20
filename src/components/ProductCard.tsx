import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ShoppingCart, Heart } from "lucide-react";
import { Link } from "react-router-dom";

interface ProductCardProps {
  id: string;
  name: string;
  price: number;
  image: string;
  condition: string;
  size: string;
  category: string;
}

const ProductCard = ({ id, name, price, image, condition, size, category }: ProductCardProps) => {
  return (
    <Card className="group overflow-hidden border-border hover:shadow-medium transition-all">
      <Link to={`/product/${id}`}>
        <CardContent className="p-0">
          <div className="relative overflow-hidden">
            <img
              src={image}
              alt={name}
              className="h-64 w-full object-cover transition-transform duration-300 group-hover:scale-105"
            />
            <Button
              size="icon"
              variant="secondary"
              className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity"
              onClick={(e) => {
                e.preventDefault();
                // Add to wishlist logic
              }}
            >
              <Heart className="h-4 w-4" />
            </Button>
            <Badge className="absolute top-2 left-2 bg-secondary text-secondary-foreground">
              {condition}
            </Badge>
          </div>
        </CardContent>
      </Link>
      <CardFooter className="flex flex-col items-start gap-2 p-4">
        <div className="flex w-full items-start justify-between">
          <div className="flex-1">
            <Link to={`/product/${id}`}>
              <h3 className="font-semibold text-foreground hover:text-primary transition-colors line-clamp-1">
                {name}
              </h3>
            </Link>
            <p className="text-sm text-muted-foreground">Size: {size}</p>
          </div>
          <span className="text-lg font-bold text-primary">${price}</span>
        </div>
        <Button
          className="w-full"
          size="sm"
          onClick={() => {
            // Add to cart logic
          }}
        >
          <ShoppingCart className="mr-2 h-4 w-4" />
          Add to Cart
        </Button>
      </CardFooter>
    </Card>
  );
};

export default ProductCard;
