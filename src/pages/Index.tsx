import React from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Brain, Target, Trophy, CheckCircle, Star, Users, Clock, BookOpen, Zap, Award, TrendingUp, Shield, Sparkles } from 'lucide-react';
const Index = () => {
  return <div className="min-h-screen bg-white overflow-hidden">
      {/* Hero Section - Redesigned Premium */}
      <section className="relative py-24 px-4 lg:py-32">
        {/* Enhanced Background */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-50/30 via-white to-purple-50/30"></div>
          <div className="absolute inset-0 pattern-dots opacity-30"></div>
          <div className="absolute top-20 left-10 w-72 h-72 bg-gradient-to-r from-blue-400/20 to-purple-400/20 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-gradient-to-r from-cyan-400/20 to-blue-400/20 rounded-full blur-3xl"></div>
        </div>
        
        <div className="relative max-w-7xl mx-auto">
          <div className="text-center">
            {/* Enhanced Authority Badge */}
            <div className="flex items-center justify-center mb-8">
              <Badge className="glass-card text-green-700 px-8 py-4 text-base font-bold rounded-full premium-shadow border-0 hover:scale-105 transition-all duration-300">
                <Award className="w-5 h-5 mr-3 text-green-600" />
                <span className="bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">
                  Metodologia #1 entre candidatos da OAB
                </span>
                <Sparkles className="w-4 h-4 ml-2 text-green-500" />
              </Badge>
            </div>

            {/* Premium Headline */}
            <div className="mb-10">
              <h1 className="text-6xl md:text-8xl lg:text-9xl font-black font-poppins mb-6 leading-none">
                <span className="block text-gradient-premium animate-fade-in">
                  Técnicas de Chute
                </span>
                <span className="block text-future-blue animate-slide-up" style={{
                animationDelay: '0.2s'
              }}>
                  Inteligentes
                </span>
              </h1>
              
              {/* Enhanced Authority Subtitle */}
              <div className="flex items-center justify-center gap-4 mb-8 animate-scale-in" style={{
              animationDelay: '0.4s'
            }}>
                <div className="h-px bg-gradient-to-r from-transparent via-gray-400 to-transparent flex-1 max-w-24"></div>
                
                <div className="h-px bg-gradient-to-r from-transparent via-gray-400 to-transparent flex-1 max-w-24"></div>
              </div>
            </div>

            {/* Enhanced Emotional Subtitle */}
            <div className="max-w-5xl mx-auto mb-12 animate-fade-in" style={{
            animationDelay: '0.6s'
          }}>
              <div className="glass-card p-8 rounded-3xl premium-shadow">
                <p className="text-2xl md:text-3xl text-gray-700 leading-relaxed font-medium">
                  <span className="text-gray-900 font-bold block mb-3">
                    Você estudou, mas ainda não se sente pronto?
                  </span>
                  Descubra como usar técnicas comprovadas de chute para garantir sua aprovação na 
                  <strong className="text-gradient-premium"> OAB e Concursos Públicos</strong> — mesmo nas questões mais difíceis.
                </p>
              </div>
            </div>

            {/* Enhanced CTA Section */}
            <div className="flex flex-col items-center gap-6 mb-12 animate-slide-up" style={{
            animationDelay: '0.8s'
          }}>
              <Button size="lg" className="bg-future-blue hover:bg-blue-600 text-white px-12 py-8 text-2xl font-bold rounded-2xl premium-shadow hover-lift border-0 group relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-blue-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <TrendingUp className="mr-4 w-7 h-7 relative z-10" />
                <span className="relative z-10">GARANTIR MINHA VAGA AGORA</span>
                <ArrowRight className="ml-4 w-7 h-7 relative z-10 group-hover:translate-x-1 transition-transform" />
              </Button>
              
              {/* Enhanced Microcopy */}
              
            </div>

            {/* Enhanced Social Proof Seal */}
            
          </div>

          {/* Enhanced Premium Stats Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[{
            icon: Users,
            number: "12,847",
            label: "Alunos Aprovados",
            sublabel: "Nos últimos 2 anos",
            gradient: "from-green-500 to-emerald-600",
            bgGradient: "from-green-50 to-emerald-50",
            glowColor: "shadow-green-500/20"
          }, {
            icon: Trophy,
            number: "89%",
            label: "Taxa de Aprovação",
            sublabel: "Acima da média nacional",
            gradient: "from-yellow-500 to-orange-500",
            bgGradient: "from-yellow-50 to-orange-50",
            glowColor: "shadow-yellow-500/20"
          }, {
            icon: Star,
            number: "4.9/5",
            label: "Avaliação Média",
            sublabel: "Baseado em 8.439 reviews",
            gradient: "from-purple-500 to-pink-500",
            bgGradient: "from-purple-50 to-pink-50",
            glowColor: "shadow-purple-500/20"
          }].map((stat, index) => <Card key={index} className={`group relative overflow-hidden glass-card hover-lift border-0 premium-shadow ${stat.glowColor} animate-scale-in`} style={{
            animationDelay: `${1 + index * 0.2}s`
          }}>
                <div className={`absolute inset-0 bg-gradient-to-br ${stat.bgGradient} opacity-0 group-hover:opacity-30 transition-opacity duration-500`}></div>
                <CardContent className="p-8 text-center relative z-10">
                  <div className={`w-20 h-20 bg-gradient-to-br ${stat.gradient} rounded-3xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 soft-glow`}>
                    <stat.icon className="w-10 h-10 text-white" />
                  </div>
                  <div className="text-5xl font-black text-gray-900 mb-2 group-hover:scale-105 transition-transform duration-300">{stat.number}</div>
                  <div className="text-gray-800 font-bold text-xl mb-2">{stat.label}</div>
                  <div className="text-gray-600 font-medium text-sm">{stat.sublabel}</div>
                </CardContent>
              </Card>)}
          </div>
        </div>
      </section>

      {/* Problem Section - Enhanced */}
      <section className="py-24 px-4 bg-gradient-to-br from-red-50/50 to-orange-50/50 relative">
        <div className="absolute inset-0 pattern-dots opacity-20"></div>
        <div className="max-w-5xl mx-auto text-center relative">
          <h2 className="text-5xl md:text-6xl font-black font-poppins mb-12 text-gray-900">
            Você está <span className="text-red-500">desperdiçando tempo</span> estudando de forma ineficiente?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
            {["Estuda por meses mas não consegue ser aprovado", "Perde pontos em questões que poderia acertar", "Não sabe como eliminar alternativas incorretas", "Fica em dúvida entre duas opções na prova"].map((problem, index) => <div key={index} className="flex items-center gap-4 glass-card p-6 rounded-2xl premium-shadow hover-lift">
                <div className="w-12 h-12 bg-red-100 rounded-2xl flex items-center justify-center flex-shrink-0">
                  <span className="text-red-500 text-2xl font-bold">✗</span>
                </div>
                <span className="text-gray-700 font-medium text-lg">{problem}</span>
              </div>)}
          </div>
          <div className="glass-card p-8 rounded-3xl premium-shadow">
            <p className="text-2xl text-gray-700 leading-relaxed font-medium">
              Se você se identificou com algum desses problemas, 
              <strong className="text-gradient-premium"> este método vai revolucionar sua preparação!</strong>
            </p>
          </div>
        </div>
      </section>

      {/* Solution Section - Enhanced */}
      <section className="py-24 px-4 relative">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50/30 to-purple-50/30"></div>
        <div className="max-w-7xl mx-auto relative">
          <div className="text-center mb-20">
            <h2 className="text-5xl md:text-6xl font-black font-poppins mb-8 text-gray-900">
              A Metodologia que vai 
              <span className="text-gradient-premium block mt-2"> Transformar</span> seus resultados
            </h2>
            <div className="max-w-4xl mx-auto">
              <p className="text-2xl text-gray-600 font-medium leading-relaxed">
                Sistema comprovado que ensina técnicas avançadas de eliminação e raciocínio lógico 
                para maximizar sua pontuação mesmo nas questões mais difíceis.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[{
            icon: Brain,
            title: "Análise Cognitiva",
            description: "Aprenda a identificar padrões nas questões e eliminar alternativas incorretas com precisão científica",
            gradient: "from-blue-500 to-cyan-500"
          }, {
            icon: Target,
            title: "Estratégia Direcionada",
            description: "Técnicas específicas para cada tipo de prova, adaptadas ao seu perfil e objetivos",
            gradient: "from-purple-500 to-pink-500"
          }, {
            icon: Zap,
            title: "Resultados Rápidos",
            description: "Veja melhorias significativas já nas primeiras semanas de aplicação do método",
            gradient: "from-yellow-500 to-orange-500"
          }].map((feature, index) => <Card key={index} className="group glass-card hover-lift border-0 premium-shadow animate-scale-in" style={{
            animationDelay: `${index * 0.2}s`
          }}>
                <CardContent className="p-8 text-center">
                  <div className={`w-20 h-20 bg-gradient-to-br ${feature.gradient} rounded-3xl flex items-center justify-center mx-auto mb-8 group-hover:scale-110 transition-transform duration-300 soft-glow animate-float`}>
                    <feature.icon className="w-10 h-10 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold mb-6 text-gray-900 font-poppins">{feature.title}</h3>
                  <p className="text-gray-600 leading-relaxed text-lg font-medium">{feature.description}</p>
                </CardContent>
              </Card>)}
          </div>
        </div>
      </section>

      {/* Benefits Section - Enhanced */}
      <section className="py-24 px-4 bg-gradient-to-br from-blue-50/50 to-purple-50/50 relative">
        <div className="absolute inset-0 pattern-dots opacity-20"></div>
        <div className="max-w-5xl mx-auto relative">
          <h2 className="text-5xl md:text-6xl font-black font-poppins text-center mb-16 text-gray-900">
            O que você vai <span className="text-gradient-premium">dominar</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {["Técnicas de eliminação por absurdo", "Análise de pegadinhas mais comuns", "Estratégias de tempo para cada tipo de questão", "Método de leitura dinâmica aplicada", "Técnicas de concentração e foco", "Gestão de ansiedade durante a prova", "Padrões de questões por banca examinadora", "Chutes inteligentes baseados em estatística"].map((benefit, index) => <div key={index} className="flex items-center gap-4 glass-card p-6 rounded-2xl premium-shadow hover-lift group">
                <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-emerald-600 rounded-2xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                  <CheckCircle className="w-6 h-6 text-white" />
                </div>
                <span className="text-gray-700 font-semibold text-lg">{benefit}</span>
              </div>)}
          </div>
        </div>
      </section>

      {/* Testimonials Section - Enhanced */}
      <section className="py-24 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-5xl md:text-6xl font-black font-poppins text-center mb-16 text-gray-900">
            Veja os <span className="text-gradient-premium">resultados</span> dos nossos alunos
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[{
            name: "Marina Santos",
            role: "Aprovada OAB - 1ª Fase",
            text: "Aumentei minha pontuação em 40% depois de aplicar as técnicas. Consegui identificar as pegadinhas que antes me faziam errar.",
            rating: 5
          }, {
            name: "Carlos Oliveira",
            role: "Analista Judiciário - TRT",
            text: "O método de chute inteligente me salvou em várias questões. Passei de 6º para 2º lugar no concurso!",
            rating: 5
          }, {
            name: "Ana Costa",
            role: "Procuradora Federal",
            text: "Finalmente entendi como funciona a lógica das bancas. Agora consigo eliminar alternativas com muito mais precisão.",
            rating: 5
          }].map((testimonial, index) => <Card key={index} className="glass-card hover-lift border-0 premium-shadow group">
                <CardContent className="p-8">
                  <div className="flex items-center gap-1 mb-6">
                    {[...Array(testimonial.rating)].map((_, i) => <Star key={i} className="w-6 h-6 fill-yellow-400 text-yellow-400" />)}
                  </div>
                  <p className="text-gray-600 mb-8 leading-relaxed text-lg font-medium italic">"{testimonial.text}"</p>
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-500 rounded-full flex items-center justify-center">
                      <span className="text-white font-bold text-lg">{testimonial.name.charAt(0)}</span>
                    </div>
                    <div>
                      <div className="font-bold text-gray-900 text-lg">{testimonial.name}</div>
                      <div className="text-gray-600 font-medium">{testimonial.role}</div>
                    </div>
                  </div>
                </CardContent>
              </Card>)}
          </div>
        </div>
      </section>

      {/* Urgency Section - Enhanced */}
      <section className="py-24 px-4 bg-gradient-to-br from-red-50/50 to-orange-50/50 relative">
        <div className="absolute inset-0 pattern-dots opacity-20"></div>
        <div className="max-w-5xl mx-auto text-center relative">
          <h2 className="text-5xl md:text-6xl font-black font-poppins mb-8 text-gray-900">
            ⏰ Oferta <span className="text-red-500">Limitada</span>
          </h2>
          <p className="text-2xl text-gray-600 mb-12 font-medium">
            Apenas <strong className="text-red-600">100 vagas</strong> disponíveis para esta turma exclusiva
          </p>
          <div className="glass-card p-12 rounded-3xl premium-shadow mb-12 hover-lift">
            <div className="text-7xl font-black text-gray-400 line-through mb-4">R$ 497</div>
            <div className="text-8xl font-black text-green-600 mb-6">R$ 197</div>
            <div className="text-2xl text-gray-600 mb-8 font-semibold">
              <strong className="text-red-500">60% OFF</strong> - Válido apenas hoje
            </div>
            <Button size="lg" className="bg-green-600 hover:bg-green-700 text-white px-16 py-8 text-2xl font-bold rounded-2xl soft-glow hover-lift border-0 group">
              <span className="relative z-10">QUERO GARANTIR MINHA VAGA AGORA</span>
              <ArrowRight className="ml-4 w-7 h-7 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>
          <div className="flex items-center justify-center gap-4 glass-card px-8 py-4 rounded-full premium-shadow inline-flex">
            <BookOpen className="w-6 h-6 text-blue-500" />
            <span className="text-gray-700 font-semibold text-lg">Acesso vitalício + Garantia de 30 dias</span>
          </div>
        </div>
      </section>

      {/* Footer - Enhanced */}
      <footer className="py-16 px-4 bg-gray-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900 to-gray-800"></div>
        <div className="max-w-5xl mx-auto text-center relative">
          <h3 className="text-3xl font-bold mb-6 font-poppins">Técnicas de Chute Inteligentes</h3>
          <p className="text-gray-400 mb-8 text-xl">
            Transformando a forma como você se prepara para concursos
          </p>
          <div className="flex justify-center gap-12 text-gray-400 font-medium">
            <span className="hover:text-white transition-colors cursor-pointer">Política de Privacidade</span>
            <span className="hover:text-white transition-colors cursor-pointer">Termos de Uso</span>
            <span className="hover:text-white transition-colors cursor-pointer">Suporte</span>
          </div>
        </div>
      </footer>
    </div>;
};
export default Index;