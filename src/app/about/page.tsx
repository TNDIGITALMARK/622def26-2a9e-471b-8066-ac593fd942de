"use client";

import { Navigation } from "@/components/navigation";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Trophy, Award, Users, Target, Calendar, MapPin, Phone, Mail, Linkedin, Twitter, Globe, CheckCircle, Zap, Shield, Heart } from "lucide-react";
import Link from "next/link";

const companyHistory = [
  {
    year: "1984",
    title: "Founded with Vision",
    description: "Aurora Motors was established with a singular vision: to create vehicles that embody the perfect fusion of luxury, performance, and innovation."
  },
  {
    year: "1992",
    title: "First Luxury Sedan",
    description: "Launched our first luxury sedan, the Genesis I, setting new standards for automotive excellence and customer experience."
  },
  {
    year: "2005",
    title: "Global Expansion",
    description: "Expanded operations internationally, bringing Aurora's commitment to luxury and innovation to discerning customers worldwide."
  },
  {
    year: "2018",
    title: "Electric Revolution",
    description: "Introduced our first fully electric luxury vehicle, pioneering sustainable luxury without compromise."
  },
  {
    year: "2024",
    title: "Future of Mobility",
    description: "Leading the industry with autonomous driving technology and revolutionary electric powertrains."
  }
];

const leadership = [
  {
    name: "Alexander Sterling",
    title: "Chief Executive Officer",
    bio: "With over 25 years in luxury automotive, Alexander has led Aurora Motors to become a global leader in premium vehicles.",
    image: "/generated/ceo-portrait.png"
  },
  {
    name: "Dr. Isabella Chen",
    title: "Chief Technology Officer",
    bio: "Former Tesla engineer with a PhD in Electrical Engineering, Isabella drives Aurora's technological innovation and sustainability initiatives.",
    image: "/generated/cto-portrait.png"
  },
  {
    name: "Marcus Blackwood",
    title: "Chief Design Officer",
    bio: "Award-winning designer with 20+ years at premium brands, Marcus shapes Aurora's distinctive aesthetic and user experience.",
    image: "/generated/cdo-portrait.png"
  },
  {
    name: "Sarah Williams",
    title: "Chief Operating Officer",
    bio: "Operations expert with extensive experience in luxury manufacturing, ensuring Aurora's commitment to quality and excellence.",
    image: "/generated/coo-portrait.png"
  }
];

const coreValues = [
  {
    icon: <Trophy className="w-12 h-12" />,
    title: "Excellence",
    description: "We pursue perfection in every detail, from engineering to customer service, never settling for anything less than extraordinary."
  },
  {
    icon: <Zap className="w-12 h-12" />,
    title: "Innovation",
    description: "We push the boundaries of what's possible, pioneering technologies that define the future of luxury automotive."
  },
  {
    icon: <Shield className="w-12 h-12" />,
    title: "Integrity",
    description: "We build trust through transparent business practices, authentic relationships, and unwavering commitment to our promises."
  },
  {
    icon: <Heart className="w-12 h-12" />,
    title: "Passion",
    description: "Our love for automotive excellence drives everything we do, from conception to delivery of each Aurora vehicle."
  }
];

const milestones = [
  { number: "40+", label: "Years of Excellence", icon: <Calendar className="w-8 h-8" /> },
  { number: "25K+", label: "Satisfied Customers", icon: <Users className="w-8 h-8" /> },
  { number: "150+", label: "Global Awards", icon: <Award className="w-8 h-8" /> },
  { number: "99.8%", label: "Customer Satisfaction", icon: <Target className="w-8 h-8" /> }
];

const facilities = [
  {
    location: "New York Flagship",
    address: "123 Luxury Drive, Premium District, NY 10001",
    description: "Our flagship showroom and headquarters, featuring the complete Aurora collection.",
    contact: "(555) 123-4567"
  },
  {
    location: "Beverly Hills",
    address: "456 Rodeo Drive, Beverly Hills, CA 90210",
    description: "West Coast showroom serving our discerning California clientele.",
    contact: "(555) 234-5678"
  },
  {
    location: "Miami Beach",
    address: "789 Ocean Drive, Miami Beach, FL 33139",
    description: "Tropical luxury destination showcasing our latest electric collection.",
    contact: "(555) 345-6789"
  }
];

