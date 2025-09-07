import React from 'react';
import { motion } from 'framer-motion';
import { Home, Monitor, Lightbulb, Heart, Check } from 'lucide-react';
import { Card } from '@/components/ui/card';

export default function AboutSection() {
  const journey = [
    {
      icon: Home,
      title: "Design de Interiores",
      description: "5 anos criando ambientes únicos, desenvolvendo senso estético e compreensão de experiência espacial."
    },
    {
      icon: Lightbulb,
      title: "Transição Digital",
      description: "Descoberta do mundo UI/UX, aplicando princípios de harmonia e funcionalidade ao digital."
    },
    {
      icon: Monitor,
      title: "UI/UX Designer",
      description: "Especialização em Figma, prototipagem e pesquisa de usuário, criando interfaces memoráveis."
    },
    {
      icon: Heart,
      title: "Paixão por Inovação",
      description: "Combinando estética refinada com usabilidade excepcional para experiências transformadoras."
    }
  ];

  return (
    <section className="py-24 px-6 bg-gray-50 dark:bg-gray-800 transition-colors duration-300">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            Uma jornada única de
            <br />
            <span className="text-violet-600">criatividade e inovação</span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto leading-relaxed">
            Minha transição do design de interiores para o UI/UX trouxe uma perspectiva única: 
            a capacidade de criar não apenas interfaces bonitas, mas experiências que tocam 
            e transformam a relação das pessoas com a tecnologia.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {journey.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Card className="p-6 h-full bg-white dark:bg-gray-700 border-0 shadow-lg hover:shadow-xl transition-all duration-300 group">
                <div className="mb-4">
                  <div className="w-12 h-12 bg-violet-100 dark:bg-violet-900/50 rounded-2xl flex items-center justify-center group-hover:bg-violet-600 transition-colors duration-300">
                    <step.icon className="w-6 h-6 text-violet-600 dark:text-violet-400 group-hover:text-white transition-colors duration-300" />
                  </div>
                </div>
                <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-3">{step.title}</h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">{step.description}</p>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Skills Grid */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="bg-white dark:bg-gray-700 rounded-3xl p-8 lg:p-12 shadow-lg border border-gray-100 dark:border-gray-600"
        >
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
                Habilidades que fazem a diferença
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[
                  'Figma & Prototipagem',
                  'UX Research',
                  'UI Design',
                  'Wireframing',
                  'Metodologias Ágeis',
                  'Ferramentas de Colaboração'
                ].map((skill, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="flex items-center gap-3"
                  >
                    <div className="w-6 h-6 bg-green-100 dark:bg-green-900/50 rounded-full flex items-center justify-center flex-shrink-0">
                      <Check className="w-4 h-4 text-green-600 dark:text-green-400" />
                    </div>
                    <span className="font-medium text-gray-700 dark:text-gray-300">{skill}</span>
                  </motion.div>
                ))}
              </div>
            </div>

            <div className="space-y-6">
              <div className="bg-gradient-to-br from-violet-50 to-purple-50 dark:from-violet-900/30 dark:to-purple-900/30 p-6 rounded-2xl">
                <h4 className="font-bold text-gray-900 dark:text-white mb-3">Visão Única</h4>
                <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
                  Minha experiência em design de interiores me ensinou a criar espaços que não apenas 
                  funcionam, mas emocionam. Essa mesma filosofia aplico ao design digital.
                </p>
              </div>
              
              <div className="bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-900/30 dark:to-indigo-900/30 p-6 rounded-2xl">
                <h4 className="font-bold text-gray-900 dark:text-white mb-3">Metodologia Ágil</h4>
                <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
                  Trabalho com sprints, feedback contínuo e iteração rápida, garantindo que o 
                  produto final supere expectativas e prazos.
                </p>
              </div>

              <div className="bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-900/30 dark:to-emerald-900/30 p-6 rounded-2xl">
                <h4 className="font-bold text-gray-900 dark:text-white mb-3">Foco no Usuário</h4>
                <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
                  Cada decisão de design é baseada em pesquisa e dados reais, criando soluções 
                  que verdadeiramente atendem às necessidades dos usuários.
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}