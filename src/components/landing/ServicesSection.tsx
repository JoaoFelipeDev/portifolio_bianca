
import React from 'react';
import { motion } from 'framer-motion';
import { 
  Palette, 
  Users, 
  Layers, 
  Search,
  Smartphone,
  Globe,
  Zap,
  Target
} from 'lucide-react';
import { Card } from '@/components/ui/card';

export default function ServicesSection() {
  const services = [
    {
      icon: Palette,
      title: "Design de Interfaces Modernas",
      description: "Criação de interfaces elegantes e funcionais que encantam usuários e elevam sua marca ao próximo nível.",
      features: ["UI Design", "Visual Identity", "Iconografia", "Micro-interações"]
    },
    {
      icon: Users,
      title: "UX Research & Strategy",
      description: "Pesquisa profunda do usuário e estratégias baseadas em dados para criar experiências verdadeiramente impactantes.",
      features: ["User Personas", "Journey Mapping", "Usability Tests", "Analytics"]
    },
    {
      icon: Layers,
      title: "Prototipagem Interativa",
      description: "Protótipos de alta fidelidade no Figma que permitem testar e validar ideias antes do desenvolvimento.",
      features: ["Figma Expert", "Interactive Prototypes", "Design Handoff", "Colaboração"]
    },
    {
      icon: Search,
      title: "UX Research",
      description: "Metodologias de pesquisa avançadas para compreender profundamente as necessidades dos usuários.",
      features: ["User Research", "Data Analysis", "Insights", "Recommendations"]
    }
  ];

  const process = [
    { step: "01", title: "Descoberta", description: "Entendo seu negócio, usuários e objetivos" },
    { step: "02", title: "Pesquisa", description: "Analiso o mercado e comportamento dos usuários" },
    { step: "03", title: "Design", description: "Criamos wireframes e designs de alta fidelidade" },
    { step: "04", title: "Prototipagem", description: "Desenvolvimento de protótipos interativos" },
    { step: "05", title: "Teste", description: "Validamos a solução com usuários reais" },
    { step: "06", title: "Entrega", description: "Handoff completo para desenvolvimento" }
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
            Serviços que transformam
            <br />
            <span className="text-violet-600">sua visão em realidade</span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto leading-relaxed">
            Ofereço soluções completas de UI/UX Design, desde a concepção inicial 
            até a entrega final, sempre focando na excelência e inovação.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-20">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Card className="p-8 h-full bg-white dark:bg-gray-800 border-0 shadow-lg hover:shadow-xl transition-all duration-300 group hover:scale-105">
                <div className="mb-6">
                  <div className="w-14 h-14 bg-violet-100 dark:bg-violet-900/50 rounded-2xl flex items-center justify-center group-hover:bg-violet-600 transition-colors duration-300 mb-4">
                    <service.icon className="w-7 h-7 text-violet-600 dark:text-violet-400 group-hover:text-white transition-colors duration-300" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">{service.title}</h3>
                  <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-6">{service.description}</p>
                </div>
                
                <div className="flex flex-wrap gap-2">
                  {service.features.map((feature, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 text-sm rounded-full group-hover:bg-violet-50 dark:group-hover:bg-violet-900/30 group-hover:text-violet-700 dark:group-hover:text-violet-400 transition-colors duration-300"
                    >
                      {feature}
                    </span>
                  ))}
                </div>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Process Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="bg-gray-50 dark:bg-gray-800 rounded-3xl p-8 lg:p-12"
        >
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
              Meu processo de trabalho
            </h3>
            <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              Um processo estruturado e transparente que garante resultados excepcionais 
              em cada projeto.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {process.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center group"
              >
                <div className="mb-4">
                  <div className="w-16 h-16 bg-white dark:bg-gray-700 rounded-full flex items-center justify-center mx-auto shadow-lg group-hover:shadow-xl transition-shadow duration-300">
                    <span className="text-violet-600 font-bold text-lg">{item.step}</span>
                  </div>
                </div>
                <h4 className="font-bold text-gray-900 dark:text-white mb-2">{item.title}</h4>
                <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
