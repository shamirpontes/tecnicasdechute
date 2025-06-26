
import React from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Brain, Target, Trophy, CheckCircle, Star, Users, Clock, BookOpen, Zap } from 'lucide-react';

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative overflow-hidden py-20 px-4">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-purple-50"></div>
        <div className="relative max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <Badge className="mb-6 bg-future-purple text-white px-6 py-2 text-sm font-medium animate-pulse-glow">
              🚀 Lançamento Exclusivo
            </Badge>
            <h1 className="text-5xl md:text-7xl font-bold font-space mb-8 text-gradient animate-fade-in">
              Técnicas de Chute
              <br />
              <span className="text-future-blue">Inteligentes</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed animate-slide-up">
              Domine as estratégias mais avançadas para maximizar suas chances de aprovação na 
              <strong> OAB e Concursos Públicos</strong>
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-slide-up">
              <Button 
                size="lg" 
                className="bg-future-blue hover:bg-blue-600 text-white px-8 py-4 text-lg font-semibold rounded-xl neon-glow transform hover:scale-105 transition-all duration-300"
              >
                Garantir Minha Vaga
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
              <div className="flex items-center gap-2 text-gray-600">
                <Clock className="w-5 h-5" />
                <span className="font-medium">Oferta por tempo limitado</span>
              </div>
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
            {[
              { icon: Users, number: "12,847", label: "Alunos Aprovados" },
              { icon: Trophy, number: "89%", label: "Taxa de Aprovação" },
              { icon: Star, number: "4.9/5", label: "Avaliação Média" }
            ].map((stat, index) => (
              <Card key={index} className="cyber-border p-6 text-center bg-white/80 backdrop-blur-sm hover:shadow-xl transition-all duration-300 animate-float">
                <CardContent className="p-0">
                  <stat.icon className="w-10 h-10 mx-auto mb-4 text-future-blue" />
                  <div className="text-3xl font-bold text-gray-900 mb-2">{stat.number}</div>
                  <div className="text-gray-600 font-medium">{stat.label}</div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Problem Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-gray-50 to-blue-50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold font-space mb-8 text-gray-900">
            Você está <span className="text-red-500">desperdiçando tempo</span> estudando de forma ineficiente?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            {[
              "Estuda por meses mas não consegue ser aprovado",
              "Perde pontos em questões que poderia acertar",
              "Não sabe como eliminar alternativas incorretas",
              "Fica em dúvida entre duas opções na prova"
            ].map((problem, index) => (
              <div key={index} className="flex items-center gap-4 p-4 bg-white rounded-lg shadow-sm">
                <div className="w-8 h-8 bg-red-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-red-500 text-xl">✗</span>
                </div>
                <span className="text-gray-700">{problem}</span>
              </div>
            ))}
          </div>
          <p className="text-xl text-gray-600 leading-relaxed">
            Se você se identificou com algum desses problemas, 
            <strong> este método vai revolucionar sua preparação!</strong>
          </p>
        </div>
      </section>

      {/* Solution Section */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold font-space mb-6 text-gray-900">
              A Metodologia que vai 
              <span className="text-gradient"> Transformar</span> seus resultados
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Sistema comprovado que ensina técnicas avançadas de eliminação e raciocínio lógico 
              para maximizar sua pontuação mesmo nas questões mais difíceis.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: Brain,
                title: "Análise Cognitiva",
                description: "Aprenda a identificar padrões nas questões e eliminar alternativas incorretas com precisão científica"
              },
              {
                icon: Target,
                title: "Estratégia Direcionada",
                description: "Técnicas específicas para cada tipo de prova, adaptadas ao seu perfil e objetivos"
              },
              {
                icon: Zap,
                title: "Resultados Rápidos",
                description: "Veja melhorias significativas já nas primeiras semanas de aplicação do método"
              }
            ].map((feature, index) => (
              <Card key={index} className="p-8 bg-white shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 cyber-border">
                <CardContent className="p-0 text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-future-blue to-future-purple rounded-full flex items-center justify-center mx-auto mb-6 animate-float">
                    <feature.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold mb-4 text-gray-900">{feature.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 px-4 bg-gradient-to-br from-blue-50 to-purple-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold font-space text-center mb-12 text-gray-900">
            O que você vai <span className="text-gradient">dominar</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              "Técnicas de eliminação por absurdo",
              "Análise de pegadinhas mais comuns",
              "Estratégias de tempo para cada tipo de questão",
              "Método de leitura dinâmica aplicada",
              "Técnicas de concentração e foco",
              "Gestão de ansiedade durante a prova",
              "Padrões de questões por banca examinadora",
              "Chutes inteligentes baseados em estatística"
            ].map((benefit, index) => (
              <div key={index} className="flex items-center gap-4 p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow">
                <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0" />
                <span className="text-gray-700 font-medium">{benefit}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold font-space text-center mb-12 text-gray-900">
            Veja os <span className="text-gradient">resultados</span> dos nossos alunos
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: "Marina Santos",
                role: "Aprovada OAB - 1ª Fase",
                text: "Aumentei minha pontuação em 40% depois de aplicar as técnicas. Consegui identificar as pegadinhas que antes me faziam errar."
              },
              {
                name: "Carlos Oliveira",
                role: "Analista Judiciário - TRT",
                text: "O método de chute inteligente me salvou em várias questões. Passei de 6º para 2º lugar no concurso!"
              },
              {
                name: "Ana Costa",
                role: "Procuradora Federal",
                text: "Finalmente entendi como funciona a lógica das bancas. Agora consigo eliminar alternativas com muito mais precisão."
              }
            ].map((testimonial, index) => (
              <Card key={index} className="p-6 bg-white shadow-lg hover:shadow-xl transition-all duration-300 cyber-border">
                <CardContent className="p-0">
                  <div className="flex items-center gap-1 mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <p className="text-gray-600 mb-4 leading-relaxed">"{testimonial.text}"</p>
                  <div>
                    <div className="font-semibold text-gray-900">{testimonial.name}</div>
                    <div className="text-sm text-gray-500">{testimonial.role}</div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Urgency Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-red-50 to-orange-50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold font-space mb-6 text-gray-900">
            ⏰ Oferta <span className="text-red-500">Limitada</span>
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Apenas <strong>100 vagas</strong> disponíveis para esta turma exclusiva
          </p>
          <div className="bg-white p-8 rounded-2xl shadow-xl cyber-border mb-8">
            <div className="text-6xl font-bold text-gray-400 line-through mb-2">R$ 497</div>
            <div className="text-5xl font-bold text-green-600 mb-4">R$ 197</div>
            <div className="text-lg text-gray-600 mb-6">
              <strong>60% OFF</strong> - Válido apenas hoje
            </div>
            <Button 
              size="lg" 
              className="bg-green-600 hover:bg-green-700 text-white px-12 py-4 text-xl font-bold rounded-xl neon-glow transform hover:scale-105 transition-all duration-300"
            >
              QUERO GARANTIR MINHA VAGA AGORA
              <ArrowRight className="ml-2 w-6 h-6" />
            </Button>
          </div>
          <div className="flex items-center justify-center gap-4 text-gray-600">
            <BookOpen className="w-5 h-5" />
            <span>Acesso vitalício + Garantia de 30 dias</span>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-4 bg-gray-900 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h3 className="text-2xl font-bold mb-4">Técnicas de Chute Inteligentes</h3>
          <p className="text-gray-400 mb-6">
            Transformando a forma como você se prepara para concursos
          </p>
          <div className="flex justify-center gap-8 text-sm text-gray-400">
            <span>Política de Privacidade</span>
            <span>Termos de Uso</span>
            <span>Suporte</span>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
