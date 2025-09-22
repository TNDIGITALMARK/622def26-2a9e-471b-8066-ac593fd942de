"use client";

import { Navigation } from "@/components/navigation";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Shield, 
  Wrench, 
  Phone, 
  Car, 
  Settings, 
  Clock, 
  Award, 
  Users, 
  MapPin,
  CreditCard,
  Truck,
  Calendar,
  CheckCircle,
  ArrowRight,
  Star,
  Zap,
  Heart
} from "lucide-react";

const mainServices = [
  {
    icon: <Shield className="w-16 h-16" />,
    title: "Concierge Service",
    description: "White-glove customer experience with personalized assistance for every aspect of your ownership journey.",
    features: [
      "Personal automotive consultant",
      "Vehicle customization guidance",
      "Exclusive events and previews",
      "Priority scheduling"
    ],
    badge: "Premium",
    image: "/generated/concierge-service.png"
  },
  {
    icon: <Wrench className="w-16 h-16" />,
    title: "Expert Maintenance",
    description: "Certified technicians and premium service facilities using only genuine parts and advanced diagnostics.",
    features: [
      "Factory-trained technicians",
      "Genuine Aurora parts only",
      "Advanced diagnostic equipment",
      "Complimentary vehicle health reports"
    ],
    badge: "Certified",
    image: "/generated/expert-maintenance.png"
  },
  {
    icon: <Phone className="w-16 h-16" />,
    title: "24/7 Support",
    description: "Round-the-clock customer support and roadside assistance wherever your journey takes you.",
    features: [
      "Emergency roadside assistance",
      "Technical support hotline",
      "Concierge travel planning",
      "Insurance claim assistance"
    ],
    badge: "Always Available",
    image: "/generated/24-7-support.png"
  }
];

const additionalServices = [
  {
    icon: <Car className="w-12 h-12" />,
    title: "Vehicle Detailing",
    description: "Professional detailing services to keep your Aurora vehicle in pristine condition."
  },
  {
    icon: <Settings className="w-12 h-12" />,
    title: "Performance Tuning",
    description: "Expert performance optimization and ECU tuning for enhanced driving dynamics."
  },
  {
    icon: <Clock className="w-12 h-12" />,
    title: "Express Service",
    description: "Quick maintenance services including oil changes, inspections, and minor repairs."
  },
  {
    icon: <MapPin className="w-12 h-12" />,
    title: "Mobile Service",
    description: "On-site maintenance and repairs at your home or office for ultimate convenience."
  },
  {
    icon: <CreditCard className="w-12 h-12" />,
    title: "Financing Options",
    description: "Flexible financing and leasing programs tailored to your specific needs."
  },
  {
    icon: <Truck className="w-12 h-12" />,
    title: "Vehicle Delivery",
    description: "Complimentary vehicle delivery and pickup services within our service area."
  }
];

const servicePackages = [
  {
    name: "Essential Care",
    price: "$299/year",
    description: "Basic maintenance and support",
    features: [
      "2 Oil changes per year",
      "Multi-point inspection",
      "24/7 roadside assistance",
      "Priority booking"
    ],
    popular: false
  },
  {
    name: "Premium Care",
    price: "$599/year", 
    description: "Comprehensive maintenance package",
    features: [
      "4 Oil changes per year",
      "Brake and tire inspection",
      "Battery and fluid checks",
      "Complimentary car wash",
      "Mobile service available",
      "Loaner vehicle priority"
    ],
    popular: true
  },
  {
    name: "Elite Care",
    price: "$999/year",
    description: "Ultimate luxury service experience",
    features: [
      "Unlimited oil changes",
      "Comprehensive inspections",
      "Priority mobile service",
      "Concierge pickup/delivery",
      "Annual detailing service",
      "Extended warranty coverage"
    ],
    popular: false
  }
];

