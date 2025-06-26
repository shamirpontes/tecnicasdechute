
import React from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Brain, Target, Trophy, CheckCircle, Star, Users, Clock, BookOpen, Zap, Award, TrendingUp, Shield, Sparkles, Timer, AlertCircle, Heart } from 'lucide-react';

const Index = () => {
  return (
    <div className="min-h-screen bg-gray-50 overflow-hidden relative">
      {/* Fundo Atmosférico Otimizado */}
      <div className="fixed inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50/30 via-white to-purple-50/20"></div>
        <div className="absolute inset-0 pattern-mesh opacity-30"></div>
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-gradient-to-r from-blue-200/20 to-purple-200/20 rounded-full blur-3xl animate-ambient-pulse"></div>
        <div className="absolute top-1/3 right-1/4 w-80 h-80 bg-gradient-to-r from-cyan-200/15 to-blue-200/15 rounded-full blur-3xl animate-breathing"></div>
        <div className="absolute bottom-1/4 left-1/3 w-72 h-72 bg-gradient-to-r from-purple-200/15 to-pink-200/15 rounded-full blur-3xl animate-rim-light"></div>
      </div>

      {/* Hero Section - Cores Otimizadas */}
      <section className="relative py-24 px-4 lg:py-32 z-10">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            {/* Títulos com Melhor Contraste */}
            <div className="mb-10">
              <h1 className="text-6xl md:text-8xl lg:text-9xl font-black font-poppins mb-6 leading-none">
                <span className="block text-gray-900 animate-fade-in">Agora que você</span>
                <span className="block text-future-blue animate-slide-up font-bold" style={{
                  animationDelay: '0.2s'
                }}>já tem as 197 questões...</span>
              </h1>
              
              <div className="flex items-center justify-center gap-4 mb-8 animate-scale-in" style={{
                animationDelay: '0.4s'
              }}>
                <div className="h-px bg-gradient-to-r from-transparent via-gray-300 to-transparent flex-1 max-w-24"></div>
                <div className="h-px bg-gradient-to-r from-transparent via-gray-300 to-transparent flex-1 max-w-24"></div>
              </div>
            </div>

            {/* Subtítulo com Fundo Mais Limpo */}
            <div className="max-w-5xl mx-auto mb-12 animate-fade-in" style={{
              animationDelay: '0.6s'
            }}>
              <div className="glass-card p-8 rounded-3xl cinematic-shadow hover-glow">
                <p className="text-2xl md:text-3xl text-gray-800 leading-relaxed font-medium">
                  Descubra como usar técnicas comprovadas de chute para garantir sua aprovação na 
                  <strong className="text-gradient-premium"> OAB e Concursos Públicos</strong> — mesmo nas questões mais difíceis.
                </p>
              </div>
            </div>

            {/* CTA Principal */}
            <div className="flex flex-col items-center gap-6 mb-12 animate-slide-up" style={{
              animationDelay: '0.8s'
            }}>
              <Button size="lg" className="bg-future-blue hover:bg-blue-700 text-white px-12 py-8 text-2xl font-bold rounded-2xl cinematic-shadow hover-lift border-0 group relative overflow-hidden colored-shadow-blue">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-700 to-blue-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <TrendingUp className="mr-4 w-7 h-7 relative z-10" />
                <span className="relative z-10">QUERO COMPRAR AGORA!</span>
                <ArrowRight className="ml-4 w-7 h-7 relative z-10 group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>
          </div>

          {/* Cards de Estatísticas com Melhor Contraste */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: Users,
                number: "12,847",
                label: "Alunos Aprovados",
                sublabel: "Nos últimos 2 anos",
                gradient: "from-green-600 to-emerald-700",
                bgGradient: "from-green-50 to-emerald-50",
                shadowClass: "colored-shadow-green"
              }, 
              {
                icon: Trophy,
                number: "89%",
                label: "Taxa de Aprovação",
                sublabel: "Acima da média nacional",
                gradient: "from-yellow-600 to-orange-600",
                bgGradient: "from-yellow-50 to-orange-50",
                shadowClass: "colored-shadow-blue"
              }, 
              {
                icon: Star,
                number: "4.9/5",
                label: "Avaliação Média",
                sublabel: "Baseado em 8.439 reviews",
                gradient: "from-purple-600 to-pink-600",
                bgGradient: "from-purple-50 to-pink-50",
                shadowClass: "colored-shadow-purple"
              }
            ].map((stat, index) => (
              <Card key={index} className={`group relative overflow-hidden glass-card hover-lift border-0 cinematic-shadow ${stat.shadowClass} animate-scale-in color-bleed`} style={{
                animationDelay: `${1 + index * 0.2}s`
              }}>
                <div className={`absolute inset-0 bg-gradient-to-br ${stat.bgGradient} opacity-0 group-hover:opacity-20 transition-opacity duration-500`}></div>
                <CardContent className="p-8 text-center relative z-10">
                  <div className={`w-16 h-16 bg-gradient-to-br ${stat.gradient} rounded-3xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 soft-glow animate-float`}>
                    <stat.icon className="w-8 h-8 text-white" />
                  </div>
                  <div className="text-4xl font-black text-gray-900 mb-2 font-poppins">{stat.number}</div>
                  <div className="text-lg font-bold text-gray-800 mb-1">{stat.label}</div>
                  <div className="text-sm text-gray-600 font-medium">{stat.sublabel}</div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Seção Problema - Cores Melhoradas */}
      <section className="py-24 px-4 bg-gradient-to-br from-red-50/40 to-orange-50/30 relative z-10">
        <div className="absolute inset-0 pattern-dots opacity-15"></div>
        <div className="max-w-5xl mx-auto text-center relative">
          <h2 className="text-5xl md:text-6xl font-black font-poppins mb-12 text-gray-900">
            Você está <span className="text-red-600 animate-pulse">desperdiçando tempo</span> estudando de forma ineficiente?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
            {[
              "Estuda por meses mas não consegue ser aprovado",
              "Perde pontos em questões que poderia acertar", 
              "Não sabe como eliminar alternativas incorretas",
              "Fica em dúvida entre duas opções na prova"
            ].map((problem, index) => (
              <div key={index} className="flex items-center gap-4 glass-card p-6 rounded-2xl cinematic-shadow hover-lift color-bleed">
                <div className="w-12 h-12 bg-red-100 rounded-2xl flex items-center justify-center flex-shrink-0">
                  <span className="text-red-600 text-2xl font-bold">✗</span>
                </div>
                <span className="text-gray-800 font-medium text-lg">{problem}</span>
              </div>
            ))}
          </div>
          <div className="glass-card p-8 rounded-3xl cinematic-shadow hover-glow">
            <p className="text-2xl text-gray-800 leading-relaxed font-medium">
              Se você se identificou com algum desses problemas, 
              <strong className="text-gradient-premium"> este método vai revolucionar sua preparação!</strong>
            </p>
          </div>
        </div>
      </section>

      {/* Seção Solução - Contraste Otimizado */}
      <section className="py-24 px-4 relative z-10">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50/20 to-purple-50/15"></div>
        <div className="max-w-7xl mx-auto relative">
          <div className="text-center mb-20">
            <h2 className="text-5xl md:text-6xl font-black font-poppins mb-8 text-gray-900">
              A Metodologia que vai 
              <span className="text-gradient-premium block mt-2 animate-gradient-shift"> Transformar</span> seus resultados
            </h2>
            <div className="max-w-4xl mx-auto">
              <p className="text-2xl text-gray-700 font-medium leading-relaxed">
                Sistema comprovado que ensina técnicas avançadas de eliminação e raciocínio lógico 
                para maximizar sua pontuação mesmo nas questões mais difíceis.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: Brain,
                title: "Análise Cognitiva",
                description: "Aprenda a identificar padrões nas questões e eliminar alternativas incorretas com precisão científica",
                gradient: "from-blue-600 to-cyan-600",
                shadowClass: "colored-shadow-blue"
              },
              {
                icon: Target,
                title: "Estratégia Direcionada", 
                description: "Técnicas específicas para cada tipo de prova, adaptadas ao seu perfil e objetivos",
                gradient: "from-purple-600 to-pink-600",
                shadowClass: "colored-shadow-purple"
              },
              {
                icon: Zap,
                title: "Resultados Rápidos",
                description: "Veja melhorias significativas já nas primeiras semanas de aplicação do método",
                gradient: "from-yellow-600 to-orange-600",
                shadowClass: "colored-shadow-green"
              }
            ].map((feature, index) => (
              <Card key={index} className={`group glass-card hover-lift border-0 cinematic-shadow animate-scale-in color-bleed ${feature.shadowClass}`} style={{
                animationDelay: `${index * 0.2}s`
              }}>
                <CardContent className="p-8 text-center">
                  <div className={`w-20 h-20 bg-gradient-to-br ${feature.gradient} rounded-3xl flex items-center justify-center mx-auto mb-8 group-hover:scale-110 transition-transform duration-300 soft-glow animate-float`}>
                    <feature.icon className="w-10 h-10 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold mb-6 text-gray-900 font-poppins">{feature.title}</h3>
                  <p className="text-gray-700 leading-relaxed text-lg font-medium">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Seção Benefícios - Texto Mais Legível */}
      <section className="py-24 px-4 bg-gradient-to-br from-blue-50/30 to-purple-50/20 relative z-10">
        <div className="absolute inset-0 pattern-dots opacity-15"></div>
        <div className="max-w-5xl mx-auto relative">
          <h2 className="text-5xl md:text-6xl font-black font-poppins text-center mb-16 text-gray-900">
            O que você vai <span className="text-gradient-premium animate-gradient-shift">dominar</span>
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
              <div key={index} className="flex items-center gap-4 glass-card p-6 rounded-2xl cinematic-shadow hover-lift group color-bleed">
                <div className="w-12 h-12 bg-gradient-to-br from-green-600 to-emerald-700 rounded-2xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform soft-glow">
                  <CheckCircle className="w-6 h-6 text-white" />
                </div>
                <span className="text-gray-800 font-semibold text-lg">{benefit}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Seção Depoimentos - Fundos Mais Limpos */}
      <section className="py-24 px-4 relative z-10">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-5xl md:text-6xl font-black font-poppins text-center mb-16 text-gray-900">
            Veja os <span className="text-gradient-premium animate-gradient-shift">resultados</span> dos nossos alunos
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: "Marina Santos",
                role: "Aprovada OAB - 1ª Fase",
                text: "Aumentei minha pontuação em 40% depois de aplicar as técnicas. Consegui identificar as pegadinhas que antes me faziam errar.",
                rating: 5
              },
              {
                name: "Carlos Oliveira", 
                role: "Analista Judiciário - TRT",
                text: "O método de chute inteligente me salvou em várias questões. Passei de 6º para 2º lugar no concurso!",
                rating: 5
              },
              {
                name: "Ana Costa",
                role: "Procuradora Federal",
                text: "Finalmente entendi como funciona a lógica das bancas. Agora consigo eliminar alternativas com muito mais precisão.",
                rating: 5
              }
            ].map((testimonial, index) => (
              <Card key={index} className="glass-card hover-lift border-0 cinematic-shadow group color-bleed">
                <CardContent className="p-8">
                  <div className="flex items-center gap-1 mb-6">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-6 h-6 fill-yellow-500 text-yellow-500" />
                    ))}
                  </div>
                  <p className="text-gray-700 mb-8 leading-relaxed text-lg font-medium italic">"{testimonial.text}"</p>
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-purple-600 rounded-full flex items-center justify-center soft-glow">
                      <span className="text-white font-bold text-lg">{testimonial.name.charAt(0)}</span>
                    </div>
                    <div>
                      <div className="font-bold text-gray-900 text-lg">{testimonial.name}</div>
                      <div className="text-gray-700 font-medium">{testimonial.role}</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Seção Urgência - Cores Balanceadas */}
      <section className="py-32 px-4 bg-gradient-to-br from-orange-50/50 via-red-50/40 to-pink-50/30 relative overflow-hidden z-10">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-red-50/60 via-orange-50/70 to-yellow-50/60"></div>
          <div className="absolute inset-0 pattern-mesh opacity-20"></div>
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-gradient-to-r from-red-200/15 to-orange-200/15 rounded-full blur-3xl animate-ambient-pulse"></div>
          <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-gradient-to-r from-yellow-200/15 to-red-200/15 rounded-full blur-3xl animate-breathing" style={{
            animationDelay: '1s'
          }}></div>
        </div>

        <div className="max-w-6xl mx-auto text-center relative z-10">
          <div className="mb-8">
            <h2 className="text-5xl md:text-7xl font-black font-poppins mb-4 text-gray-900 leading-tight">
              <span className="block text-red-700 animate-pulse">Última Oportunidade</span>
              <span className="block text-gradient-premium mt-2 animate-gradient-shift">Técnicas de Chute Inteligentes para OAB e Concursos</span>
            </h2>
          </div>

          {/* Contador com Melhor Contraste */}
          <div className="flex items-center justify-center gap-4 mb-8">
            <div className="glass-card bg-red-50 border border-red-200 px-6 py-4 rounded-2xl cinematic-shadow">
              <div className="text-3xl font-black text-red-700">23</div>
              <div className="text-sm font-bold text-red-600">HORAS</div>
            </div>
            <div className="text-2xl font-bold text-red-600 animate-pulse">:</div>
            <div className="glass-card bg-red-50 border border-red-200 px-6 py-4 rounded-2xl cinematic-shadow">
              <div className="text-3xl font-black text-red-700">47</div>
              <div className="text-sm font-bold text-red-600">MINUTOS</div>
            </div>
            <div className="text-2xl font-bold text-red-600 animate-pulse">:</div>
            <div className="glass-card bg-red-50 border border-red-200 px-6 py-4 rounded-2xl cinematic-shadow">
              <div className="text-3xl font-black text-red-700">33</div>
              <div className="text-sm font-bold text-red-600">SEGUNDOS</div>
            </div>
          </div>

          {/* Card da Oferta Principal */}
          <div className="max-w-4xl mx-auto">
            <Card className="glass-card border-0 cinematic-shadow hover-lift overflow-hidden relative color-bleed">
              <CardContent className="relative z-10 p-12 text-center">
                {/* Seção de Preços */}
                <div className="mb-12">
                  <div className="mb-4">
                    <span className="text-4xl md:text-5xl font-black text-red-600 line-through opacity-70">
                      R$ 497
                    </span>
                    <div className="inline-block ml-4 bg-red-600 text-white px-4 py-2 rounded-full text-lg font-bold transform -rotate-12 animate-bounce-soft">
                      ACABOU!
                    </div>
                  </div>

                  <div className="mb-6">
                    <div className="text-8xl md:text-9xl font-black text-transparent bg-gradient-to-r from-green-600 to-emerald-700 bg-clip-text mb-4 animate-pulse">
                      R$ 197
                    </div>
                    <div className="flex items-center justify-center gap-4 mb-4">
                      <Badge className="bg-gradient-to-r from-red-600 to-orange-600 text-white px-6 py-3 text-xl font-bold rounded-full cinematic-shadow">
                        60% DE DESCONTO
                      </Badge>
                      <Badge className="bg-gradient-to-r from-yellow-600 to-orange-600 text-white px-6 py-3 text-xl font-bold rounded-full cinematic-shadow animate-pulse">
                        SÓ HOJE
                      </Badge>
                    </div>
                  </div>

                  <p className="text-2xl text-gray-700 font-semibold mb-8">
                    💸 <strong className="text-green-700">Economize R$ 300</strong> e garante sua aprovação hoje mesmo!
                  </p>
                </div>

                {/* Benefícios com Contraste Melhorado */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
                  <div className="flex items-center gap-4 glass-card p-6 rounded-2xl bg-green-50 color-bleed">
                    <div className="w-12 h-12 bg-gradient-to-br from-green-600 to-emerald-700 rounded-2xl flex items-center justify-center soft-glow">
                      <Heart className="w-6 h-6 text-white" />
                    </div>
                    <div className="text-left">
                      <div className="font-bold text-gray-900">Acesso Vitalício</div>
                      <div className="text-sm text-gray-700">Para sempre</div>
                    </div>
                  </div>

                  <div className="flex items-center gap-4 glass-card p-6 rounded-2xl bg-blue-50 color-bleed">
                    <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-cyan-600 rounded-2xl flex items-center justify-center soft-glow">
                      <Shield className="w-6 h-6 text-white" />
                    </div>
                    <div className="text-left">
                      <div className="font-bold text-gray-900">Garantia 30 Dias</div>
                      <div className="text-sm text-gray-700">Risco zero</div>
                    </div>
                  </div>

                  <div className="flex items-center gap-4 glass-card p-6 rounded-2xl bg-purple-50 color-bleed">
                    <div className="w-12 h-12 bg-gradient-to-br from-purple-600 to-pink-600 rounded-2xl flex items-center justify-center soft-glow">
                      <Award className="w-6 h-6 text-white" />
                    </div>
                    <div className="text-left">
                      <div className="font-bold text-gray-900">Técnicas Validadas</div>
                      <div className="text-sm text-gray-700">Por especialistas</div>
                    </div>
                  </div>
                </div>

                {/* Botão CTA Final */}
                <div className="space-y-4">
                  <Button size="lg" className="w-full bg-gradient-to-r from-green-700 to-emerald-700 hover:from-green-800 hover:to-emerald-800 text-white px-16 py-8 text-2xl md:text-3xl font-black rounded-2xl cinematic-shadow hover-lift border-0 group relative overflow-hidden animate-pulse colored-shadow-green">
                    <div className="absolute inset-0 bg-gradient-to-r from-green-600 to-emerald-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    <Heart className="mr-4 w-8 h-8 relative z-10 animate-bounce" />
                    <span className="relative z-10">SIM, EU QUERO MINHA VAGA COM 60% OFF</span>
                    <ArrowRight className="ml-4 w-8 h-8 relative z-10 group-hover:translate-x-2 transition-transform" />
                  </Button>
                  
                  <p className="text-lg text-gray-700 font-medium">
                    ⚡ <strong className="text-green-700">Acesso instantâneo</strong> • 🔒 <strong className="text-blue-700">Compra 100% segura</strong>
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer - Texto Mais Legível */}
      <footer className="py-16 px-4 bg-gray-900 text-white relative overflow-hidden z-10">
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900 to-gray-800"></div>
        <div className="absolute inset-0 pattern-dots opacity-5"></div>
        <div className="max-w-5xl mx-auto text-center relative">
          <h3 className="text-3xl font-bold mb-6 font-poppins text-gradient">Técnicas de Chute Inteligentes</h3>
          <p className="text-gray-300 mb-8 text-xl">
            Transformando a forma como você se prepara para concursos
          </p>
          <div className="flex justify-center gap-12 text-gray-400 font-medium">
            <span className="hover:text-white transition-colors cursor-pointer hover-lift">Política de Privacidade</span>
            <span className="hover:text-white transition-colors cursor-pointer hover-lift">Termos de Uso</span>
            <span className="hover:text-white transition-colors cursor-pointer hover-lift">Suporte</span>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
