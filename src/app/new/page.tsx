"use client";

import { Navigation } from "@/components/navigation";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Calendar, Zap, Shield, Star, Cog, Gauge, Fuel, Users } from "lucide-react";
import Link from "next/link";

const featuredVehicles = [
  {
    id: "genesis-iv-sedan",
    name: "Genesis IV Sedan",
    type: "Luxury Sedan",
    year: "2025",
    price: "$89,500",
    image: "/generated/genesis-iv-sedan.png",
    features: ["Autonomous Drive", "Premium Interior", "Hybrid Powertrain", "Advanced Safety"],
    specs: {
      engine: "3.5L V6 Hybrid",
      power: "400 HP",
      efficiency: "35 MPG",
      seats: "5 Passengers"
    },
    highlights: [
      "Latest generation autonomous driving technology",
      "Hand-crafted Italian leather interior",
      "Award-winning hybrid powertrain system",
      "Advanced driver assistance suite"
    ]
  },
  {
    id: "spectre-suv",
    name: "Spectre SUV",
    type: "Luxury SUV",
    year: "2025",
    price: "$95,000",
    image: "/generated/spectre-suv.png",
    features: ["All-Wheel Drive", "Panoramic Roof", "Adaptive Suspension", "Premium Audio"],
    specs: {
      engine: "4.0L V8 Twin-Turbo",
      power: "500 HP",
      efficiency: "22 MPG",
      seats: "7 Passengers"
    },
    highlights: [
      "Advanced all-wheel drive system with terrain modes",
      "Panoramic glass roof with smart tinting",
      "Adaptive air suspension for ultimate comfort",
      "Premium surround sound audio system"
    ]
  }
];

const newFeatures = [
  {
    icon: <Zap className="w-8 h-8" />,
    title: "Next-Gen Electrification",
    description: "Revolutionary hybrid and full-electric powertrains delivering exceptional performance while reducing environmental impact."
  },
  {
    icon: <Shield className="w-8 h-8" />,
    title: "Advanced Safety Suite",
    description: "Comprehensive safety technology including collision avoidance, blind spot monitoring, and adaptive cruise control."
  },
  {
    icon: <Star className="w-8 h-8" />,
    title: "Luxury Redefined",
    description: "Premium materials, cutting-edge technology, and meticulous craftsmanship in every detail."
  },
  {
    icon: <Cog className="w-8 h-8" />,
    title: "Performance Innovation",
    description: "Engineered for exceptional performance with advanced powertrains and precision handling."
  }
];

