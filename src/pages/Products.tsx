import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ProductCard from "@/components/ProductCard";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Slider } from "@/components/ui/slider";

import productJacket from "@/assets/product-jacket.jpg";
import productJeans from "@/assets/product-jeans.jpg";
import productDress from "@/assets/product-dress.jpg";
import productShoes from "@/assets/product-shoes.jpg";

const Products = () => {
  const [priceRange, setPriceRange] = useState([1, 50]);

  // Mock products data
  const products = [
    {
      id: "1",
      name: "Vintage Denim Jacket",
      price: 15,
      image: productJacket,
      condition: "Like New",
      size: "M",
      category: "jackets",
    },
    {
      id: "2",
      name: "Classic Blue Jeans",
      price: 8,
      image: productJeans,
      condition: "Gently Used",
      size: "32",
      category: "jeans",
    },
    {
      id: "3",
      name: "Summer Coral Dress",
      price: 12,
      image: productDress,
      condition: "Like New",
      size: "S",
      category: "dresses",
    },
    {
      id: "4",
      name: "White Sneakers",
      price: 10,
      image: productShoes,
      condition: "Gently Used",
      size: "8",
      category: "shoes",
    },
    {
      id: "5",
      name: "Leather Jacket",
      price: 25,
      image: productJacket,
      condition: "Like New",
      size: "L",
      category: "jackets",
    },
    {
      id: "6",
      name: "Black Jeans",
      price: 10,
      image: productJeans,
      condition: "Good",
      size: "30",
      category: "jeans",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <main className="container mx-auto px-4 py-8">
        {/* Page Header */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-foreground mb-2">All Products</h1>
          <p className="text-muted-foreground">Browse our collection of quality preloved fashion</p>
        </div>

        <div className="grid gap-8 lg:grid-cols-4">
          {/* Filters Sidebar */}
          <aside className="space-y-6 lg:sticky lg:top-24 lg:h-fit">
            <div className="rounded-lg border border-border bg-card p-6 shadow-soft">
              <h2 className="text-lg font-semibold text-foreground mb-4">Filters</h2>

              {/* Category Filter */}
              <div className="mb-6">
                <h3 className="text-sm font-medium text-foreground mb-3">Category</h3>
                <Select>
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
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="All Conditions" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Conditions</SelectItem>
                    <SelectItem value="new">Like New</SelectItem>
                    <SelectItem value="good">Gently Used</SelectItem>
                    <SelectItem value="fair">Good</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              {/* Size Filter */}
              <div className="mb-6">
                <h3 className="text-sm font-medium text-foreground mb-3">Size</h3>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="All Sizes" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Sizes</SelectItem>
                    <SelectItem value="xs">XS</SelectItem>
                    <SelectItem value="s">S</SelectItem>
                    <SelectItem value="m">M</SelectItem>
                    <SelectItem value="l">L</SelectItem>
                    <SelectItem value="xl">XL</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <Button className="w-full" variant="outline">
                Reset Filters
              </Button>
            </div>
          </aside>

          {/* Products Grid */}
          <div className="lg:col-span-3">
            <div className="mb-6 flex items-center justify-between">
              <p className="text-sm text-muted-foreground">
                Showing {products.length} products
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

            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {products.map((product) => (
                <ProductCard key={product.id} {...product} />
              ))}
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Products;
