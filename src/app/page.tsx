"use client";

import { useState } from "react";
import { Navigation } from "@/components/navigation";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Shield, Wrench, Phone, Star, Car, Zap, Award, Users, Trophy, CheckCircle, Target } from "lucide-react";
import Link from "next/link";
import BookingForm from "@/components/booking-form";

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

const whyChooseUs = [
  {
    icon: <Trophy className="w-16 h-16" />,
    title: "40+ Years of Excellence",
    description: "Four decades of automotive expertise and uncompromising quality"
  },
  {
    icon: <Award className="w-16 h-16" />,
    title: "Award-Winning Designs",
    description: "Recognized globally for innovation and engineering excellence"
  },
  {
    icon: <Users className="w-16 h-16" />,
    title: "Exclusive Ownership",
    description: "Join an elite community of discerning automotive enthusiasts"
  },
  {
    icon: <CheckCircle className="w-16 h-16" />,
    title: "Lifetime Warranty",
    description: "Comprehensive coverage that protects your investment forever"
  }
];

const testimonials = [
  {
    name: "Marcus Blackwood",
    title: "CEO, Blackwood Industries",
    rating: 5,
    content: "The Aurora EX exceeded every expectation. The attention to detail and performance is simply unmatched in the luxury automotive space.",
    image: "/generated/testimonial-1.png"
  },
  {
    name: "Isabella Chen",
    title: "Investment Partner",
    rating: 5,
    content: "Aurora Motors delivers on their promise of luxury and innovation. My Genesis IV has been a masterpiece of engineering and comfort.",
    image: "/generated/testimonial-2.png"
  },
  {
    name: "Dr. James Morrison",
    title: "Tech Entrepreneur",
    rating: 5,
    content: "Exceptional build quality and cutting-edge technology. The customer service experience was as impressive as the vehicle itself.",
    image: "/generated/testimonial-3.png"
  }
];

const companyStats = [
  { number: "40+", label: "Years of Excellence", icon: <Trophy className="w-8 h-8" /> },
  { number: "25K+", label: "Satisfied Customers", icon: <Users className="w-8 h-8" /> },
  { number: "150+", label: "Global Awards", icon: <Award className="w-8 h-8" /> },
  { number: "99.8%", label: "Customer Satisfaction", icon: <Target className="w-8 h-8" /> }
];

const technologies = [
  {
    icon: <Car className="w-12 h-12" />,
    title: "Advanced Powertrains",
    description: "Cutting-edge hybrid and electric propulsion systems"
  },
  {
    icon: <Zap className="w-12 h-12" />,
    title: "Smart Technology",
    description: "AI-powered systems for enhanced safety and performance"
  },
  {
    icon: <Shield className="w-12 h-12" />,
    title: "Safety Innovation",
    description: "Next-generation safety features and autonomous capabilities"
  }
];

const awards = [
  {
    year: "2024",
    title: "Luxury Car of the Year",
    organization: "International Automotive Excellence Awards",
    model: "Aurora EX"
  },
  {
    year: "2023",
    title: "Best Premium Electric Vehicle",
    organization: "Green Car Awards",
    model: "Aurora EX"
  },
  {
    year: "2023",
    title: "Design Excellence Award",
    organization: "World Car Design Awards",
    model: "Genesis IV"
  },
  {
    year: "2022",
    title: "Safety Innovation Award",
    organization: "IIHS Top Safety Pick+",
    model: "Spectre SUV"
  }
];

