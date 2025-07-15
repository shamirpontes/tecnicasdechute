import React from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
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
                <span className="block text-white animate-fade-in">Você acabou de dar</span>
                <span className="block text-crimson-primary animate-slide-up font-bold" style={{
                animationDelay: '0.2s'
              }}>um passo importante.</span>
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
                  Agora, quer garantir até <strong className="text-gradient-premium">+20 pontos extras</strong> com técnicas testadas para 
                  <strong className="text-gradient-premium"> acertar mesmo nas questões que você NÃO SABE?</strong>
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
            Você já está se preparando com estratégia, <span className="text-crimson-primary">mas...</span>
          </h2>
          
          <div className="glass-card p-8 rounded-3xl cinematic-shadow hover-glow mb-8">
            <p className="text-xl md:text-2xl text-white leading-relaxed font-medium mb-6">
              <strong className="text-crimson-primary">A verdade é:</strong> você ainda vai errar questões na prova.
            </p>
            <p className="text-lg text-white/90 leading-relaxed">
              Questões que não dá tempo de revisar... ou que simplesmente vão parecer grego.
              E são justamente essas questões que podem custar a sua aprovação.
            </p>
          </div>
        </div>
      </section>

      {/* Seção Apresentação do Produto */}
      <section className="py-24 px-4 relative z-10">
        <div className="absolute inset-0 bg-gradient-to-br from-navy-primary/80 to-navy-accent/40"></div>
        <div className="max-w-7xl mx-auto relative">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-6xl font-black font-poppins mb-8 text-white">
              Técnicas de 
              <span className="text-gradient-premium block mt-2 animate-gradient-shift">Chute Inteligente</span>
            </h2>
            <div className="max-w-4xl mx-auto">
              <p className="text-xl text-white/90 font-medium leading-relaxed mb-8">
                Com o material "Técnicas de Chute Inteligente para a OAB", você vai aprender:
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {[{
            icon: Brain,
            title: "15 Técnicas Práticas",
            description: "Técnicas testadas para identificar padrões da FGV, eliminar alternativas e chutar com lógica (não no escuro).",
            gradient: "from-navy-accent to-crimson-primary"
          }, {
            icon: Target,
            title: "Aplicação Sob Pressão",
            description: "Como aplicar essas técnicas mesmo sob pressão, nos minutos finais da prova.",
            gradient: "from-crimson-primary to-rose-accent"
          }, {
            icon: Zap,
            title: "Estratégias Baseadas em Dados",
            description: "Estratégias baseadas em estatística, probabilidade e leitura de padrão.",
            gradient: "from-rose-accent to-crimson-secondary"
          }].map((feature, index) => <Card key={index} className="group glass-card hover-lift border-0 cinematic-shadow animate-scale-in color-bleed colored-shadow-navy" style={{
            animationDelay: `${index * 0.2}s`
          }}>
                <CardContent className="p-8 text-center bg-slate-950">
                  <div className={`w-20 h-20 bg-gradient-to-br ${feature.gradient} rounded-3xl flex items-center justify-center mx-auto mb-8 group-hover:scale-110 transition-transform duration-300 soft-glow animate-float`}>
                    <feature.icon className="w-10 h-10 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold mb-6 text-white font-poppins">{feature.title}</h3>
                  <p className="text-white/80 leading-relaxed text-lg font-medium">{feature.description}</p>
                </CardContent>
              </Card>)}
          </div>

          {/* Super Bônus Section */}
          <div className="max-w-6xl mx-auto">
            <h3 className="text-4xl md:text-5xl font-black font-poppins text-center mb-16 text-white">
              <span className="text-gradient-premium">SUPER BÔNUS</span>
            </h3>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="glass-card p-8 rounded-3xl cinematic-shadow hover-lift color-bleed border-2 border-yellow-500/30">
                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-yellow-500 to-orange-600 rounded-full flex items-center justify-center mx-auto mb-6">
                    <Timer className="w-8 h-8 text-white" />
                  </div>
                  <div className="text-lg font-bold text-yellow-400 mb-4">Para os primeiros 200 alunos</div>
                  <div className="text-2xl font-bold text-white mb-4">Acesso por 1 ano</div>
                  <div className="text-lg line-through text-white/60 mb-2">Custaria mais R$ 100</div>
                  <div className="text-2xl font-black text-green-400 mb-4">FICA POR R$ 0</div>
                  <Badge className="bg-gradient-to-r from-yellow-500 to-orange-600 text-white px-4 py-2 rounded-full">
                    LIMITADO
                  </Badge>
                </div>
              </div>

              <div className="glass-card p-8 rounded-3xl cinematic-shadow hover-lift color-bleed border-2 border-blue-500/30">
                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-6">
                    <Brain className="w-8 h-8 text-white" />
                  </div>
                  <div className="text-2xl font-bold text-white mb-4">Agente de Inteligência Artificial</div>
                  <div className="text-lg line-through text-white/60 mb-2">Custaria no mínimo R$ 200</div>
                  <div className="text-2xl font-black text-green-400 mb-4">VAI CUSTAR R$ 0</div>
                  <p className="text-white/80 text-sm">
                    IA que analisa questões e sugere técnicas de chute específicas
                  </p>
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
      <section className="py-24 px-4 relative z-10">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-black font-poppins text-center mb-16 text-white">
            Veja os <span className="text-gradient-premium animate-gradient-shift">resultados</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[{
            name: "Camila R.",
            text: "Chutei com estratégia em umas 12 questões… acertei 9. Isso me colocou acima da linha de corte!",
            rating: 5
          }, {
            name: "Lucas P.",
            text: "Esse material me fez enxergar a prova com outros olhos. Não foi sorte, foi método.",
            rating: 5
          }].map((testimonial, index) => <Card key={index} className="glass-card hover-lift border-0 cinematic-shadow group color-bleed">
                <CardContent className="p-8 bg-slate-950">
                  <div className="flex items-center gap-1 mb-6">
                    {[...Array(testimonial.rating)].map((_, i) => <Star key={i} className="w-6 h-6 fill-yellow-500 text-yellow-500" />)}
                  </div>
                  <p className="text-white/90 mb-8 leading-relaxed text-lg font-medium italic">"{testimonial.text}"</p>
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-crimson-primary to-rose-accent rounded-full flex items-center justify-center soft-glow">
                      <span className="text-white font-bold text-lg">{testimonial.name.charAt(0)}</span>
                    </div>
                    <div>
                      <div className="font-bold text-white text-lg">{testimonial.name}</div>
                    </div>
                  </div>
                </CardContent>
              </Card>)}
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