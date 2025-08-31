"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Mail, Linkedin, Instagram } from "lucide-react";

import HeroSection from "@/components/landing/HeroSection";
import AboutSection from "@/components/landing/AboutSection";
import ServicesSection from "@/components/landing/ServicesSection";
import PortfolioSection from "@/components/landing/PortfolioSection";
import TestimonialsSection from "@/components/landing/TestimonialsSection";
import ContactSection from "@/components/landing/ContactSection";

export default function Home() {
  const [activeSection, setActiveSection] = useState("hero");

  useEffect(() => {
    const handleScroll = () => {
      const sections = [
        "hero",
        "about",
        "services",
        "portfolio",
        "testimonials",
        "contact",
      ];
      const currentSection = sections.find((section) => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      if (currentSection) setActiveSection(currentSection);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <motion.nav
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-100"
      >
        <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
          <motion.div
            className="text-2xl font-bold text-gray-900"
            whileHover={{ scale: 1.05 }}
          >
            Bianca<span className="text-violet-600">.</span>
          </motion.div>
          <div className="hidden md:flex space-x-8">
            {[
              { id: "hero", label: "Início" },
              { id: "about", label: "Sobre" },
              { id: "services", label: "Serviços" },
              { id: "portfolio", label: "Portfólio" },
              { id: "contact", label: "Contato" },
            ].map(({ id, label }) => (
              <button
                key={id}
                onClick={() =>
                  document
                    .getElementById(id)
                    ?.scrollIntoView({ behavior: "smooth" })
                }
                className={`text-sm font-medium transition-all duration-300 hover:text-violet-600 ${
                  activeSection === id
                    ? "text-violet-600"
                    : "text-gray-600"
                }`}
              >
                {label}
              </button>
            ))}
          </div>
        </div>
      </motion.nav>

      {/* Sections */}
      <section id="hero">
        <HeroSection />
      </section>
      <section id="about">
        <AboutSection />
      </section>
      <section id="services">
        <ServicesSection />
      </section>
      <section id="portfolio">
        <PortfolioSection />
      </section>
      <section id="testimonials">
        <TestimonialsSection />
      </section>
      <section id="contact">
        <ContactSection />
      </section>

      {/* Footer */}
      <footer className="bg-gray-50 py-12">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <div className="text-2xl font-bold text-gray-900 mb-4">
            Bianca<span className="text-violet-600">.</span>
          </div>
          <p className="text-gray-600 mb-6">
            Transformando ideias em experiências digitais inesquecíveis
          </p>
          <div className="flex justify-center space-x-6">
            <motion.a
              href="mailto:bianca@exemplo.com"
              whileHover={{ scale: 1.1 }}
              className="text-gray-400 hover:text-violet-600 transition-colors"
            >
              <Mail className="w-5 h-5" />
            </motion.a>
            <motion.a
              href="#"
              whileHover={{ scale: 1.1 }}
              className="text-gray-400 hover:text-violet-600 transition-colors"
            >
              <Linkedin className="w-5 h-5" />
            </motion.a>
            <motion.a
              href="#"
              whileHover={{ scale: 1.1 }}
              className="text-gray-400 hover:text-violet-600 transition-colors"
            >
              <Instagram className="w-5 h-5" />
            </motion.a>
          </div>
          <div className="mt-8 pt-8 border-t border-gray-200">
            <p className="text-sm text-gray-500">
              © 2024 Bianca Quintanilha. Todos os direitos reservados.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
