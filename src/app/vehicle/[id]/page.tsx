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
  Gauge,
  MessageCircle,
  ThumbsUp,
  MapPin,
  Clock,
  CheckCircle,
  AlertCircle,
  TrendingUp,
  Camera
} from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import { Calculator } from "lucide-react";

// Extended mock vehicle database supporting all vehicles from search results
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
      "/generated/genesis-iv-sedan.png",
      "/generated/genesis-iv-sedan.png",
      "/generated/genesis-iv-sedan.png",
      "/generated/genesis-iv-sedan.png"
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
      "/generated/spectre-suv.png",
      "/generated/spectre-suv.png",
      "/generated/spectre-suv.png",
      "/generated/spectre-suv.png"
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
  },
  "phoenix-gt": {
    id: "phoenix-gt",
    name: "Phoenix GT",
    type: "Performance Coupe",
    year: "2024",
    price: "$95,500",
    msrp: "$102,000",
    savings: "$6,500",
    rating: 4.9,
    reviews: 203,
    images: [
      "/generated/phoenix-gt-hero.png",
      "/generated/phoenix-gt-hero.png",
      "/generated/phoenix-gt-hero.png",
      "/generated/phoenix-gt-hero.png"
    ],
    specs: {
      power: "720 HP",
      torque: "650 lb-ft",
      topSpeed: "210 mph",
      acceleration: "0-60: 2.8s",
      engine: "4.0L Twin-Turbo V8",
      transmission: "8-Speed DCT",
      drivetrain: "RWD",
      weight: "3,450 lbs"
    },
    features: [
      "Track-Tuned Suspension Package",
      "Carbon Fiber Aerodynamics Kit",
      "Brembo Carbon-Ceramic Brakes",
      "Forged Carbon Fiber Interior",
      "Racing Bucket Seats with Harnesses",
      "Launch Control System",
      "Active Exhaust with Sport Mode",
      "Performance Data Recorder"
    ],
    description: "The Phoenix GT is the ultimate expression of raw performance and precision engineering. Built for the track but street-legal, this limited production supercar delivers an adrenaline-fueled driving experience that pushes the boundaries of automotive excellence.",
    warranty: "3 years / 36,000 miles comprehensive warranty",
    availability: "Limited production - 6 month wait list"
  },
  "nova-hybrid": {
    id: "nova-hybrid",
    name: "Nova Hybrid",
    type: "Eco-Luxury Sedan",
    year: "2024",
    price: "$52,900",
    msrp: "$56,400",
    savings: "$3,500",
    rating: 4.6,
    reviews: 78,
    images: [
      "/generated/nova-hybrid-hero.png",
      "/generated/nova-hybrid-hero.png",
      "/generated/nova-hybrid-hero.png",
      "/generated/nova-hybrid-hero.png"
    ],
    specs: {
      power: "340 HP (Combined)",
      torque: "295 lb-ft",
      mpg: "42 MPG Combined",
      acceleration: "0-60: 5.1s",
      topSpeed: "130 mph",
      engine: "2.5L Hybrid I4",
      transmission: "CVT",
      drivetrain: "FWD"
    },
    features: [
      "Hybrid Powertrain with Regenerative Braking",
      "Eco-Friendly Vegan Leather Interior",
      "18-inch Low-Rolling-Resistance Wheels",
      "Solar Roof Panel (Optional)",
      "Advanced Driver Assistance Suite",
      "Wireless Apple CarPlay/Android Auto",
      "Dual-Zone Automatic Climate Control",
      "LED Ambient Lighting Package"
    ],
    description: "The Nova Hybrid represents the perfect balance of environmental responsibility and luxury comfort. With advanced hybrid technology and sustainable materials, it offers an eco-conscious driving experience without compromising on performance or refinement.",
    warranty: "10 years / 100,000 miles hybrid warranty",
    availability: "Available for delivery in 3-4 weeks"
  },
  "titan-truck": {
    id: "titan-truck",
    name: "Titan Truck",
    type: "Luxury Pickup",
    year: "2024",
    price: "$72,800",
    msrp: "$77,500",
    savings: "$4,700",
    rating: 4.5,
    reviews: 142,
    images: [
      "/generated/titan-truck-hero.png",
      "/generated/titan-truck-hero.png",
      "/generated/titan-truck-hero.png",
      "/generated/titan-truck-hero.png"
    ],
    specs: {
      power: "450 HP",
      torque: "510 lb-ft",
      towing: "11,200 lbs",
      acceleration: "0-60: 4.8s",
      topSpeed: "112 mph",
      engine: "3.5L Twin-Turbo V6",
      transmission: "10-Speed Automatic",
      drivetrain: "4WD"
    },
    features: [
      "Heavy-Duty Towing Package",
      "Premium Leather-Trimmed Interior",
      "20-inch All-Terrain Wheels",
      "Adaptive Suspension System",
      "Pro-4X Off-Road Package",
      "Bed Utility Package with Power Outlets",
      "Surround View Camera System",
      "Heated and Cooled Front Seats"
    ],
    description: "The Titan Truck combines rugged capability with luxurious comfort. Whether you're hauling heavy loads for work or heading out on weekend adventures, this truck delivers the power and refinement you need to handle any task with confidence.",
    warranty: "5 years / 100,000 miles powertrain warranty",
    availability: "Available for delivery in 2-4 weeks"
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
              <TabsList className="grid grid-cols-5 w-full max-w-4xl mx-auto">
                <TabsTrigger value="specifications">Specifications</TabsTrigger>
                <TabsTrigger value="features">Features</TabsTrigger>
                <TabsTrigger value="financing">Financing</TabsTrigger>
                <TabsTrigger value="reviews">Reviews</TabsTrigger>
                <TabsTrigger value="gallery">Gallery</TabsTrigger>
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
                      <div className="bg-card/50 p-6 rounded-lg border border-border/20 hover:border-accent/50 transition-all duration-300">
                        <h4 className="text-lg font-semibold text-foreground mb-2">Purchase</h4>
                        <p className="text-3xl font-bold gold-text mb-2">{vehicle.price}</p>
                        <p className="text-muted-foreground text-sm">One-time payment</p>
                        <div className="mt-4 pt-4 border-t border-border/20">
                          <div className="flex items-center justify-between text-sm">
                            <span className="text-muted-foreground">Trade-in credit:</span>
                            <span className="text-accent">Up to $15,000</span>
                          </div>
                        </div>
                      </div>

                      <div className="bg-card/50 p-6 rounded-lg border border-border/20 hover:border-accent/50 transition-all duration-300 relative">
                        <Badge className="absolute -top-2 left-4 bg-accent text-accent-foreground">Popular</Badge>
                        <h4 className="text-lg font-semibold text-foreground mb-2">Finance</h4>
                        <p className="text-3xl font-bold gold-text mb-2">$1,247/mo</p>
                        <p className="text-muted-foreground text-sm">72 months @ 3.9% APR</p>
                        <div className="mt-4 pt-4 border-t border-border/20 space-y-2">
                          <div className="flex items-center justify-between text-sm">
                            <span className="text-muted-foreground">Down payment:</span>
                            <span className="text-foreground">$8,000</span>
                          </div>
                          <div className="flex items-center justify-between text-sm">
                            <span className="text-muted-foreground">Total interest:</span>
                            <span className="text-foreground">$7,784</span>
                          </div>
                        </div>
                      </div>

                      <div className="bg-card/50 p-6 rounded-lg border border-border/20 hover:border-accent/50 transition-all duration-300">
                        <h4 className="text-lg font-semibold text-foreground mb-2">Lease</h4>
                        <p className="text-3xl font-bold gold-text mb-2">$899/mo</p>
                        <p className="text-muted-foreground text-sm">36 months, 12k mi/yr</p>
                        <div className="mt-4 pt-4 border-t border-border/20 space-y-2">
                          <div className="flex items-center justify-between text-sm">
                            <span className="text-muted-foreground">Due at signing:</span>
                            <span className="text-foreground">$3,500</span>
                          </div>
                          <div className="flex items-center justify-between text-sm">
                            <span className="text-muted-foreground">Excess mileage:</span>
                            <span className="text-foreground">$0.25/mi</span>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-4">
                      <Button size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90">
                        <CheckCircle className="w-4 h-4 mr-2" />
                        Get Pre-Approved
                      </Button>
                      <Button size="lg" variant="outline" className="border-accent text-accent hover:bg-accent hover:text-accent-foreground">
                        <Calculator className="w-4 h-4 mr-2" />
                        Payment Calculator
                      </Button>
                    </div>

                    <div className="mt-6 p-4 bg-accent/10 rounded-lg border border-accent/20">
                      <div className="flex items-center mb-2">
                        <TrendingUp className="w-5 h-5 text-accent mr-2" />
                        <h4 className="text-lg font-semibold text-foreground">Special Financing Offer</h4>
                      </div>
                      <p className="text-muted-foreground">Qualified buyers can get 1.9% APR for up to 60 months. Offer expires end of month.</p>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="reviews" className="mt-8">
                <Card>
                  <CardContent className="p-8">
                    <div className="flex items-center justify-between mb-6">
                      <h3 className="text-2xl font-bold text-foreground">Customer Reviews</h3>
                      <div className="flex items-center gap-2">
                        <div className="flex items-center gap-1">
                          <Star className="w-5 h-5 fill-current text-yellow-400" />
                          <span className="text-xl font-bold text-foreground">{vehicle.rating}</span>
                        </div>
                        <span className="text-muted-foreground">({vehicle.reviews} reviews)</span>
                      </div>
                    </div>

                    <div className="space-y-6">
                      <div className="border-b border-border/20 pb-6">
                        <div className="flex items-start justify-between mb-4">
                          <div className="flex items-center gap-3">
                            <div className="w-10 h-10 rounded-full bg-accent/20 flex items-center justify-center">
                              <span className="text-accent font-semibold">MJ</span>
                            </div>
                            <div>
                              <p className="font-semibold text-foreground">Michael Johnson</p>
                              <p className="text-sm text-muted-foreground">Verified Owner • 2 months ago</p>
                            </div>
                          </div>
                          <div className="flex items-center gap-1">
                            {[...Array(5)].map((_, i) => (
                              <Star key={i} className="w-4 h-4 fill-current text-yellow-400" />
                            ))}
                          </div>
                        </div>
                        <p className="text-foreground leading-relaxed">
                          "Absolutely incredible vehicle! The performance is outstanding and the luxury features exceed expectations. 
                          The driving experience is smooth and the technology integration is seamless. Highly recommend!"
                        </p>
                        <div className="flex items-center gap-4 mt-4">
                          <Button size="sm" variant="ghost" className="text-muted-foreground hover:text-accent">
                            <ThumbsUp className="w-4 h-4 mr-1" />
                            Helpful (23)
                          </Button>
                          <Button size="sm" variant="ghost" className="text-muted-foreground hover:text-accent">
                            <MessageCircle className="w-4 h-4 mr-1" />
                            Reply
                          </Button>
                        </div>
                      </div>

                      <div className="border-b border-border/20 pb-6">
                        <div className="flex items-start justify-between mb-4">
                          <div className="flex items-center gap-3">
                            <div className="w-10 h-10 rounded-full bg-accent/20 flex items-center justify-center">
                              <span className="text-accent font-semibold">SK</span>
                            </div>
                            <div>
                              <p className="font-semibold text-foreground">Sarah Kim</p>
                              <p className="text-sm text-muted-foreground">Verified Owner • 1 month ago</p>
                            </div>
                          </div>
                          <div className="flex items-center gap-1">
                            {[...Array(5)].map((_, i) => (
                              <Star key={i} className={`w-4 h-4 ${i < 4 ? 'fill-current text-yellow-400' : 'text-gray-300'}`} />
                            ))}
                          </div>
                        </div>
                        <p className="text-foreground leading-relaxed">
                          "Great build quality and attention to detail. The interior is luxurious and comfortable for long drives. 
                          Only minor complaint is the infotainment system could be more intuitive, but overall very satisfied."
                        </p>
                        <div className="flex items-center gap-4 mt-4">
                          <Button size="sm" variant="ghost" className="text-muted-foreground hover:text-accent">
                            <ThumbsUp className="w-4 h-4 mr-1" />
                            Helpful (15)
                          </Button>
                          <Button size="sm" variant="ghost" className="text-muted-foreground hover:text-accent">
                            <MessageCircle className="w-4 h-4 mr-1" />
                            Reply
                          </Button>
                        </div>
                      </div>

                      <div>
                        <div className="flex items-start justify-between mb-4">
                          <div className="flex items-center gap-3">
                            <div className="w-10 h-10 rounded-full bg-accent/20 flex items-center justify-center">
                              <span className="text-accent font-semibold">DL</span>
                            </div>
                            <div>
                              <p className="font-semibold text-foreground">David Lee</p>
                              <p className="text-sm text-muted-foreground">Verified Owner • 3 weeks ago</p>
                            </div>
                          </div>
                          <div className="flex items-center gap-1">
                            {[...Array(5)].map((_, i) => (
                              <Star key={i} className="w-4 h-4 fill-current text-yellow-400" />
                            ))}
                          </div>
                        </div>
                        <p className="text-foreground leading-relaxed">
                          "Exceptional performance and handling. The acceleration is thrilling and the sound system is phenomenal. 
                          Service from the dealership has been top-notch. This car exceeded all my expectations!"
                        </p>
                        <div className="flex items-center gap-4 mt-4">
                          <Button size="sm" variant="ghost" className="text-muted-foreground hover:text-accent">
                            <ThumbsUp className="w-4 h-4 mr-1" />
                            Helpful (31)
                          </Button>
                          <Button size="sm" variant="ghost" className="text-muted-foreground hover:text-accent">
                            <MessageCircle className="w-4 h-4 mr-1" />
                            Reply
                          </Button>
                        </div>
                      </div>
                    </div>

                    <div className="mt-8 text-center">
                      <Button variant="outline" className="border-accent text-accent hover:bg-accent hover:text-accent-foreground">
                        View All Reviews ({vehicle.reviews})
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="gallery" className="mt-8">
                <Card>
                  <CardContent className="p-8">
                    <div className="flex items-center justify-between mb-6">
                      <h3 className="text-2xl font-bold text-foreground">Photo Gallery</h3>
                      <Button variant="outline" className="border-accent text-accent hover:bg-accent hover:text-accent-foreground">
                        <Camera className="w-4 h-4 mr-2" />
                        View 360°
                      </Button>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                      {vehicle.images.map((image, index) => (
                        <div key={index} className="relative aspect-[4/3] rounded-lg overflow-hidden group cursor-pointer">
                          <div
                            className="w-full h-full bg-cover bg-center group-hover:scale-105 transition-transform duration-500"
                            style={{ backgroundImage: `url(${image})` }}
                          />
                          <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300 flex items-center justify-center">
                            <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                              <div className="w-12 h-12 rounded-full bg-background/80 backdrop-blur-sm flex items-center justify-center">
                                <Camera className="w-5 h-5 text-foreground" />
                              </div>
                            </div>
                          </div>
                        </div>
                      ))}
                      
                      {/* Additional gallery items */}
                      <div className="relative aspect-[4/3] rounded-lg overflow-hidden group cursor-pointer bg-card border border-border/20">
                        <div className="w-full h-full flex items-center justify-center">
                          <div className="text-center">
                            <Camera className="w-8 h-8 text-muted-foreground mx-auto mb-2" />
                            <p className="text-sm text-muted-foreground">Interior View</p>
                          </div>
                        </div>
                      </div>
                      
                      <div className="relative aspect-[4/3] rounded-lg overflow-hidden group cursor-pointer bg-card border border-border/20">
                        <div className="w-full h-full flex items-center justify-center">
                          <div className="text-center">
                            <Camera className="w-8 h-8 text-muted-foreground mx-auto mb-2" />
                            <p className="text-sm text-muted-foreground">Engine Bay</p>
                          </div>
                        </div>
                      </div>
                      
                      <div className="relative aspect-[4/3] rounded-lg overflow-hidden group cursor-pointer bg-card border border-border/20">
                        <div className="w-full h-full flex items-center justify-center">
                          <div className="text-center">
                            <Camera className="w-8 h-8 text-muted-foreground mx-auto mb-2" />
                            <p className="text-sm text-muted-foreground">Trunk Space</p>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="mt-8 p-6 bg-accent/10 rounded-lg border border-accent/20">
                      <div className="flex items-center gap-3 mb-4">
                        <div className="w-12 h-12 rounded-full bg-accent flex items-center justify-center">
                          <MapPin className="w-6 h-6 text-accent-foreground" />
                        </div>
                        <div>
                          <h4 className="text-lg font-semibold text-foreground">Schedule a Private Viewing</h4>
                          <p className="text-muted-foreground">Experience this vehicle in person at our showroom</p>
                        </div>
                      </div>
                      <div className="flex flex-col sm:flex-row gap-3">
                        <Button className="bg-accent text-accent-foreground hover:bg-accent/90">
                          <Calendar className="w-4 h-4 mr-2" />
                          Book Appointment
                        </Button>
                        <Button variant="outline" className="border-accent text-accent hover:bg-accent hover:text-accent-foreground">
                          <Clock className="w-4 h-4 mr-2" />
                          Virtual Tour
                        </Button>
                      </div>
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