export default function NewPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero Section */}
      <section className="relative pt-20 pb-20 overflow-hidden">
        <div
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: "url('/generated/aurora-ex-hero.png')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            filter: "brightness(0.3)"
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background/90 via-background/60 to-background/90 z-10" />

        <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16">
          <div className="text-center">
            <Badge className="bg-accent/20 text-accent border-accent/30 text-lg px-6 py-2 mb-8">
              <Calendar className="w-5 h-5 mr-2" />
              2025 Model Year
            </Badge>
            <h1 className="text-5xl sm:text-7xl font-bold text-foreground mb-6 leading-tight">
              NEW <span className="gold-text">ARRIVALS</span>
            </h1>
            <p className="text-xl sm:text-2xl text-muted-foreground mb-8 max-w-4xl mx-auto">
              Discover our latest collection of luxury vehicles featuring cutting-edge technology, innovative design, and uncompromising performance. The future of automotive excellence is here.
            </p>
            <Button size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90 text-lg px-8 py-4" asChild>
              <Link href="#featured-vehicles">
                Explore New Models
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* What's New Features */}
      <section className="py-20 bg-card/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-6">
              WHAT'S <span className="gold-text">NEW</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Discover the innovations and enhancements that make our 2025 lineup the most advanced Aurora collection yet.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {newFeatures.map((feature, index) => (
              <div key={index} className="text-center group hover:transform hover:scale-105 transition-all duration-500">
                <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-accent/10 text-accent group-hover:bg-accent group-hover:text-accent-foreground transition-all duration-500 mb-6">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold text-foreground mb-4 group-hover:text-accent transition-colors">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured New Vehicles */}
      <section id="featured-vehicles" className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-6">
              FEATURED <span className="gold-text">NEW MODELS</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Explore our newest luxury vehicles, each representing the pinnacle of automotive innovation and craftsmanship.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {featuredVehicles.map((vehicle, index) => (
              <Card key={index} className="bg-card border-border/20 hover:border-accent/50 transition-all duration-500 overflow-hidden group">
                <div 
                  className="h-80 bg-cover bg-center group-hover:scale-105 transition-transform duration-700"
                  style={{ backgroundImage: `url(${vehicle.image})` }}
                />
                <CardContent className="p-8">
                  <div className="flex items-center justify-between mb-4">
                    <Badge className="bg-accent/20 text-accent border-accent/30">
                      {vehicle.year} Model
                    </Badge>
                    <span className="text-2xl font-bold gold-text">{vehicle.price}</span>
                  </div>
                  
                  <h3 className="text-3xl font-bold text-foreground mb-2 group-hover:text-accent transition-colors">
                    {vehicle.name}
                  </h3>
                  <p className="text-accent font-medium mb-6">{vehicle.type}</p>
                  
                  {/* Specifications */}
                  <div className="grid grid-cols-2 gap-4 mb-6">
                    <div className="flex items-center text-muted-foreground">
                      <Cog className="w-5 h-5 mr-2 text-accent" />
                      <div>
                        <div className="text-sm">{vehicle.specs.engine}</div>
                        <div className="text-xs">{vehicle.specs.power}</div>
                      </div>
                    </div>
                    <div className="flex items-center text-muted-foreground">
                      <Fuel className="w-5 h-5 mr-2 text-accent" />
                      <div>
                        <div className="text-sm">{vehicle.specs.efficiency}</div>
                        <div className="text-xs">Combined</div>
                      </div>
                    </div>
                    <div className="flex items-center text-muted-foreground">
                      <Users className="w-5 h-5 mr-2 text-accent" />
                      <div>
                        <div className="text-sm">{vehicle.specs.seats}</div>
                        <div className="text-xs">Seating</div>
                      </div>
                    </div>
                    <div className="flex items-center text-muted-foreground">
                      <Gauge className="w-5 h-5 mr-2 text-accent" />
                      <div>
                        <div className="text-sm">0-60 MPH</div>
                        <div className="text-xs">4.2 seconds</div>
                      </div>
                    </div>
                  </div>

                  {/* Key Features */}
                  <div className="mb-6">
                    <h4 className="text-lg font-semibold text-foreground mb-3">Key Features</h4>
                    <div className="grid grid-cols-2 gap-2">
                      {vehicle.features.map((feature, featureIndex) => (
                        <div key={featureIndex} className="flex items-center text-sm text-muted-foreground">
                          <div className="w-2 h-2 rounded-full bg-accent mr-2" />
                          {feature}
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Highlights */}
                  <div className="mb-8">
                    <h4 className="text-lg font-semibold text-foreground mb-3">Model Highlights</h4>
                    <div className="space-y-2">
                      {vehicle.highlights.map((highlight, highlightIndex) => (
                        <div key={highlightIndex} className="flex items-start text-sm text-muted-foreground">
                          <Star className="w-4 h-4 mr-2 mt-0.5 text-accent flex-shrink-0" />
                          {highlight}
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <Button className="flex-1 bg-accent text-accent-foreground hover:bg-accent/90" asChild>
                      <Link href={`/vehicle/${vehicle.id}`}>
                        View Details
                        <ArrowRight className="ml-2 w-4 h-4" />
                      </Link>
                    </Button>
                    <Button variant="outline" className="border-accent text-accent hover:bg-accent hover:text-accent-foreground" asChild>
                      <Link href="/contact">
                        Schedule Test Drive
                      </Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-gradient-to-r from-accent/10 via-accent/5 to-accent/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-6">
            EXPERIENCE THE <span className="gold-text">LATEST</span>
          </h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
            Ready to experience the future of luxury automotive? Schedule a private viewing or test drive of our newest models.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90 text-lg px-8 py-4" asChild>
              <Link href="/contact">
                Schedule Test Drive
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-accent text-accent hover:bg-accent hover:text-accent-foreground text-lg px-8 py-4"
              asChild
            >
              <Link href="/search">
                Browse All Vehicles
              </Link>
            </Button>
          </div>
        </div>
      </section>

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