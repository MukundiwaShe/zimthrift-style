import { Link } from "react-router-dom";
import { Mail, Phone, MapPin, MessageCircle } from "lucide-react";

const Footer = () => {
  return (
    <footer className="border-t border-border bg-muted/30">
      <div className="container mx-auto px-4 py-12">
        <div className="grid gap-8 md:grid-cols-4 text-center md:text-left">
          {/* Brand */}
          <div className="space-y-4 flex flex-col items-center md:items-start">
            <div className="flex items-center space-x-2">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-r from-primary to-accent">
                <span className="text-lg font-bold text-primary-foreground">BS</span>
              </div>
              <span className="text-lg font-bold">Bhero Store</span>
            </div>
            <p className="text-sm text-muted-foreground">
              Fashion for everyone. Quality preloved clothing at affordable prices.
            </p>
            <div className="flex space-x-2">
              <a
                href="https://wa.me/263XXXXXXXXX"
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-9 w-9 items-center justify-center rounded-full bg-primary/10 text-primary hover:bg-primary hover:text-primary-foreground transition-colors"
              >
                <MessageCircle className="h-4 w-4" />
              </a>
              <a
                href="mailto:info@bherostore.co.zw"
                className="flex h-9 w-9 items-center justify-center rounded-full bg-primary/10 text-primary hover:bg-primary hover:text-primary-foreground transition-colors"
              >
                <Mail className="h-4 w-4" />
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
              <li className="flex items-center justify-center md:justify-start gap-2">
                <MapPin className="h-4 w-4" />
                Harare, Zimbabwe
              </li>
              <li className="flex items-center justify-center md:justify-start gap-2">
                <Phone className="h-4 w-4" />
                +263 XX XXX XXXX
              </li>
              <li className="flex items-center justify-center md:justify-start gap-2">
                <Mail className="h-4 w-4" />
                info@bherostore.co.zw
              </li>
              <li className="flex items-center justify-center md:justify-start gap-2">
                <MessageCircle className="h-4 w-4" />
                <a href="https://wa.me/263XXXXXXXXX" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">
                  WhatsApp Us
                </a>
              </li>
            </ul>
            <p className="text-xs text-muted-foreground">
              Mon - Sat: 9:00 AM - 6:00 PM
            </p>
          </div>
        </div>

        <div className="mt-12 border-t border-border pt-8 text-center text-sm text-muted-foreground">
          <p>&copy; 2025 Bhero Store. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
