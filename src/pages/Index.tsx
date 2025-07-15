import React from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { ArrowRight, Brain, Target, Trophy, CheckCircle, Star, Users, Clock, BookOpen, Zap, Award, TrendingUp, Shield, Sparkles, Timer, AlertCircle, Heart, X } from 'lucide-react';
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

      {/* Hero Section - HEADLINE + URGÊNCIA */}
      <section className="relative py-24 px-4 lg:py-32 z-10">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <div className="mb-10">
              <h1 className="text-5xl md:text-7xl lg:text-8xl font-black font-poppins mb-6 leading-none">
                <span className="block text-white animate-fade-in">Descubra as 15 Técnicas</span>
                <span className="block text-crimson-primary animate-slide-up font-bold" style={{
                animationDelay: '0.2s'
              }}>que garantem +20 pontos</span>
              </h1>
              
              <div className="flex items-center justify-center gap-4 mb-8 animate-scale-in" style={{
              animationDelay: '0.4s'
            }}>
                <div className="h-px bg-gradient-to-r from-transparent via-white/30 to-transparent flex-1 max-w-24"></div>
                <div className="h-px bg-gradient-to-r from-transparent via-white/30 to-transparent flex-1 max-w-24"></div>
              </div>
            </div>

            <div className="max-w-5xl mx-auto mb-12 animate-fade-in" style={{
            animationDelay: '0.6s'
          }}>
              <div className="glass-card p-8 rounded-3xl cinematic-shadow hover-glow">
                <p className="text-2xl md:text-3xl text-white leading-relaxed font-medium">
                  <strong className="text-gradient-premium">Técnicas científicas e testadas</strong> que te ensinam como 
                  <strong className="text-gradient-premium"> acertar questões mesmo SEM SABER a resposta</strong> e garantir até +20 pontos na sua nota final.
                </p>
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

          {/* Super Bônus Section - Design Premium */}
          <div className="relative mt-20">
            {/* Background especial para destacar o bônus */}
            <div className="absolute inset-0 bg-gradient-to-br from-crimson-primary/20 via-rose-accent/15 to-navy-accent/30 rounded-3xl blur-xl"></div>
            <div className="absolute inset-0 border border-crimson-primary/30 rounded-3xl"></div>
            
            <div className="relative z-10 p-8 sm:p-12">
              {/* Título com efeito especial */}
              <div className="text-center mb-16 relative">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-full h-px bg-gradient-to-r from-transparent via-crimson-primary/60 to-transparent"></div>
                </div>
                
                <div className="relative bg-gradient-to-r from-crimson-primary/20 to-rose-accent/20 backdrop-blur-lg px-8 py-6 rounded-3xl border-2 border-crimson-primary/50 mx-auto inline-block">
                  <div className="absolute -inset-1 bg-gradient-to-r from-crimson-primary/30 to-rose-accent/30 rounded-3xl blur-lg animate-pulse-glow"></div>
                  <h3 className="relative text-4xl sm:text-5xl md:text-6xl font-black font-poppins text-white">
                    🎁 <span className="text-gradient-premium animate-gradient-shift">SUPER BÔNUS</span> 🎁
                  </h3>
                  <p className="text-lg sm:text-xl text-white/90 mt-2 font-semibold">
                    O que <span className="text-crimson-primary">REALMENTE</span> dá valor ao material principal
                  </p>
                </div>
              </div>
              
              {/* Cards de bônus com design premium */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
                {/* Bônus 1 - Design Futurístico */}
                <div className="relative group">
                  <div className="absolute inset-0 bg-gradient-to-br from-yellow-500/30 to-orange-600/30 rounded-3xl blur-xl group-hover:blur-2xl transition-all duration-500"></div>
                  <div className="relative glass-card rounded-3xl overflow-hidden border-2 border-yellow-500/50 group-hover:border-yellow-400/70 transition-all duration-500">
                    <div className="absolute inset-0 bg-gradient-to-br from-yellow-500/10 to-orange-600/10"></div>
                    
                    <div className="relative p-8 sm:p-10 text-center">
                      {/* Badge limitado flutuante */}
                      <div className="absolute -top-4 -right-4 bg-gradient-to-r from-red-500 to-red-600 text-white px-4 py-2 rounded-full text-sm font-bold animate-bounce shadow-lg">
                        LIMITADO!
                      </div>
                      
                      {/* Ícone com efeito holográfico */}
                      <div className="relative mb-8">
                        <div className="w-24 h-24 sm:w-28 sm:h-28 bg-gradient-to-br from-yellow-500 to-orange-600 rounded-full flex items-center justify-center mx-auto relative z-10 group-hover:scale-110 transition-transform duration-300">
                          <Timer className="w-12 h-12 sm:w-14 sm:h-14 text-white animate-pulse" />
                        </div>
                        <div className="absolute inset-0 bg-gradient-to-br from-yellow-500/50 to-orange-600/50 rounded-full blur-lg animate-pulse"></div>
                      </div>
                      
                      <div className="text-xl sm:text-2xl font-bold text-yellow-400 mb-4 animate-pulse">
                        🚨 APENAS OS PRIMEIROS 200 ALUNOS 🚨
                      </div>
                      <div className="text-3xl sm:text-4xl font-black text-white mb-6">
                        🔓 Acesso por <span className="text-gradient-premium">1 ANO COMPLETO</span>
                      </div>
                      
                      {/* Preço com efeito especial */}
                      <div className="space-y-4 mb-8">
                        <div className="text-xl sm:text-2xl line-through text-white/60">
                          Valor normal: R$ 300
                        </div>
                        <div className="text-4xl sm:text-5xl font-black text-green-400 animate-bounce">
                          🎯 HOJE: R$ 0 🎯
                        </div>
                      </div>
                      
                      <div className="bg-gradient-to-r from-yellow-500/20 to-orange-600/20 rounded-2xl p-4 border border-yellow-500/30">
                        <p className="text-white/90 text-lg font-medium">
                          ⚡ Acesso vitalício às atualizações<br/>
                          📚 Novas técnicas incluídas automaticamente<br/>
                          🎓 Suporte prioritário por 1 ano
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Bônus 2 - IA Premium */}
                <div className="relative group">
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-500/30 to-purple-600/30 rounded-3xl blur-xl group-hover:blur-2xl transition-all duration-500"></div>
                  <div className="relative glass-card rounded-3xl overflow-hidden border-2 border-blue-500/50 group-hover:border-purple-500/70 transition-all duration-500">
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-purple-600/10"></div>
                    
                    <div className="relative p-8 sm:p-10 text-center">
                      {/* Badge AI flutuante */}
                      <div className="absolute -top-4 -left-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white px-4 py-2 rounded-full text-sm font-bold animate-pulse shadow-lg">
                        🤖 I.A.
                      </div>
                      
                      {/* Ícone com efeito neural */}
                      <div className="relative mb-8">
                        <div className="w-24 h-24 sm:w-28 sm:h-28 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center mx-auto relative z-10 group-hover:scale-110 transition-transform duration-300">
                          <Brain className="w-12 h-12 sm:w-14 sm:h-14 text-white" />
                        </div>
                        {/* Anéis neurais */}
                        <div className="absolute inset-0 rounded-full border border-blue-400/50 animate-ping"></div>
                        <div className="absolute inset-2 rounded-full border border-purple-400/50 animate-ping" style={{animationDelay: '0.5s'}}></div>
                      </div>
                      
                      <div className="text-3xl sm:text-4xl font-black text-white mb-6">
                        🧠 <span className="text-gradient-premium">Agente de I.A. Exclusivo</span>
                      </div>
                      
                      {/* Preço com efeito especial */}
                      <div className="space-y-4 mb-8">
                        <div className="text-xl sm:text-2xl line-through text-white/60">
                          Valor de mercado: R$ 500
                        </div>
                        <div className="text-4xl sm:text-5xl font-black text-green-400 animate-bounce">
                          🚀 GRÁTIS HOJE 🚀
                        </div>
                      </div>
                      
                      <div className="bg-gradient-to-r from-blue-500/20 to-purple-600/20 rounded-2xl p-4 border border-blue-500/30">
                        <p className="text-white/90 text-lg font-medium">
                          🎯 Analisa cada questão individualmente<br/>
                          ⚡ Sugere a técnica ideal em tempo real<br/>
                          📈 Aprende com seus padrões de erro<br/>
                          🎓 Disponível 24/7 no seu celular
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Total Value com destaque especial */}
              <div className="mt-12 text-center">
                <div className="relative mx-auto max-w-md">
                  <div className="absolute inset-0 bg-gradient-to-r from-green-500/30 to-emerald-600/30 rounded-3xl blur-xl animate-pulse"></div>
                  <div className="relative glass-card p-8 rounded-3xl border-3 border-green-500/60 bg-gradient-to-br from-green-500/10 to-emerald-600/10">
                    <div className="text-2xl sm:text-3xl text-white/90 mb-3 font-bold">
                      💰 Valor total dos bônus:
                    </div>
                    <div className="text-3xl sm:text-4xl line-through text-white/60 mb-3">
                      R$ 800
                    </div>
                    <div className="text-5xl sm:text-6xl font-black text-green-400 animate-pulse">
                      🎁 HOJE: R$ 0 🎁
                    </div>
                    <div className="text-lg sm:text-xl text-white/80 mt-4 font-semibold">
                      <span className="text-green-400">Economia de R$ 800</span> apenas hoje!
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

      {/* Seção Oferta Exclusiva */}
      <section className="py-32 px-4 bg-gradient-to-br from-crimson-primary/30 via-navy-secondary/60 to-rose-accent/20 relative overflow-hidden z-10">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-crimson-primary/20 via-navy-accent/40 to-rose-accent/10"></div>
          <div className="absolute inset-0 pattern-mesh opacity-15"></div>
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-gradient-to-r from-crimson-primary/30 to-rose-accent/20 rounded-full blur-3xl animate-ambient-pulse"></div>
          <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-gradient-to-r from-rose-accent/25 to-crimson-secondary/15 rounded-full blur-3xl animate-breathing" style={{
          animationDelay: '1s'
        }}></div>
        </div>

        <div className="max-w-6xl mx-auto text-center relative z-10">
          <h2 className="text-4xl md:text-6xl font-black font-poppins mb-8 text-white leading-tight">
            <span className="block text-crimson-primary">Oferta Exclusiva</span>
            <span className="block text-gradient-premium mt-2 animate-gradient-shift"></span>
          </h2>

          <div className="max-w-4xl mx-auto">
            <Card className="glass-card border-0 cinematic-shadow hover-lift overflow-hidden relative color-bleed">
              <CardContent className="relative z-10 p-12 text-center bg-slate-950">
                <div className="mb-12">
                  <p className="text-xl text-white mb-6">
                    Esse material + bônus normalmente custa <span className="text-crimson-primary font-bold">R$ 600</span>
                  </p>
                  
                  <div className="mb-4">
                    <span className="text-4xl md:text-5xl font-black text-crimson-primary line-through opacity-70">
                      R$ 600
                    </span>
                  </div>

                  <div className="mb-6">
                    <div className="text-8xl md:text-9xl font-black text-transparent bg-gradient-to-r from-green-500 to-emerald-600 bg-clip-text mb-4 animate-pulse">
                      R$ 97
                    </div>
                    <div className="flex items-center justify-center gap-4 mb-4">
                      <Badge className="bg-gradient-to-r from-crimson-primary to-rose-accent text-white px-6 py-3 text-xl font-bold rounded-full cinematic-shadow">
                        84% DE DESCONTO
                      </Badge>
                      <Badge className="bg-gradient-to-r from-rose-accent to-crimson-secondary text-white px-6 py-3 text-xl font-bold rounded-full cinematic-shadow animate-pulse">
                        SÓ HOJE
                      </Badge>
                    </div>
                  </div>

                  <p className="text-2xl text-white font-semibold mb-8">
                    💸 <strong className="text-green-400">Só R$97 para aumentar suas chances reais de aprovação!</strong>
                  </p>
                </div>

                <div className="space-y-4">
                  <Button size="lg" className="w-full bg-gradient-to-r from-green-600 to-emerald-700 hover:from-green-700 hover:to-emerald-800 text-white px-16 py-8 text-2xl md:text-3xl font-black rounded-2xl cinematic-shadow hover-lift border-0 group relative overflow-hidden animate-pulse colored-shadow-navy">
                    <div className="absolute inset-0 bg-gradient-to-r from-green-500 to-emerald-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    <Heart className="mr-4 w-8 h-8 relative z-10 animate-bounce" />
                    <span className="relative z-10">SIM! QUERO O CHUTE INTELIGENTE POR SÓ R$97!</span>
                    <ArrowRight className="ml-4 w-8 h-8 relative z-10 group-hover:translate-x-2 transition-transform" />
                  </Button>
                  
                  <p className="text-lg text-white font-medium">
                    ⚡ <strong className="text-green-400">Acesso imediato</strong> • 🤖 <strong className="text-blue-300">Agente de I.A. incluído</strong>
                  </p>
                  
                  <p className="text-sm text-white/60 mt-8 hover:text-white/80 transition-colors cursor-pointer">
                    Não, obrigado. Prefiro seguir sem essas técnicas e correr o risco de perder pontos.
                  </p>
                </div>
              </CardContent>
            </Card>
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