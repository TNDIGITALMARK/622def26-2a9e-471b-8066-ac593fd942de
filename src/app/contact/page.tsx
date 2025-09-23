"use client";

import { Navigation } from "@/components/navigation";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import { 
  MapPin, 
  Phone, 
  Mail, 
  Clock, 
  Calendar, 
  MessageCircle, 
  Send, 
  CheckCircle,
  Car,
  Wrench,
  CreditCard,
  User,
  Globe,
  Twitter,
  Linkedin,
  Facebook
} from "lucide-react";
import Link from "next/link";
import { useState } from "react";

const contactMethods = [
  {
    icon: <Phone className="w-8 h-8" />,
    title: "Call Us",
    description: "Speak with our luxury automotive specialists",
    contact: "+1 (555) 123-4567",
    hours: "Mon-Sat: 9AM-8PM, Sun: 11AM-6PM",
    action: "Call Now"
  },
  {
    icon: <Mail className="w-8 h-8" />,
    title: "Email Us",
    description: "Send us a message and we'll respond within 2 hours",
    contact: "contact@auroramotors.com",
    hours: "24/7 Response",
    action: "Send Email"
  },
  {
    icon: <MessageCircle className="w-8 h-8" />,
    title: "Live Chat",
    description: "Get instant answers to your questions",
    contact: "Available on all pages",
    hours: "Mon-Sun: 8AM-10PM",
    action: "Start Chat"
  }
];

const departments = [
  {
    title: "Sales Department",
    icon: <Car className="w-6 h-6" />,
    description: "New and pre-owned vehicle inquiries, test drives, financing options",
    phone: "+1 (555) 123-4567",
    email: "sales@auroramotors.com"
  },
  {
    title: "Service Department", 
    icon: <Wrench className="w-6 h-6" />,
    description: "Maintenance, repairs, warranty service, parts ordering",
    phone: "+1 (555) 234-5678",
    email: "service@auroramotors.com"
  },
  {
    title: "Finance Department",
    icon: <CreditCard className="w-6 h-6" />,
    description: "Financing, leasing, insurance, trade-in valuations",
    phone: "+1 (555) 345-6789", 
    email: "finance@auroramotors.com"
  }
];

const locations = [
  {
    name: "New York Flagship",
    address: "123 Luxury Drive, Premium District, NY 10001",
    phone: "+1 (555) 123-4567",
    hours: {
      weekday: "Mon-Fri: 9AM-8PM",
      weekend: "Sat-Sun: 10AM-6PM"
    },
    services: ["Sales", "Service", "Parts", "Finance"]
  },
  {
    name: "Beverly Hills",
    address: "456 Rodeo Drive, Beverly Hills, CA 90210", 
    phone: "+1 (555) 234-5678",
    hours: {
      weekday: "Mon-Fri: 9AM-7PM",
      weekend: "Sat-Sun: 10AM-5PM"
    },
    services: ["Sales", "Service", "Finance"]
  },
  {
    name: "Miami Beach",
    address: "789 Ocean Drive, Miami Beach, FL 33139",
    phone: "+1 (555) 345-6789",
    hours: {
      weekday: "Mon-Fri: 9AM-7PM", 
      weekend: "Sat-Sun: 11AM-6PM"
    },
    services: ["Sales", "Finance"]
  }
];

