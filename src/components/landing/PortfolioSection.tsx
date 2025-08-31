
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Heart } from 'lucide-react';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

export default function PortfolioSection() {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const categories = [
    { id: 'all', label: 'Todos os Projetos' },
    { id: 'mobile', label: 'Mobile Apps' },
    { id: 'web', label: 'Web Design' }
  ];

  const projects = [
    {
      id: 1,
      title: "EcoTrack - App Sustentabilidade",
      category: "mobile",
      description: "Aplicativo para rastreamento de hábitos sustentáveis com gamificação e impacto ambiental.",
      image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=500&h=400&fit=crop",
      tags: ["Mobile", "UX Research", "Gamificação"],
      type: "App Mobile"
    },
    {
      id: 2,
      title: "Lumina - E-commerce Minimalista",
      category: "web",
      description: "E-commerce de produtos artesanais com foco em experiência de compra fluida e elegante.",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=500&h=400&fit=crop",
      tags: ["E-commerce", "UI Design", "Conversão"],
      type: "Website"
    },
    {
      id: 3,
      title: "FinTech Web App",
      category: "web",
      description: "Aplicação web para startup financeira, incluindo dashboard de usuário e onboarding.",
      image: "https://images.unsplash.com/photo-1551434678-e076c223a692?w=500&h=400&fit=crop",
      tags: ["Web App", "Dashboard", "Fintech"],
      type: "Web App"
    },
    {
      id: 4,
      title: "MedCare - Telemedicina",
      category: "mobile",
      description: "Plataforma de telemedicina intuitiva conectando pacientes e médicos com segurança.",
      image: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=500&h=400&fit=crop",
      tags: ["Healthcare", "Segurança", "UX"],
      type: "App Mobile"
    },
    {
      id: 5,
      title: "Artisan Portfolio",
      category: "web",
      description: "Portfolio online para artistas independentes com galeria interativa e loja integrada.",
      image: "https://images.unsplash.com/photo-1558655146-d09347e92766?w=500&h=400&fit=crop",
      tags: ["Portfolio", "Artistas", "Galeria"],
      type: "Website"
    },
    {
      id: 6,
      title: "Smart Home Dashboard",
      category: "web",
      description: "Interface para controle residencial inteligente com foco na usabilidade e automação.",
      image: "https://images.unsplash.com/photo-1600585152220-90363fe7e115?w=500&h=400&fit=crop",
      tags: ["IoT", "Dashboard", "Smart Home"],
      type: "Web App"
    }
  ];

  const filteredProjects = selectedCategory === 'all' 
    ? projects 
    : projects.filter(project => project.category === selectedCategory);

  return (
    <section className="py-24 px-6 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Projetos que fazem a
            <br />
            <span className="text-violet-600">diferença no mercado</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Uma seleção cuidadosa dos meus trabalhos mais impactantes, 
            mostrando versatilidade e excelência em diferentes setores.
          </p>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-wrap justify-center gap-3 mb-12"
        >
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setSelectedCategory(category.id)}
              className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                selectedCategory === category.id
                  ? 'bg-violet-600 text-white shadow-lg'
                  : 'bg-white text-gray-600 hover:bg-violet-50 hover:text-violet-600'
              }`}
            >
              {category.label}
            </button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          layout
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              layout
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="bg-white border-0 shadow-lg hover:shadow-xl transition-all duration-500 group overflow-hidden">
                {/* Image */}
                <div className="relative overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center hover:bg-violet-600 hover:text-white transition-colors cursor-pointer">
                      <ExternalLink className="w-5 h-5" />
                    </div>
                  </div>
                  <Badge 
                    variant="secondary" 
                    className="absolute top-4 left-4 bg-white/90 text-gray-700"
                  >
                    {project.type}
                  </Badge>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-violet-600 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed mb-4">
                    {project.description}
                  </p>
                  
                  {/* Tags */}
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag, idx) => (
                      <span
                        key={idx}
                        className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded-md"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mt-16"
        >
          <div className="bg-gradient-to-r from-violet-600 to-purple-600 rounded-3xl p-8 lg:p-12 text-white">
            <Heart className="w-12 h-12 mx-auto mb-6 opacity-80" />
            <h3 className="text-2xl lg:text-3xl font-bold mb-4">
              Gostou do que viu?
            </h3>
            <p className="text-lg opacity-90 mb-8 max-w-2xl mx-auto">
              Cada projeto é único e desenvolvido com paixão. 
              Vamos criar algo incrível juntos?
            </p>
            <button
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="bg-white text-violet-600 px-8 py-4 rounded-full font-medium hover:bg-gray-50 transition-colors"
            >
              Vamos conversar sobre seu projeto
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
