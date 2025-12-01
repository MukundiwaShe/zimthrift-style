import Header from "@/components/Header";
import Hero from "@/components/Hero";
import CategoryCard from "@/components/CategoryCard";
import ProductCard from "@/components/ProductCard";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { TrendingUp, Shield, Truck } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

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
      <Hero />
      <Header />

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

      {/* FAQ Section */}
      <section className="container mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-foreground mb-4">Frequently Asked Questions</h2>
          <p className="text-muted-foreground">Everything you need to know about Bhero Store</p>
        </div>
        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="item-1">
              <AccordionTrigger className="text-left">Are the clothes original and legit?</AccordionTrigger>
              <AccordionContent>
                Yes! All our clothes are 100% original and authentic. We source our items from trusted suppliers and each piece is carefully inspected for quality and authenticity before being listed. We do not sell counterfeit or fake items.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
              <AccordionTrigger className="text-left">What condition are the clothes in?</AccordionTrigger>
              <AccordionContent>
                All items are thoroughly cleaned, washed, and ironed before sale. We categorize items as "Like New" (minimal wear, excellent condition), "Gently Used" (light signs of wear but still great), or "Good" (visible wear but fully functional). Each listing clearly states the condition.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3">
              <AccordionTrigger className="text-left">How do I pay for my order?</AccordionTrigger>
              <AccordionContent>
                We accept EcoCash, bank transfers, and cash on delivery for Harare customers. Once you place your order, we'll send you payment details via WhatsApp. Payment is required before delivery for EcoCash and bank transfers.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-4">
              <AccordionTrigger className="text-left">How long does delivery take?</AccordionTrigger>
              <AccordionContent>
                Harare deliveries are usually done within 24-48 hours. For other cities like Bulawayo, Mutare, and Gweru, delivery takes 2-5 business days depending on your location. We use trusted courier services to ensure your items arrive safely.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-5">
              <AccordionTrigger className="text-left">Can I return or exchange items?</AccordionTrigger>
              <AccordionContent>
                We accept returns within 3 days of delivery if the item doesn't match the description or has defects we didn't disclose. Items must be unworn and in the same condition you received them. Contact us on WhatsApp to arrange a return or exchange.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-6">
              <AccordionTrigger className="text-left">Why buy from Bhero Store instead of Mbare?</AccordionTrigger>
              <AccordionContent>
                Shopping with us saves you time and hassle! No more spending hours digging through piles at Mupedzanhamo. We hand-pick quality items, wash and iron them, and deliver straight to you. Same great prices ($1-$15), but with convenience and quality assurance.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
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
