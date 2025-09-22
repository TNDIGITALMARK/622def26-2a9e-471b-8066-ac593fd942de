"use client";

import { Navigation } from "@/components/navigation";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  ArrowLeft,
  Star,
  Heart,
  Share2,
  Phone,
  Calendar,
  Fuel,
  Zap,
  Settings,
  Shield,
  Award,
  Users,
  Gauge
} from "lucide-react";
import Link from "next/link";
import { useState } from "react";

// Mock vehicle database
const vehicles = {
  "aurora-ex": {
    id: "aurora-ex",
    name: "Aurora EX",
    type: "Electric Sports Car",
    year: "2024",
    price: "$89,900",
    msrp: "$94,900",
    savings: "$5,000",
    rating: 4.8,
    reviews: 127,
    images: [
      "/generated/aurora-ex-hero.png",
      "/generated/aurora-ex-hero.png",
      "/generated/aurora-ex-hero.png",
      "/generated/aurora-ex-hero.png"
    ],
    specs: {
      power: "650 HP",
      torque: "590 lb-ft",
      range: "400 miles",
      acceleration: "0-60: 3.2s",
      topSpeed: "200 mph",
      batteryCapacity: "100 kWh",
      chargingTime: "30 min (10-80%)",
      drivetrain: "AWD"
    },
    features: [
      "Autopilot with Full Self-Driving Capability",
      "Premium Interior with Nappa Leather",
      "21-inch Turbine Wheels",
      "Glass Roof with UV Protection",
      "Premium Audio System with 14 Speakers",
      "Heated and Ventilated Seats",
      "Wireless Phone Charging",
      "Advanced Climate Control"
    ],
    description: "The Aurora EX represents the pinnacle of electric performance luxury. With cutting-edge technology and breathtaking design, this vehicle delivers an unparalleled driving experience that redefines what's possible in sustainable luxury transportation.",
    warranty: "8 years / 120,000 miles comprehensive warranty",
    availability: "Available for immediate delivery"
  },
  "genesis-iv": {
    id: "genesis-iv",
    name: "Genesis IV",
    type: "Luxury Sedan",
    year: "2024",
    price: "$67,500",
    msrp: "$72,000",
    savings: "$4,500",
    rating: 4.7,
    reviews: 89,
    images: [
      "/generated/aurora-ex-hero.png",
      "/generated/aurora-ex-hero.png",
      "/generated/aurora-ex-hero.png",
      "/generated/aurora-ex-hero.png"
    ],
    specs: {
      power: "420 HP",
      torque: "384 lb-ft",
      mpg: "28 MPG Combined",
      acceleration: "0-60: 4.1s",
      topSpeed: "155 mph",
      engine: "3.0L Twin-Turbo V6",
      transmission: "8-Speed Automatic",
      drivetrain: "RWD"
    },
    features: [
      "Adaptive Cruise Control with Stop & Go",
      "Premium Leather-Appointed Seating",
      "19-inch Alloy Wheels",
      "Panoramic Sunroof",
      "Harman Kardon Premium Audio",
      "Heated and Cooled Front Seats",
      "Wireless Device Charging",
      "Multi-Zone Climate Control"
    ],
    description: "The Genesis IV embodies sophisticated luxury with exceptional performance. Crafted with meticulous attention to detail, this sedan offers a perfect harmony of power, comfort, and advanced technology for the modern executive.",
    warranty: "5 years / 60,000 miles comprehensive warranty",
    availability: "Available for delivery in 2-3 weeks"
  },
  "spectre-suv": {
    id: "spectre-suv",
    name: "Spectre SUV",
    type: "Premium SUV",
    year: "2024",
    price: "$84,200",
    msrp: "$87,900",
    savings: "$3,700",
    rating: 4.9,
    reviews: 156,
    images: [
      "/generated/aurora-ex-hero.png",
      "/generated/aurora-ex-hero.png",
      "/generated/aurora-ex-hero.png",
      "/generated/aurora-ex-hero.png"
    ],
    specs: {
      power: "500 HP",
      torque: "516 lb-ft",
      mpg: "24 MPG Combined",
      acceleration: "0-60: 3.8s",
      topSpeed: "175 mph",
      engine: "4.0L Twin-Turbo V8",
      transmission: "9-Speed Automatic",
      drivetrain: "AWD"
    },
    features: [
      "Advanced Off-Road Package",
      "Premium Nappa Leather Interior",
      "22-inch Performance Wheels",
      "Adaptive Air Suspension",
      "Meridian Signature Sound System",
      "Captain's Chairs (2nd Row)",
      "Hands-Free Power Liftgate",
      "Four-Zone Climate Control"
    ],
    description: "The Spectre SUV combines commanding presence with refined luxury. Built for those who demand both capability and sophistication, it delivers exceptional performance whether navigating city streets or exploring off-road adventures.",
    warranty: "6 years / 70,000 miles comprehensive warranty",
    availability: "Available for delivery in 4-6 weeks"
  }
};

