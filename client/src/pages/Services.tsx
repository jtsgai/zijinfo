import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { BarChart3, Briefcase, CheckCircle, Globe, Layers, ShieldCheck, Users } from "lucide-react";
import { Link } from "wouter";

export default function Services() {
  return (
    <Layout>
      {/* Page Header */}
      <section className="bg-primary py-20 relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="/images/marina-bay-sands.jpg" 
            alt="Services Background" 
            className="w-full h-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-primary/80"></div>
        </div>
        <div className="container mx-auto px-4 relative z-10 text-center">
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-white mb-4">Our Services</h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Comprehensive management consulting solutions tailored for your business growth.
          </p>
        </div>
      </section>

      {/* Services Tabs */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <Tabs defaultValue="strategic" className="w-full">
            <div className="flex justify-center mb-12 overflow-x-auto pb-4">
              <TabsList className="h-auto p-1 bg-slate-100 rounded-full">
                <TabsTrigger value="strategic" className="px-6 py-3 rounded-full data-[state=active]:bg-primary data-[state=active]:text-white">Strategic Planning</TabsTrigger>
                <TabsTrigger value="operations" className="px-6 py-3 rounded-full data-[state=active]:bg-primary data-[state=active]:text-white">Operations</TabsTrigger>
                <TabsTrigger value="financial" className="px-6 py-3 rounded-full data-[state=active]:bg-primary data-[state=active]:text-white">Financial</TabsTrigger>
                <TabsTrigger value="hr" className="px-6 py-3 rounded-full data-[state=active]:bg-primary data-[state=active]:text-white">HR Management</TabsTrigger>
                <TabsTrigger value="compliance" className="px-6 py-3 rounded-full data-[state=active]:bg-primary data-[state=active]:text-white">Compliance</TabsTrigger>
              </TabsList>
            </div>

            {/* Strategic Planning Content */}
            <TabsContent value="strategic" className="animate-in fade-in slide-in-from-bottom-4 duration-500">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div>
                  <div className="inline-flex items-center justify-center p-3 bg-primary/10 rounded-lg text-primary mb-6">
                    <Globe size={32} />
                  </div>
                  <h2 className="text-3xl font-serif font-bold text-primary mb-4">Strategic Planning</h2>
                  <p className="text-lg text-muted-foreground mb-6">
                    Relying on Singapore's global business hub advantages and deep insights into the Southeast Asian market, our strategic planning business focuses on "Precise Diagnosis + Scientific Implementation".
                  </p>
                  <p className="text-muted-foreground mb-8">
                    We adopt international top-tier methodologies such as McKinsey MECE principle and BCG Matrix, combined with the Southeast Asian policy environment and industry characteristics, to form a "Three-Dimensional Service System".
                  </p>
                  
                  <div className="space-y-4 mb-8">
                    <div className="flex items-center p-4 bg-slate-50 rounded-lg border border-slate-100">
                      <CheckCircle className="text-secondary mr-4 shrink-0" />
                      <span className="font-medium">Market Opportunity Diagnosis</span>
                    </div>
                    <div className="flex items-center p-4 bg-slate-50 rounded-lg border border-slate-100">
                      <CheckCircle className="text-secondary mr-4 shrink-0" />
                      <span className="font-medium">1-5 Year Development Path Planning</span>
                    </div>
                    <div className="flex items-center p-4 bg-slate-50 rounded-lg border border-slate-100">
                      <CheckCircle className="text-secondary mr-4 shrink-0" />
                      <span className="font-medium">Business Portfolio Optimization</span>
                    </div>
                    <div className="flex items-center p-4 bg-slate-50 rounded-lg border border-slate-100">
                      <CheckCircle className="text-secondary mr-4 shrink-0" />
                      <span className="font-medium">Cross-border Layout Solutions</span>
                    </div>
                  </div>
                  
                  <Link href="/contact">
                    <Button className="bg-primary text-white hover:bg-primary/90 cursor-pointer">Get Strategic Advice</Button>
                  </Link>
                </div>
                <div className="relative h-full min-h-[400px] rounded-xl overflow-hidden shadow-2xl">
                  <img src="/images/singapore-skyline.jpg" alt="Strategic Planning" className="absolute inset-0 w-full h-full object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent flex items-end p-8">
                    <div className="text-white">
                      <h3 className="text-xl font-bold mb-2">Case Study</h3>
                      <p className="text-sm opacity-90">Helped a regional manufacturing firm expand into 3 new ASEAN markets, increasing revenue by 45% in year one.</p>
                    </div>
                  </div>
                </div>
              </div>
            </TabsContent>

            {/* Operations Management Content */}
            <TabsContent value="operations" className="animate-in fade-in slide-in-from-bottom-4 duration-500">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div>
                  <div className="inline-flex items-center justify-center p-3 bg-primary/10 rounded-lg text-primary mb-6">
                    <Layers size={32} />
                  </div>
                  <h2 className="text-3xl font-serif font-bold text-primary mb-4">Operations Management</h2>
                  <p className="text-lg text-muted-foreground mb-6">
                    Focusing on Southeast Asian market characteristics, we address core pain points such as cost control, process inefficiency, and supply chain resilience.
                  </p>
                  <p className="text-muted-foreground mb-8">
                    We provide lean operations, process optimization, supply chain integration, and digital transformation support. Using an "On-site Diagnosis + Implementation Coaching" model, we help enterprises reduce costs, improve efficiency, and strengthen operational resilience.
                  </p>
                  
                  <div className="space-y-4 mb-8">
                    <div className="flex items-center p-4 bg-slate-50 rounded-lg border border-slate-100">
                      <CheckCircle className="text-secondary mr-4 shrink-0" />
                      <span className="font-medium">Lean Operations System Construction</span>
                    </div>
                    <div className="flex items-center p-4 bg-slate-50 rounded-lg border border-slate-100">
                      <CheckCircle className="text-secondary mr-4 shrink-0" />
                      <span className="font-medium">Core Process Optimization</span>
                    </div>
                    <div className="flex items-center p-4 bg-slate-50 rounded-lg border border-slate-100">
                      <CheckCircle className="text-secondary mr-4 shrink-0" />
                      <span className="font-medium">Supply Chain Integration Solutions</span>
                    </div>
                    <div className="flex items-center p-4 bg-slate-50 rounded-lg border border-slate-100">
                      <CheckCircle className="text-secondary mr-4 shrink-0" />
                      <span className="font-medium">Digital Tool Adaptation</span>
                    </div>
                  </div>
                  
                  <Link href="/contact">
                    <Button className="bg-primary text-white hover:bg-primary/90 cursor-pointer">Optimize Operations</Button>
                  </Link>
                </div>
                <div className="relative h-full min-h-[400px] rounded-xl overflow-hidden shadow-2xl">
                  <img src="/images/gardens-by-the-bay.jpg" alt="Operations Management" className="absolute inset-0 w-full h-full object-cover" />
                </div>
              </div>
            </TabsContent>

            {/* Financial Management Content */}
            <TabsContent value="financial" className="animate-in fade-in slide-in-from-bottom-4 duration-500">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div>
                  <div className="inline-flex items-center justify-center p-3 bg-primary/10 rounded-lg text-primary mb-6">
                    <BarChart3 size={32} />
                  </div>
                  <h2 className="text-3xl font-serif font-bold text-primary mb-4">Financial Management</h2>
                  <p className="text-lg text-muted-foreground mb-6">
                    Our financial management services align with Singapore's financial and tax regulations, covering bookkeeping, financial statement preparation, and GST & Corporate Income Tax filing.
                  </p>
                  <p className="text-muted-foreground mb-8">
                    We also provide tax planning and cross-border financial planning, utilizing cloud accounting tools for real-time data synchronization, and assisting in applying for local enterprise financial grants.
                  </p>
                  
                  <div className="space-y-4 mb-8">
                    <div className="flex items-center p-4 bg-slate-50 rounded-lg border border-slate-100">
                      <CheckCircle className="text-secondary mr-4 shrink-0" />
                      <span className="font-medium">Standardized Accounting Processing</span>
                    </div>
                    <div className="flex items-center p-4 bg-slate-50 rounded-lg border border-slate-100">
                      <CheckCircle className="text-secondary mr-4 shrink-0" />
                      <span className="font-medium">Financial Statement Preparation</span>
                    </div>
                    <div className="flex items-center p-4 bg-slate-50 rounded-lg border border-slate-100">
                      <CheckCircle className="text-secondary mr-4 shrink-0" />
                      <span className="font-medium">GST / Corporate Income Tax Filing</span>
                    </div>
                    <div className="flex items-center p-4 bg-slate-50 rounded-lg border border-slate-100">
                      <CheckCircle className="text-secondary mr-4 shrink-0" />
                      <span className="font-medium">Government Grant Application Support</span>
                    </div>
                  </div>
                  
                  <Link href="/contact">
                    <Button className="bg-primary text-white hover:bg-primary/90 cursor-pointer">Consult Financial Expert</Button>
                  </Link>
                </div>
                <div className="relative h-full min-h-[400px] rounded-xl overflow-hidden shadow-2xl">
                  <img src="/images/marina-bay-sands.jpg" alt="Financial Management" className="absolute inset-0 w-full h-full object-cover" />
                </div>
              </div>
            </TabsContent>

            {/* HR Management Content */}
            <TabsContent value="hr" className="animate-in fade-in slide-in-from-bottom-4 duration-500">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div>
                  <div className="inline-flex items-center justify-center p-3 bg-primary/10 rounded-lg text-primary mb-6">
                    <Users size={32} />
                  </div>
                  <h2 className="text-3xl font-serif font-bold text-primary mb-4">Human Resources Management</h2>
                  <p className="text-lg text-muted-foreground mb-6">
                    Closely following Singapore's labor policies and talent market characteristics, covering organizational structure optimization, compensation system design, recruitment, training, and compliance management.
                  </p>
                  <p className="text-muted-foreground mb-8">
                    Leveraging local talent databases and policy interpretation advantages, we build adaptive HR systems for enterprises to avoid employment risks and activate organizational efficiency.
                  </p>
                  
                  <div className="space-y-4 mb-8">
                    <div className="flex items-center p-4 bg-slate-50 rounded-lg border border-slate-100">
                      <CheckCircle className="text-secondary mr-4 shrink-0" />
                      <span className="font-medium">Organizational Structure Design</span>
                    </div>
                    <div className="flex items-center p-4 bg-slate-50 rounded-lg border border-slate-100">
                      <CheckCircle className="text-secondary mr-4 shrink-0" />
                      <span className="font-medium">Compensation System Construction</span>
                    </div>
                    <div className="flex items-center p-4 bg-slate-50 rounded-lg border border-slate-100">
                      <CheckCircle className="text-secondary mr-4 shrink-0" />
                      <span className="font-medium">Compliant Employment Guidance</span>
                    </div>
                    <div className="flex items-center p-4 bg-slate-50 rounded-lg border border-slate-100">
                      <CheckCircle className="text-secondary mr-4 shrink-0" />
                      <span className="font-medium">Core Talent Recruitment</span>
                    </div>
                  </div>
                  
                  <Link href="/contact">
                    <Button className="bg-primary text-white hover:bg-primary/90 cursor-pointer">Optimize HR Strategy</Button>
                  </Link>
                </div>
                <div className="relative h-full min-h-[400px] rounded-xl overflow-hidden shadow-2xl">
                  <img src="/images/esplanade.jpg" alt="HR Management" className="absolute inset-0 w-full h-full object-cover" />
                </div>
              </div>
            </TabsContent>

            {/* Compliance Consulting Content */}
            <TabsContent value="compliance" className="animate-in fade-in slide-in-from-bottom-4 duration-500">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div>
                  <div className="inline-flex items-center justify-center p-3 bg-primary/10 rounded-lg text-primary mb-6">
                    <ShieldCheck size={32} />
                  </div>
                  <h2 className="text-3xl font-serif font-bold text-primary mb-4">Compliance Consulting</h2>
                  <p className="text-lg text-muted-foreground mb-6">
                    Adhering to ACRA, MAS, and other regulatory requirements, covering anti-money laundering (AML), data protection, corporate tax, and industry license applications.
                  </p>
                  <p className="text-muted-foreground mb-8">
                    We customize compliance manuals, conduct risk assessments and employee training, follow up on policy updates, and provide compliance health checks and rectification plans.
                  </p>
                  
                  <div className="space-y-4 mb-8">
                    <div className="flex items-center p-4 bg-slate-50 rounded-lg border border-slate-100">
                      <CheckCircle className="text-secondary mr-4 shrink-0" />
                      <span className="font-medium">Enterprise Compliance Manual Customization</span>
                    </div>
                    <div className="flex items-center p-4 bg-slate-50 rounded-lg border border-slate-100">
                      <CheckCircle className="text-secondary mr-4 shrink-0" />
                      <span className="font-medium">AML / Data Protection Compliance</span>
                    </div>
                    <div className="flex items-center p-4 bg-slate-50 rounded-lg border border-slate-100">
                      <CheckCircle className="text-secondary mr-4 shrink-0" />
                      <span className="font-medium">Industry License Application Agency</span>
                    </div>
                    <div className="flex items-center p-4 bg-slate-50 rounded-lg border border-slate-100">
                      <CheckCircle className="text-secondary mr-4 shrink-0" />
                      <span className="font-medium">Compliance Risk Assessment</span>
                    </div>
                  </div>
                  
                  <Link href="/contact">
                    <Button className="bg-primary text-white hover:bg-primary/90 cursor-pointer">Ensure Compliance</Button>
                  </Link>
                </div>
                <div className="relative h-full min-h-[400px] rounded-xl overflow-hidden shadow-2xl">
                  <img src="/images/merlion.jpg" alt="Compliance Consulting" className="absolute inset-0 w-full h-full object-cover" />
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Service Packages */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-secondary font-medium tracking-widest uppercase mb-2">Standardized Packages</h2>
            <h3 className="text-3xl md:text-4xl font-serif font-bold text-primary mb-6">Solutions for Every Stage</h3>
            <p className="text-muted-foreground">
              Choose a package that fits your current business needs and growth stage.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Package 1 */}
            <Card className="border border-slate-200 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col">
              <CardHeader className="bg-primary/5 pb-6">
                <CardTitle className="font-serif text-xl text-primary text-center">Startup Launch</CardTitle>
              </CardHeader>
              <CardContent className="pt-6 flex-grow">
                <ul className="space-y-3 text-sm text-muted-foreground">
                  <li className="flex items-start"><CheckCircle size={16} className="text-secondary mr-2 mt-0.5 shrink-0" /> Company Registration Consulting</li>
                  <li className="flex items-start"><CheckCircle size={16} className="text-secondary mr-2 mt-0.5 shrink-0" /> Basic Financial Compliance</li>
                  <li className="flex items-start"><CheckCircle size={16} className="text-secondary mr-2 mt-0.5 shrink-0" /> HR Structure Setup</li>
                  <li className="flex items-start"><CheckCircle size={16} className="text-secondary mr-2 mt-0.5 shrink-0" /> Initial Strategic Diagnosis</li>
                </ul>
              </CardContent>
              <div className="p-6 pt-0 mt-auto">
                <Link href="/contact">
                  <Button variant="outline" className="w-full border-primary text-primary hover:bg-primary hover:text-white cursor-pointer">Inquire Now</Button>
                </Link>
              </div>
            </Card>

            {/* Package 2 */}
            <Card className="border border-secondary/50 shadow-md hover:shadow-xl transition-all duration-300 flex flex-col relative overflow-hidden">
              <div className="absolute top-0 right-0 bg-secondary text-primary text-xs font-bold px-3 py-1 rounded-bl-lg">POPULAR</div>
              <CardHeader className="bg-secondary/10 pb-6">
                <CardTitle className="font-serif text-xl text-primary text-center">Growth Upgrade</CardTitle>
              </CardHeader>
              <CardContent className="pt-6 flex-grow">
                <ul className="space-y-3 text-sm text-muted-foreground">
                  <li className="flex items-start"><CheckCircle size={16} className="text-secondary mr-2 mt-0.5 shrink-0" /> Operations Process Optimization</li>
                  <li className="flex items-start"><CheckCircle size={16} className="text-secondary mr-2 mt-0.5 shrink-0" /> Tax Planning</li>
                  <li className="flex items-start"><CheckCircle size={16} className="text-secondary mr-2 mt-0.5 shrink-0" /> Organizational Efficiency Boost</li>
                  <li className="flex items-start"><CheckCircle size={16} className="text-secondary mr-2 mt-0.5 shrink-0" /> Compliance System Construction</li>
                </ul>
              </CardContent>
              <div className="p-6 pt-0 mt-auto">
                <Link href="/contact">
                  <Button className="w-full bg-primary text-white hover:bg-primary/90 cursor-pointer">Inquire Now</Button>
                </Link>
              </div>
            </Card>

            {/* Package 3 */}
            <Card className="border border-slate-200 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col">
              <CardHeader className="bg-primary/5 pb-6">
                <CardTitle className="font-serif text-xl text-primary text-center">Cross-Border Expansion</CardTitle>
              </CardHeader>
              <CardContent className="pt-6 flex-grow">
                <ul className="space-y-3 text-sm text-muted-foreground">
                  <li className="flex items-start"><CheckCircle size={16} className="text-secondary mr-2 mt-0.5 shrink-0" /> SEA Market Entry Consulting</li>
                  <li className="flex items-start"><CheckCircle size={16} className="text-secondary mr-2 mt-0.5 shrink-0" /> Cross-border Compliance</li>
                  <li className="flex items-start"><CheckCircle size={16} className="text-secondary mr-2 mt-0.5 shrink-0" /> Regional Supply Chain Planning</li>
                  <li className="flex items-start"><CheckCircle size={16} className="text-secondary mr-2 mt-0.5 shrink-0" /> Multi-regional Tax Synergy</li>
                </ul>
              </CardContent>
              <div className="p-6 pt-0 mt-auto">
                <Link href="/contact">
                  <Button variant="outline" className="w-full border-primary text-primary hover:bg-primary hover:text-white cursor-pointer">Inquire Now</Button>
                </Link>
              </div>
            </Card>

            {/* Package 4 */}
            <Card className="border border-slate-200 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col">
              <CardHeader className="bg-primary/5 pb-6">
                <CardTitle className="font-serif text-xl text-primary text-center">Annual Advisory</CardTitle>
              </CardHeader>
              <CardContent className="pt-6 flex-grow">
                <ul className="space-y-3 text-sm text-muted-foreground">
                  <li className="flex items-start"><CheckCircle size={16} className="text-secondary mr-2 mt-0.5 shrink-0" /> Full-year Policy Interpretation</li>
                  <li className="flex items-start"><CheckCircle size={16} className="text-secondary mr-2 mt-0.5 shrink-0" /> Quarterly Business Diagnosis</li>
                  <li className="flex items-start"><CheckCircle size={16} className="text-secondary mr-2 mt-0.5 shrink-0" /> Monthly Consulting Support</li>
                  <li className="flex items-start"><CheckCircle size={16} className="text-secondary mr-2 mt-0.5 shrink-0" /> Emergency Response (24h)</li>
                </ul>
              </CardContent>
              <div className="p-6 pt-0 mt-auto">
                <Link href="/contact">
                  <Button variant="outline" className="w-full border-primary text-primary hover:bg-primary hover:text-white cursor-pointer">Inquire Now</Button>
                </Link>
              </div>
            </Card>
          </div>
        </div>
      </section>
    </Layout>
  );
}
