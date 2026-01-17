import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Mail, MapPin, Phone } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";

export default function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      toast.success("Message sent successfully! We will get back to you soon.");
      // Reset form
      (e.target as HTMLFormElement).reset();
    }, 1500);
  };

  return (
    <Layout>
      {/* Page Header */}
      <section className="bg-primary py-20 relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="/images/singapore-skyline.jpg" 
            alt="Contact Us Background" 
            className="w-full h-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-primary/80"></div>
        </div>
        <div className="container mx-auto px-4 relative z-10 text-center">
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-white mb-4">Contact Us</h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Get in touch with our expert team to discuss your business needs.
          </p>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Contact Info */}
            <div>
              <h2 className="text-secondary font-medium tracking-widest uppercase mb-2">Get In Touch</h2>
              <h3 className="text-3xl md:text-4xl font-serif font-bold text-primary mb-8">
                Let's Start a Conversation
              </h3>
              <p className="text-muted-foreground mb-10 leading-relaxed">
                Whether you have a question about our services, need a consultation, or want to explore partnership opportunities, we are here to help. Reach out to us through any of the channels below.
              </p>

              <div className="space-y-8">
                <Card className="border-none shadow-md hover:shadow-lg transition-all duration-300">
                  <CardContent className="flex items-start p-6">
                    <div className="bg-primary/10 p-3 rounded-full mr-4 text-primary">
                      <MapPin size={24} />
                    </div>
                    <div>
                      <h4 className="font-bold text-primary text-lg mb-1">Our Location</h4>
                      <p className="text-muted-foreground">Singapore</p>
                      <p className="text-sm text-muted-foreground mt-2">
                        Strategically located in the heart of Southeast Asia's business hub.
                      </p>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-none shadow-md hover:shadow-lg transition-all duration-300">
                  <CardContent className="flex items-start p-6">
                    <div className="bg-primary/10 p-3 rounded-full mr-4 text-primary">
                      <Mail size={24} />
                    </div>
                    <div>
                      <h4 className="font-bold text-primary text-lg mb-1">Email Us</h4>
                      <a href="mailto:gong.jian@hycapital.global" className="text-muted-foreground hover:text-secondary transition-colors block">
                        gong.jian@hycapital.global
                      </a>
                      <p className="text-sm text-muted-foreground mt-2">
                        We aim to respond to all inquiries within 24 hours.
                      </p>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-none shadow-md hover:shadow-lg transition-all duration-300">
                  <CardContent className="flex items-start p-6">
                    <div className="bg-primary/10 p-3 rounded-full mr-4 text-primary">
                      <Phone size={24} />
                    </div>
                    <div>
                      <h4 className="font-bold text-primary text-lg mb-1">Call Us</h4>
                      <a href="tel:+6581416831" className="text-muted-foreground hover:text-secondary transition-colors block">
                        +65 8141 6831
                      </a>
                      <p className="text-sm text-muted-foreground mt-2">
                        Available Monday to Friday, 9am to 6pm SGT.
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-slate-50 p-8 md:p-10 rounded-2xl shadow-lg border border-slate-100">
              <h3 className="text-2xl font-serif font-bold text-primary mb-6">Send Us a Message</h3>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="firstName">First Name</Label>
                    <Input id="firstName" placeholder="John" required className="bg-white" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="lastName">Last Name</Label>
                    <Input id="lastName" placeholder="Doe" required className="bg-white" />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email">Email Address</Label>
                  <Input id="email" type="email" placeholder="john@company.com" required className="bg-white" />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="subject">Subject</Label>
                  <Input id="subject" placeholder="Inquiry about Strategic Planning" required className="bg-white" />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message">Message</Label>
                  <Textarea 
                    id="message" 
                    placeholder="Tell us about your business needs..." 
                    className="min-h-[150px] bg-white" 
                    required 
                  />
                </div>

                <Button 
                  type="submit" 
                  className="w-full bg-secondary hover:bg-secondary/90 text-primary font-bold py-6 text-lg"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "Sending..." : "Send Message"}
                </Button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section (Placeholder) */}
      <section className="h-96 w-full bg-slate-200 relative">
        <div className="absolute inset-0 flex items-center justify-center bg-slate-200">
           <img src="/images/singapore-skyline.jpg" className="w-full h-full object-cover opacity-50 grayscale" alt="Map Location" />
           <div className="absolute inset-0 flex items-center justify-center">
              <div className="bg-white p-4 rounded-lg shadow-lg flex items-center space-x-2 animate-bounce">
                 <MapPin className="text-primary" fill="currentColor" />
                 <span className="font-bold text-primary">Singapore</span>
              </div>
           </div>
        </div>
      </section>
    </Layout>
  );
}
