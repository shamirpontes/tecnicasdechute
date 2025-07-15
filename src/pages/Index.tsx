import React from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { ArrowRight, Brain, Target, Trophy, CheckCircle, Star, Users, Clock, BookOpen, Zap, Award, TrendingUp, Shield, Sparkles, Timer, AlertCircle, Heart, X, Check } from 'lucide-react';
const Index = () => {
  return <div className="min-h-screen bg-navy-primary overflow-hidden relative">
      {/* Fundo Atmosférico Navy */}
      <div className="fixed inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-navy-primary via-navy-secondary to-navy-accent"></div>
        <div className="absolute inset-0 pattern-mesh opacity-20"></div>
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-gradient-to-r from-crimson-primary/20 to-rose-accent/20 rounded-full blur-3xl animate-ambient-pulse"></div>
        <div className="absolute top-1/3 right-1/4 w-80 h-80 bg-gradient-to-r from-rose-accent/15 to-crimson-secondary/15 rounded-full blur-3xl animate-breathing"></div>
        <div className="absolute bottom-1/4 left-1/3 w-72 h-72 bg-gradient-to-r from-navy-accent/20 to-crimson-primary/10 rounded-full blur-3xl animate-rim-light"></div>
      </div>

      {/* Hero Section - Layout com Mockup */}
      <section className="relative py-24 px-4 lg:py-32 z-10">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Conteúdo Principal - Esquerda */}
            <div className="order-2 lg:order-1">
              <div className="mb-8">
                <h1 className="text-4xl md:text-6xl lg:text-7xl font-black font-poppins mb-6 leading-tight">
                  <span className="block text-white animate-fade-in">Descubra as 15 Técnicas</span>
                  <span className="block text-gradient-premium animate-slide-up font-bold" style={{
                  animationDelay: '0.2s'
                }}>que garantes até 20 pontos</span>
                </h1>
                
                <div className="flex items-center gap-4 mb-8 animate-scale-in" style={{
                animationDelay: '0.4s'
              }}>
                  <div className="h-px bg-gradient-to-r from-crimson-primary/50 to-transparent flex-1 max-w-16"></div>
                  <div className="w-2 h-2 bg-crimson-primary rounded-full"></div>
                  <div className="h-px bg-gradient-to-l from-crimson-primary/50 to-transparent flex-1 max-w-16"></div>
                </div>
              </div>

              <div className="mb-10 animate-fade-in" style={{
              animationDelay: '0.6s'
            }}>
                <div className="glass-card p-6 sm:p-8 rounded-3xl cinematic-shadow hover-glow border border-white/10">
                  <p className="text-xl md:text-2xl text-white leading-relaxed font-medium">
                    <strong className="text-gradient-premium">Técnicas científicas e testadas</strong> que te ensinam como 
                    <strong className="text-gradient-premium"> acertar questões mesmo SEM SABER a resposta</strong> e garantir até +20 pontos na sua nota final.
                  </p>
                </div>
              </div>

              {/* Call to Action */}
              <div className="animate-fade-in" style={{animationDelay: '0.8s'}}>
                <Button 
                  size="lg" 
                  className="bg-gradient-to-r from-crimson-primary to-rose-accent hover:from-crimson-primary/90 hover:to-rose-accent/90 text-white font-bold py-4 px-8 rounded-2xl text-lg transition-all duration-300 hover:scale-105 shadow-colored-red"
                >
                  Quero Garantir Minha Aprovação
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
                
                <div className="mt-4 flex items-center gap-2 text-white/70 text-sm">
                  <Shield className="w-4 h-4 text-green-400" />
                  <span>Garantia de 7 dias ou seu dinheiro de volta</span>
                </div>
              </div>
            </div>

            {/* Mockup do Material - Direita */}
            <div className="order-1 lg:order-2 flex justify-center lg:justify-end">
              <div className="relative group animate-scale-in" style={{animationDelay: '0.3s'}}>
                {/* Background Effects */}
                <div className="absolute -inset-4 bg-gradient-to-br from-crimson-primary/30 to-rose-accent/30 rounded-3xl blur-2xl group-hover:blur-3xl transition-all duration-500"></div>
                <div className="absolute -inset-2 bg-gradient-to-br from-navy-accent/40 to-crimson-primary/20 rounded-2xl blur-xl"></div>
                
                {/* Mockup Container */}
                <div className="relative bg-gradient-to-br from-white to-gray-100 rounded-2xl p-1 shadow-2xl group-hover:scale-105 transition-transform duration-500">
                  {/* Inner Container */}
                  <div className="bg-white rounded-xl overflow-hidden shadow-inner">
                    {/* Header da Capa */}
                    <div className="bg-gradient-to-r from-navy-primary to-navy-secondary p-6 text-center">
                      <div className="text-white text-sm font-semibold mb-2 uppercase tracking-wide">
                        Material Exclusivo
                      </div>
                      <h3 className="text-white text-xl font-black leading-tight">
                        Técnicas de Chute Inteligente para a OAB
                      </h3>
                    </div>
                    
                    {/* Área da Imagem/Conteúdo */}
                    <div className="h-64 sm:h-80 bg-gradient-to-br from-gray-50 to-gray-100 flex items-center justify-center p-6">
                      <div className="text-center">
                        <div className="w-20 h-20 bg-gradient-to-br from-crimson-primary to-rose-accent rounded-full flex items-center justify-center mx-auto mb-4">
                          <Target className="w-10 h-10 text-white" />
                        </div>
                        <div className="text-navy-primary font-bold text-lg mb-2">
                          15 Técnicas Científicas
                        </div>
                        <div className="text-gray-600 text-sm">
                          Acerte Mesmo Sem Saber
                        </div>
                      </div>
                    </div>
                    
                    {/* Footer da Capa */}
                    <div className="bg-gradient-to-r from-crimson-primary to-rose-accent p-4 text-center">
                      <div className="text-white text-sm font-semibold">
                        + Bônus Exclusivos no Valor de R$ 800
                      </div>
                    </div>
                  </div>
                  
                  {/* Floating Elements */}
                  <div className="absolute -top-2 -right-2 w-6 h-6 bg-green-400 rounded-full flex items-center justify-center animate-pulse">
                    <CheckCircle className="w-4 h-4 text-white" />
                  </div>
                  
                  {/* Stats Floating */}
                  <div className="absolute -bottom-4 -left-4 glass-card px-4 py-2 rounded-full border border-white/20">
                    <div className="text-white text-sm font-semibold">
                      +20 pontos garantidos
                    </div>
                  </div>
                </div>
                
                {/* Orbiting Elements */}
                <div className="absolute top-1/4 -left-8 w-3 h-3 bg-crimson-primary rounded-full animate-ping"></div>
                <div className="absolute bottom-1/4 -right-8 w-2 h-2 bg-rose-accent rounded-full animate-pulse"></div>
                <div className="absolute top-3/4 -left-4 w-1 h-1 bg-white rounded-full animate-bounce"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Seção Problema Escondido */}
      <section className="py-24 px-4 bg-gradient-to-br from-navy-secondary/60 to-crimson-primary/20 relative z-10">
        <div className="absolute inset-0 pattern-dots opacity-10"></div>
        <div className="max-w-5xl mx-auto text-center relative">
          <h2 className="text-4xl md:text-5xl font-black font-poppins mb-8 text-white">
            Você estuda muito, mas ainda <span className="text-crimson-primary">perde pontos bobos</span>
          </h2>
          
          <div className="glass-card p-8 rounded-3xl cinematic-shadow hover-glow mb-8">
            <p className="text-xl md:text-2xl text-white leading-relaxed font-medium mb-6">
              <strong className="text-crimson-primary">A realidade cruel:</strong> Não importa quanto você estude, sempre vão existir questões que você simplesmente não consegue resolver.
            </p>
            <p className="text-lg text-white/90 leading-relaxed">
              E é justamente nessas questões "impossíveis" que a maioria dos candidatos perde pontos preciosos... 
              <strong className="text-crimson-primary">pontos que poderiam garantir a aprovação.</strong>
            </p>
          </div>
        </div>
      </section>

      {/* Seção Apresentação do Produto */}
      <section className="py-24 px-4 relative z-10 overflow-hidden">
        {/* Background Atmosférico Avançado */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-navy-primary/90 via-navy-secondary/70 to-navy-accent/50"></div>
          <div className="absolute inset-0 pattern-mesh opacity-15"></div>
          <div className="absolute top-1/4 left-1/6 w-96 h-96 bg-gradient-to-br from-crimson-primary/30 to-rose-accent/20 rounded-full blur-3xl animate-ambient-pulse"></div>
          <div className="absolute bottom-1/3 right-1/5 w-80 h-80 bg-gradient-to-tl from-rose-accent/25 to-crimson-secondary/15 rounded-full blur-3xl animate-breathing"></div>
        </div>

        <div className="max-w-7xl mx-auto relative">
          {/* Título com efeito holográfico */}
          <div className="text-center mb-20 relative">
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-3/4 h-px bg-gradient-to-r from-transparent via-crimson-primary/50 to-transparent"></div>
            </div>
            
            <div className="relative bg-navy-primary/50 backdrop-blur-md px-8 py-4 inline-block rounded-2xl border border-white/10">
              <h2 className="text-4xl md:text-6xl font-black font-poppins mb-8 text-white relative">
                O método que 
                <span className="text-gradient-premium block mt-2 animate-gradient-shift relative">
                  transforma chutes em estratégia
                  <div className="absolute -inset-1 bg-gradient-to-r from-crimson-primary/20 to-rose-accent/20 blur-lg -z-10 animate-pulse-glow"></div>
                </span>
              </h2>
            </div>
            
            <div className="max-w-4xl mx-auto mt-8">
              <div className="glass-card p-6 rounded-2xl border-2 border-crimson-primary/30 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-crimson-primary/5 via-transparent to-rose-accent/5"></div>
                <p className="text-xl text-white/90 font-medium leading-relaxed relative z-10">
                  Pare de depender da sorte. Aprenda as <strong className="text-gradient-premium">15 técnicas científicas</strong> que os aprovados usam para acertar questões que nunca viram antes:
                </p>
              </div>
            </div>
          </div>

          {/* Cards com Design Hexagonal e Efeitos Holográficos */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {[{
            icon: Brain,
            title: "Método Anti-Erro",
            description: "15 técnicas comprovadas que identificam padrões da FGV, eliminam pegadinhas e transformam chutes em acertos estratégicos.",
            gradient: "from-navy-accent to-crimson-primary",
            accent: "crimson-primary"
          }, {
            icon: Target,
            title: "Zero Ansiedade",
            description: "Domine técnicas de aplicação rápida para usar mesmo sob pressão extrema, nos últimos minutos da prova.",
            gradient: "from-crimson-primary to-rose-accent",
            accent: "rose-accent"
          }, {
            icon: Zap,
            title: "Ciência dos Dados",
            description: "Estratégias baseadas em análise estatística real das provas anteriores da OAB - não é achismo, é ciência.",
            gradient: "from-rose-accent to-crimson-secondary",
            accent: "navy-accent"
          }].map((feature, index) => 
            <Card key={index} className="group relative overflow-hidden border-0 bg-transparent animate-scale-in" style={{
              animationDelay: `${index * 0.2}s`
            }}>
              {/* Bordas holográficas */}
              <div className="absolute inset-0 bg-gradient-to-br from-white/20 via-transparent to-white/10 rounded-3xl p-[2px]">
                <div className="h-full w-full bg-gradient-to-br from-navy-secondary/80 to-navy-primary/90 rounded-3xl"></div>
              </div>
              
              {/* Efeito de luz ambiente */}
              <div className={`absolute inset-0 bg-gradient-to-br ${feature.gradient} opacity-10 rounded-3xl blur-xl group-hover:opacity-20 transition-opacity duration-500`}></div>
              
              <CardContent className="relative p-8 text-center h-full flex flex-col justify-between">
                {/* Ícone com efeito orbital */}
                <div className="relative mb-8">
                  <div className={`w-20 h-20 bg-gradient-to-br ${feature.gradient} rounded-full flex items-center justify-center mx-auto group-hover:scale-110 transition-all duration-300 relative z-10`}>
                    <feature.icon className="w-10 h-10 text-white" />
                  </div>
                  
                  {/* Anéis orbitais */}
                  <div className="absolute inset-0 rounded-full border border-white/20 animate-spin" style={{animationDuration: '8s'}}></div>
                  <div className="absolute inset-2 rounded-full border border-crimson-primary/30 animate-spin" style={{animationDuration: '6s', animationDirection: 'reverse'}}></div>
                </div>
                
                <div>
                  <h3 className="text-2xl font-bold mb-6 text-white font-poppins group-hover:text-gradient-premium transition-all duration-300">{feature.title}</h3>
                  <p className="text-white/80 leading-relaxed text-lg font-medium">{feature.description}</p>
                </div>
                
                {/* Efeito de scanline */}
                <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-crimson-primary/50 to-transparent transform -translate-y-1 group-hover:animate-bounce-soft"></div>
              </CardContent>
            </Card>
          )}
          </div>

          {/* Super Bônus Section - Design Clean e Premium */}
          <div className="relative mt-20">
            {/* Background sutil para destacar */}
            <div className="absolute inset-0 bg-gradient-to-br from-crimson-primary/10 via-rose-accent/5 to-navy-accent/15 rounded-3xl"></div>
            <div className="absolute inset-0 border border-crimson-primary/20 rounded-3xl"></div>
            
            <div className="relative z-10 p-8 sm:p-12">
              {/* Título Clean */}
              <div className="text-center mb-16">
                <div className="max-w-2xl mx-auto">
                  <h3 className="text-4xl sm:text-5xl md:text-6xl font-black font-poppins text-white mb-4">
                    <span className="text-gradient-premium">SUPER BÔNUS</span>
                  </h3>
                  <p className="text-lg sm:text-xl text-white/80 font-medium">
                    O que realmente multiplica o valor do seu investimento
                  </p>
                </div>
              </div>
              
              {/* Cards de bônus com design minimalista */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
                {/* Bônus 1 - Acesso Vitalício */}
                <div className="glass-card rounded-3xl border border-white/10 overflow-hidden group hover-lift">
                  <div className="p-8 sm:p-10">
                    {/* Header do card */}
                    <div className="flex items-center justify-between mb-8">
                      <div className="w-16 h-16 bg-gradient-to-br from-yellow-500 to-orange-600 rounded-2xl flex items-center justify-center">
                        <Timer className="w-8 h-8 text-white" />
                      </div>
                      <Badge className="bg-crimson-primary/20 text-crimson-primary border border-crimson-primary/30 px-3 py-1 rounded-full text-sm font-semibold">
                        LIMITADO
                      </Badge>
                    </div>
                    
                    {/* Conteúdo */}
                    <div className="mb-8">
                      <h4 className="text-2xl sm:text-3xl font-bold text-white mb-4">
                        Acesso por 1 Ano Completo
                      </h4>
                      <p className="text-white/70 text-lg leading-relaxed mb-6">
                        Acesso total às técnicas, atualizações automáticas e suporte prioritário por 12 meses.
                      </p>
                      
                      {/* Features lista */}
                      <div className="space-y-3">
                        <div className="flex items-center text-white/80">
                          <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                          <span>Atualizações automáticas incluídas</span>
                        </div>
                        <div className="flex items-center text-white/80">
                          <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                          <span>Suporte prioritário por 365 dias</span>
                        </div>
                        <div className="flex items-center text-white/80">
                          <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                          <span>Novas técnicas adicionadas automaticamente</span>
                        </div>
                      </div>
                    </div>
                    
                    {/* Card de Preço */}
                    <div className="bg-gradient-to-br from-yellow-500/10 to-orange-600/10 rounded-2xl p-6 border border-yellow-500/20">
                      <div className="text-center">
                        <div className="text-sm text-yellow-400 font-semibold mb-2 uppercase tracking-wide">
                          Apenas primeiros 200 alunos
                        </div>
                        <div className="flex items-center justify-center gap-4 mb-3">
                          <span className="text-xl text-white/60 line-through">R$ 300</span>
                          <span className="text-3xl font-black text-green-400">R$ 0</span>
                        </div>
                        <div className="text-sm text-white/70">
                          Economia de R$ 300 hoje
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Bônus 2 - IA Exclusiva */}
                <div className="glass-card rounded-3xl border border-white/10 overflow-hidden group hover-lift">
                  <div className="p-8 sm:p-10">
                    {/* Header do card */}
                    <div className="flex items-center justify-between mb-8">
                      <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center">
                        <Brain className="w-8 h-8 text-white" />
                      </div>
                      <Badge className="bg-blue-500/20 text-blue-400 border border-blue-500/30 px-3 py-1 rounded-full text-sm font-semibold">
                        EXCLUSIVO
                      </Badge>
                    </div>
                    
                    {/* Conteúdo */}
                    <div className="mb-8">
                      <h4 className="text-2xl sm:text-3xl font-bold text-white mb-4">
                        Agente de Inteligência Artificial
                      </h4>
                      <p className="text-white/70 text-lg leading-relaxed mb-6">
                        IA personalizada que analisa questões e sugere as técnicas ideais em tempo real.
                      </p>
                      
                      {/* Features lista */}
                      <div className="space-y-3">
                        <div className="flex items-center text-white/80">
                          <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                          <span>Análise instantânea de questões</span>
                        </div>
                        <div className="flex items-center text-white/80">
                          <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                          <span>Sugestões de técnicas personalizadas</span>
                        </div>
                        <div className="flex items-center text-white/80">
                          <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                          <span>Disponível 24/7 no seu dispositivo</span>
                        </div>
                        <div className="flex items-center text-white/80">
                          <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                          <span>Aprende com seus padrões de estudo</span>
                        </div>
                      </div>
                    </div>
                    
                    {/* Card de Preço */}
                    <div className="bg-gradient-to-br from-blue-500/10 to-purple-600/10 rounded-2xl p-6 border border-blue-500/20">
                      <div className="text-center">
                        <div className="text-sm text-blue-400 font-semibold mb-2 uppercase tracking-wide">
                          Valor de mercado
                        </div>
                        <div className="flex items-center justify-center gap-4 mb-3">
                          <span className="text-xl text-white/60 line-through">R$ 500</span>
                          <span className="text-3xl font-black text-green-400">R$ 0</span>
                        </div>
                        <div className="text-sm text-white/70">
                          Incluído gratuitamente hoje
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Total Value Card - Design Clean */}
              <div className="mt-16 max-w-md mx-auto">
                <div className="glass-card rounded-3xl border-2 border-green-500/30 overflow-hidden">
                  <div className="bg-gradient-to-br from-green-500/10 to-emerald-600/10 p-8 text-center">
                    <div className="mb-4">
                      <div className="text-lg text-white/80 font-medium mb-2">
                        Valor total dos bônus
                      </div>
                      <div className="flex items-center justify-center gap-6 mb-4">
                        <span className="text-2xl text-white/60 line-through">R$ 800</span>
                        <span className="text-4xl font-black text-green-400">R$ 0</span>
                      </div>
                      <div className="text-sm text-green-400/80 font-semibold">
                        Economia total de R$ 800 apenas hoje
                      </div>
                    </div>
                    
                    <div className="pt-4 border-t border-white/10">
                      <div className="text-white/70 text-sm">
                        Bônus aplicados automaticamente na compra
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Seção Promessa e Prova */}
      <section className="py-24 px-4 bg-gradient-to-br from-navy-secondary/40 to-navy-accent/30 relative z-10">
        <div className="absolute inset-0 pattern-dots opacity-10"></div>
        <div className="max-w-5xl mx-auto relative">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-black font-poppins mb-8 text-white">
              Vamos encarar o que <span className="text-crimson-primary">ninguém tem coragem</span> de te dizer:
            </h2>
            
            <div className="glass-card p-8 rounded-3xl cinematic-shadow hover-glow mb-8">
              <p className="text-2xl font-bold text-white mb-6">
                <span className="text-crimson-primary">Você vai chutar na prova da OAB.</span>
              </p>
              <p className="text-lg text-white/90 leading-relaxed mb-6">
                Não importa o quanto você estude — vão existir questões que você simplesmente não sabe.
              </p>
              <p className="text-xl text-white font-semibold">
                E aí, você tem dois caminhos:
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <div className="glass-card p-8 rounded-2xl cinematic-shadow border-2 border-red-500/30 color-bleed">
              <div className="text-center">
                <div className="w-16 h-16 bg-red-500/20 rounded-full flex items-center justify-center mx-auto mb-6">
                  <X className="w-8 h-8 text-red-400" />
                </div>
                <h3 className="text-xl font-bold text-red-400 mb-4">Chute no Escuro</h3>
                <p className="text-white/80">Torcer para a sorte te salvar e perder pontos valiosos</p>
              </div>
            </div>
            
            <div className="glass-card p-8 rounded-2xl cinematic-shadow border-2 border-green-500/30 color-bleed">
              <div className="text-center">
                <div className="w-16 h-16 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-6">
                  <CheckCircle className="w-8 h-8 text-green-400" />
                </div>
                <h3 className="text-xl font-bold text-green-400 mb-4">Chute Inteligente</h3>
                <p className="text-white/80">Chutar com estratégia, técnica e inteligência</p>
              </div>
            </div>
          </div>

          <div className="glass-card p-8 rounded-3xl cinematic-shadow hover-glow">
            <p className="text-xl text-white leading-relaxed text-center">
              <strong className="text-gradient-premium">Quem passa, chuta com método. Quem reprova, chuta com medo e sem estratégia.</strong>
              <br /><br />
              Tem aluno que, só com essas técnicas, aumentou 20 pontos na nota final. E passou. 
              Porque o chute deixou de ser sorte — <strong className="text-green-400">e virou estratégia.</strong>
            </p>
          </div>
        </div>
      </section>

      {/* Seção Depoimentos */}
      <section className="py-16 sm:py-24 px-4 relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black font-poppins mb-6 text-white">
              A prova está nos <span className="text-gradient-premium">resultados reais</span>
            </h2>
            <p className="text-lg sm:text-xl text-white/80 max-w-3xl mx-auto">
              Centenas de alunos já foram aprovados usando essas técnicas. <strong className="text-green-400">Veja as mensagens que recebemos:</strong>
            </p>
          </div>
          
          
          {/* Carrossel de depoimentos */}
          <div className="max-w-6xl mx-auto relative">
            <Carousel
              opts={{
                align: "start",
                loop: true,
              }}
              className="w-full"
            >
              <CarouselContent className="-ml-4">
                {/* Print WhatsApp 1 */}
                <CarouselItem className="pl-4 md:basis-1/2 lg:basis-1/3">
                  <div className="glass-card rounded-3xl overflow-hidden cinematic-shadow hover-lift group h-full">
                    <div className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 p-6 sm:p-8 h-full">
                      <div className="relative overflow-hidden rounded-2xl border border-white/20">
                        <img src="/lovable-uploads/433c288f-8b00-4d82-afe8-90590e7511de.png" alt="Depoimento WhatsApp - Aprovada OAB" className="w-full h-auto object-cover transition-transform duration-300 group-hover:scale-105" />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent pointer-events-none"></div>
                      </div>
                    </div>
                  </div>
                </CarouselItem>

                {/* Print WhatsApp 2 */}
                <CarouselItem className="pl-4 md:basis-1/2 lg:basis-1/3">
                  <div className="glass-card rounded-3xl overflow-hidden cinematic-shadow hover-lift group h-full">
                    <div className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 p-6 sm:p-8 h-full">
                      <div className="relative overflow-hidden rounded-2xl border border-white/20">
                        <img src="/lovable-uploads/b59c0d42-5f4a-48d5-b90e-9cae2154024a.png" alt="Depoimento WhatsApp - Aprovação com 46/80" className="w-full h-auto object-cover transition-transform duration-300 group-hover:scale-105" />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent pointer-events-none"></div>
                      </div>
                    </div>
                  </div>
                </CarouselItem>

                {/* Print WhatsApp 3 */}
                <CarouselItem className="pl-4 md:basis-1/2 lg:basis-1/3">
                  <div className="glass-card rounded-3xl overflow-hidden cinematic-shadow hover-lift group h-full">
                    <div className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 p-6 sm:p-8 h-full">
                      <div className="relative overflow-hidden rounded-2xl border border-white/20">
                        <img src="/lovable-uploads/9a4ad55a-4b7e-4ebb-86c8-6ccba0d24299.png" alt="Depoimento WhatsApp - Aprovação com 43/80" className="w-full h-auto object-cover transition-transform duration-300 group-hover:scale-105" />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent pointer-events-none"></div>
                      </div>
                    </div>
                  </div>
                </CarouselItem>

                {/* Print WhatsApp 4 */}
                <CarouselItem className="pl-4 md:basis-1/2 lg:basis-1/3">
                  <div className="glass-card rounded-3xl overflow-hidden cinematic-shadow hover-lift group h-full">
                    <div className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 p-6 sm:p-8 h-full">
                      <div className="relative overflow-hidden rounded-2xl border border-white/20">
                        <img src="/lovable-uploads/385e1010-f6a5-41b4-aa45-d577af7a6641.png" alt="Depoimento WhatsApp - Melissa acertei 46 questões" className="w-full h-auto object-cover transition-transform duration-300 group-hover:scale-105" />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent pointer-events-none"></div>
                      </div>
                    </div>
                  </div>
                </CarouselItem>

                {/* Print WhatsApp 5 */}
                <CarouselItem className="pl-4 md:basis-1/2 lg:basis-1/3">
                  <div className="glass-card rounded-3xl overflow-hidden cinematic-shadow hover-lift group h-full">
                    <div className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 p-6 sm:p-8 h-full">
                      <div className="relative overflow-hidden rounded-2xl border border-white/20">
                        <img src="/lovable-uploads/469c77ed-4a81-49a5-8f34-fa2df8650454.png" alt="Depoimento WhatsApp - Melissa milagre aconteceu" className="w-full h-auto object-cover transition-transform duration-300 group-hover:scale-105" />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent pointer-events-none"></div>
                      </div>
                    </div>
                  </div>
                </CarouselItem>

                {/* Print WhatsApp 6 */}
                <CarouselItem className="pl-4 md:basis-1/2 lg:basis-1/3">
                  <div className="glass-card rounded-3xl overflow-hidden cinematic-shadow hover-lift group h-full">
                    <div className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 p-6 sm:p-8 h-full">
                      <div className="relative overflow-hidden rounded-2xl border border-white/20">
                        <img src="/lovable-uploads/c236ffc8-2278-4186-9519-0e3f01967165.png" alt="Depoimento WhatsApp - Aprovação 47/80" className="w-full h-auto object-cover transition-transform duration-300 group-hover:scale-105" />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent pointer-events-none"></div>
                      </div>
                    </div>
                  </div>
                </CarouselItem>

                {/* Print WhatsApp 7 */}
                <CarouselItem className="pl-4 md:basis-1/2 lg:basis-1/3">
                  <div className="glass-card rounded-3xl overflow-hidden cinematic-shadow hover-lift group h-full">
                    <div className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 p-6 sm:p-8 h-full">
                      <div className="relative overflow-hidden rounded-2xl border border-white/20">
                        <img src="/lovable-uploads/75019e25-3dff-4e15-9c98-e2bb4699b5a8.png" alt="Depoimento WhatsApp - 44 pontos em duas semanas" className="w-full h-auto object-cover transition-transform duration-300 group-hover:scale-105" />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent pointer-events-none"></div>
                      </div>
                    </div>
                  </div>
                </CarouselItem>
              </CarouselContent>
              
              <CarouselPrevious className="hidden md:flex glass-card border-white/20 bg-white/10 hover:bg-white/20 text-white -left-12" />
              <CarouselNext className="hidden md:flex glass-card border-white/20 bg-white/10 hover:bg-white/20 text-white -right-12" />
            </Carousel>
          </div>

          {/* Call to action adicional */}
          <div className="text-center mt-12 sm:mt-16">
            <div className="glass-card p-6 sm:p-8 rounded-3xl cinematic-shadow max-w-4xl mx-auto">
              <p className="text-lg sm:text-xl text-white/90 leading-relaxed">
                <span className="text-green-400 font-bold">Estes são apenas alguns</span> dos resultados que nossos alunos 
                conquistaram aplicando as técnicas de chute inteligente. 
                <span className="text-gradient-premium font-semibold"> E você pode ser o próximo!</span>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Seção de Decisão Final */}
      <section className="py-32 px-4 bg-gradient-to-br from-navy-primary via-slate-900 to-navy-secondary relative overflow-hidden z-10">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-crimson-primary/10 via-navy-accent/20 to-rose-accent/5"></div>
          <div className="absolute inset-0 pattern-circuit opacity-10"></div>
          <div className="absolute top-10 left-10 w-2 h-2 bg-crimson-primary rounded-full animate-pulse"></div>
          <div className="absolute top-32 right-20 w-1 h-1 bg-rose-accent rounded-full animate-pulse" style={{animationDelay: '0.5s'}}></div>
          <div className="absolute bottom-20 left-1/3 w-1.5 h-1.5 bg-navy-accent rounded-full animate-pulse" style={{animationDelay: '1s'}}></div>
          <div className="absolute bottom-40 right-1/4 w-1 h-1 bg-crimson-secondary rounded-full animate-pulse" style={{animationDelay: '1.5s'}}></div>
        </div>

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Lado Esquerdo - Conteúdo */}
            <div className="space-y-8">
              <div className="space-y-6">
                <h2 className="text-5xl md:text-7xl font-black font-poppins text-white leading-tight">
                  <span className="block">Esta é a</span>
                  <span className="block text-gradient-premium">sua decisão</span>
                </h2>
                
                <div className="w-24 h-1 bg-gradient-to-r from-crimson-primary to-rose-accent"></div>
                
                <p className="text-xl text-white/90 leading-relaxed max-w-lg">
                  Você tem duas opções na sua frente. Escolha sabiamente.
                </p>
              </div>

              {/* Opções de Decisão */}
              <div className="space-y-6">
                {/* Opção 1 - Rejeitar */}
                <div className="p-8 bg-slate-900/50 border-l-4 border-red-500/50 rounded-r-2xl backdrop-blur-sm">
                  <h3 className="text-2xl font-bold text-red-400 mb-4">Opção 1: Continuar sem as técnicas</h3>
                  <ul className="space-y-3 text-white/80">
                    <li className="flex items-start gap-3">
                      <X className="w-5 h-5 text-red-500 mt-0.5 flex-shrink-0" />
                      <span>Perder pontos preciosos por não saber as técnicas de chute</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <X className="w-5 h-5 text-red-500 mt-0.5 flex-shrink-0" />
                      <span>Estudar por meses sem direcionamento estratégico</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <X className="w-5 h-5 text-red-500 mt-0.5 flex-shrink-0" />
                      <span>Reprovar por poucos pontos que poderiam ter sido ganhos</span>
                    </li>
                  </ul>
                  <p className="text-lg font-semibold text-red-400 mt-6">Custo: R$ 0 (mas pode custar sua aprovação)</p>
                </div>

                {/* Opção 2 - Aceitar */}
                <div className="p-8 bg-gradient-to-br from-green-900/30 via-emerald-900/20 to-green-800/30 border-l-4 border-green-500 rounded-r-2xl backdrop-blur-sm">
                  <h3 className="text-2xl font-bold text-green-400 mb-4">Opção 2: Dominar as técnicas de chute</h3>
                  <ul className="space-y-3 text-white/90">
                    <li className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                      <span>Ganhar até 20 pontos extras aplicando as técnicas</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                      <span>Estudar com estratégia e direcionamento</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                      <span>Aumentar drasticamente suas chances de aprovação</span>
                    </li>
                  </ul>
                  <p className="text-lg font-semibold text-green-400 mt-6">Investimento: Apenas R$ 97</p>
                </div>
              </div>
            </div>

            {/* Lado Direito - Card de Preço */}
            <div className="flex justify-center lg:justify-end">
              <div className="max-w-lg w-full">
                <div className="relative">
                  {/* Borda externa brilhante */}
                  <div className="absolute -inset-1 bg-gradient-to-r from-crimson-primary via-rose-accent to-crimson-secondary rounded-3xl blur-sm opacity-75 animate-pulse"></div>
                  
                  {/* Card principal */}
                  <Card className="relative glass-card border-2 border-crimson-primary/40 cinematic-shadow hover-lift overflow-hidden bg-gradient-to-br from-white/95 via-white/90 to-white/95 backdrop-blur-xl">
                    {/* Background decorativo */}
                    <div className="absolute inset-0 bg-gradient-to-br from-crimson-primary/5 via-navy-accent/10 to-rose-accent/5"></div>
                    <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-crimson-primary/10 to-transparent rounded-bl-full"></div>
                    <div className="absolute bottom-0 left-0 w-24 h-24 bg-gradient-to-tr from-rose-accent/10 to-transparent rounded-tr-full"></div>
                    
                    <CardContent className="relative z-10 p-12 text-center">
                      {/* Header do card */}
                      <div className="mb-10">
                        <div className="inline-flex items-center justify-center px-4 py-2 bg-gradient-to-r from-crimson-primary/10 to-rose-accent/10 rounded-full border border-crimson-primary/20 mb-4">
                          <div className="text-sm text-navy-primary uppercase tracking-wide font-bold">Oferta Limitada</div>
                        </div>
                        
                        <div className="space-y-2 mb-6">
                          <div className="text-2xl text-crimson-primary font-bold line-through opacity-70">
                            De R$ 600
                          </div>
                          <div className="text-7xl font-black text-gradient-premium leading-none">
                            R$ 97
                          </div>
                        </div>
                        
                        <Badge className="bg-gradient-to-r from-green-600 to-emerald-700 text-white px-6 py-3 text-base font-bold rounded-full shadow-lg animate-bounce">
                          84% DE DESCONTO
                        </Badge>
                      </div>

                      {/* Lista de benefícios */}
                      <div className="space-y-5 mb-10 text-left bg-gradient-to-r from-slate-50/50 to-blue-50/50 rounded-2xl p-6 border border-navy-primary/10">
                        <div className="flex items-center gap-4 text-navy-primary">
                          <div className="flex-shrink-0 w-8 h-8 bg-green-500 rounded-full flex items-center justify-center">
                            <Check className="w-5 h-5 text-white" />
                          </div>
                          <span className="font-medium">15 Técnicas de Chute Escaneadas</span>
                        </div>
                        <div className="flex items-center gap-4 text-navy-primary">
                          <div className="flex-shrink-0 w-8 h-8 bg-green-500 rounded-full flex items-center justify-center">
                            <Check className="w-5 h-5 text-white" />
                          </div>
                          <span className="font-medium">Agente de I.A. personalizado</span>
                        </div>
                        <div className="flex items-center gap-4 text-navy-primary">
                          <div className="flex-shrink-0 w-8 h-8 bg-green-500 rounded-full flex items-center justify-center">
                            <Check className="w-5 h-5 text-white" />
                          </div>
                          <span className="font-medium">Acesso imediato e vitalício</span>
                        </div>
                        <div className="flex items-center gap-4 text-navy-primary">
                          <div className="flex-shrink-0 w-8 h-8 bg-green-500 rounded-full flex items-center justify-center">
                            <Check className="w-5 h-5 text-white" />
                          </div>
                          <span className="font-medium">Garantia de resultados</span>
                        </div>
                      </div>

                      {/* Botão principal */}
                      <Button size="lg" className="w-full bg-gradient-to-r from-green-600 to-emerald-700 hover:from-green-700 hover:to-emerald-800 text-white py-8 text-xl font-bold rounded-2xl cinematic-shadow hover-lift border-0 group relative overflow-hidden transform hover:scale-105 transition-all duration-300">
                        <div className="absolute inset-0 bg-gradient-to-r from-green-500 to-emerald-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                        <span className="relative z-10">GARANTIR MINHA VAGA</span>
                        <ArrowRight className="ml-3 w-6 h-6 relative z-10 group-hover:translate-x-2 transition-transform" />
                      </Button>
                      
                      <p className="text-sm text-navy-primary/70 mt-6 font-medium">
                        Acesso imediato após o pagamento
                      </p>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-16 px-4 bg-navy-primary text-white relative overflow-hidden z-10">
        <div className="absolute inset-0 bg-gradient-to-br from-navy-primary to-navy-secondary"></div>
        <div className="absolute inset-0 pattern-dots opacity-5"></div>
        <div className="max-w-5xl mx-auto text-center relative">
          <h3 className="text-3xl font-bold mb-6 font-poppins text-gradient">Técnicas de Chute Inteligente</h3>
          <p className="text-white/80 mb-8 text-xl">
            O método que vai transformar seus chutes em estratégia
          </p>
          <div className="flex justify-center gap-12 text-white/60 font-medium">
            <span className="hover:text-white transition-colors cursor-pointer hover-lift">Política de Privacidade</span>
            <span className="hover:text-white transition-colors cursor-pointer hover-lift">Termos de Uso</span>
            <span className="hover:text-white transition-colors cursor-pointer hover-lift">Suporte</span>
          </div>
        </div>
      </footer>
    </div>;
};
export default Index;