export default function ContactPage() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
    preferredContact: "",
    interestedIn: ""
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    setIsSubmitted(true);
    setTimeout(() => setIsSubmitted(false), 3000);
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero Section */}
      <section className="relative pt-20 pb-20 overflow-hidden">
        <div
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: "url('/generated/concierge-service.png')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            filter: "brightness(0.3)"
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background/90 via-background/60 to-background/90 z-10" />

        <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16">
          <div className="text-center">
            <h1 className="text-5xl sm:text-7xl font-bold text-foreground mb-6 leading-tight">
              CONTACT <span className="gold-text">US</span>
            </h1>
            <p className="text-xl sm:text-2xl text-muted-foreground mb-8 max-w-4xl mx-auto">
              Experience personalized luxury service. Our dedicated team is here to assist you with all your automotive needs, from sales consultation to service appointments.
            </p>
          </div>
        </div>
      </section>

      {/* Quick Contact Methods */}
      <section className="py-20 bg-card/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-6">
              GET IN <span className="gold-text">TOUCH</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Choose your preferred method of contact. Our luxury service team is ready to assist you.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {contactMethods.map((method, index) => (
              <Card key={index} className="bg-card border-border/20 hover:border-accent/50 transition-all duration-500 text-center group">
                <CardContent className="p-8">
                  <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-accent/10 text-accent group-hover:bg-accent group-hover:text-accent-foreground transition-all duration-500 mb-6">
                    {method.icon}
                  </div>
                  <h3 className="text-2xl font-bold text-foreground mb-4 group-hover:text-accent transition-colors">
                    {method.title}
                  </h3>
                  <p className="text-muted-foreground mb-4">
                    {method.description}
                  </p>
                  <div className="text-accent font-semibold text-lg mb-2">
                    {method.contact}
                  </div>
                  <div className="text-muted-foreground text-sm mb-6">
                    {method.hours}
                  </div>
                  <Button 
                    className="bg-accent text-accent-foreground hover:bg-accent/90"
                    size="sm"
                  >
                    {method.action}
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form & Department Info */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Contact Form */}
            <div>
              <h2 className="text-4xl font-bold text-foreground mb-6">
                SEND US A <span className="gold-text">MESSAGE</span>
              </h2>
              <p className="text-muted-foreground mb-8 leading-relaxed">
                Fill out the form below and our team will respond within 2 hours during business hours. For immediate assistance, please call us directly.
              </p>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      First Name *
                    </label>
                    <Input
                      type="text"
                      required
                      value={formData.firstName}
                      onChange={(e) => handleInputChange('firstName', e.target.value)}
                      className="bg-card/50 border-border/20"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Last Name *
                    </label>
                    <Input
                      type="text"
                      required
                      value={formData.lastName}
                      onChange={(e) => handleInputChange('lastName', e.target.value)}
                      className="bg-card/50 border-border/20"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Email Address *
                    </label>
                    <Input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => handleInputChange('email', e.target.value)}
                      className="bg-card/50 border-border/20"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Phone Number
                    </label>
                    <Input
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => handleInputChange('phone', e.target.value)}
                      className="bg-card/50 border-border/20"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    I'm interested in *
                  </label>
                  <Select onValueChange={(value) => handleInputChange('interestedIn', value)}>
                    <SelectTrigger className="bg-card/50 border-border/20">
                      <SelectValue placeholder="Select your interest" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="new-vehicle">New Vehicle Purchase</SelectItem>
                      <SelectItem value="pre-owned">Pre-Owned Vehicle</SelectItem>
                      <SelectItem value="test-drive">Schedule Test Drive</SelectItem>
                      <SelectItem value="service">Service Appointment</SelectItem>
                      <SelectItem value="financing">Financing Options</SelectItem>
                      <SelectItem value="trade-in">Trade-in Valuation</SelectItem>
                      <SelectItem value="general">General Inquiry</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Preferred Contact Method
                  </label>
                  <Select onValueChange={(value) => handleInputChange('preferredContact', value)}>
                    <SelectTrigger className="bg-card/50 border-border/20">
                      <SelectValue placeholder="Select contact preference" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="email">Email</SelectItem>
                      <SelectItem value="phone">Phone</SelectItem>
                      <SelectItem value="text">Text Message</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Message *
                  </label>
                  <Textarea
                    required
                    value={formData.message}
                    onChange={(e) => handleInputChange('message', e.target.value)}
                    placeholder="Tell us how we can help you..."
                    className="bg-card/50 border-border/20 min-h-[120px]"
                  />
                </div>

                <Button 
                  type="submit"
                  size="lg"
                  className="w-full bg-accent text-accent-foreground hover:bg-accent/90"
                  disabled={isSubmitted}
                >
                  {isSubmitted ? (
                    <>
                      <CheckCircle className="w-5 h-5 mr-2" />
                      Message Sent Successfully!
                    </>
                  ) : (
                    <>
                      <Send className="w-5 h-5 mr-2" />
                      Send Message
                    </>
                  )}
                </Button>
              </form>
            </div>

            {/* Department Information */}
            <div>
              <h2 className="text-4xl font-bold text-foreground mb-6">
                DEPARTMENT <span className="gold-text">CONTACTS</span>
              </h2>
              <p className="text-muted-foreground mb-8 leading-relaxed">
                Connect directly with the right department for faster, more personalized service.
              </p>

              <div className="space-y-6">
                {departments.map((dept, index) => (
                  <Card key={index} className="bg-card border-border/20 hover:border-accent/50 transition-all duration-500">
                    <CardContent className="p-6">
                      <div className="flex items-start space-x-4">
                        <div className="p-3 rounded-lg bg-accent/10 text-accent">
                          {dept.icon}
                        </div>
                        <div className="flex-1">
                          <h3 className="text-xl font-bold text-foreground mb-2">
                            {dept.title}
                          </h3>
                          <p className="text-muted-foreground text-sm mb-4">
                            {dept.description}
                          </p>
                          <div className="space-y-2">
                            <div className="flex items-center text-accent">
                              <Phone className="w-4 h-4 mr-2" />
                              <span className="font-medium">{dept.phone}</span>
                            </div>
                            <div className="flex items-center text-accent">
                              <Mail className="w-4 h-4 mr-2" />
                              <span className="font-medium">{dept.email}</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>

              {/* Social Media */}
              <div className="mt-12">
                <h3 className="text-2xl font-bold text-foreground mb-6">
                  FOLLOW <span className="gold-text">US</span>
                </h3>
                <div className="flex space-x-4">
                  <Button variant="outline" size="icon" className="border-accent/20 hover:bg-accent hover:text-accent-foreground">
                    <Facebook className="w-5 h-5" />
                  </Button>
                  <Button variant="outline" size="icon" className="border-accent/20 hover:bg-accent hover:text-accent-foreground">
                    <Twitter className="w-5 h-5" />
                  </Button>
                  <Button variant="outline" size="icon" className="border-accent/20 hover:bg-accent hover:text-accent-foreground">
                    <Linkedin className="w-5 h-5" />
                  </Button>
                  <Button variant="outline" size="icon" className="border-accent/20 hover:bg-accent hover:text-accent-foreground">
                    <Globe className="w-5 h-5" />
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Locations */}
      <section className="py-20 bg-card/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-6">
              OUR <span className="gold-text">LOCATIONS</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Visit our luxury showrooms and experience Aurora Motors in person. Schedule an appointment for personalized service.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {locations.map((location, index) => (
              <Card key={index} className="bg-card border-border/20 hover:border-accent/50 transition-all duration-500">
                <CardHeader>
                  <CardTitle className="flex items-center text-xl text-foreground">
                    <MapPin className="w-6 h-6 text-accent mr-3" />
                    {location.name}
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-muted-foreground">{location.address}</p>
                  
                  <div className="flex items-center text-accent">
                    <Phone className="w-4 h-4 mr-2" />
                    <span className="font-medium">{location.phone}</span>
                  </div>

                  <div className="space-y-2">
                    <div className="flex items-center text-muted-foreground">
                      <Clock className="w-4 h-4 mr-2" />
                      <span className="text-sm">{location.hours.weekday}</span>
                    </div>
                    <div className="flex items-center text-muted-foreground">
                      <Clock className="w-4 h-4 mr-2" />
                      <span className="text-sm">{location.hours.weekend}</span>
                    </div>
                  </div>

                  <div>
                    <p className="text-sm text-muted-foreground mb-2">Available Services:</p>
                    <div className="flex flex-wrap gap-2">
                      {location.services.map((service, serviceIndex) => (
                        <Badge key={serviceIndex} variant="secondary" className="bg-accent/10 text-accent">
                          {service}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  <Button className="w-full bg-accent text-accent-foreground hover:bg-accent/90">
                    <Calendar className="w-4 h-4 mr-2" />
                    Schedule Visit
                  </Button>
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
            READY TO <span className="gold-text">EXPERIENCE</span> LUXURY?
          </h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
            Don't wait to experience the pinnacle of luxury automotive excellence. Schedule your personalized consultation today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90 text-lg px-8 py-4">
              <Calendar className="mr-2 w-5 h-5" />
              Schedule Test Drive
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-accent text-accent hover:bg-accent hover:text-accent-foreground text-lg px-8 py-4"
            >
              <Phone className="mr-2 w-5 h-5" />
              Call Now
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