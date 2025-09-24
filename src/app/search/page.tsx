"use client";

import { Navigation } from "@/components/navigation";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { Slider } from "@/components/ui/slider";
import {
  Filter,
  Grid,
  List,
  SlidersHorizontal,
  Star,
  Heart,
  ArrowUpDown
} from "lucide-react";
import Link from "next/link";
import { useState, useMemo } from "react";
import { useSearchParams } from "next/navigation";

// Extended mock vehicle database
const allVehicles = [
  {
    id: "aurora-ex",
    name: "Aurora EX",
    type: "Electric Sports Car",
    brand: "Aurora",
    year: 2024,
    price: 89900,
    image: "/generated/aurora-ex-hero.png",
    specs: { power: "650 HP", range: "400 mi", acceleration: "0-60: 3.2s" },
    rating: 4.8,
    reviews: 127,
    badge: "NEW",
    category: "electric",
    bodyStyle: "coupe"
  },
  {
    id: "genesis-iv",
    name: "Genesis IV",
    type: "Luxury Sedan",
    brand: "Aurora",
    year: 2024,
    price: 67500,
    image: "/generated/genesis-iv-sedan.png",
    specs: { power: "420 HP", mpg: "28 MPG", acceleration: "0-60: 4.1s" },
    rating: 4.7,
    reviews: 89,
    badge: "FEATURED",
    category: "luxury",
    bodyStyle: "sedan"
  },
  {
    id: "spectre-suv",
    name: "Spectre SUV",
    type: "Premium SUV",
    brand: "Aurora",
    year: 2024,
    price: 84200,
    image: "/generated/spectre-suv.png",
    specs: { power: "500 HP", capacity: "7 seats", acceleration: "0-60: 3.8s" },
    rating: 4.9,
    reviews: 156,
    badge: "POPULAR",
    category: "suv",
    bodyStyle: "suv"
  },
  {
    id: "phoenix-gt",
    name: "Phoenix GT",
    type: "Performance Coupe",
    brand: "Aurora",
    year: 2024,
    price: 95500,
    image: "/generated/phoenix-gt-hero.png",
    specs: { power: "720 HP", topSpeed: "210 mph", acceleration: "0-60: 2.8s" },
    rating: 4.9,
    reviews: 203,
    badge: "LIMITED",
    category: "sports",
    bodyStyle: "coupe"
  },
  {
    id: "nova-hybrid",
    name: "Nova Hybrid",
    type: "Eco-Luxury Sedan",
    brand: "Aurora",
    year: 2024,
    price: 52900,
    image: "/generated/nova-hybrid-hero.png",
    specs: { power: "340 HP", mpg: "42 MPG", acceleration: "0-60: 5.1s" },
    rating: 4.6,
    reviews: 78,
    badge: "ECO",
    category: "hybrid",
    bodyStyle: "sedan"
  },
  {
    id: "titan-truck",
    name: "Titan Truck",
    type: "Luxury Pickup",
    brand: "Aurora",
    year: 2024,
    price: 72800,
    image: "/generated/titan-truck-hero.png",
    specs: { power: "450 HP", towing: "11,200 lbs", acceleration: "0-60: 4.8s" },
    rating: 4.5,
    reviews: 142,
    badge: "CAPABLE",
    category: "truck",
    bodyStyle: "pickup"
  }
];

type Vehicle = typeof allVehicles[0];
type ViewMode = "grid" | "list";
type SortOption = "price-low" | "price-high" | "rating" | "newest";

