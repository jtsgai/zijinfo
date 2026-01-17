import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle2, Globe, Target, Trophy, Users } from "lucide-react";
import { Link } from "wouter";

export default function About() {
  return (
    <Layout>
      {/* Page Header */}
      <section className="bg-primary py-20 relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="/images/gardens-by-the-bay.jpg" 
            alt="About Us Background" 
            className="w-full h-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-primary/80"></div>
        </div>
        <div className="container mx-auto px-4 relative z-10 text-center">
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-white mb-4">About Us</h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Your trusted partner for sustainable growth and global expansion in Southeast Asia.
          </p>
        </div>
      </section>

      {/* Company Introduction */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-secondary font-medium tracking-widest uppercase mb-2">Who We Are</h2>
              <h3 className="text-3xl md:text-4xl font-serif font-bold text-primary mb-6">
                Rooted in Singapore, <br/>Connecting the World
              </h3>
              <p className="text-muted-foreground mb-6 leading-relaxed text-lg">
                ZIJIN GLOBAL DIGITALFO PTE. LTD. is a professional service agency deeply rooted in the field of enterprise management consulting. Based in Singapore, a global business hub, we leverage the top-tier business environment and global connectivity to provide full-cycle growth solutions for local and multinational enterprises.
              </p>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                Our core team brings together experts with international consulting backgrounds and local practical experience. We focus on five core sectors: strategic planning, organizational optimization, process reengineering, digital transformation, and compliance management.
              </p>
              <p className="text-muted-foreground mb-8 leading-relaxed">
                With data-driven insights at our core, we create customized solutions tailored to industry characteristics. We understand Southeast Asian market rules and global business logic, having successfully helped enterprises in manufacturing, finance, technology, and other fields break through growth bottlenecks.
              </p>
            </div>
            <div className="relative">
              <div className="grid grid-cols-2 gap-4">
                <img 
                  src="/images/merlion.jpg" 
                  alt="Singapore Merlion" 
                  className="rounded-lg shadow-lg w-full h-64 object-cover transform translate-y-8"
                />
                <img 
                  src="/images/esplanade.jpg" 
                  alt="Esplanade" 
                  className="rounded-lg shadow-lg w-full h-64 object-cover"
                />
              </div>
              <div className="absolute -z-10 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[110%] h-[110%] border border-secondary/20 rounded-full opacity-50"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-secondary font-medium tracking-widest uppercase mb-2">Our Values</h2>
            <h3 className="text-3xl md:text-4xl font-serif font-bold text-primary mb-6">Professional Empowerment, Integrity & Win-Win</h3>
            <p className="text-muted-foreground">
              We adopt a "On-site Diagnosis + Coaching Implementation" service model to deeply integrate cutting-edge management concepts with enterprise reality.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="border-none shadow-md hover:shadow-xl transition-all duration-300 text-center p-6">
              <CardContent className="pt-6">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6 text-primary">
                  <Trophy size={32} />
                </div>
                <h4 className="text-xl font-serif font-bold text-primary mb-3">Excellence</h4>
                <p className="text-muted-foreground">
                  We strive for the highest standards in every project, delivering value that exceeds expectations.
                </p>
              </CardContent>
            </Card>
            
            <Card className="border-none shadow-md hover:shadow-xl transition-all duration-300 text-center p-6 relative overflow-hidden group">
              <div className="absolute inset-0 bg-primary opacity-0 group-hover:opacity-5 transition-opacity duration-300"></div>
              <CardContent className="pt-6">
                <div className="w-16 h-16 bg-secondary/20 rounded-full flex items-center justify-center mx-auto mb-6 text-primary">
                  <Target size={32} />
                </div>
                <h4 className="text-xl font-serif font-bold text-primary mb-3">Integrity</h4>
                <p className="text-muted-foreground">
                  We build trust through transparency, honesty, and ethical business practices in all our dealings.
                </p>
              </CardContent>
            </Card>
            
            <Card className="border-none shadow-md hover:shadow-xl transition-all duration-300 text-center p-6">
              <CardContent className="pt-6">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6 text-primary">
                  <Users size={32} />
                </div>
                <h4 className="text-xl font-serif font-bold text-primary mb-3">Partnership</h4>
                <p className="text-muted-foreground">
                  We view our clients as long-term partners, committed to their sustainable growth and success.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-primary text-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="order-2 lg:order-1">
              <img 
                src="/images/singapore-skyline.jpg" 
                alt="Singapore Skyline" 
                className="rounded-lg shadow-2xl w-full h-auto object-cover opacity-90"
              />
            </div>
            <div className="order-1 lg:order-2">
              <h2 className="text-secondary font-medium tracking-widest uppercase mb-2">Why Choose Us</h2>
              <h3 className="text-3xl md:text-4xl font-serif font-bold mb-6">
                Your Reliable Partner for <br/>Asian Market Expansion
              </h3>
              
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <CheckCircle2 className="text-secondary shrink-0 mt-1" size={24} />
                  <div>
                    <h4 className="text-xl font-bold mb-2">Deep Local Expertise</h4>
                    <p className="text-gray-300">Profound understanding of Southeast Asian market rules, regulations, and cultural nuances.</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <CheckCircle2 className="text-secondary shrink-0 mt-1" size={24} />
                  <div>
                    <h4 className="text-xl font-bold mb-2">Global Perspective</h4>
                    <p className="text-gray-300">Leveraging international best practices (McKinsey MECE, BCG Matrix) adapted for local contexts.</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <CheckCircle2 className="text-secondary shrink-0 mt-1" size={24} />
                  <div>
                    <h4 className="text-xl font-bold mb-2">Customized Solutions</h4>
                    <p className="text-gray-300">Tailored strategies based on data-driven insights and specific industry characteristics.</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <CheckCircle2 className="text-secondary shrink-0 mt-1" size={24} />
                  <div>
                    <h4 className="text-xl font-bold mb-2">Results-Oriented</h4>
                    <p className="text-gray-300">Focus on tangible efficiency improvements, cost reduction, and value multiplication.</p>
                  </div>
                </div>
              </div>
              
              <div className="mt-10">
                <Link href="/contact">
                  <Button className="bg-secondary hover:bg-secondary/90 text-primary font-bold px-8 py-6 h-auto cursor-pointer">
                    Work With Us
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
