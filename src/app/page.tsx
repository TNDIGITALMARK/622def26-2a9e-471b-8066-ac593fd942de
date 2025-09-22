"use client";

import { Navigation } from "@/components/navigation";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Shield, Wrench, Phone, Star, Engine, Zap, Award } from "lucide-react";
import Link from "next/link";

// Mock data for featured vehicles
const featuredVehicles = [
  {
    id: "aurora-ex",
    name: "Aurora EX",
    type: "Electric Sports Car",
    price: "$89,900",
    image: "/generated/aurora-ex-hero.png",
    specs: { power: "650 HP", range: "400 mi", acceleration: "0-60: 3.2s" },
    badge: "NEW"
  },
  {
    id: "genesis-iv",
    name: "Genesis IV",
    type: "Luxury Sedan",
    price: "$67,500",
    image: "/generated/genesis-iv-sedan.png",
    specs: { power: "420 HP", mpg: "28 MPG", acceleration: "0-60: 4.1s" },
    badge: "FEATURED"
  },
  {
    id: "spectre-suv",
    name: "Spectre SUV",
    type: "Premium SUV",
    price: "$84,200",
    image: "/generated/spectre-suv.png",
    specs: { power: "500 HP", capacity: "7 seats", acceleration: "0-60: 3.8s" },
    badge: "POPULAR"
  }
];

const services = [
  {
    icon: <Shield className="w-12 h-12" />,
    title: "Concierge Service",
    description: "White-glove customer experience with personalized assistance"
  },
  {
    icon: <Wrench className="w-12 h-12" />,
    title: "Expert Maintenance",
    description: "Certified technicians and premium service facilities"
  },
  {
    icon: <Phone className="w-12 h-12" />,
    title: "24/7 Support",
    description: "Round-the-clock customer support and roadside assistance"
  }
];

export default function HomePage() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: "url('/generated/aurora-ex-hero.png')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            filter: "brightness(0.4)"
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background/80 via-background/40 to-transparent z-10" />

        <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-5xl sm:text-7xl font-bold text-foreground mb-6 leading-tight">
              DRIVE THE FUTURE
              <br />
              <span className="gold-text">OF LUXURY</span>
            </h1>
            <p className="text-xl sm:text-2xl text-muted-foreground mb-8 max-w-2xl">
              Experience the pinnacle of automotive excellence with Aurora Motors'
              collection of premium vehicles designed for the discerning driver.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90 text-lg px-8 py-4">
                View Models
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-accent text-accent hover:bg-accent hover:text-accent-foreground text-lg px-8 py-4"
              >
                Schedule Test Drive
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Vehicles Section */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-6">
              FEATURED VEHICLES
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Discover our handpicked selection of premium vehicles,
              each engineered to deliver unparalleled performance and luxury.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {featuredVehicles.map((vehicle) => (
              <Card key={vehicle.id} className="group bg-card border-border/20 hover:border-accent/50 transition-all duration-500 overflow-hidden">
                <div className="relative">
                  <div
                    className="h-64 bg-cover bg-center group-hover:scale-105 transition-transform duration-700"
                    style={{ backgroundImage: `url(${vehicle.image})` }}
                  />
                  <Badge
                    className="absolute top-4 left-4 bg-accent text-accent-foreground"
                  >
                    {vehicle.badge}
                  </Badge>
                </div>

                <CardContent className="p-6">
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <h3 className="text-2xl font-bold text-foreground group-hover:text-accent transition-colors">
                        {vehicle.name}
                      </h3>
                      <p className="text-muted-foreground">{vehicle.type}</p>
                    </div>
                    <p className="text-2xl font-bold gold-text">{vehicle.price}</p>
                  </div>

                  <div className="grid grid-cols-1 gap-2 mb-6">
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-muted-foreground">Power:</span>
                      <span className="text-foreground font-medium">{vehicle.specs.power}</span>
                    </div>
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-muted-foreground">Range/MPG:</span>
                      <span className="text-foreground font-medium">{vehicle.specs.range || vehicle.specs.mpg}</span>
                    </div>
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-muted-foreground">0-60:</span>
                      <span className="text-foreground font-medium">{vehicle.specs.acceleration}</span>
                    </div>
                  </div>

                  <div className="flex gap-2">
                    <Button
                      size="sm"
                      className="flex-1 bg-accent text-accent-foreground hover:bg-accent/90"
                      asChild
                    >
                      <Link href={`/vehicle/${vehicle.id}`}>
                        View Details
                      </Link>
                    </Button>
                    <Button
                      size="sm"
                      variant="outline"
                      className="border-accent text-accent hover:bg-accent hover:text-accent-foreground"
                    >
                      Schedule Test
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-card/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-6">
              SERVICES
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Experience luxury beyond the drive with our comprehensive suite of premium services.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="text-center group hover:transform hover:scale-105 transition-all duration-500"
              >
                <div className="inline-flex items-center justify-center w-24 h-24 rounded-full bg-accent/10 text-accent group-hover:bg-accent group-hover:text-accent-foreground transition-all duration-500 mb-6">
                  {service.icon}
                </div>
                <h3 className="text-2xl font-bold text-foreground mb-4 group-hover:text-accent transition-colors">
                  {service.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-20 bg-background border-t border-border/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-foreground mb-8">
              CONTACT INFORMATION
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
              <div>
                <h3 className="text-xl font-semibold gold-text mb-2">Visit Us</h3>
                <p className="text-muted-foreground">
                  123 Luxury Drive<br />
                  Premium District<br />
                  New York, NY 10001
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold gold-text mb-2">Call Us</h3>
                <p className="text-muted-foreground">
                  Sales: (555) 123-4567<br />
                  Service: (555) 123-4568<br />
                  Mon-Sat: 9AM-8PM
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold gold-text mb-2">Follow Us</h3>
                <p className="text-muted-foreground">
                  @auroramotors<br />
                  Stay updated with our latest models<br />
                  and exclusive events
                </p>
              </div>
            </div>
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