export default function SearchPage() {
  const searchParams = useSearchParams();
  const [viewMode, setViewMode] = useState<ViewMode>("grid");
  const [sortBy, setSortBy] = useState<SortOption>("rating");
  const [priceRange, setPriceRange] = useState([0, 100000]);
  const [selectedBrands, setSelectedBrands] = useState<string[]>([]);
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const [selectedBodyStyles, setSelectedBodyStyles] = useState<string[]>([]);
  const [minRating, setMinRating] = useState(0);
  const [searchQuery, setSearchQuery] = useState("");

  // Initialize filters from URL params
  useState(() => {
    const type = searchParams.get("type");
    const category = searchParams.get("category");
    if (type) {
      // Handle pre-owned filter
    }
    if (category && !selectedCategories.includes(category)) {
      setSelectedCategories([category]);
    }
  });

  const filteredAndSortedVehicles = useMemo(() => {
    let filtered = allVehicles.filter((vehicle) => {
      // Search query filter
      if (searchQuery && !vehicle.name.toLowerCase().includes(searchQuery.toLowerCase()) &&
          !vehicle.type.toLowerCase().includes(searchQuery.toLowerCase())) {
        return false;
      }

      // Price range filter
      if (vehicle.price < priceRange[0] * 1000 || vehicle.price > priceRange[1] * 1000) {
        return false;
      }

      // Brand filter
      if (selectedBrands.length > 0 && !selectedBrands.includes(vehicle.brand)) {
        return false;
      }

      // Category filter
      if (selectedCategories.length > 0 && !selectedCategories.includes(vehicle.category)) {
        return false;
      }

      // Body style filter
      if (selectedBodyStyles.length > 0 && !selectedBodyStyles.includes(vehicle.bodyStyle)) {
        return false;
      }

      // Rating filter
      if (vehicle.rating < minRating) {
        return false;
      }

      return true;
    });

    // Sort filtered results
    filtered.sort((a, b) => {
      switch (sortBy) {
        case "price-low":
          return a.price - b.price;
        case "price-high":
          return b.price - a.price;
        case "rating":
          return b.rating - a.rating;
        case "newest":
          return b.year - a.year;
        default:
          return 0;
      }
    });

    return filtered;
  }, [searchQuery, priceRange, selectedBrands, selectedCategories, selectedBodyStyles, minRating, sortBy]);

  const handleBrandChange = (brand: string, checked: boolean) => {
    if (checked) {
      setSelectedBrands([...selectedBrands, brand]);
    } else {
      setSelectedBrands(selectedBrands.filter(b => b !== brand));
    }
  };

  const handleCategoryChange = (category: string, checked: boolean) => {
    if (checked) {
      setSelectedCategories([...selectedCategories, category]);
    } else {
      setSelectedCategories(selectedCategories.filter(c => c !== category));
    }
  };

  const handleBodyStyleChange = (bodyStyle: string, checked: boolean) => {
    if (checked) {
      setSelectedBodyStyles([...selectedBodyStyles, bodyStyle]);
    } else {
      setSelectedBodyStyles(selectedBodyStyles.filter(bs => bs !== bodyStyle));
    }
  };

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
      minimumFractionDigits: 0,
      maximumFractionDigits: 0
    }).format(price);
  };

  const VehicleCard = ({ vehicle }: { vehicle: Vehicle }) => {
    if (viewMode === "list") {
      return (
        <Link href={`/vehicle/${vehicle.id}`} className="block">
          <Card className="bg-card border-border/20 hover:border-accent/50 transition-all duration-500 hover:shadow-lg hover:shadow-accent/10 cursor-pointer group">
            <CardContent className="p-0">
              <div className="flex flex-col md:flex-row">
                <div className="relative md:w-80">
                  <div
                    className="h-48 md:h-full bg-cover bg-center group-hover:scale-105 transition-transform duration-700"
                    style={{ backgroundImage: `url(${vehicle.image})` }}
                  />
                  <Badge className="absolute top-4 left-4 bg-accent text-accent-foreground">
                    {vehicle.badge}
                  </Badge>
                </div>

              <div className="flex-1 p-6">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="text-2xl font-bold text-foreground group-hover:text-accent transition-colors">
                      {vehicle.name}
                    </h3>
                    <p className="text-muted-foreground">{vehicle.type}</p>
                    <div className="flex items-center gap-1 mt-2">
                      <Star className="w-4 h-4 fill-current text-yellow-400" />
                      <span className="text-sm text-muted-foreground">
                        {vehicle.rating} ({vehicle.reviews} reviews)
                      </span>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="text-2xl font-bold gold-text">{formatPrice(vehicle.price)}</p>
                    <Button size="icon" variant="ghost" className="mt-2">
                      <Heart className="w-4 h-4" />
                    </Button>
                  </div>
                </div>

                <div className="grid grid-cols-3 gap-4 mb-6">
                  {Object.entries(vehicle.specs).slice(0, 3).map(([key, value]) => (
                    <div key={key} className="text-center">
                      <p className="text-sm text-muted-foreground capitalize">
                        {key.replace(/([A-Z])/g, ' $1').trim()}
                      </p>
                      <p className="font-medium text-foreground">{value}</p>
                    </div>
                  ))}
                </div>

                <div className="flex gap-2">
                  <Button
                    size="sm"
                    className="bg-accent text-accent-foreground hover:bg-accent/90"
                    onClick={(e) => { e.preventDefault(); e.stopPropagation(); }}
                  >
                    View Details
                  </Button>
                  <Button
                    size="sm"
                    variant="outline"
                    className="border-accent text-accent hover:bg-accent hover:text-accent-foreground"
                    onClick={(e) => { e.preventDefault(); e.stopPropagation(); }}
                  >
                    Test Drive
                  </Button>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
        </Link>
      );
    }

    return (
      <Link href={`/vehicle/${vehicle.id}`} className="block">
        <Card className="group bg-card border-border/20 hover:border-accent/50 transition-all duration-500 overflow-hidden hover:shadow-lg hover:shadow-accent/10 cursor-pointer">
          <div className="relative">
            <div
              className="h-64 bg-cover bg-center group-hover:scale-105 transition-transform duration-700"
              style={{ backgroundImage: `url(${vehicle.image})` }}
            />
            <Badge className="absolute top-4 left-4 bg-accent text-accent-foreground">
              {vehicle.badge}
            </Badge>
            <Button
              size="icon"
              variant="secondary"
              className="absolute top-4 right-4 bg-background/80 backdrop-blur-sm hover:bg-accent hover:text-accent-foreground"
              onClick={(e) => { e.preventDefault(); e.stopPropagation(); }}
            >
              <Heart className="w-4 h-4" />
            </Button>
          </div>

        <CardContent className="p-6">
          <div className="flex justify-between items-start mb-4">
            <div>
              <h3 className="text-xl font-bold text-foreground group-hover:text-accent transition-colors">
                {vehicle.name}
              </h3>
              <p className="text-muted-foreground">{vehicle.type}</p>
              <div className="flex items-center gap-1 mt-2">
                <Star className="w-4 h-4 fill-current text-yellow-400" />
                <span className="text-sm text-muted-foreground">
                  {vehicle.rating} ({vehicle.reviews})
                </span>
              </div>
            </div>
            <p className="text-xl font-bold gold-text">{formatPrice(vehicle.price)}</p>
          </div>

          <div className="grid grid-cols-1 gap-2 mb-6">
            {Object.entries(vehicle.specs).slice(0, 3).map(([key, value]) => (
              <div key={key} className="flex items-center justify-between text-sm">
                <span className="text-muted-foreground capitalize">
                  {key.replace(/([A-Z])/g, ' $1').trim()}:
                </span>
                <span className="text-foreground font-medium">{value}</span>
              </div>
            ))}
          </div>

          <div className="flex gap-2">
            <Button
              size="sm"
              className="flex-1 bg-accent text-accent-foreground hover:bg-accent/90"
              onClick={(e) => { e.preventDefault(); e.stopPropagation(); }}
            >
              View Details
            </Button>
            <Button
              size="sm"
              variant="outline"
              className="border-accent text-accent hover:bg-accent hover:text-accent-foreground"
              onClick={(e) => { e.preventDefault(); e.stopPropagation(); }}
            >
              Test Drive
            </Button>
          </div>
        </CardContent>
      </Card>
      </Link>
    );
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <div className="pt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Search Header */}
          <div className="py-8 border-b border-border/20">
            <h1 className="text-4xl font-bold text-foreground mb-4">
              Find Your Perfect Vehicle
            </h1>
            <div className="flex flex-col md:flex-row gap-4 items-end">
              <div className="flex-1">
                <Label htmlFor="search">Search Vehicles</Label>
                <Input
                  id="search"
                  type="text"
                  placeholder="Search by name or type..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="mt-1"
                />
              </div>
              <div className="flex gap-2">
                <Button
                  variant={viewMode === "grid" ? "default" : "outline"}
                  size="icon"
                  onClick={() => setViewMode("grid")}
                >
                  <Grid className="w-4 h-4" />
                </Button>
                <Button
                  variant={viewMode === "list" ? "default" : "outline"}
                  size="icon"
                  onClick={() => setViewMode("list")}
                >
                  <List className="w-4 h-4" />
                </Button>
              </div>
            </div>
          </div>

          <div className="flex flex-col lg:flex-row gap-8 py-8">
            {/* Filters Sidebar */}
            <div className="lg:w-80 space-y-6">
              <Card>
                <CardContent className="p-6">
                  <h3 className="text-lg font-semibold text-foreground mb-4 flex items-center">
                    <Filter className="w-5 h-5 mr-2" />
                    Filters
                  </h3>

                  {/* Price Range */}
                  <div className="space-y-4">
                    <div>
                      <Label className="text-sm font-medium">
                        Price Range: {formatPrice(priceRange[0] * 1000)} - {formatPrice(priceRange[1] * 1000)}
                      </Label>
                      <Slider
                        value={priceRange}
                        onValueChange={setPriceRange}
                        max={120}
                        min={0}
                        step={5}
                        className="mt-2"
                      />
                    </div>

                    {/* Brand Filter */}
                    <div>
                      <Label className="text-sm font-medium mb-2 block">Brand</Label>
                      <div className="space-y-2">
                        {["Aurora"].map((brand) => (
                          <div key={brand} className="flex items-center space-x-2">
                            <Checkbox
                              id={brand}
                              checked={selectedBrands.includes(brand)}
                              onCheckedChange={(checked) => handleBrandChange(brand, checked as boolean)}
                            />
                            <Label htmlFor={brand} className="text-sm">
                              {brand}
                            </Label>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Category Filter */}
                    <div>
                      <Label className="text-sm font-medium mb-2 block">Category</Label>
                      <div className="space-y-2">
                        {["electric", "luxury", "suv", "sports", "hybrid", "truck"].map((category) => (
                          <div key={category} className="flex items-center space-x-2">
                            <Checkbox
                              id={category}
                              checked={selectedCategories.includes(category)}
                              onCheckedChange={(checked) => handleCategoryChange(category, checked as boolean)}
                            />
                            <Label htmlFor={category} className="text-sm capitalize">
                              {category}
                            </Label>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Body Style Filter */}
                    <div>
                      <Label className="text-sm font-medium mb-2 block">Body Style</Label>
                      <div className="space-y-2">
                        {["coupe", "sedan", "suv", "pickup"].map((bodyStyle) => (
                          <div key={bodyStyle} className="flex items-center space-x-2">
                            <Checkbox
                              id={bodyStyle}
                              checked={selectedBodyStyles.includes(bodyStyle)}
                              onCheckedChange={(checked) => handleBodyStyleChange(bodyStyle, checked as boolean)}
                            />
                            <Label htmlFor={bodyStyle} className="text-sm capitalize">
                              {bodyStyle}
                            </Label>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Rating Filter */}
                    <div>
                      <Label className="text-sm font-medium mb-2 block">
                        Minimum Rating: {minRating}+
                      </Label>
                      <Slider
                        value={[minRating]}
                        onValueChange={(value) => setMinRating(value[0])}
                        max={5}
                        min={0}
                        step={0.1}
                        className="mt-2"
                      />
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Results */}
            <div className="flex-1">
              {/* Results Header */}
              <div className="flex justify-between items-center mb-6">
                <p className="text-muted-foreground">
                  Showing {filteredAndSortedVehicles.length} of {allVehicles.length} vehicles
                </p>
                <Select value={sortBy} onValueChange={(value) => setSortBy(value as SortOption)}>
                  <SelectTrigger className="w-48">
                    <SelectValue placeholder="Sort by..." />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="rating">Highest Rated</SelectItem>
                    <SelectItem value="price-low">Price: Low to High</SelectItem>
                    <SelectItem value="price-high">Price: High to Low</SelectItem>
                    <SelectItem value="newest">Newest First</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              {/* Vehicle Grid/List */}
              <div className={`grid gap-6 ${
                viewMode === "grid"
                  ? "grid-cols-1 md:grid-cols-2 xl:grid-cols-3"
                  : "grid-cols-1"
              }`}>
                {filteredAndSortedVehicles.map((vehicle) => (
                  <VehicleCard key={vehicle.id} vehicle={vehicle} />
                ))}
              </div>

              {filteredAndSortedVehicles.length === 0 && (
                <div className="text-center py-12">
                  <h3 className="text-xl font-semibold text-foreground mb-2">
                    No vehicles found
                  </h3>
                  <p className="text-muted-foreground">
                    Try adjusting your filters or search terms
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="py-8 bg-card border-t border-border/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-muted-foreground">
            © 2024 Aurora Motors. All Rights Reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}