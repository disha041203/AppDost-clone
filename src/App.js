import React, { useState, useEffect } from 'react';
import { Sparkles, Smartphone, Code, Palette, Rocket, Users, CheckCircle, ArrowRight, Menu, X, Zap, Shield, Globe } from 'lucide-react';

export default function AppDost() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeService, setActiveService] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveService((prev) => (prev + 1) % 4);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const services = [
    {
      icon: Smartphone,
      title: 'Mobile App Development',
      desc: 'Native iOS & Android apps that users love',
      gradient: 'from-purple-500 to-pink-500'
    },
    {
      icon: Code,
      title: 'Web Development',
      desc: 'Responsive, fast, and scalable web solutions',
      gradient: 'from-blue-500 to-cyan-500'
    },
    {
      icon: Palette,
      title: 'UI/UX Design',
      desc: 'Beautiful interfaces that convert',
      gradient: 'from-orange-500 to-red-500'
    },
    {
      icon: Rocket,
      title: 'Digital Strategy',
      desc: 'End-to-end digital transformation',
      gradient: 'from-green-500 to-emerald-500'
    }
  ];

  const stats = [
    { value: '500+', label: 'Projects Delivered' },
    { value: '98%', label: 'Client Satisfaction' },
    { value: '50+', label: 'Team Members' },
    { value: '15+', label: 'Countries Served' }
  ];

  const features = [
    { icon: Zap, title: 'Lightning Fast', desc: 'Optimized for speed and performance' },
    { icon: Shield, title: 'Secure & Reliable', desc: 'Enterprise-grade security standards' },
    { icon: Globe, title: 'Global Reach', desc: 'Serving clients worldwide 24/7' },
    { icon: Users, title: 'Expert Team', desc: 'Industry veterans with proven track records' }
  ];

  const projects = [
    { name: 'FinTech Pro', type: 'Mobile Banking', color: 'bg-gradient-to-br from-indigo-500 to-purple-600' },
    { name: 'HealthHub', type: 'Healthcare Platform', color: 'bg-gradient-to-br from-teal-500 to-green-600' },
    { name: 'ShopEasy', type: 'E-commerce App', color: 'bg-gradient-to-br from-orange-500 to-pink-600' },
    { name: 'EduLearn', type: 'EdTech Solution', color: 'bg-gradient-to-br from-blue-500 to-cyan-600' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-purple-950 to-slate-950 text-white">
      {/* Animated Background */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      {/* Navigation */}
      <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? 'bg-slate-950/90 backdrop-blur-xl shadow-xl shadow-purple-500/10' : 'bg-transparent'}`}>
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-gradient-to-br from-purple-500 to-pink-500 rounded-lg flex items-center justify-center">
                <Sparkles className="w-6 h-6" />
              </div>
              <span className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                AppDost
              </span>
            </div>
            
            <div className="hidden md:flex items-center space-x-8">
              {['Services', 'Work', 'About', 'Contact'].map((item) => (
                <a key={item} href={`#${item.toLowerCase()}`} className="text-gray-300 hover:text-white transition-colors relative group">
                  {item}
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-purple-500 to-pink-500 group-hover:w-full transition-all duration-300"></span>
                </a>
              ))}
              <button className="px-6 py-2 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full hover:shadow-lg hover:shadow-purple-500/50 transition-all duration-300 hover:scale-105">
                Get Started
              </button>
            </div>

            <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="md:hidden">
              {isMenuOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-slate-900/95 backdrop-blur-xl">
            <div className="container mx-auto px-6 py-4 space-y-4">
              {['Services', 'Work', 'About', 'Contact'].map((item) => (
                <a key={item} href={`#${item.toLowerCase()}`} className="block text-gray-300 hover:text-white transition-colors">
                  {item}
                </a>
              ))}
              <button className="w-full px-6 py-2 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full">
                Get Started
              </button>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-6 overflow-hidden">
        <div className="container mx-auto text-center relative z-10">
          <div className="inline-block mb-6 px-4 py-2 bg-purple-500/20 rounded-full border border-purple-500/30 backdrop-blur-sm animate-pulse">
            <span className="text-purple-300">🚀 Transform Your Digital Vision</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            We Build{' '}
            <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-purple-400 bg-clip-text text-transparent animate-gradient">
              Digital Experiences
            </span>
            <br />That Matter
          </h1>
          
          <p className="text-xl text-gray-400 mb-12 max-w-2xl mx-auto">
            From concept to launch, we craft exceptional mobile apps, websites, and digital solutions that drive real business results.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
            <button className="group px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full hover:shadow-2xl hover:shadow-purple-500/50 transition-all duration-300 hover:scale-105 flex items-center space-x-2">
              <span>Start Your Project</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
            <button className="px-8 py-4 border border-purple-500/30 rounded-full hover:bg-purple-500/10 transition-all duration-300">
              View Our Work
            </button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
            {stats.map((stat, idx) => (
              <div key={idx} className="group cursor-pointer">
                <div className="text-4xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent group-hover:scale-110 transition-transform">
                  {stat.value}
                </div>
                <div className="text-gray-400 mt-2">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 px-6 relative">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Our Services</h2>
            <p className="text-gray-400 text-lg">Comprehensive digital solutions tailored to your needs</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, idx) => {
              const Icon = service.icon;
              return (
                <div
                  key={idx}
                  className={`group relative p-8 rounded-2xl bg-gradient-to-br from-slate-900/50 to-slate-900/30 backdrop-blur-sm border border-slate-800 hover:border-purple-500/50 transition-all duration-500 cursor-pointer hover:scale-105 ${
                    activeService === idx ? 'ring-2 ring-purple-500' : ''
                  }`}
                  onMouseEnter={() => setActiveService(idx)}
                >
                  <div className={`w-14 h-14 bg-gradient-to-br ${service.gradient} rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                    <Icon className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
                  <p className="text-gray-400">{service.desc}</p>
                  <div className="mt-6 flex items-center text-purple-400 opacity-0 group-hover:opacity-100 transition-opacity">
                    <span className="text-sm">Learn more</span>
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-6 relative">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, idx) => {
              const Icon = feature.icon;
              return (
                <div key={idx} className="text-center group cursor-pointer">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-2xl mb-4 group-hover:scale-110 transition-transform">
                    <Icon className="w-8 h-8 text-purple-400" />
                  </div>
                  <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
                  <p className="text-gray-400 text-sm">{feature.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Projects Showcase */}
      <section id="work" className="py-20 px-6 relative">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Featured Projects</h2>
            <p className="text-gray-400 text-lg">Some of our recent work that made an impact</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {projects.map((project, idx) => (
              <div
                key={idx}
                className={`group relative h-80 rounded-3xl ${project.color} overflow-hidden cursor-pointer hover:scale-105 transition-all duration-500`}
              >
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
                <div className="absolute inset-0 flex flex-col justify-end p-8">
                  <div className="text-sm text-white/80 mb-2">{project.type}</div>
                  <h3 className="text-3xl font-bold mb-4">{project.name}</h3>
                  <div className="flex items-center text-white opacity-0 group-hover:opacity-100 transition-opacity">
                    <span>View Case Study</span>
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6 relative">
        <div className="container mx-auto">
          <div className="relative rounded-3xl bg-gradient-to-br from-purple-600 to-pink-600 p-12 md:p-16 overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-white/10 rounded-full blur-3xl"></div>
            
            <div className="relative z-10 text-center">
              <h2 className="text-4xl md:text-5xl font-bold mb-6">Ready to Start Your Project?</h2>
              <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
                Let's bring your digital vision to life. Schedule a free consultation today.
              </p>
              <button className="px-10 py-4 bg-white text-purple-600 rounded-full font-semibold hover:scale-105 transition-all duration-300 hover:shadow-2xl">
                Get in Touch
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 border-t border-slate-800">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-8 h-8 bg-gradient-to-br from-purple-500 to-pink-500 rounded-lg flex items-center justify-center">
                  <Sparkles className="w-5 h-5" />
                </div>
                <span className="text-xl font-bold">AppDost</span>
              </div>
              <p className="text-gray-400 text-sm">
                Transforming ideas into digital reality since 2020.
              </p>
            </div>
            
            {[
              { title: 'Services', links: ['Mobile Apps', 'Web Development', 'UI/UX Design', 'Consulting'] },
              { title: 'Company', links: ['About Us', 'Careers', 'Blog', 'Contact'] },
              { title: 'Connect', links: ['LinkedIn', 'Twitter', 'Instagram', 'Facebook'] }
            ].map((col, idx) => (
              <div key={idx}>
                <h4 className="font-semibold mb-4">{col.title}</h4>
                <ul className="space-y-2">
                  {col.links.map((link, i) => (
                    <li key={i}>
                      <a href="#" className="text-gray-400 hover:text-white transition-colors text-sm">
                        {link}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          
          <div className="pt-8 border-t border-slate-800 text-center text-gray-400 text-sm">
            <p>&copy; 2025 AppDost. All rights reserved.</p>
          </div>
        </div>
      </footer>

      <style jsx>{`
        @keyframes gradient {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
        .animate-gradient {
          background-size: 200% 200%;
          animation: gradient 3s ease infinite;
        }
      `}</style>
    </div>
  );
}