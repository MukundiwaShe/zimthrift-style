import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import heroImage from "@/assets/hero-thrift-store.jpg";

const Hero = () => {
  return (
    <section className="relative h-[600px] flex items-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Stylish preloved clothing collection"
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-foreground/80 to-foreground/40" />
      </div>

      {/* Content */}
      <div className="container relative mx-auto px-4">
        <div className="max-w-2xl space-y-6">
          <h1 className="text-5xl font-bold leading-tight text-background sm:text-6xl">
            Thrift smart, look fab
          </h1>
          <p className="text-xl text-background/90">
            No need to go to Mbare Mupedzanhamo and spend all day looking for cheap, affordable clothing. We've got you covered! Quality preloved fashion from just $1 USD.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link to="/products">
              <Button variant="hero" size="lg">
                Shop Now
              </Button>
            </Link>
            <Link to="/products?sort=new">
              <Button variant="outline" size="lg" className="bg-background/10 border-background text-background hover:bg-background hover:text-foreground">
                New Arrivals
              </Button>
            </Link>
          </div>
          <div className="flex items-center gap-8 pt-4">
            <div className="flex flex-col">
              <span className="text-3xl font-bold text-background">500+</span>
              <span className="text-sm text-background/80">Items Available</span>
            </div>
            <div className="flex flex-col">
              <span className="text-3xl font-bold text-background">$1+</span>
              <span className="text-sm text-background/80">Starting Price</span>
            </div>
            <div className="flex flex-col">
              <span className="text-3xl font-bold text-background">100%</span>
              <span className="text-sm text-background/80">Quality Checked</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