export default function VehicleDetailPage({ params }: { params: { id: string } }) {
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);
  const [isWishlisted, setIsWishlisted] = useState(false);

  const vehicle = vehicles[params.id as keyof typeof vehicles];

  if (!vehicle) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <Navigation />
        <div className="text-center pt-20">
          <h1 className="text-4xl font-bold text-foreground mb-4">Vehicle Not Found</h1>
          <Link href="/" className="text-accent hover:underline">
            Return to Homepage
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <div className="pt-20">
        {/* Breadcrumb & Back */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <Link
            href="/"
            className="inline-flex items-center text-muted-foreground hover:text-accent transition-colors"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Homepage
          </Link>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Image Gallery */}
            <div className="space-y-4">
              <div className="relative aspect-[4/3] rounded-xl overflow-hidden bg-card">
                <div
                  className="w-full h-full bg-cover bg-center"
                  style={{ backgroundImage: `url(${vehicle.images[selectedImageIndex]})` }}
                />
                <div className="absolute top-4 right-4 flex gap-2">
                  <Button
                    size="icon"
                    variant="secondary"
                    className="bg-background/80 backdrop-blur-sm"
                    onClick={() => setIsWishlisted(!isWishlisted)}
                  >
                    <Heart className={`w-4 h-4 ${isWishlisted ? 'fill-current text-red-500' : ''}`} />
                  </Button>
                  <Button
                    size="icon"
                    variant="secondary"
                    className="bg-background/80 backdrop-blur-sm"
                  >
                    <Share2 className="w-4 h-4" />
                  </Button>
                </div>
              </div>

              {/* Thumbnail Gallery */}
              <div className="flex gap-2 overflow-x-auto">
                {vehicle.images.map((image, index) => (
                  <button
                    key={index}
                    onClick={() => setSelectedImageIndex(index)}
                    className={`flex-shrink-0 w-20 h-16 rounded-lg overflow-hidden border-2 transition-all ${
                      selectedImageIndex === index
                        ? 'border-accent'
                        : 'border-transparent hover:border-accent/50'
                    }`}
                  >
                    <div
                      className="w-full h-full bg-cover bg-center"
                      style={{ backgroundImage: `url(${image})` }}
                    />
                  </button>
                ))}
              </div>
            </div>

            {/* Vehicle Details */}
            <div className="space-y-6">
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <Badge variant="secondary">{vehicle.year}</Badge>
                  <div className="flex items-center gap-1">
                    <Star className="w-4 h-4 fill-current text-yellow-400" />
                    <span className="text-sm text-muted-foreground">
                      {vehicle.rating} ({vehicle.reviews} reviews)
                    </span>
                  </div>
                </div>

                <h1 className="text-4xl font-bold text-foreground mb-2">
                  {vehicle.name}
                </h1>
                <p className="text-xl text-muted-foreground mb-4">
                  {vehicle.type}
                </p>

                <div className="flex items-center gap-4 mb-6">
                  <div className="text-3xl font-bold gold-text">
                    {vehicle.price}
                  </div>
                  <div className="text-muted-foreground">
                    <span className="line-through">{vehicle.msrp}</span>
                    <Badge variant="destructive" className="ml-2">
                      Save {vehicle.savings}
                    </Badge>
                  </div>
                </div>

                <p className="text-muted-foreground leading-relaxed mb-6">
                  {vehicle.description}
                </p>

                <div className="flex flex-col sm:flex-row gap-4">
                  <Button size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90">
                    <Phone className="w-4 h-4 mr-2" />
                    Call Now
                  </Button>
                  <Button size="lg" variant="outline" className="border-accent text-accent hover:bg-accent hover:text-accent-foreground">
                    <Calendar className="w-4 h-4 mr-2" />
                    Schedule Test Drive
                  </Button>
                </div>

                <div className="mt-6 space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Availability:</span>
                    <span className="text-foreground">{vehicle.availability}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Warranty:</span>
                    <span className="text-foreground">{vehicle.warranty}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Detailed Information Tabs */}
          <div className="mt-16">
            <Tabs defaultValue="specifications" className="w-full">
              <TabsList className="grid grid-cols-3 w-full max-w-2xl mx-auto">
                <TabsTrigger value="specifications">Specifications</TabsTrigger>
                <TabsTrigger value="features">Features</TabsTrigger>
                <TabsTrigger value="financing">Financing</TabsTrigger>
              </TabsList>

              <TabsContent value="specifications" className="mt-8">
                <Card>
                  <CardContent className="p-8">
                    <h3 className="text-2xl font-bold text-foreground mb-6">Technical Specifications</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                      {Object.entries(vehicle.specs).map(([key, value]) => (
                        <div key={key} className="flex justify-between items-center py-2 border-b border-border/20">
                          <span className="text-muted-foreground capitalize">
                            {key.replace(/([A-Z])/g, ' $1').trim()}:
                          </span>
                          <span className="text-foreground font-medium">{value}</span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="features" className="mt-8">
                <Card>
                  <CardContent className="p-8">
                    <h3 className="text-2xl font-bold text-foreground mb-6">Premium Features</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {vehicle.features.map((feature, index) => (
                        <div key={index} className="flex items-center space-x-3">
                          <Award className="w-5 h-5 text-accent flex-shrink-0" />
                          <span className="text-foreground">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="financing" className="mt-8">
                <Card>
                  <CardContent className="p-8">
                    <h3 className="text-2xl font-bold text-foreground mb-6">Financing Options</h3>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                      <div className="bg-card/50 p-6 rounded-lg border border-border/20">
                        <h4 className="text-lg font-semibold text-foreground mb-2">Purchase</h4>
                        <p className="text-3xl font-bold gold-text mb-2">{vehicle.price}</p>
                        <p className="text-muted-foreground text-sm">One-time payment</p>
                      </div>

                      <div className="bg-card/50 p-6 rounded-lg border border-border/20">
                        <h4 className="text-lg font-semibold text-foreground mb-2">Finance</h4>
                        <p className="text-3xl font-bold gold-text mb-2">$1,247/mo</p>
                        <p className="text-muted-foreground text-sm">72 months @ 3.9% APR</p>
                      </div>

                      <div className="bg-card/50 p-6 rounded-lg border border-border/20">
                        <h4 className="text-lg font-semibold text-foreground mb-2">Lease</h4>
                        <p className="text-3xl font-bold gold-text mb-2">$899/mo</p>
                        <p className="text-muted-foreground text-sm">36 months, 12k mi/yr</p>
                      </div>
                    </div>

                    <div className="mt-6 text-center">
                      <Button size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90">
                        Get Pre-Approved
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="mt-20 py-8 bg-card border-t border-border/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-muted-foreground">
            © 2024 Aurora Motors. All Rights Reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}