const testimonials = [
  {
    name: "Alexandra Sterling",
    title: "Business Executive",
    content: "The concierge service is exceptional. They handle everything from scheduling to pickup and delivery. It's luxury service at its finest.",
    rating: 5
  },
  {
    name: "Robert Chen", 
    title: "Tech Entrepreneur",
    content: "Their mobile service team came to my office for routine maintenance. Professional, efficient, and saved me hours of time.",
    rating: 5
  },
  {
    name: "Diana Rodriguez",
    title: "Healthcare Professional", 
    content: "The 24/7 support has been invaluable. When I had an issue during a late night drive, they were there immediately.",
    rating: 5
  }
];

const serviceStats = [
  { number: "99.8%", label: "Customer Satisfaction", icon: <Star className="w-8 h-8" /> },
  { number: "24/7", label: "Support Available", icon: <Clock className="w-8 h-8" /> },
  { number: "150+", label: "Service Centers", icon: <MapPin className="w-8 h-8" /> },
  { number: "30", label: "Years Experience", icon: <Award className="w-8 h-8" /> }
];

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero Section */}
      <section className="relative pt-20 pb-16 bg-gradient-to-br from-background via-card/20 to-background">
        <div 
          className="absolute inset-0 z-0 opacity-10"
          style={{
            backgroundImage: "url('/generated/concierge-service.png')",
            backgroundSize: "cover",
            backgroundPosition: "center"
          }}
        />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-5xl sm:text-7xl font-bold text-foreground mb-8 leading-tight">
              PREMIUM <span className="gold-text">SERVICES</span>
            </h1>
            <p className="text-xl sm:text-2xl text-muted-foreground mb-12 max-w-3xl mx-auto">
              Experience unparalleled automotive care with our comprehensive suite of luxury services, 
              designed to exceed every expectation and ensure your Aurora vehicle receives the attention it deserves.
            </p>
            <Button size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90 text-lg px-8 py-4">
              Schedule Service
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </div>
        </div>
      </section>

      {/* Service Statistics */}
      <section className="py-16 bg-card/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {serviceStats.map((stat, index) => (
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

      {/* Main Services */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-6">
              SIGNATURE <span className="gold-text">SERVICES</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Our flagship services designed to provide the ultimate luxury automotive experience.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {mainServices.map((service, index) => (
              <Card key={index} className="group bg-card border-border/20 hover:border-accent/50 transition-all duration-500 h-full overflow-hidden">
                <div className="relative h-48 bg-card/50">
                  <div
                    className="absolute inset-0 bg-cover bg-center opacity-30 group-hover:opacity-50 transition-opacity duration-500"
                    style={{ backgroundImage: `url(${service.image})` }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-card/80 to-transparent" />
                  <div className="absolute bottom-4 left-4">
                    <Badge className="bg-accent/90 text-accent-foreground border-accent">
                      {service.badge}
                    </Badge>
                  </div>
                </div>
                
                <CardContent className="p-8 h-full flex flex-col">
                  <div className="text-center mb-6">
                    <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-accent/10 text-accent group-hover:bg-accent group-hover:text-accent-foreground transition-all duration-500 mb-4">
                      {service.icon}
                    </div>
                    <h3 className="text-2xl font-bold text-foreground group-hover:text-accent transition-colors mb-4">
                      {service.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed mb-6">
                      {service.description}
                    </p>
                  </div>
                  
                  <div className="mt-auto">
                    <h4 className="text-lg font-semibold text-foreground mb-3">Features:</h4>
                    <ul className="space-y-2">
                      {service.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center text-muted-foreground">
                          <CheckCircle className="w-4 h-4 text-accent mr-2 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Services Grid */}
      <section className="py-20 bg-card/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-6">
              ADDITIONAL <span className="gold-text">SERVICES</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Comprehensive automotive services to meet every need and exceed every expectation.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {additionalServices.map((service, index) => (
              <div
                key={index}
                className="text-center group hover:transform hover:scale-105 transition-all duration-500 p-6 rounded-lg bg-card/50 border border-border/20 hover:border-accent/50"
              >
                <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-accent/10 text-accent group-hover:bg-accent group-hover:text-accent-foreground transition-all duration-500 mb-6">
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold text-foreground mb-4 group-hover:text-accent transition-colors">
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

      {/* Service Packages */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-6">
              SERVICE <span className="gold-text">PACKAGES</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Choose the perfect service package that fits your lifestyle and driving needs.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {servicePackages.map((pkg, index) => (
              <Card 
                key={index} 
                className={`relative bg-card border-border/20 hover:border-accent/50 transition-all duration-500 h-full ${
                  pkg.popular ? 'ring-2 ring-accent/50 transform scale-105' : ''
                }`}
              >
                {pkg.popular && (
                  <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-accent text-accent-foreground">
                    Most Popular
                  </Badge>
                )}
                
                <CardContent className="p-8 h-full flex flex-col text-center">
                  <div className="mb-6">
                    <h3 className="text-2xl font-bold text-foreground mb-2">{pkg.name}</h3>
                    <div className="text-4xl font-bold gold-text mb-2">{pkg.price}</div>
                    <p className="text-muted-foreground">{pkg.description}</p>
                  </div>
                  
                  <div className="flex-1">
                    <ul className="space-y-3 text-left">
                      {pkg.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center text-muted-foreground">
                          <CheckCircle className="w-4 h-4 text-accent mr-3 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <Button 
                    className={`mt-8 w-full ${
                      pkg.popular 
                        ? 'bg-accent text-accent-foreground hover:bg-accent/90' 
                        : 'bg-card border border-accent text-accent hover:bg-accent hover:text-accent-foreground'
                    }`}
                  >
                    Choose Package
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Customer Testimonials */}
      <section className="py-20 bg-card/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-6">
              CLIENT <span className="gold-text">TESTIMONIALS</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Hear what our valued customers say about our premium services.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="bg-card border-border/20 hover:border-accent/50 transition-all duration-500">
                <CardContent className="p-8">
                  <div className="flex mb-6">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-accent text-accent" />
                    ))}
                  </div>
                  
                  <p className="text-muted-foreground leading-relaxed italic mb-6">
                    "{testimonial.content}"
                  </p>
                  
                  <div className="flex items-center">
                    <div className="w-12 h-12 rounded-full bg-accent/20 flex items-center justify-center mr-4">
                      <Heart className="w-6 h-6 text-accent" />
                    </div>
                    <div>
                      <h4 className="font-bold text-foreground">{testimonial.name}</h4>
                      <p className="text-muted-foreground text-sm">{testimonial.title}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-6">
              READY TO <span className="gold-text">GET STARTED?</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
              Experience the Aurora Motors difference with our premium services. Contact us today to schedule your appointment.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <Card className="bg-card border-border/20 hover:border-accent/50 transition-all duration-500">
              <CardContent className="p-8">
                <Phone className="w-12 h-12 text-accent mx-auto mb-4" />
                <h3 className="text-xl font-bold text-foreground mb-2">Call Us</h3>
                <p className="text-muted-foreground mb-4">Speak directly with our service advisors</p>
                <p className="text-accent font-semibold">(555) 123-SERVICE</p>
              </CardContent>
            </Card>

            <Card className="bg-card border-border/20 hover:border-accent/50 transition-all duration-500">
              <CardContent className="p-8">
                <Calendar className="w-12 h-12 text-accent mx-auto mb-4" />
                <h3 className="text-xl font-bold text-foreground mb-2">Book Online</h3>
                <p className="text-muted-foreground mb-4">Schedule your service appointment online</p>
                <Button className="bg-accent text-accent-foreground hover:bg-accent/90">
                  Schedule Now
                </Button>
              </CardContent>
            </Card>

            <Card className="bg-card border-border/20 hover:border-accent/50 transition-all duration-500">
              <CardContent className="p-8">
                <MapPin className="w-12 h-12 text-accent mx-auto mb-4" />
                <h3 className="text-xl font-bold text-foreground mb-2">Visit Us</h3>
                <p className="text-muted-foreground mb-4">Find your nearest Aurora service center</p>
                <p className="text-accent font-semibold">Find Locations</p>
              </CardContent>
            </Card>
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