export default function HomePage() {
  const [isBookingFormOpen, setIsBookingFormOpen] = useState(false);
  const [selectedVehicle, setSelectedVehicle] = useState<string>("");

  const handleScheduleTestDrive = (vehicleModel?: string) => {
    setSelectedVehicle(vehicleModel || "");
    setIsBookingFormOpen(true);
  };

  const handleCloseBookingForm = () => {
    setIsBookingFormOpen(false);
    setSelectedVehicle("");
  };

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
                onClick={handleScheduleTestDrive}
                data-phoenix-id="phoenix-1758675578579-27"
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
                      onClick={() => handleScheduleTestDrive(vehicle.name)}
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

      {/* Why Choose Aurora Motors Section */}
      <section className="py-20 bg-gradient-to-b from-background via-card/20 to-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-6">
              WHY CHOOSE <span className="gold-text">AURORA MOTORS</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              When you choose Aurora Motors, you're not just buying a vehicle—you're investing in a legacy of excellence, innovation, and uncompromising luxury.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {whyChooseUs.map((feature, index) => (
              <div
                key={index}
                className="text-center group hover:transform hover:scale-105 transition-all duration-500"
              >
                <div className="inline-flex items-center justify-center w-32 h-32 rounded-full bg-accent/10 text-accent group-hover:bg-accent group-hover:text-accent-foreground transition-all duration-500 mb-6">
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

      {/* Company Statistics */}
      <section className="py-20 bg-card/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-6">
              PROVEN <span className="gold-text">EXCELLENCE</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {companyStats.map((stat, index) => (
              <div key={index} className="text-center group">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-accent/10 text-accent group-hover:bg-accent group-hover:text-accent-foreground transition-all duration-500 mb-4">
                  {stat.icon}
                </div>
                <div className="text-4xl font-bold gold-text mb-2">{stat.number}</div>
                <div className="text-muted-foreground text-lg">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Customer Testimonials */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-6">
              CLIENT <span className="gold-text">TESTIMONIALS</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Don't just take our word for it. Hear from our distinguished clientele who have experienced the Aurora Motors difference.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="bg-card border-border/20 hover:border-accent/50 transition-all duration-500">
                <CardContent className="p-8">
                  <div className="flex items-center mb-6">
                    <div className="w-16 h-16 rounded-full bg-accent/20 flex items-center justify-center mr-4">
                      <Users className="w-8 h-8 text-accent" />
                    </div>
                    <div>
                      <h4 className="font-bold text-foreground">{testimonial.name}</h4>
                      <p className="text-muted-foreground text-sm">{testimonial.title}</p>
                    </div>
                  </div>
                  
                  <div className="flex mb-6">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-accent text-accent" />
                    ))}
                  </div>
                  
                  <p className="text-muted-foreground leading-relaxed italic">
                    "{testimonial.content}"
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Technology & Innovation */}
      <section className="py-20 bg-card/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-6">
              TECHNOLOGY & <span className="gold-text">INNOVATION</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              At the forefront of automotive innovation, Aurora Motors integrates cutting-edge technology with timeless luxury.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {technologies.map((tech, index) => (
              <div
                key={index}
                className="text-center group hover:transform hover:scale-105 transition-all duration-500"
              >
                <div className="inline-flex items-center justify-center w-24 h-24 rounded-full bg-accent/10 text-accent group-hover:bg-accent group-hover:text-accent-foreground transition-all duration-500 mb-6">
                  {tech.icon}
                </div>
                <h3 className="text-2xl font-bold text-foreground mb-4 group-hover:text-accent transition-colors">
                  {tech.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {tech.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Awards & Recognition */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-6">
              AWARDS & <span className="gold-text">RECOGNITION</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Our commitment to excellence has been recognized by the most prestigious organizations in the automotive industry.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {awards.map((award, index) => (
              <Card key={index} className="bg-card border-border/20 hover:border-accent/50 transition-all duration-500 text-center">
                <CardContent className="p-6">
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-accent/10 text-accent mb-4">
                    <Award className="w-8 h-8" />
                  </div>
                  <div className="text-2xl font-bold gold-text mb-2">{award.year}</div>
                  <h4 className="text-lg font-bold text-foreground mb-2">{award.title}</h4>
                  <p className="text-muted-foreground text-sm mb-2">{award.organization}</p>
                  <Badge className="bg-accent/10 text-accent border-accent/20">
                    {award.model}
                  </Badge>
                </CardContent>
              </Card>
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
      
      {/* Booking Form Modal */}
      <BookingForm
        isOpen={isBookingFormOpen}
        onClose={handleCloseBookingForm}
        vehicleModel={selectedVehicle}
      />
    </div>
  );
}