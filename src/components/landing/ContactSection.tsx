import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Mail, 
  Linkedin, 
  Instagram, 
  Send,
  CheckCircle,
  Calendar,
  MessageSquare
} from 'lucide-react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    project: '',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Aqui você pode integrar com um serviço de email
    console.log('Form submitted:', formData);
    setIsSubmitted(true);
    setTimeout(() => setIsSubmitted(false), 3000);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const contactMethods = [
    {
      icon: Mail,
      title: "Email Direto",
      description: "bianca@exemplo.com",
      action: "Enviar Email",
      link: "mailto:bianca@exemplo.com"
    },
    {
      icon: Linkedin,
      title: "LinkedIn",
      description: "Vamos nos conectar",
      action: "Ver Perfil",
      link: "#"
    },
    {
      icon: Instagram,
      title: "Instagram",
      description: "@biancadesign",
      action: "Seguir",
      link: "#"
    }
  ];

  return (
    <section className="py-24 px-6 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Vamos criar algo
            <br />
            <span className="text-violet-600">incrível juntos?</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Estou sempre aberta a novos projetos desafiadores. 
            Vamos conversar sobre como posso ajudar seu negócio a crescer.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-12">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-2"
          >
            <Card className="p-8 bg-white border-0 shadow-lg">
              <div className="flex items-center gap-3 mb-8">
                <MessageSquare className="w-6 h-6 text-violet-600" />
                <h3 className="text-2xl font-bold text-gray-900">Conte-me sobre seu projeto</h3>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Nome Completo *
                    </label>
                    <Input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Seu nome"
                      required
                      className="w-full"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Email *
                    </label>
                    <Input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="seu@email.com"
                      required
                      className="w-full"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Empresa
                    </label>
                    <Input
                      type="text"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      placeholder="Nome da empresa"
                      className="w-full"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Tipo de Projeto
                    </label>
                    <select
                      name="project"
                      value={formData.project}
                      onChange={handleChange}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-violet-600 focus:border-transparent"
                    >
                      <option value="">Selecione...</option>
                      <option value="mobile">App Mobile</option>
                      <option value="web">Website/Web App</option>
                      <option value="system">Design System</option>
                      <option value="research">UX Research</option>
                      <option value="other">Outro</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Conte-me sobre seu projeto *
                  </label>
                  <Textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Descreva seu projeto, objetivos e como posso ajudar..."
                    rows={5}
                    required
                    className="w-full"
                  />
                </div>

                <Button
                  type="submit"
                  className="w-full bg-violet-600 hover:bg-violet-700 text-white py-4 text-lg font-medium"
                  disabled={isSubmitted}
                >
                  {isSubmitted ? (
                    <>
                      <CheckCircle className="w-5 h-5 mr-2" />
                      Mensagem Enviada!
                    </>
                  ) : (
                    <>
                      <Send className="w-5 h-5 mr-2" />
                      Enviar Mensagem
                    </>
                  )}
                </Button>
              </form>
            </Card>
          </motion.div>

          {/* Contact Methods & Info */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            {/* Quick Contact */}
            <Card className="p-6 bg-white border-0 shadow-lg">
              <h3 className="text-lg font-bold text-gray-900 mb-4">Contato Rápido</h3>
              <div className="space-y-4">
                {contactMethods.map((method, index) => (
                  <div key={index} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg hover:bg-violet-50 transition-colors group">
                    <div className="flex items-center gap-3">
                      <method.icon className="w-5 h-5 text-gray-600 group-hover:text-violet-600 transition-colors" />
                      <div>
                        <div className="font-medium text-gray-900">{method.title}</div>
                        <div className="text-sm text-gray-600">{method.description}</div>
                      </div>
                    </div>
                    <a
                      href={method.link}
                      className="text-sm text-violet-600 hover:text-violet-700 font-medium"
                    >
                      {method.action}
                    </a>
                  </div>
                ))}
              </div>
            </Card>

            {/* Availability */}
            <Card className="p-6 bg-violet-600 text-white border-0">
              <div className="flex items-center gap-3 mb-4">
                <Calendar className="w-6 h-6" />
                <h3 className="text-lg font-bold">Disponibilidade</h3>
              </div>
              <p className="mb-4 opacity-90">
                Atualmente tenho vagas para novos projetos. 
                Tempo de resposta médio: 24 horas.
              </p>
              <div className="text-sm opacity-80">
                <div className="mb-1">🕘 Segunda a Sexta: 9h às 18h</div>
                <div>📍 São Paulo, Brasil (GMT-3)</div>
              </div>
            </Card>

            {/* Process Info */}
            <Card className="p-6 bg-white border-0 shadow-lg">
              <h3 className="text-lg font-bold text-gray-900 mb-4">Próximos Passos</h3>
              <div className="space-y-3 text-sm">
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-violet-100 rounded-full flex items-center justify-center text-violet-600 font-bold text-xs flex-shrink-0">
                    1
                  </div>
                  <div>
                    <div className="font-medium text-gray-900">Conversa Inicial</div>
                    <div className="text-gray-600">Discussão sobre objetivos e necessidades</div>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-violet-100 rounded-full flex items-center justify-center text-violet-600 font-bold text-xs flex-shrink-0">
                    2
                  </div>
                  <div>
                    <div className="font-medium text-gray-900">Proposta</div>
                    <div className="text-gray-600">Orçamento e cronograma detalhados</div>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-violet-100 rounded-full flex items-center justify-center text-violet-600 font-bold text-xs flex-shrink-0">
                    3
                  </div>
                  <div>
                    <div className="font-medium text-gray-900">Início do Projeto</div>
                    <div className="text-gray-600">Kick-off e primeira sprint</div>
                  </div>
                </div>
              </div>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
}