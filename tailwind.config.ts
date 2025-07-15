
import type { Config } from "tailwindcss";

export default {
	darkMode: ["class"],
	content: [
		"./pages/**/*.{ts,tsx}",
		"./components/**/*.{ts,tsx}",
		"./app/**/*.{ts,tsx}",
		"./src/**/*.{ts,tsx}",
	],
	prefix: "",
	theme: {
		container: {
			center: true,
			padding: '2rem',
			screens: {
				'2xl': '1400px'
			}
		},
		extend: {
			fontFamily: {
				'poppins': ['Poppins', 'sans-serif'],
				'inter': ['Inter', 'sans-serif'],
				'space': ['Space Grotesk', 'sans-serif'],
			},
			colors: {
				border: 'hsl(var(--border))',
				input: 'hsl(var(--input))',
				ring: 'hsl(var(--ring))',
				background: 'hsl(var(--background))',
				foreground: 'hsl(var(--foreground))',
				primary: {
					DEFAULT: 'hsl(var(--primary))',
					foreground: 'hsl(var(--primary-foreground))'
				},
				secondary: {
					DEFAULT: 'hsl(var(--secondary))',
					foreground: 'hsl(var(--secondary-foreground))'
				},
				destructive: {
					DEFAULT: 'hsl(var(--destructive))',
					foreground: 'hsl(var(--destructive-foreground))'
				},
				muted: {
					DEFAULT: 'hsl(var(--muted))',
					foreground: 'hsl(var(--muted-foreground))'
				},
				accent: {
					DEFAULT: 'hsl(var(--accent))',
					foreground: 'hsl(var(--accent-foreground))'
				},
				popover: {
					DEFAULT: 'hsl(var(--popover))',
					foreground: 'hsl(var(--popover-foreground))'
				},
				card: {
					DEFAULT: 'hsl(var(--card))',
					foreground: 'hsl(var(--card-foreground))'
				},
				sidebar: {
					DEFAULT: 'hsl(var(--sidebar-background))',
					foreground: 'hsl(var(--sidebar-foreground))',
					primary: 'hsl(var(--sidebar-primary))',
					'primary-foreground': 'hsl(var(--sidebar-primary-foreground))',
					accent: 'hsl(var(--sidebar-accent))',
					'accent-foreground': 'hsl(var(--sidebar-accent-foreground))',
					border: 'hsl(var(--sidebar-border))',
					ring: 'hsl(var(--sidebar-ring))'
				},
				// Nova paleta: Preto/Cinza escuro, Branco, Azul-ciano neon
				navy: {
					primary: 'hsl(var(--navy-primary))',    // #0D0D0D - Preto
					secondary: 'hsl(var(--navy-secondary))', // #1A1A1A - Cinza muito escuro
					accent: 'hsl(var(--navy-accent))',      // Tom intermediário
				},
				crimson: {
					primary: 'hsl(var(--red-primary))',     // #00E6F6 - Azul-ciano neon
					secondary: 'hsl(var(--red-secondary))',  // #00CFE6 - Azul-ciano mais escuro
				},
				rose: {
					accent: 'hsl(var(--pink-accent))',      // Azul-ciano vibrante
				},
				// Cores adicionais da paleta
				text: {
					primary: 'hsl(var(--text-primary))',      // Branco puro
					secondary: 'hsl(var(--text-secondary))',    // Off-white
					muted: 'hsl(var(--text-muted))',        // Cinza claro
					accent: 'hsl(var(--text-accent))',       // Azul acinzentado
				},
				future: {
					blue: '#1e3a8a',
					purple: '#dc2626',
					cyan: '#e11d48',
					teal: '#be123c',
					emerald: '#881337',
				}
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
			},
			keyframes: {
				'accordion-down': {
					from: {
						height: '0'
					},
					to: {
						height: 'var(--radix-accordion-content-height)'
					}
				},
				'accordion-up': {
					from: {
						height: 'var(--radix-accordion-content-height)'
					},
					to: {
						height: '0'
					}
				},
				'float': {
					'0%, 100%': { transform: 'translateY(0px)' },
					'50%': { transform: 'translateY(-6px)' }
				},
				'glow': {
					'0%, 100%': { boxShadow: '0 0 15px hsl(var(--red-primary) / 0.4)' },
					'50%': { boxShadow: '0 0 25px hsl(var(--red-primary) / 0.6)' }
				},
				'pulse-glow': {
					'0%, 100%': { 
						boxShadow: '0 0 15px hsl(var(--red-primary) / 0.5)',
						transform: 'scale(1)'
					},
					'50%': { 
						boxShadow: '0 0 30px hsl(var(--red-primary) / 0.7)',
						transform: 'scale(1.01)'
					}
				},
				'slide-up': {
					'0%': { transform: 'translateY(20px)', opacity: '0' },
					'100%': { transform: 'translateY(0)', opacity: '1' }
				},
				'fade-in': {
					'0%': { opacity: '0', transform: 'translateY(10px)' },
					'100%': { opacity: '1', transform: 'translateY(0)' }
				},
				'scale-in': {
					'0%': { transform: 'scale(0.98)', opacity: '0' },
					'100%': { transform: 'scale(1)', opacity: '1' }
				},
				'bounce-soft': {
					'0%, 100%': { transform: 'translateY(0)' },
					'50%': { transform: 'translateY(-3px)' }
				},
				'gradient-shift': {
					'0%, 100%': { backgroundPosition: '0% 50%' },
					'50%': { backgroundPosition: '100% 50%' }
				}
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out',
				'float': 'float 5s ease-in-out infinite',
				'glow': 'glow 3s ease-in-out infinite',
				'pulse-glow': 'pulse-glow 4s ease-in-out infinite',
				'slide-up': 'slide-up 0.6s ease-out',
				'fade-in': 'fade-in 0.8s ease-out',
				'scale-in': 'scale-in 0.5s ease-out',
				'bounce-soft': 'bounce-soft 3s ease-in-out infinite',
				'gradient-shift': 'gradient-shift 6s ease-in-out infinite'
			},
			backgroundImage: {
				'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
				'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
				'navy-gradient': 'linear-gradient(135deg, hsl(var(--navy-primary)) 0%, hsl(var(--navy-secondary)) 100%)',
				'cyan-gradient': 'linear-gradient(90deg, hsl(var(--red-primary)) 0%, hsl(var(--pink-accent)) 100%)',
				'glass-gradient': 'linear-gradient(135deg, rgba(255,255,255,0.15) 0%, rgba(255,255,255,0.05) 100%)',
				'atmospheric-gradient': 'linear-gradient(135deg, hsl(var(--navy-primary) / 0.8) 0%, hsl(var(--navy-secondary) / 0.6) 25%, hsl(var(--navy-accent) / 0.4) 50%, hsl(var(--red-primary) / 0.1) 75%, hsl(var(--pink-accent) / 0.1) 100%)'
			},
			backdropBlur: {
				xs: '2px',
			},
			boxShadow: {
				'glass': '0 8px 32px 0 rgba(0, 0, 0, 0.4)',
				'premium': '0 20px 60px -20px rgba(0, 0, 0, 0.3)',
				'soft': '0 4px 20px -2px rgba(0, 0, 0, 0.2)',
				'glow-cyan': '0 0 20px hsl(var(--red-primary) / 0.4)',
				'glow-cyan-alt': '0 0 20px hsl(var(--pink-accent) / 0.4)',
				'glow-navy': '0 0 20px hsl(var(--navy-accent) / 0.4)',
				'cinematic': '0 4px 12px -2px rgba(0, 0, 0, 0.3), 0 8px 24px -4px rgba(0, 0, 0, 0.2), 0 16px 48px -8px rgba(0, 0, 0, 0.1)',
				'colored-cyan': '0 8px 32px -8px hsl(var(--red-primary) / 0.4), 0 4px 16px -4px hsl(var(--red-primary) / 0.3)',
				'colored-cyan-alt': '0 8px 32px -8px hsl(var(--pink-accent) / 0.4), 0 4px 16px -4px hsl(var(--pink-accent) / 0.3)',
				'colored-navy': '0 8px 32px -8px hsl(var(--navy-accent) / 0.4), 0 4px 16px -4px hsl(var(--navy-accent) / 0.3)'
			}
		}
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config;
