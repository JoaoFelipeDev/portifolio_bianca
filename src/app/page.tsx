
"use client";
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import {
  ArrowRight,
  Palette,
  Users,
  Layers,
  Search,
  Mail,
  Linkedin,
  Instagram,
  ExternalLink,
  Star,
  CheckCircle,
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';

import HeroSection from '../components/landing/HeroSection';
import AboutSection from '../components/landing/AboutSection';
import ServicesSection from '../components/landing/ServicesSection';
import PortfolioSection from '../components/landing/PortfolioSection';
import TestimonialsSection from '../components/landing/TestimonialsSection';
import ContactSection from '../components/landing/ContactSection';

export default function Home() {
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    // Set dark theme as default
    document.documentElement.classList.add('dark');

    // Cleanup on component unmount
    return () => {
      document.documentElement.classList.remove('dark');
    };
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['hero', 'about', 'services', 'portfolio', 'testimonials', 'contact'];
      const currentSection = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      if (currentSection) {
        setActiveSection(currentSection);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-gray-900 transition-colors duration-300">
      {/* Navigation */}
      <motion.nav
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="fixed top-0 left-0 right-0 z-50 bg-gray-900/80 backdrop-blur-md border-b border-gray-800"
      >
        <div className="max-w-6xl mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <motion.div
              className="text-2xl font-bold text-white"
              whileHover={{ scale: 1.05 }}
            >
              Bianca<span className="text-violet-600">.</span>
            </motion.div>

            <div className="flex items-center gap-6">
              <div className="hidden md:flex space-x-8">
                {[
                  { id: 'hero', label: 'Início' },
                  { id: 'about', label: 'Sobre' },
                  { id: 'services', label: 'Serviços' },
                  { id: 'portfolio', label: 'Portfólio' },
                  { id: 'contact', label: 'Contato' }
                ].map(({ id, label }) => (
                  <button
                    key={id}
                    onClick={() => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })}
                    className={`text-sm font-medium transition-all duration-300 hover:text-violet-600 ${
                      activeSection === id ? 'text-violet-600' : 'text-gray-400'
                    }`}
                  >
                    {label}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </motion.nav>

      {/* Hero Section */}
      <section id="hero">
        <HeroSection />
      </section>

      {/* About Section */}
      <section id="about">
        <AboutSection />
      </section>

      {/* Services Section */}
      <section id="services">
        <ServicesSection />
      </section>

      {/* Portfolio Section */}
      <section id="portfolio">
        <PortfolioSection />
      </section>

      {/* Testimonials Section */}
      <section id="testimonials">
        <TestimonialsSection />
      </section>

      {/* Contact Section */}
      <section id="contact">
        <ContactSection />
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 py-12 transition-colors duration-300">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <div className="text-2xl font-bold text-white mb-4">
            Bianca<span className="text-violet-600">.</span>
          </div>
          <p className="text-gray-400 mb-6">Transformando ideias em experiências digitais inesquecíveis</p>
          <div className="flex justify-center space-x-6">
            <motion.a
              href="mailto:bianca@exemplo.com"
              whileHover={{ scale: 1.1 }}
              className="text-gray-500 hover:text-violet-400 transition-colors"
            >
              <Mail className="w-5 h-5" />
            </motion.a>
            <motion.a
              href="#"
              whileHover={{ scale: 1.1 }}
              className="text-gray-500 hover:text-violet-400 transition-colors"
            >
              <Linkedin className="w-5 h-5" />
            </motion.a>
            <motion.a
              href="#"
              whileHover={{ scale: 1.1 }}
              className="text-gray-500 hover:text-violet-400 transition-colors"
            >
              <Instagram className="w-5 h-5" />
            </motion.a>
          </div>
          <div className="mt-8 pt-8 border-t border-gray-700">
            <p className="text-sm text-gray-400">© 2024 Bianca Quintanilha. Todos os direitos reservados.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
