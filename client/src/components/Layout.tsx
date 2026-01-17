import { Link, useLocation } from "wouter";
import { Menu, X, Phone, Mail, MapPin, Facebook, Linkedin, Twitter } from "lucide-react";
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";

export default function Layout({ children }: { children: React.ReactNode }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [location] = useLocation();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu when route changes
  useEffect(() => {
    setIsMenuOpen(false);
  }, [location]);

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About Us" },
    { href: "/services", label: "Services" },
    { href: "/contact", label: "Contact Us" },
  ];

  return (
    <div className="min-h-screen flex flex-col font-sans">
      {/* Top Bar */}
      <div className="bg-primary text-primary-foreground py-2 text-sm hidden md:block">
        <div className="container mx-auto flex justify-between items-center px-4">
          <div className="flex items-center space-x-6">
            <div className="flex items-center space-x-2">
              <Mail size={14} className="text-secondary" />
              <span>gong.jian@hycapital.global</span>
            </div>
            <div className="flex items-center space-x-2">
              <Phone size={14} className="text-secondary" />
              <span>+65 8141 6831</span>
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <a href="#" className="hover:text-secondary transition-colors"><Linkedin size={16} /></a>
            <a href="#" className="hover:text-secondary transition-colors"><Facebook size={16} /></a>
            <a href="#" className="hover:text-secondary transition-colors"><Twitter size={16} /></a>
          </div>
        </div>
      </div>

      {/* Header */}
      <header 
        className={`sticky top-0 z-50 w-full transition-all duration-300 ${
          scrolled ? "bg-white/95 backdrop-blur-md shadow-md py-2" : "bg-white py-4"
        }`}
      >
        <div className="container mx-auto px-4 flex justify-between items-center">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-3">
              <img 
                src="/images/zijinlogo.jpg" 
                alt="ZIJIN GLOBAL DIGITALFO" 
                className="h-12 w-auto object-contain" 
              />
              <div className="hidden lg:block">
                <h1 className="text-xl font-serif font-bold text-primary leading-tight">ZIJIN GLOBAL</h1>
                <p className="text-xs text-muted-foreground tracking-widest">DIGITALFO PTE. LTD.</p>
              </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link 
                key={link.href} 
                href={link.href}
                className={`text-sm font-medium transition-colors hover:text-secondary relative group ${
                  location === link.href ? "text-primary font-bold" : "text-foreground/80"
                }`}
              >
                  {link.label}
                  <span className={`absolute -bottom-1 left-0 w-full h-0.5 bg-secondary transform origin-left transition-transform duration-300 ${
                    location === link.href ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100"
                  }`}></span>
              </Link>
            ))}
            <Link href="/contact">
              <Button className="bg-secondary hover:bg-secondary/90 text-primary font-bold">
                Get Consultation
              </Button>
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-primary"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Nav */}
        {isMenuOpen && (
          <div className="md:hidden absolute top-full left-0 w-full bg-white border-t border-gray-100 shadow-lg py-4 px-4 flex flex-col space-y-4 animate-in slide-in-from-top-5">
            {navLinks.map((link) => (
              <Link 
                key={link.href} 
                href={link.href}
                className={`block py-2 text-base font-medium ${
                  location === link.href ? "text-secondary" : "text-foreground"
                }`}
              >
                  {link.label}
              </Link>
            ))}
            <div className="pt-4 border-t border-gray-100 flex flex-col space-y-3">
              <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                <Mail size={14} />
                <span>gong.jian@hycapital.global</span>
              </div>
              <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                <Phone size={14} />
                <span>+65 8141 6831</span>
              </div>
            </div>
          </div>
        )}
      </header>

      {/* Main Content */}
      <main className="flex-grow">
        {children}
      </main>

      {/* Footer */}
      <footer className="bg-primary text-white pt-16 pb-8">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            {/* Company Info */}
            <div>
              <div className="flex items-center space-x-2 mb-6">
                <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center overflow-hidden">
                   <img src="/images/zijinlogo.jpg" alt="Logo" className="w-8 h-auto" />
                </div>
                <div>
                  <h3 className="font-serif font-bold text-lg leading-none">ZIJIN GLOBAL</h3>
                  <p className="text-xs text-gray-400">DIGITALFO PTE. LTD.</p>
                </div>
              </div>
              <p className="text-gray-300 text-sm leading-relaxed mb-6">
                Professional enterprise management consulting services in Singapore, specializing in strategic planning, operations, and compliance for global growth.
              </p>
              <div className="flex space-x-4">
                <a href="#" className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center hover:bg-secondary hover:text-primary transition-all">
                  <Linkedin size={16} />
                </a>
                <a href="#" className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center hover:bg-secondary hover:text-primary transition-all">
                  <Facebook size={16} />
                </a>
                <a href="#" className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center hover:bg-secondary hover:text-primary transition-all">
                  <Twitter size={16} />
                </a>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="font-serif font-bold text-lg mb-6 text-secondary">Quick Links</h4>
              <ul className="space-y-3 text-sm text-gray-300">
                <li><Link href="/" className="hover:text-secondary transition-colors">Home</Link></li>
                <li><Link href="/about" className="hover:text-secondary transition-colors">About Us</Link></li>
                <li><Link href="/services" className="hover:text-secondary transition-colors">Our Services</Link></li>
                <li><Link href="/contact" className="hover:text-secondary transition-colors">Contact Us</Link></li>
              </ul>
            </div>

            {/* Services */}
            <div>
              <h4 className="font-serif font-bold text-lg mb-6 text-secondary">Our Services</h4>
              <ul className="space-y-3 text-sm text-gray-300">
                <li><Link href="/services" className="hover:text-secondary transition-colors">Strategic Planning</Link></li>
                <li><Link href="/services" className="hover:text-secondary transition-colors">Operations Management</Link></li>
                <li><Link href="/services" className="hover:text-secondary transition-colors">Financial Management</Link></li>
                <li><Link href="/services" className="hover:text-secondary transition-colors">HR Management</Link></li>
                <li><Link href="/services" className="hover:text-secondary transition-colors">Compliance Consulting</Link></li>
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h4 className="font-serif font-bold text-lg mb-6 text-secondary">Contact Us</h4>
              <ul className="space-y-4 text-sm text-gray-300">
                <li className="flex items-start space-x-3">
                  <MapPin size={18} className="text-secondary shrink-0 mt-0.5" />
                  <span>Singapore</span>
                </li>
                <li className="flex items-center space-x-3">
                  <Mail size={18} className="text-secondary shrink-0" />
                  <a href="mailto:gong.jian@hycapital.global" className="hover:text-white transition-colors">gong.jian@hycapital.global</a>
                </li>
                <li className="flex items-center space-x-3">
                  <Phone size={18} className="text-secondary shrink-0" />
                  <a href="tel:+6581416831" className="hover:text-white transition-colors">+65 8141 6831</a>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-gray-400">
            <p>&copy; {new Date().getFullYear()} ZIJIN GLOBAL DIGITALFO PTE. LTD. All rights reserved.</p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
