import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Sparkles, Loader2, ShoppingCart } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { useCart } from "@/hooks/useCart";
import Model3D from "./Model3D";
import { products } from "@/data/products";

const StyleAssistant = () => {
  const [open, setOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [size, setSize] = useState("");
  const [bodyType, setBodyType] = useState("");
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<{ 
    stylingAdvice: string; 
    imageUrl: string | null;
    matchingProducts: any[];
  } | null>(null);
  const { toast } = useToast();
  const { addToCart } = useCart();

  const handleGetStyling = async () => {
    if (!searchQuery || !size || !bodyType) {
      toast({
        title: "Missing information",
        description: "Please fill in all fields to get styling suggestions.",
        variant: "destructive",
      });
      return;
    }

    setLoading(true);
    setResult(null);

    try {
      // Find matching products in stock
      const matchingProducts = products.filter(product => 
        product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        product.category.toLowerCase().includes(searchQuery.toLowerCase())
      ).slice(0, 3);

      const response = await fetch(`${import.meta.env.VITE_SUPABASE_URL}/functions/v1/style-assistant`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${import.meta.env.VITE_SUPABASE_PUBLISHABLE_KEY}`,
        },
        body: JSON.stringify({ 
          searchQuery, 
          size, 
          bodyType,
          availableProducts: matchingProducts.map(p => ({ name: p.name, price: p.price, size: p.size }))
        }),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || "Failed to get styling suggestions");
      }

      const data = await response.json();
      setResult({ ...data, matchingProducts });
    } catch (error) {
      console.error("Error:", error);
      toast({
        title: "Error",
        description: error instanceof Error ? error.message : "Failed to get styling suggestions",
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };

  const handleAddToCart = async (productId: string, productName: string) => {
    await addToCart(productId);
    toast({
      title: "Added to cart",
      description: `${productName} has been added to your cart`,
    });
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button variant="outline" className="gap-2">
          <Sparkles className="h-4 w-4" />
          AI Styling Assistant
        </Button>
      </DialogTrigger>
      <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle>AI Styling Assistant</DialogTitle>
          <DialogDescription>
            Tell us what you're looking for and we'll show you how to style it!
          </DialogDescription>
        </DialogHeader>

        <div className="space-y-4">
          <div>
            <Label htmlFor="search">What are you looking for?</Label>
            <Input
              id="search"
              placeholder="e.g., formal shirt, baggy jeans, floral dress"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>

          <div>
            <Label htmlFor="size">Your Size</Label>
            <Select value={size} onValueChange={setSize}>
              <SelectTrigger id="size">
                <SelectValue placeholder="Select your size" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="XS">XS</SelectItem>
                <SelectItem value="S">S</SelectItem>
                <SelectItem value="M">M</SelectItem>
                <SelectItem value="L">L</SelectItem>
                <SelectItem value="XL">XL</SelectItem>
                <SelectItem value="XXL">XXL</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div>
            <Label htmlFor="bodyType">Body Type</Label>
            <Select value={bodyType} onValueChange={setBodyType}>
              <SelectTrigger id="bodyType">
                <SelectValue placeholder="Select body type" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="petite">Petite</SelectItem>
                <SelectItem value="average">Average</SelectItem>
                <SelectItem value="athletic">Athletic</SelectItem>
                <SelectItem value="curvy">Curvy</SelectItem>
                <SelectItem value="plus">Plus Size</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <Button onClick={handleGetStyling} disabled={loading} className="w-full">
            {loading ? (
              <>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                Getting styling suggestions...
              </>
            ) : (
              <>
                <Sparkles className="mr-2 h-4 w-4" />
                Get Styling Suggestions
              </>
            )}
          </Button>

          {result && (
            <div className="space-y-6 pt-4 border-t">
              {/* 3D Model Visualization */}
              <div>
                <h4 className="font-semibold text-lg mb-3">3D Preview</h4>
                <Model3D bodyType={bodyType} />
              </div>

              {/* AI Generated Image */}
              {result.imageUrl && (
                <div>
                  <h4 className="font-semibold text-lg mb-3">Style Inspiration</h4>
                  <div className="rounded-lg overflow-hidden border">
                    <img
                      src={result.imageUrl}
                      alt="Styling suggestion"
                      className="w-full h-auto"
                    />
                  </div>
                </div>
              )}

              {/* Styling Advice */}
              <div className="prose prose-sm dark:prose-invert max-w-none">
                <h4 className="font-semibold text-lg mb-2">Styling Suggestions:</h4>
                <p className="text-muted-foreground whitespace-pre-line">{result.stylingAdvice}</p>
              </div>

              {/* Matching Products */}
              {result.matchingProducts && result.matchingProducts.length > 0 && (
                <div>
                  <h4 className="font-semibold text-lg mb-3">Available in Stock:</h4>
                  <div className="grid gap-3">
                    {result.matchingProducts.map((product) => (
                      <div 
                        key={product.id} 
                        className="flex items-center gap-3 p-3 border rounded-lg hover:bg-muted/50 transition-colors"
                      >
                        <img 
                          src={product.image} 
                          alt={product.name}
                          className="w-16 h-16 object-cover rounded"
                        />
                        <div className="flex-1">
                          <p className="font-medium text-sm">{product.name}</p>
                          <p className="text-xs text-muted-foreground">Size: {product.size}</p>
                          <p className="text-sm font-bold text-primary">${product.price}</p>
                        </div>
                        <Button
                          size="sm"
                          onClick={() => handleAddToCart(product.id, product.name)}
                          className="gap-2"
                        >
                          <ShoppingCart className="h-4 w-4" />
                          Add
                        </Button>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default StyleAssistant;