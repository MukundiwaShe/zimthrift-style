import { Link } from "react-router-dom";
import { Facebook, Instagram, Twitter, Mail } from "lucide-react";

const Footer = () => {
  return (
    <footer className="border-t border-border bg-muted/30">
      <div className="container mx-auto px-4 py-12">
        <div className="grid gap-8 md:grid-cols-4">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-r from-primary to-accent">
                <span className="text-lg font-bold text-primary-foreground">OT</span>
              </div>
              <span className="text-lg font-bold">Online Thrift Store</span>
            </div>
            <p className="text-sm text-muted-foreground">
              Fashion for everyone. Quality preloved clothing at affordable prices.
            </p>
            <div className="flex space-x-2">
              <a
                href="#"
                className="flex h-9 w-9 items-center justify-center rounded-full bg-primary/10 text-primary hover:bg-primary hover:text-primary-foreground transition-colors"
              >
                <Facebook className="h-4 w-4" />
              </a>
              <a
                href="#"
                className="flex h-9 w-9 items-center justify-center rounded-full bg-primary/10 text-primary hover:bg-primary hover:text-primary-foreground transition-colors"
              >
                <Instagram className="h-4 w-4" />
              </a>
              <a
                href="#"
                className="flex h-9 w-9 items-center justify-center rounded-full bg-primary/10 text-primary hover:bg-primary hover:text-primary-foreground transition-colors"
              >
                <Twitter className="h-4 w-4" />
              </a>
            </div>
          </div>

          {/* Shop */}
          <div className="space-y-4">
            <h3 className="font-semibold text-foreground">Shop</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/products?category=women" className="text-muted-foreground hover:text-primary transition-colors">
                  Women's Wear
                </Link>
              </li>
              <li>
                <Link to="/products?category=men" className="text-muted-foreground hover:text-primary transition-colors">
                  Men's Wear
                </Link>
              </li>
              <li>
                <Link to="/products?category=kids" className="text-muted-foreground hover:text-primary transition-colors">
                  Kids
                </Link>
              </li>
              <li>
                <Link to="/products?category=shoes" className="text-muted-foreground hover:text-primary transition-colors">
                  Shoes
                </Link>
              </li>
              <li>
                <Link to="/products?category=accessories" className="text-muted-foreground hover:text-primary transition-colors">
                  Accessories
                </Link>
              </li>
            </ul>
          </div>

          {/* Help */}
          <div className="space-y-4">
            <h3 className="font-semibold text-foreground">Help</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/account" className="text-muted-foreground hover:text-primary transition-colors">
                  My Account
                </Link>
              </li>
              <li>
                <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                  Track Order
                </a>
              </li>
              <li>
                <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                  Shipping Info
                </a>
              </li>
              <li>
                <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                  Returns
                </a>
              </li>
              <li>
                <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                  FAQs
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h3 className="font-semibold text-foreground">Contact</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>Harare, Zimbabwe</li>
              <li>Phone: +263 XX XXX XXXX</li>
              <li className="flex items-center gap-2">
                <Mail className="h-4 w-4" />
                info@onlinethrift.co.zw
              </li>
            </ul>
            <p className="text-xs text-muted-foreground">
              Mon - Sat: 9:00 AM - 6:00 PM
            </p>
          </div>
        </div>

        <div className="mt-12 border-t border-border pt-8 text-center text-sm text-muted-foreground">
          <p>&copy; 2025 Online Thrift Store. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
