
import React from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Brain, Target, Trophy, CheckCircle, Star, Users, Clock, BookOpen, Zap, Award, TrendingUp } from 'lucide-react';

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative overflow-hidden py-16 px-4">
        {/* Background with subtle gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50/70 via-white to-purple-50/70"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(99,102,241,0.05),transparent_50%)] bg-[radial-gradient(circle_at_70%_80%,rgba(6,182,212,0.05),transparent_50%)]"></div>
        
        <div className="relative max-w-7xl mx-auto">
          <div className="text-center mb-12">
            {/* Authority Badge */}
            <div className="flex items-center justify-center mb-6">
              <Badge className="bg-gradient-to-r from-green-600 to-emerald-600 text-white px-6 py-3 text-sm font-semibold rounded-full shadow-lg animate-pulse-glow border-0">
                <Award className="w-4 h-4 mr-2" />
                Metodologia #1 entre candidatos da OAB
              </Badge>
            </div>

            {/* Main Headline */}
            <div className="mb-6">
              <h1 className="text-5xl md:text-7xl font-bold font-space mb-4 text-gradient animate-fade-in">
                Técnicas de Chute
                <br />
                <span className="text-future-blue">Inteligentes</span>
              </h1>
              
              {/* Authority Subtitle */}
              <div className="flex items-center justify-center gap-3 mb-8">
                <div className="h-px bg-gradient-to-r from-transparent via-gray-300 to-transparent flex-1 max-w-20"></div>
                <p className="text-lg md:text-xl font-semibold text-gray-700 px-4">
                  Já ajudou mais de <span className="text-green-600 font-bold">12.847 alunos</span> a passarem chutando com técnica
                </p>
                <div className="h-px bg-gradient-to-r from-transparent via-gray-300 to-transparent flex-1 max-w-20"></div>
              </div>
            </div>

            {/* Emotional Subtitle */}
            <div className="max-w-4xl mx-auto mb-10">
              <p className="text-xl md:text-2xl text-gray-600 leading-relaxed font-medium animate-slide-up">
                <span className="text-gray-800 font-semibold">Você estudou, mas ainda não se sente pronto?</span>
                <br />
                Descubra como usar técnicas comprovadas de chute para garantir sua aprovação na 
                <strong className="text-future-blue"> OAB e Concursos Públicos</strong> — mesmo nas questões mais difíceis.
              </p>
            </div>

            {/* CTA Section */}
            <div className="flex flex-col items-center gap-4 animate-slide-up mb-8">
              <Button 
                size="lg" 
                className="bg-future-blue hover:bg-blue-600 text-white px-10 py-6 text-xl font-bold rounded-2xl shadow-2xl transform hover:scale-105 transition-all duration-300 hover:shadow-blue-500/25"
              >
                <TrendingUp className="mr-3 w-6 h-6" />
                GARANTIR MINHA VAGA AGORA
                <ArrowRight className="ml-3 w-6 h-6" />
              </Button>
              
              {/* Microcopy */}
              <div className="flex items-center gap-2 text-gray-600 bg-gray-50 px-4 py-2 rounded-full border border-gray-200">
                <Clock className="w-4 h-4 text-orange-500" />
                <span className="text-sm font-medium">⏳ Vagas limitadas — próxima turma em breve</span>
              </div>
            </div>

            {/* Social Proof Seal */}
            <div className="inline-flex items-center gap-3 bg-white px-6 py-3 rounded-full shadow-lg border border-gray-100 mb-12">
              <div className="flex items-center gap-2">
                <div className="w-10 h-10 bg-gradient-to-br from-green-500 to-emerald-600 rounded-full flex items-center justify-center">
                  <Users className="w-5 h-5 text-white" />
                </div>
                <div className="text-left">
                  <div className="text-sm font-bold text-gray-900">+12.847</div>
                  <div className="text-xs text-gray-600">Alunos Aprovados</div>
                </div>
              </div>
              <div className="w-px h-8 bg-gray-200"></div>
              <div className="flex items-center gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                ))}
                <span className="ml-1 text-sm font-semibold text-gray-700">4.9/5</span>
              </div>
            </div>
          </div>

          {/* Enhanced Stats Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { 
                icon: Users, 
                number: "12,847", 
                label: "Alunos Aprovados",
                color: "from-green-500 to-emerald-600",
                bgColor: "bg-green-50"
              },
              { 
                icon: Trophy, 
                number: "89%", 
                label: "Taxa de Aprovação",
                color: "from-yellow-500 to-orange-500",
                bgColor: "bg-yellow-50"
              },
              { 
                icon: Star, 
                number: "4.9/5", 
                label: "Avaliação Média",
                color: "from-purple-500 to-pink-500",
                bgColor: "bg-purple-50"
              }
            ].map((stat, index) => (
              <Card key={index} className="group relative overflow-hidden bg-white/90 backdrop-blur-sm border-2 border-gray-100 hover:border-gray-200 hover:shadow-2xl transition-all duration-300 animate-float rounded-2xl">
                <div className={`absolute inset-0 bg-gradient-to-br ${stat.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300`}></div>
                <CardContent className="p-8 text-center relative">
                  <div className={`w-16 h-16 ${stat.bgColor} rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    <stat.icon className={`w-8 h-8 bg-gradient-to-br ${stat.color} bg-clip-text text-transparent`} />
                  </div>
                  <div className="text-4xl font-bold text-gray-900 mb-3 group-hover:scale-105 transition-transform duration-300">{stat.number}</div>
                  <div className="text-gray-600 font-semibold text-lg">{stat.label}</div>
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
