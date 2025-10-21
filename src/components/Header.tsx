import { ShoppingCart, User, Menu, Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { useState } from "react";
import SearchDialog from "./SearchDialog";

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-r from-primary to-accent">
              <span className="text-lg font-bold text-primary-foreground">BS</span>
            </div>
            <span className="hidden text-xl font-bold text-foreground sm:inline-block">
              Bhero Store
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6">
            <Link to="/products" className="text-sm font-medium text-foreground hover:text-primary transition-colors">
              Shop
            </Link>
            <Link to="/products?category=women" className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors">
              Women
            </Link>
            <Link to="/products?category=men" className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors">
              Men
            </Link>
            <Link to="/products?category=kids" className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors">
              Kids
            </Link>
            <Link to="/products?category=shoes" className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors">
              Shoes
            </Link>
          </nav>

          {/* Right Actions */}
          <div className="flex items-center space-x-2">
            <Button 
              variant="ghost" 
              size="icon" 
              className="hidden sm:flex"
              onClick={() => setSearchOpen(true)}
            >
              <Search className="h-5 w-5" />
            </Button>
            <Link to="/auth">
              <Button variant="ghost" size="icon">
                <User className="h-5 w-5" />
              </Button>
            </Link>
            <Link to="/cart">
              <Button variant="ghost" size="icon" className="relative">
                <ShoppingCart className="h-5 w-5" />
                <span className="absolute -top-1 -right-1 flex h-5 w-5 items-center justify-center rounded-full bg-primary text-xs text-primary-foreground">
                  0
                </span>
              </Button>
            </Link>
            <Button
              variant="ghost"
              size="icon"
              className="md:hidden"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              <Menu className="h-5 w-5" />
            </Button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <nav className="md:hidden border-t border-border py-4 space-y-2">
            <Link
              to="/products"
              className="block px-4 py-2 text-sm font-medium text-foreground hover:bg-accent rounded-md"
              onClick={() => setMobileMenuOpen(false)}
            >
              Shop All
            </Link>
            <Link
              to="/products?category=women"
              className="block px-4 py-2 text-sm font-medium text-muted-foreground hover:bg-accent rounded-md"
              onClick={() => setMobileMenuOpen(false)}
            >
              Women
            </Link>
            <Link
              to="/products?category=men"
              className="block px-4 py-2 text-sm font-medium text-muted-foreground hover:bg-accent rounded-md"
              onClick={() => setMobileMenuOpen(false)}
            >
              Men
            </Link>
            <Link
              to="/products?category=kids"
              className="block px-4 py-2 text-sm font-medium text-muted-foreground hover:bg-accent rounded-md"
              onClick={() => setMobileMenuOpen(false)}
            >
              Kids
            </Link>
            <Link
              to="/products?category=shoes"
              className="block px-4 py-2 text-sm font-medium text-muted-foreground hover:bg-accent rounded-md"
              onClick={() => setMobileMenuOpen(false)}
            >
              Shoes
            </Link>
          </nav>
        )}
      </div>

      <SearchDialog open={searchOpen} onOpenChange={setSearchOpen} />
    </header>
  );
};

export default Header;
