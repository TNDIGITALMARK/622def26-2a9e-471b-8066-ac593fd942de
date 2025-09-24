"use client";

import Link from "next/link";
import { useState, useRef, useEffect } from "react";
import { Menu, X, Search, User, Car } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { searchCars, type Car } from "@/lib/mock-cars";

export function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState<Car[]>([]);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const searchRef = useRef<HTMLDivElement>(null);
  const mobileSearchRef = useRef<HTMLDivElement>(null);

  // Handle search functionality
  const handleSearch = (query: string) => {
    setSearchQuery(query);
    if (query.trim()) {
      const results = searchCars(query);
      setSearchResults(results);
      setIsSearchOpen(true);
    } else {
      setSearchResults([]);
      setIsSearchOpen(false);
    }
  };

  // Close search dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (searchRef.current && !searchRef.current.contains(event.target as Node) &&
          mobileSearchRef.current && !mobileSearchRef.current.contains(event.target as Node)) {
        setIsSearchOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(price);
  };

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
            <div className="relative" ref={searchRef}>
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
              <Input
                type="text"
                placeholder="Search vehicles..."
                value={searchQuery}
                onChange={(e) => handleSearch(e.target.value)}
                className="pl-10 w-64 bg-card/50 border-border/20 text-foreground placeholder:text-muted-foreground focus:ring-2 focus:ring-accent/50"
              />
              
              {/* Search Dropdown */}
              {isSearchOpen && searchResults.length > 0 && (
                <div className="absolute top-full left-0 right-0 mt-1 max-h-80 overflow-y-auto bg-card/95 backdrop-blur-md border border-border/20 rounded-lg shadow-2xl z-50">
                  <div className="p-2">
                    <div className="text-xs text-muted-foreground mb-2 px-2">
                      {searchResults.length} vehicle{searchResults.length !== 1 ? 's' : ''} found
                    </div>
                    {searchResults.map((car) => (
                      <Link
                        key={car.id}
                        href={`/vehicle/${car.id}`}
                        onClick={() => {
                          setIsSearchOpen(false);
                          setSearchQuery("");
                        }}
                        className="flex items-center gap-3 p-3 hover:bg-accent/10 rounded-md transition-colors group"
                      >
                        <div className="flex-shrink-0 w-12 h-8 bg-muted/50 rounded flex items-center justify-center">
                          <Car className="w-4 h-4 text-muted-foreground" />
                        </div>
                        <div className="flex-1 min-w-0">
                          <div className="font-medium text-foreground group-hover:text-accent transition-colors">
                            {car.year} {car.make} {car.model}
                          </div>
                          <div className="text-sm text-muted-foreground flex items-center gap-2">
                            <span className="capitalize">{car.type}</span>
                            <span>•</span>
                            <span className="capitalize">{car.category}</span>
                          </div>
                        </div>
                        <div className="text-right flex-shrink-0">
                          <div className="font-semibold text-accent">
                            {formatPrice(car.price)}
                          </div>
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>
              )}
              
              {/* No results message */}
              {isSearchOpen && searchQuery.trim() && searchResults.length === 0 && (
                <div className="absolute top-full left-0 right-0 mt-1 bg-card/95 backdrop-blur-md border border-border/20 rounded-lg shadow-2xl z-50">
                  <div className="p-4 text-center text-muted-foreground">
                    No vehicles found for "{searchQuery}"
                  </div>
                </div>
              )}
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
            <div className="relative mb-4" ref={mobileSearchRef}>
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
              <Input
                type="text"
                placeholder="Search vehicles..."
                value={searchQuery}
                onChange={(e) => handleSearch(e.target.value)}
                className="pl-10 w-full bg-card/50 border-border/20 text-foreground placeholder:text-muted-foreground focus:ring-2 focus:ring-accent/50"
              />
              
              {/* Mobile Search Dropdown */}
              {isSearchOpen && searchResults.length > 0 && (
                <div className="absolute top-full left-0 right-0 mt-1 max-h-80 overflow-y-auto bg-card/95 backdrop-blur-md border border-border/20 rounded-lg shadow-2xl z-50">
                  <div className="p-2">
                    <div className="text-xs text-muted-foreground mb-2 px-2">
                      {searchResults.length} vehicle{searchResults.length !== 1 ? 's' : ''} found
                    </div>
                    {searchResults.map((car) => (
                      <Link
                        key={car.id}
                        href={`/vehicle/${car.id}`}
                        onClick={() => {
                          setIsSearchOpen(false);
                          setSearchQuery("");
                          setIsMenuOpen(false);
                        }}
                        className="flex items-center gap-3 p-3 hover:bg-accent/10 rounded-md transition-colors group"
                      >
                        <div className="flex-shrink-0 w-12 h-8 bg-muted/50 rounded flex items-center justify-center">
                          <Car className="w-4 h-4 text-muted-foreground" />
                        </div>
                        <div className="flex-1 min-w-0">
                          <div className="font-medium text-foreground group-hover:text-accent transition-colors">
                            {car.year} {car.make} {car.model}
                          </div>
                          <div className="text-sm text-muted-foreground flex items-center gap-2">
                            <span className="capitalize">{car.type}</span>
                            <span>•</span>
                            <span className="capitalize">{car.category}</span>
                          </div>
                        </div>
                        <div className="text-right flex-shrink-0">
                          <div className="font-semibold text-accent">
                            {formatPrice(car.price)}
                          </div>
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>
              )}
              
              {/* Mobile No results message */}
              {isSearchOpen && searchQuery.trim() && searchResults.length === 0 && (
                <div className="absolute top-full left-0 right-0 mt-1 bg-card/95 backdrop-blur-md border border-border/20 rounded-lg shadow-2xl z-50">
                  <div className="p-4 text-center text-muted-foreground">
                    No vehicles found for "{searchQuery}"
                  </div>
                </div>
              )}
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