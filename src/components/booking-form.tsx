"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Calendar } from "@/components/ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { CalendarIcon, Clock, User, Phone, Mail, Car } from "lucide-react";
import { cn } from "@/lib/utils";
import { format } from "date-fns";

interface BookingFormProps {
  isOpen: boolean;
  onClose: () => void;
  vehicleModel?: string;
}

const vehicleOptions = [
  "Aurora EX",
  "Genesis IV", 
  "Spectre SUV",
  "Other"
];

const timeSlots = [
  "9:00 AM",
  "10:00 AM", 
  "11:00 AM",
  "1:00 PM",
  "2:00 PM",
  "3:00 PM",
  "4:00 PM",
  "5:00 PM"
];

export default function BookingForm({ isOpen, onClose, vehicleModel }: BookingFormProps) {
  const [selectedDate, setSelectedDate] = useState<Date>();
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    vehicle: vehicleModel || "",
    timeSlot: "",
    message: ""
  });

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Mock submission - in a real app, this would send to an API
    console.log("Test drive booking submitted:", {
      ...formData,
      date: selectedDate,
      timestamp: new Date().toISOString()
    });
    
    // Show success message
    alert("Thank you! Your test drive has been scheduled. Our team will contact you shortly to confirm the details.");
    
    // Reset form and close
    setFormData({
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      vehicle: vehicleModel || "",
      timeSlot: "",
      message: ""
    });
    setSelectedDate(undefined);
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-background/80 backdrop-blur-sm" 
        onClick={onClose}
      />
      
      {/* Form Container */}
      <Card className="relative w-full max-w-2xl mx-4 max-h-[90vh] overflow-y-auto bg-card border-accent/20">
        <CardHeader className="text-center border-b border-border/20">
          <CardTitle className="text-3xl font-bold text-foreground">
            Schedule Your <span className="gold-text">Test Drive</span>
          </CardTitle>
          <p className="text-muted-foreground">
            Experience luxury automotive excellence firsthand
          </p>
        </CardHeader>
        
        <CardContent className="p-6">
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Personal Information */}
            <div className="space-y-4">
              <div className="flex items-center gap-2 mb-3">
                <User className="w-5 h-5 text-accent" />
                <h3 className="text-lg font-semibold text-foreground">Personal Information</h3>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="firstName">First Name *</Label>
                  <Input
                    id="firstName"
                    value={formData.firstName}
                    onChange={(e) => handleInputChange("firstName", e.target.value)}
                    required
                    className="bg-input border-border focus:border-accent focus:ring-accent"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="lastName">Last Name *</Label>
                  <Input
                    id="lastName"
                    value={formData.lastName}
                    onChange={(e) => handleInputChange("lastName", e.target.value)}
                    required
                    className="bg-input border-border focus:border-accent focus:ring-accent"
                  />
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="email" className="flex items-center gap-2">
                    <Mail className="w-4 h-4" />
                    Email Address *
                  </Label>
                  <Input
                    id="email"
                    type="email"
                    value={formData.email}
                    onChange={(e) => handleInputChange("email", e.target.value)}
                    required
                    className="bg-input border-border focus:border-accent focus:ring-accent"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="phone" className="flex items-center gap-2">
                    <Phone className="w-4 h-4" />
                    Phone Number *
                  </Label>
                  <Input
                    id="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => handleInputChange("phone", e.target.value)}
                    required
                    className="bg-input border-border focus:border-accent focus:ring-accent"
                  />
                </div>
              </div>
            </div>

            {/* Vehicle Selection */}
            <div className="space-y-4">
              <div className="flex items-center gap-2 mb-3">
                <Car className="w-5 h-5 text-accent" />
                <h3 className="text-lg font-semibold text-foreground">Vehicle Selection</h3>
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="vehicle">Preferred Vehicle *</Label>
                <Select value={formData.vehicle} onValueChange={(value) => handleInputChange("vehicle", value)}>
                  <SelectTrigger className="bg-input border-border focus:border-accent focus:ring-accent">
                    <SelectValue placeholder="Select a vehicle model" />
                  </SelectTrigger>
                  <SelectContent>
                    {vehicleOptions.map((vehicle) => (
                      <SelectItem key={vehicle} value={vehicle}>
                        {vehicle}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            </div>

            {/* Date and Time Selection */}
            <div className="space-y-4">
              <div className="flex items-center gap-2 mb-3">
                <CalendarIcon className="w-5 h-5 text-accent" />
                <h3 className="text-lg font-semibold text-foreground">Schedule Details</h3>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label>Preferred Date *</Label>
                  <Popover>
                    <PopoverTrigger asChild>
                      <Button
                        variant="outline"
                        className={cn(
                          "w-full justify-start text-left font-normal bg-input border-border focus:border-accent",
                          !selectedDate && "text-muted-foreground"
                        )}
                      >
                        <CalendarIcon className="mr-2 h-4 w-4" />
                        {selectedDate ? format(selectedDate, "PPP") : "Select date"}
                      </Button>
                    </PopoverTrigger>
                    <PopoverContent className="w-auto p-0 bg-popover border-border">
                      <Calendar
                        mode="single"
                        selected={selectedDate}
                        onSelect={setSelectedDate}
                        initialFocus
                        disabled={(date) => date < new Date() || date < new Date("1900-01-01")}
                      />
                    </PopoverContent>
                  </Popover>
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="timeSlot" className="flex items-center gap-2">
                    <Clock className="w-4 h-4" />
                    Preferred Time *
                  </Label>
                  <Select value={formData.timeSlot} onValueChange={(value) => handleInputChange("timeSlot", value)}>
                    <SelectTrigger className="bg-input border-border focus:border-accent focus:ring-accent">
                      <SelectValue placeholder="Select time slot" />
                    </SelectTrigger>
                    <SelectContent>
                      {timeSlots.map((time) => (
                        <SelectItem key={time} value={time}>
                          {time}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
              </div>
            </div>

            {/* Additional Message */}
            <div className="space-y-2">
              <Label htmlFor="message">Additional Message</Label>
              <Textarea
                id="message"
                value={formData.message}
                onChange={(e) => handleInputChange("message", e.target.value)}
                placeholder="Any specific questions or requests about your test drive..."
                rows={3}
                className="bg-input border-border focus:border-accent focus:ring-accent resize-none"
              />
            </div>

            {/* Form Actions */}
            <div className="flex flex-col sm:flex-row gap-3 pt-4 border-t border-border/20">
              <Button
                type="button"
                variant="outline"
                onClick={onClose}
                className="flex-1 border-border hover:bg-secondary"
              >
                Cancel
              </Button>
              <Button
                type="submit"
                disabled={!formData.firstName || !formData.lastName || !formData.email || !formData.phone || !formData.vehicle || !selectedDate || !formData.timeSlot}
                className="flex-1 bg-accent text-accent-foreground hover:bg-accent/90"
              >
                Schedule Test Drive
              </Button>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}