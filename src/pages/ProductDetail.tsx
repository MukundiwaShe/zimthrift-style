import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ShoppingCart, Heart, ArrowLeft } from "lucide-react";
import { useCart } from "@/hooks/useCart";
import { useToast } from "@/hooks/use-toast";

interface Product {
  id: string;
  name: string;
  price: number;
  image: string;
  condition: string;
  size: string;
  category: string;
  description: string | null;
}

const ProductDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { addToCart, loading: cartLoading } = useCart();
  const { toast } = useToast();
  const [product, setProduct] = useState<Product | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const { data, error } = await supabase
          .from("products")
          .select("*")
          .eq("id", id)
          .single();

        if (error) throw error;
        setProduct(data);
      } catch (error) {
        console.error("Error fetching product:", error);
        toast({
          title: "Error",
          description: "Failed to load product details",
          variant: "destructive",
        });
        navigate("/products");
      } finally {
        setLoading(false);
      }
    };

    if (id) {
      fetchProduct();
    }
  }, [id, navigate, toast]);

  const handleAddToCart = async () => {
    if (product) {
      await addToCart(product.id);
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-1 flex items-center justify-center">
          <p className="text-muted-foreground">Loading product...</p>
        </main>
        <Footer />
      </div>
    );
  }

  if (!product) {
    return (
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-1 flex items-center justify-center">
          <p className="text-muted-foreground">Product not found</p>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 container mx-auto px-4 py-8">
        <Button
          variant="ghost"
          onClick={() => navigate(-1)}
          className="mb-6"
        >
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back
        </Button>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="relative">
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-auto rounded-lg border"
            />
            <Badge className="absolute top-4 left-4 bg-secondary text-secondary-foreground">
              {product.condition}
            </Badge>
          </div>

          <div className="flex flex-col gap-6">
            <div>
              <h1 className="text-3xl font-bold mb-2">{product.name}</h1>
              <p className="text-2xl font-bold text-primary">${product.price}</p>
            </div>

            <div className="space-y-2">
              <p className="text-muted-foreground">
                <span className="font-semibold text-foreground">Size:</span> {product.size}
              </p>
              <p className="text-muted-foreground">
                <span className="font-semibold text-foreground">Category:</span>{" "}
                {product.category.charAt(0).toUpperCase() + product.category.slice(1)}
              </p>
              <p className="text-muted-foreground">
                <span className="font-semibold text-foreground">Condition:</span> {product.condition}
              </p>
            </div>

            {product.description && (
              <div>
                <h3 className="font-semibold mb-2">Description</h3>
                <p className="text-muted-foreground">{product.description}</p>
              </div>
            )}

            <div className="flex gap-4 mt-auto">
              <Button
                className="flex-1"
                size="lg"
                onClick={handleAddToCart}
                disabled={cartLoading}
              >
                <ShoppingCart className="mr-2 h-5 w-5" />
                {cartLoading ? "Adding..." : "Add to Cart"}
              </Button>
              <Button size="lg" variant="outline">
                <Heart className="h-5 w-5" />
              </Button>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default ProductDetail;