export default function AboutPage() {
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
            <h1 className="text-5xl sm:text-7xl font-bold text-foreground mb-6 leading-tight">
              ABOUT <span className="gold-text">AURORA MOTORS</span>
            </h1>
            <p className="text-xl sm:text-2xl text-muted-foreground mb-8 max-w-4xl mx-auto">
              For over four decades, we've been crafting extraordinary vehicles that represent the pinnacle of luxury, performance, and innovation. Our story is one of relentless pursuit of automotive excellence.
            </p>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-card/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div>
              <h2 className="text-4xl font-bold text-foreground mb-6">
                OUR <span className="gold-text">MISSION</span>
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                To create exceptional luxury vehicles that inspire passion, deliver uncompromising performance, and provide an ownership experience that exceeds the highest expectations of our discerning clientele.
              </p>
              <div className="space-y-4">
                <div className="flex items-start">
                  <CheckCircle className="w-6 h-6 text-accent mr-3 mt-1 flex-shrink-0" />
                  <p className="text-muted-foreground">Uncompromising commitment to quality and craftsmanship</p>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="w-6 h-6 text-accent mr-3 mt-1 flex-shrink-0" />
                  <p className="text-muted-foreground">Innovation that pushes the boundaries of automotive excellence</p>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="w-6 h-6 text-accent mr-3 mt-1 flex-shrink-0" />
                  <p className="text-muted-foreground">Customer experience that defines luxury service standards</p>
                </div>
              </div>
            </div>

            <div>
              <h2 className="text-4xl font-bold text-foreground mb-6">
                OUR <span className="gold-text">VISION</span>
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                To be the world's most prestigious automotive brand, setting the standard for luxury, sustainability, and technological innovation while creating vehicles that represent the future of premium mobility.
              </p>
              <div className="space-y-4">
                <div className="flex items-start">
                  <CheckCircle className="w-6 h-6 text-accent mr-3 mt-1 flex-shrink-0" />
                  <p className="text-muted-foreground">Leading the transition to sustainable luxury transportation</p>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="w-6 h-6 text-accent mr-3 mt-1 flex-shrink-0" />
                  <p className="text-muted-foreground">Pioneering autonomous driving and smart vehicle technologies</p>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="w-6 h-6 text-accent mr-3 mt-1 flex-shrink-0" />
                  <p className="text-muted-foreground">Building an exclusive community of automotive enthusiasts</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Company History */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-6">
              OUR <span className="gold-text">JOURNEY</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Four decades of innovation, excellence, and luxury automotive leadership.
            </p>
          </div>

          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-1/2 transform -translate-x-0.5 w-0.5 bg-accent/30 h-full hidden lg:block" />
            
            <div className="space-y-12">
              {companyHistory.map((item, index) => (
                <div key={index} className={`flex flex-col lg:flex-row items-center lg:items-start gap-8 ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'}`}>
                  <div className="flex-1 lg:text-right">
                    <Card className={`bg-card border-border/20 hover:border-accent/50 transition-all duration-500 ${index % 2 === 0 ? 'lg:mr-8' : 'lg:ml-8'}`}>
                      <CardContent className="p-8">
                        <div className="text-3xl font-bold gold-text mb-4">{item.year}</div>
                        <h3 className="text-2xl font-bold text-foreground mb-4">{item.title}</h3>
                        <p className="text-muted-foreground leading-relaxed">{item.description}</p>
                      </CardContent>
                    </Card>
                  </div>
                  
                  {/* Timeline dot */}
                  <div className="hidden lg:flex w-6 h-6 rounded-full bg-accent border-4 border-background flex-shrink-0 z-10" />
                  
                  <div className="flex-1" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-20 bg-card/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-6">
              OUR <span className="gold-text">VALUES</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              The principles that guide everything we do and define who we are as a company.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {coreValues.map((value, index) => (
              <div key={index} className="text-center group hover:transform hover:scale-105 transition-all duration-500">
                <div className="inline-flex items-center justify-center w-24 h-24 rounded-full bg-accent/10 text-accent group-hover:bg-accent group-hover:text-accent-foreground transition-all duration-500 mb-6">
                  {value.icon}
                </div>
                <h3 className="text-2xl font-bold text-foreground mb-4 group-hover:text-accent transition-colors">
                  {value.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership Team */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-6">
              LEADERSHIP <span className="gold-text">TEAM</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Meet the visionaries and industry experts who drive Aurora Motors' continued success and innovation.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {leadership.map((leader, index) => (
              <Card key={index} className="bg-card border-border/20 hover:border-accent/50 transition-all duration-500 overflow-hidden group">
                <div 
                  className="h-80 bg-cover bg-center group-hover:scale-105 transition-transform duration-700"
                  style={{ backgroundImage: `url(${leader.image})` }}
                />
                <CardContent className="p-6 text-center">
                  <h3 className="text-xl font-bold text-foreground mb-2 group-hover:text-accent transition-colors">
                    {leader.name}
                  </h3>
                  <p className="text-accent font-medium mb-4">{leader.title}</p>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {leader.bio}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Company Statistics */}
      <section className="py-20 bg-card/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-6">
              BY THE <span className="gold-text">NUMBERS</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Four decades of achievement, innovation, and customer satisfaction.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {milestones.map((stat, index) => (
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

      {/* Locations */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-6">
              OUR <span className="gold-text">LOCATIONS</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Visit our luxury showrooms and experience Aurora Motors in person.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {facilities.map((facility, index) => (
              <Card key={index} className="bg-card border-border/20 hover:border-accent/50 transition-all duration-500">
                <CardContent className="p-8 text-center">
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-accent/10 text-accent mb-6">
                    <MapPin className="w-8 h-8" />
                  </div>
                  <h3 className="text-2xl font-bold text-foreground mb-4">{facility.location}</h3>
                  <p className="text-muted-foreground mb-4">{facility.address}</p>
                  <p className="text-muted-foreground text-sm mb-6">{facility.description}</p>
                  <div className="flex items-center justify-center text-accent">
                    <Phone className="w-4 h-4 mr-2" />
                    <span className="font-medium">{facility.contact}</span>
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
            EXPERIENCE <span className="gold-text">AURORA MOTORS</span>
          </h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
            Ready to discover the future of luxury automotive? Visit our showroom, schedule a test drive, or explore our collection online.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90 text-lg px-8 py-4" asChild>
              <Link href="/search">
                Explore Vehicles
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-accent text-accent hover:bg-accent hover:text-accent-foreground text-lg px-8 py-4"
              asChild
            >
              <Link href="/contact">
                Contact Us
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