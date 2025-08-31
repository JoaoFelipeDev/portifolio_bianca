import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Sparkles } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function HeroSection() {
  return (
    <section className="pt-24 pb-16 px-6 min-h-screen flex items-center">
      <div className="max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="space-y-8"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="inline-flex items-center space-x-2 bg-violet-50 text-violet-700 px-4 py-2 rounded-full text-sm font-medium"
            >
              <Sparkles className="w-4 h-4" />
              <span>UI/UX Designer</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="text-5xl lg:text-7xl font-bold text-gray-900 leading-tight"
            >
              Transformando
              <br />
              <span className="text-violet-600">ideias</span> em
              <br />
              experiências
              <br />
              <span className="bg-gradient-to-r from-violet-600 to-purple-600 bg-clip-text text-transparent">
                inesquecíveis
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="text-xl text-gray-600 leading-relaxed max-w-lg"
            >
              Do design de interiores ao mundo digital. Trago uma visão única de estética, 
              harmonia e usabilidade para criar interfaces que encantam e convertem.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <Button
                size="lg"
                className="bg-violet-600 hover:bg-violet-700 text-white px-8 py-4 rounded-full group"
                onClick={() => document.getElementById('portfolio')?.scrollIntoView({ behavior: 'smooth' })}
              >
                <span>Conheça meu trabalho</span>
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>

              <Button
                size="lg"
                variant="outline"
                className="border-gray-300 text-gray-700 hover:border-violet-600 hover:text-violet-600 px-8 py-4 rounded-full"
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Vamos conversar
              </Button>
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.7 }}
              className="flex space-x-8 pt-8"
            >
              <div>
                <div className="text-3xl font-bold text-gray-900">50+</div>
                <div className="text-sm text-gray-600">Projetos entregues</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-gray-900">5</div>
                <div className="text-sm text-gray-600">Anos de experiência</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-gray-900">100%</div>
                <div className="text-sm text-gray-600">Clientes satisfeitos</div>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Column - Visual Element */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="relative"
          >
            <div className="relative w-full h-96 lg:h-[500px] bg-gradient-to-br from-violet-100 to-purple-100 rounded-3xl overflow-hidden">
              {/* Decorative elements */}
              <motion.div
                animate={{
                  y: [0, -20, 0],
                  rotate: [0, 5, 0]
                }}
                transition={{
                  duration: 6,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
                className="absolute top-8 right-8 w-24 h-24 bg-violet-600 rounded-2xl opacity-20"
              />
              <motion.div
                animate={{
                  y: [0, 15, 0],
                  rotate: [0, -3, 0]
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
                className="absolute bottom-12 left-8 w-16 h-16 bg-purple-500 rounded-full opacity-30"
              />
              <motion.div
                animate={{
                  scale: [1, 1.1, 1],
                  opacity: [0.3, 0.6, 0.3]
                }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
                className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-gradient-to-r from-violet-400 to-purple-400 rounded-full"
              />

              {/* Profile placeholder or illustration */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-6xl">✨</div>
              </div>
            </div>

            {/* Floating cards */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="absolute -bottom-4 -left-4 bg-white p-4 rounded-2xl shadow-lg"
            >
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-violet-100 rounded-full flex items-center justify-center">
                  <span className="text-violet-600 text-sm font-bold">F</span>
                </div>
                <div>
                  <div className="text-sm font-medium text-gray-900">Figma Expert</div>
                  <div className="text-xs text-gray-500">Prototipagem avançada</div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: -50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.9 }}
              className="absolute -top-4 -right-4 bg-white p-4 rounded-2xl shadow-lg"
            >
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                  <span className="text-green-600 text-sm font-bold">UX</span>
                </div>
                <div>
                  <div className="text-sm font-medium text-gray-900">UX Research</div>
                  <div className="text-xs text-gray-500">Metodologias ágeis</div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}