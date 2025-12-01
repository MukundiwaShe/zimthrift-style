import Header from "@/components/Header";
import Hero from "@/components/Hero";
import CategoryCard from "@/components/CategoryCard";
import ProductCard from "@/components/ProductCard";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { TrendingUp, Shield, Truck } from "lucide-react";

import productJacket from "@/assets/product-jacket.jpg";
import productJeans from "@/assets/product-jeans.jpg";
import productDress from "@/assets/product-dress.jpg";
import productShoes from "@/assets/product-shoes.jpg";

const Index = () => {
  // Mock data for featured products
  const featuredProducts = [
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
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <Hero />

      {/* Categories Section */}
      <section className="container mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-foreground mb-4">Shop by Category</h2>
          <p className="text-muted-foreground">Find your perfect preloved piece</p>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          <CategoryCard
            title="Women"
            itemCount={230}
            image={productDress}
            link="/products?category=women"
          />
          <CategoryCard
            title="Men"
            itemCount={180}
            image={productJacket}
            link="/products?category=men"
          />
          <CategoryCard
            title="Kids"
            itemCount={95}
            image={productJeans}
            link="/products?category=kids"
          />
          <CategoryCard
            title="Shoes"
            itemCount={120}
            image={productShoes}
            link="/products?category=shoes"
          />
        </div>
      </section>

      {/* Featured Products */}
      <section className="container mx-auto px-4 py-16 bg-muted/20">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-foreground mb-2">Trending Now</h2>
          <p className="text-muted-foreground mb-4">Hot picks this week</p>
          <Link to="/products">
            <Button variant="outline">View All</Button>
          </Link>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {featuredProducts.map((product) => (
            <ProductCard key={product.id} {...product} />
          ))}
        </div>
      </section>

      {/* Trust Badges */}
      <section className="container mx-auto px-4 py-16">
        <div className="grid gap-8 md:grid-cols-3">
          <div className="flex flex-col items-center text-center space-y-4">
            <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
              <Shield className="h-8 w-8 text-primary" />
            </div>
            <h3 className="text-xl font-semibold text-foreground">Secure Payment</h3>
            <p className="text-sm text-muted-foreground">
              Your payment information is safe with EcoCash, bank transfer, or card
            </p>
          </div>
          <div className="flex flex-col items-center text-center space-y-4">
            <div className="flex h-16 w-16 items-center justify-center rounded-full bg-secondary/10">
              <Truck className="h-8 w-8 text-secondary" />
            </div>
            <h3 className="text-xl font-semibold text-foreground">Quality Delivery</h3>
            <p className="text-sm text-muted-foreground">
              Items are washed, ironed, and delivered to your pickup point
            </p>
          </div>
          <div className="flex flex-col items-center text-center space-y-4">
            <div className="flex h-16 w-16 items-center justify-center rounded-full bg-accent/10">
              <TrendingUp className="h-8 w-8 text-accent" />
            </div>
            <h3 className="text-xl font-semibold text-foreground">Quality Checked</h3>
            <p className="text-sm text-muted-foreground">
              Every item is inspected to ensure you get the best quality
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-primary to-accent py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-primary-foreground mb-4">
            Start Shopping Today
          </h2>
          <p className="text-lg text-primary-foreground/90 mb-8 max-w-2xl mx-auto">
            Join thousands of happy customers finding quality preloved fashion at unbeatable prices
          </p>
          <Link to="/products">
            <Button size="lg" className="shadow-strong bg-white text-primary hover:bg-white/90">
              Browse All Items
            </Button>
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
