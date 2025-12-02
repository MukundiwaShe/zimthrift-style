import { useState, useMemo, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ProductCard from "@/components/ProductCard";
import StyleAssistant from "@/components/StyleAssistant";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Slider } from "@/components/ui/slider";
import { Skeleton } from "@/components/ui/skeleton";
import { Card, CardContent, CardFooter } from "@/components/ui/card";

interface Product {
  id: string;
  name: string;
  price: number;
  image: string;
  condition: string;
  size: string;
  category: string;
}

const Products = () => {
  const [searchParams] = useSearchParams();
  const searchQuery = searchParams.get("search") || "";
  const categoryParam = searchParams.get("category") || "";
  const [priceRange, setPriceRange] = useState([1, 50]);
  const [selectedCategory, setSelectedCategory] = useState(categoryParam || "all");
  const [selectedCondition, setSelectedCondition] = useState("all");
  const [selectedSize, setSelectedSize] = useState("all");
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const { data, error } = await supabase
          .from("products")
          .select("*");

        if (error) throw error;
        setProducts(data || []);
      } catch (error) {
        console.error("Error fetching products:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  useEffect(() => {
    if (categoryParam) {
      setSelectedCategory(categoryParam);
    }
  }, [categoryParam]);


  const filteredProducts = useMemo(() => {
    let filtered = products;
    
    // Filter by category
    if (selectedCategory && selectedCategory !== "all") {
      filtered = filtered.filter((product) =>
        product.category.toLowerCase() === selectedCategory.toLowerCase()
      );
    }
    
    // Filter by search query
    if (searchQuery) {
      filtered = filtered.filter((product) =>
        product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        product.category.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }
    
    // Filter by price range
    filtered = filtered.filter((product) =>
      product.price >= priceRange[0] && product.price <= priceRange[1]
    );
    
    // Filter by condition
    if (selectedCondition && selectedCondition !== "all") {
      filtered = filtered.filter((product) =>
        product.condition.toLowerCase() === selectedCondition.toLowerCase()
      );
    }
    
    // Filter by size
    if (selectedSize && selectedSize !== "all") {
      filtered = filtered.filter((product) =>
        product.size.toLowerCase() === selectedSize.toLowerCase()
      );
    }
    
    return filtered;
  }, [searchQuery, selectedCategory, products, priceRange, selectedCondition, selectedSize]);

  const handleResetFilters = () => {
    setSelectedCategory("all");
    setSelectedCondition("all");
    setSelectedSize("all");
    setPriceRange([1, 50]);
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <main className="container mx-auto px-4 py-8">
        {/* Page Header */}
        <div className="mb-8 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <div>
            <h1 className="text-4xl font-bold text-foreground mb-2">
              {searchQuery 
                ? `Search Results for "${searchQuery}"` 
                : selectedCategory && selectedCategory !== "all"
                  ? `${selectedCategory.charAt(0).toUpperCase() + selectedCategory.slice(1)}'s Fashion`
                  : "All Products"
              }
            </h1>
            <p className="text-muted-foreground">
              {searchQuery || selectedCategory !== "all"
                ? `Found ${filteredProducts.length} items`
                : "Browse our collection of quality preloved fashion items"
              }
            </p>
          </div>
          <StyleAssistant />
        </div>

        <div className="grid gap-8 lg:grid-cols-4">
          {/* Filters Sidebar */}
          <aside className="space-y-6 lg:sticky lg:top-24 lg:h-fit">
            <div className="rounded-lg border border-border bg-card p-6 shadow-soft">
              <h2 className="text-lg font-semibold text-foreground mb-4">Filters</h2>

              {/* Category Filter */}
              <div className="mb-6">
                <h3 className="text-sm font-medium text-foreground mb-3">Category</h3>
                <Select value={selectedCategory} onValueChange={setSelectedCategory}>
                  <SelectTrigger>
                    <SelectValue placeholder="All Categories" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Categories</SelectItem>
                    <SelectItem value="women">Women</SelectItem>
                    <SelectItem value="men">Men</SelectItem>
                    <SelectItem value="kids">Kids</SelectItem>
                    <SelectItem value="shoes">Shoes</SelectItem>
                    <SelectItem value="accessories">Accessories</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              {/* Price Range */}
              <div className="mb-6">
                <h3 className="text-sm font-medium text-foreground mb-3">
                  Price Range: ${priceRange[0]} - ${priceRange[1]}
                </h3>
                <Slider
                  min={1}
                  max={50}
                  step={1}
                  value={priceRange}
                  onValueChange={setPriceRange}
                  className="mb-2"
                />
              </div>

              {/* Condition Filter */}
              <div className="mb-6">
                <h3 className="text-sm font-medium text-foreground mb-3">Condition</h3>
                <Select value={selectedCondition} onValueChange={setSelectedCondition}>
                  <SelectTrigger>
                    <SelectValue placeholder="All Conditions" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Conditions</SelectItem>
                    <SelectItem value="Like New">Like New</SelectItem>
                    <SelectItem value="Gently Used">Gently Used</SelectItem>
                    <SelectItem value="Good">Good</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              {/* Size Filter */}
              <div className="mb-6">
                <h3 className="text-sm font-medium text-foreground mb-3">Size</h3>
                <Select value={selectedSize} onValueChange={setSelectedSize}>
                  <SelectTrigger>
                    <SelectValue placeholder="All Sizes" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Sizes</SelectItem>
                    <SelectItem value="XS">XS</SelectItem>
                    <SelectItem value="S">S</SelectItem>
                    <SelectItem value="M">M</SelectItem>
                    <SelectItem value="L">L</SelectItem>
                    <SelectItem value="XL">XL</SelectItem>
                    <SelectItem value="7">7</SelectItem>
                    <SelectItem value="7.5">7.5</SelectItem>
                    <SelectItem value="8">8</SelectItem>
                    <SelectItem value="8.5">8.5</SelectItem>
                    <SelectItem value="9">9</SelectItem>
                    <SelectItem value="9.5">9.5</SelectItem>
                    <SelectItem value="10">10</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <Button className="w-full" variant="outline" onClick={handleResetFilters}>
                Reset Filters
              </Button>
            </div>
          </aside>

          {/* Products Grid */}
          <div className="lg:col-span-3">
            <div className="mb-6 flex items-center justify-between">
              <p className="text-sm text-muted-foreground">
                Showing {filteredProducts.length} products
              </p>
              <Select defaultValue="featured">
                <SelectTrigger className="w-[180px]">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="featured">Featured</SelectItem>
                  <SelectItem value="price-low">Price: Low to High</SelectItem>
                  <SelectItem value="price-high">Price: High to Low</SelectItem>
                  <SelectItem value="newest">Newest First</SelectItem>
                </SelectContent>
              </Select>
            </div>

            {loading ? (
              <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {Array.from({ length: 6 }).map((_, index) => (
                  <Card key={index} className="overflow-hidden">
                    <Skeleton className="h-64 w-full rounded-none" />
                    <CardContent className="p-4 space-y-3">
                      <Skeleton className="h-5 w-3/4" />
                      <Skeleton className="h-4 w-1/2" />
                      <div className="flex gap-2">
                        <Skeleton className="h-5 w-16" />
                        <Skeleton className="h-5 w-12" />
                      </div>
                    </CardContent>
                    <CardFooter className="p-4 pt-0 flex gap-2">
                      <Skeleton className="h-10 flex-1" />
                      <Skeleton className="h-10 w-10" />
                    </CardFooter>
                  </Card>
                ))}
              </div>
            ) : filteredProducts.length === 0 ? (
              <div className="text-center py-12">
                <p className="text-muted-foreground">No products found matching your search.</p>
              </div>
            ) : (
              <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {filteredProducts.map((product) => (
                  <ProductCard key={product.id} {...product} />
                ))}
              </div>
            )}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Products;
