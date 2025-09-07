
import React from 'react';
import { motion } from 'framer-motion';
import { Star, Quote } from 'lucide-react';
import { Card } from '@/components/ui/card';

export default function TestimonialsSection() {
  const testimonials = [
    {
      id: 1,
      name: "Carlos Eduardo",
      role: "CEO, TechStart",
      company: "Startup de Tecnologia",
      content: "Bianca transformou nossa visão em uma interface incrível. Sua atenção aos detalhes e compreensão do usuário são excepcionais. O resultado superou todas as expectativas!",
      rating: 5,
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face"
    },
    {
      id: 2,
      name: "Marina Santos",
      role: "Product Manager",
      company: "FinTech Leader",
      content: "O trabalho da Bianca é simplesmente impecável. Ela não apenas entregou um design lindo, mas criou uma experiência que nossos usuários adoram. Profissionalismo total!",
      rating: 5,
      avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b890?w=100&h=100&fit=crop&crop=face"
    },
    {
      id: 3,
      name: "Roberto Lima",
      role: "Founder",
      company: "E-commerce Sustentável",
      content: "A transição do design de interiores trouxe uma perspectiva única ao nosso projeto. Bianca conseguiu criar uma harmonia visual que reflete perfeitamente nossos valores.",
      rating: 5,
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face"
    },
    {
      id: 4,
      name: "Ana Beatriz",
      role: "Marketing Director",
      company: "Agência Criativa",
      content: "Trabalhar com a Bianca foi uma experiência incrível. Ela entende não só de design, mas de negócios. Cada decisão foi estratégica e bem fundamentada.",
      rating: 5,
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face"
    }
  ];

  const stats = [
    { number: "50+", label: "Projetos Entregues" },
    { number: "100%", label: "Clientes Satisfeitos" },
    { number: "4.9", label: "Rating Médio" },
    { number: "2x", label: "Conversão Melhorada" }
  ];

  return (
    <section className="py-24 px-6 bg-white dark:bg-gray-900 transition-colors duration-300">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            O que meus clientes
            <br />
            <span className="text-violet-600">dizem sobre mim</span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto leading-relaxed">
            Resultados que falam por si só. Veja como transformei ideias em 
            experiências digitais de sucesso.
          </p>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="grid grid-cols-2 lg:grid-cols-4 gap-8 mb-16"
        >
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <motion.div
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-4xl lg:text-5xl font-bold text-violet-600 mb-2"
              >
                {stat.number}
              </motion.div>
              <div className="text-gray-600 dark:text-gray-400 font-medium">{stat.label}</div>
            </div>
          ))}
        </motion.div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Card className="p-8 bg-white dark:bg-gray-800 border-0 shadow-lg hover:shadow-xl transition-all duration-300 h-full">
                {/* Quote Icon */}
                <div className="mb-6">
                  <Quote className="w-8 h-8 text-violet-600 dark:text-violet-400 opacity-60" />
                </div>

                {/* Content */}
                <blockquote className="text-gray-700 dark:text-gray-300 leading-relaxed mb-6 text-lg">
                  &quot;{testimonial.content}&quot;
                </blockquote>

                {/* Rating */}
                <div className="flex gap-1 mb-6">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                  ))}
                </div>

                {/* Author */}
                <div className="flex items-center gap-4">
                  <img
                    src={testimonial.avatar}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <div>
                    <div className="font-bold text-gray-900 dark:text-white">{testimonial.name}</div>
                    <div className="text-sm text-gray-600 dark:text-gray-400">{testimonial.role}</div>
                    <div className="text-xs text-violet-600 dark:text-violet-400 font-medium">{testimonial.company}</div>
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mt-16"
        >
          <div className="bg-gray-50 dark:bg-gray-800 rounded-3xl p-8 lg:p-12">
            <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 dark:text-white mb-4">
              Pronto para ser o próximo case de sucesso?
            </h3>
            <p className="text-gray-600 dark:text-gray-400 mb-8 max-w-2xl mx-auto">
              Vamos conversar sobre como posso ajudar seu projeto a alcançar 
              resultados excepcionais.
            </p>
            <button
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="bg-violet-600 hover:bg-violet-700 text-white px-8 py-4 rounded-full font-medium transition-colors"
            >
              Iniciar meu projeto
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
