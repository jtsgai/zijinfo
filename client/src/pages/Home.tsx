import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowRight, BarChart3, Globe, Layers, ShieldCheck, Users } from "lucide-react";
import { Link } from "wouter";
import Layout from "@/components/Layout";

export default function Home() {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center overflow-hidden bg-primary">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          <img 
            src="/images/singapore-skyline.jpg" 
            alt="Singapore Skyline" 
            className="w-full h-full object-cover opacity-40"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-primary/90 via-primary/70 to-transparent"></div>
        </div>

        {/* Content */}
        <div className="container mx-auto px-4 relative z-10 pt-20">
          <div className="max-w-3xl animate-in slide-in-from-bottom-10 duration-1000 fade-in">
            <div className="inline-block px-3 py-1 mb-6 border border-secondary/30 rounded-full bg-secondary/10 backdrop-blur-sm">
              <span className="text-secondary text-sm font-medium tracking-wider uppercase">Global Business Hub</span>
            </div>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-serif font-bold text-white leading-tight mb-6">
              Empowering Growth in <span className="text-secondary">Southeast Asia</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-200 mb-10 leading-relaxed max-w-2xl">
              We provide full-cycle growth solutions for local and multinational enterprises, rooted in Singapore's premier business environment.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/contact">
                <Button size="lg" className="bg-secondary hover:bg-secondary/90 text-primary font-bold text-base px-8 py-6 h-auto">
                  Start Consultation
                </Button>
              </Link>
              <Link href="/services">
                <Button variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-primary font-medium text-base px-8 py-6 h-auto bg-transparent">
                  Explore Services
                </Button>
              </Link>
            </div>
          </div>
        </div>

        {/* Decorative Elements */}
        <div className="absolute bottom-0 right-0 w-1/3 h-1/3 bg-gradient-to-t from-primary to-transparent z-10"></div>
        <div className="absolute -bottom-10 -right-10 w-64 h-64 border border-secondary/20 rounded-full z-0"></div>
        <div className="absolute top-20 right-20 w-32 h-32 border border-white/10 rounded-full z-0"></div>
      </section>

      {/* About Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="relative">
              <div className="relative z-10 rounded-lg overflow-hidden shadow-2xl">
                <img 
                  src="/images/marina-bay-sands.jpg" 
                  alt="Marina Bay Sands" 
                  className="w-full h-auto object-cover"
                />
              </div>
              <div className="absolute -bottom-10 -left-10 w-2/3 h-2/3 bg-secondary/10 -z-0 rounded-lg"></div>
              <div className="absolute -top-10 -right-10 w-1/2 h-1/2 border-2 border-secondary/20 -z-0 rounded-lg"></div>
            </div>
            
            <div>
              <h2 className="text-secondary font-medium tracking-widest uppercase mb-2">About Us</h2>
              <h3 className="text-3xl md:text-4xl font-serif font-bold text-primary mb-6">
                Your Trusted Partner for <br/>Global Business Expansion
              </h3>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                Based in Singapore, ZIJIN GLOBAL DIGITALFO is a professional service agency deeply rooted in enterprise management consulting. We leverage Singapore's top-tier business environment and global connectivity to provide full-cycle growth solutions.
              </p>
              <p className="text-muted-foreground mb-8 leading-relaxed">
                Our core team brings together experts with international consulting backgrounds and local practical experience, focusing on strategic planning, organizational optimization, process reengineering, digital transformation, and compliance management.
              </p>
              
              <div className="grid grid-cols-2 gap-6 mb-8">
                <div className="flex items-start space-x-3">
                  <div className="mt-1 bg-secondary/20 p-2 rounded-full text-secondary">
                    <Globe size={20} />
                  </div>
                  <div>
                    <h4 className="font-bold text-primary">Global Vision</h4>
                    <p className="text-sm text-muted-foreground">International standards adapted for local markets.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="mt-1 bg-secondary/20 p-2 rounded-full text-secondary">
                    <Users size={20} />
                  </div>
                  <div>
                    <h4 className="font-bold text-primary">Expert Team</h4>
                    <p className="text-sm text-muted-foreground">Seasoned professionals with proven track records.</p>
                  </div>
                </div>
              </div>
              
              <Link href="/about">
                <Button variant="link" className="text-primary font-bold p-0 hover:text-secondary transition-colors group">
                  Learn More About Us <ArrowRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-secondary font-medium tracking-widest uppercase mb-2">Our Expertise</h2>
            <h3 className="text-3xl md:text-4xl font-serif font-bold text-primary mb-6">Comprehensive Consulting Solutions</h3>
            <p className="text-muted-foreground">
              We focus on five core sectors to help enterprises break through growth bottlenecks and achieve efficiency improvements and value multiplication.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Service 1 */}
            <Card className="border-none shadow-lg hover:shadow-xl transition-all duration-300 group overflow-hidden">
              <div className="h-2 bg-secondary w-0 group-hover:w-full transition-all duration-500"></div>
              <CardHeader>
                <div className="w-12 h-12 bg-primary/5 rounded-lg flex items-center justify-center mb-4 group-hover:bg-primary group-hover:text-white transition-colors">
                  <Globe size={24} className="text-primary group-hover:text-white" />
                </div>
                <CardTitle className="font-serif text-xl text-primary">Strategic Planning</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base mb-4">
                  "Precise Diagnosis + Scientific Implementation" for full-cycle strategic solutions.
                </CardDescription>
                <ul className="space-y-2 text-sm text-muted-foreground mb-6">
                  <li className="flex items-center"><div className="w-1.5 h-1.5 bg-secondary rounded-full mr-2"></div>Market Opportunity Diagnosis</li>
                  <li className="flex items-center"><div className="w-1.5 h-1.5 bg-secondary rounded-full mr-2"></div>1-5 Year Development Path</li>
                  <li className="flex items-center"><div className="w-1.5 h-1.5 bg-secondary rounded-full mr-2"></div>Cross-border Layout</li>
                </ul>
                <Link href="/services">
                  <span className="text-primary font-bold text-sm flex items-center cursor-pointer group-hover:text-secondary transition-colors">
                    Read More <ArrowRight size={14} className="ml-1" />
                  </span>
                </Link>
              </CardContent>
            </Card>

            {/* Service 2 */}
            <Card className="border-none shadow-lg hover:shadow-xl transition-all duration-300 group overflow-hidden">
              <div className="h-2 bg-secondary w-0 group-hover:w-full transition-all duration-500"></div>
              <CardHeader>
                <div className="w-12 h-12 bg-primary/5 rounded-lg flex items-center justify-center mb-4 group-hover:bg-primary group-hover:text-white transition-colors">
                  <Layers size={24} className="text-primary group-hover:text-white" />
                </div>
                <CardTitle className="font-serif text-xl text-primary">Operations Management</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base mb-4">
                  Focusing on cost control, process efficiency, and supply chain resilience.
                </CardDescription>
                <ul className="space-y-2 text-sm text-muted-foreground mb-6">
                  <li className="flex items-center"><div className="w-1.5 h-1.5 bg-secondary rounded-full mr-2"></div>Lean Operations System</li>
                  <li className="flex items-center"><div className="w-1.5 h-1.5 bg-secondary rounded-full mr-2"></div>Process Optimization</li>
                  <li className="flex items-center"><div className="w-1.5 h-1.5 bg-secondary rounded-full mr-2"></div>Digital Transformation</li>
                </ul>
                <Link href="/services">
                  <span className="text-primary font-bold text-sm flex items-center cursor-pointer group-hover:text-secondary transition-colors">
                    Read More <ArrowRight size={14} className="ml-1" />
                  </span>
                </Link>
              </CardContent>
            </Card>

            {/* Service 3 */}
            <Card className="border-none shadow-lg hover:shadow-xl transition-all duration-300 group overflow-hidden">
              <div className="h-2 bg-secondary w-0 group-hover:w-full transition-all duration-500"></div>
              <CardHeader>
                <div className="w-12 h-12 bg-primary/5 rounded-lg flex items-center justify-center mb-4 group-hover:bg-primary group-hover:text-white transition-colors">
                  <BarChart3 size={24} className="text-primary group-hover:text-white" />
                </div>
                <CardTitle className="font-serif text-xl text-primary">Financial Management</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base mb-4">
                  Comprehensive financial services aligned with Singapore's regulations.
                </CardDescription>
                <ul className="space-y-2 text-sm text-muted-foreground mb-6">
                  <li className="flex items-center"><div className="w-1.5 h-1.5 bg-secondary rounded-full mr-2"></div>Standardized Accounting</li>
                  <li className="flex items-center"><div className="w-1.5 h-1.5 bg-secondary rounded-full mr-2"></div>Tax Planning & GST</li>
                  <li className="flex items-center"><div className="w-1.5 h-1.5 bg-secondary rounded-full mr-2"></div>Government Grant Support</li>
                </ul>
                <Link href="/services">
                  <span className="text-primary font-bold text-sm flex items-center cursor-pointer group-hover:text-secondary transition-colors">
                    Read More <ArrowRight size={14} className="ml-1" />
                  </span>
                </Link>
              </CardContent>
            </Card>

            {/* Service 4 */}
            <Card className="border-none shadow-lg hover:shadow-xl transition-all duration-300 group overflow-hidden">
              <div className="h-2 bg-secondary w-0 group-hover:w-full transition-all duration-500"></div>
              <CardHeader>
                <div className="w-12 h-12 bg-primary/5 rounded-lg flex items-center justify-center mb-4 group-hover:bg-primary group-hover:text-white transition-colors">
                  <Users size={24} className="text-primary group-hover:text-white" />
                </div>
                <CardTitle className="font-serif text-xl text-primary">HR Management</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base mb-4">
                  Building adaptive human capital systems compliant with local labor policies.
                </CardDescription>
                <ul className="space-y-2 text-sm text-muted-foreground mb-6">
                  <li className="flex items-center"><div className="w-1.5 h-1.5 bg-secondary rounded-full mr-2"></div>Organizational Design</li>
                  <li className="flex items-center"><div className="w-1.5 h-1.5 bg-secondary rounded-full mr-2"></div>Compensation Systems</li>
                  <li className="flex items-center"><div className="w-1.5 h-1.5 bg-secondary rounded-full mr-2"></div>Talent Recruitment</li>
                </ul>
                <Link href="/services">
                  <span className="text-primary font-bold text-sm flex items-center cursor-pointer group-hover:text-secondary transition-colors">
                    Read More <ArrowRight size={14} className="ml-1" />
                  </span>
                </Link>
              </CardContent>
            </Card>

            {/* Service 5 */}
            <Card className="border-none shadow-lg hover:shadow-xl transition-all duration-300 group overflow-hidden md:col-span-2 lg:col-span-2">
              <div className="h-2 bg-secondary w-0 group-hover:w-full transition-all duration-500"></div>
              <div className="flex flex-col md:flex-row h-full">
                <div className="flex-1">
                  <CardHeader>
                    <div className="w-12 h-12 bg-primary/5 rounded-lg flex items-center justify-center mb-4 group-hover:bg-primary group-hover:text-white transition-colors">
                      <ShieldCheck size={24} className="text-primary group-hover:text-white" />
                    </div>
                    <CardTitle className="font-serif text-xl text-primary">Compliance Consulting</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-base mb-4">
                      Ensuring adherence to ACRA, MAS, and other regulatory requirements to mitigate risks.
                    </CardDescription>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                      <ul className="space-y-2 text-sm text-muted-foreground">
                        <li className="flex items-center"><div className="w-1.5 h-1.5 bg-secondary rounded-full mr-2"></div>Compliance Manuals</li>
                        <li className="flex items-center"><div className="w-1.5 h-1.5 bg-secondary rounded-full mr-2"></div>AML / Data Protection</li>
                      </ul>
                      <ul className="space-y-2 text-sm text-muted-foreground">
                        <li className="flex items-center"><div className="w-1.5 h-1.5 bg-secondary rounded-full mr-2"></div>License Applications</li>
                        <li className="flex items-center"><div className="w-1.5 h-1.5 bg-secondary rounded-full mr-2"></div>Risk Assessment</li>
                      </ul>
                    </div>
                    <div className="mt-6">
                      <Link href="/services">
                        <span className="text-primary font-bold text-sm flex items-center cursor-pointer group-hover:text-secondary transition-colors">
                          Read More <ArrowRight size={14} className="ml-1" />
                        </span>
                      </Link>
                    </div>
                  </CardContent>
                </div>
                <div className="hidden md:block w-1/3 bg-gray-100 relative overflow-hidden">
                   <img src="/images/esplanade.jpg" alt="Compliance" className="absolute inset-0 w-full h-full object-cover opacity-80 group-hover:scale-105 transition-transform duration-700" />
                   <div className="absolute inset-0 bg-primary/10 group-hover:bg-transparent transition-colors"></div>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="/images/gardens-by-the-bay.jpg" 
            alt="Gardens by the Bay" 
            className="w-full h-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-primary/80"></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10 text-center">
          <h2 className="text-3xl md:text-5xl font-serif font-bold text-white mb-6">Ready to Transform Your Business?</h2>
          <p className="text-xl text-gray-300 mb-10 max-w-2xl mx-auto">
            Partner with us to navigate the complexities of the Southeast Asian market and achieve sustainable growth.
          </p>
          <Link href="/contact">
            <Button size="lg" className="bg-secondary hover:bg-secondary/90 text-primary font-bold text-lg px-10 py-6 h-auto shadow-lg hover:shadow-secondary/20 transition-all">
              Contact Us Today
            </Button>
          </Link>
        </div>
      </section>
    </Layout>
  );
}
