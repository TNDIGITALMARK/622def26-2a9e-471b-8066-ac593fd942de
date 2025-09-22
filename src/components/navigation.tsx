"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X, Search, User } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { label: "New", href: "/new" },
    { label: "Pre-Owned", href: "/search?type=pre-owned" },
    { label: "Electric", href: "/search?category=electric" },
    { label: "Services", href: "/services" },
    { label: "About Us", href: "/about" },
    { label: "Contact", href: "/contact" }
  ];

  return (
    <nav className="fixed top-0 w-full z-50 glass-effect border-b border-border/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2 hover-gold">
            <div className="w-8 h-8 rounded-full bg-gradient-to-r from-accent to-yellow-500 flex items-center justify-center">
              <span className="text-background font-bold text-sm">A</span>
            </div>
            <span className="text-xl font-bold text-foreground">Aurora Motors</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className="text-foreground hover-gold transition-colors duration-300"
              >
                {item.label}
              </Link>
            ))}
          </div>

          {/* Right Side - Search & User */}
          <div className="hidden md:flex items-center space-x-4">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
              <Input
                type="text"
                placeholder="Search vehicles..."
                className="pl-10 w-64 bg-card/50 border-border/20 text-foreground placeholder:text-muted-foreground"
              />
            </div>
            <Button variant="ghost" size="icon" className="hover-gold">
              <User className="w-5 h-5" />
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="hover-gold"
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden glass-effect border-t border-border/20">
          <div className="px-4 py-2 space-y-1">
            {/* Mobile Search */}
            <div className="relative mb-4">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
              <Input
                type="text"
                placeholder="Search vehicles..."
                className="pl-10 w-full bg-card/50 border-border/20 text-foreground placeholder:text-muted-foreground"
              />
            </div>

            {navItems.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className="block px-3 py-2 text-foreground hover-gold transition-colors duration-300"
                onClick={() => setIsMenuOpen(false)}
              >
                {item.label}
              </Link>
            ))}

            <div className="pt-2 border-t border-border/20">
              <Button variant="ghost" className="w-full justify-start hover-gold">
                <User className="w-4 h-4 mr-2" />
                Account
              </Button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}