
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
				future: {
					blue: '#0066FF',
					purple: '#6366F1',
					cyan: '#06B6D4',
					teal: '#14B8A6',
					emerald: '#10B981',
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
					'50%': { transform: 'translateY(-8px)' }
				},
				'glow': {
					'0%, 100%': { boxShadow: '0 0 20px rgba(6, 182, 212, 0.3)' },
					'50%': { boxShadow: '0 0 30px rgba(6, 182, 212, 0.6)' }
				},
				'pulse-glow': {
					'0%, 100%': { 
						boxShadow: '0 0 20px rgba(99, 102, 241, 0.4)',
						transform: 'scale(1)'
					},
					'50%': { 
						boxShadow: '0 0 40px rgba(99, 102, 241, 0.8)',
						transform: 'scale(1.02)'
					}
				},
				'slide-up': {
					'0%': { transform: 'translateY(30px)', opacity: '0' },
					'100%': { transform: 'translateY(0)', opacity: '1' }
				},
				'fade-in': {
					'0%': { opacity: '0', transform: 'translateY(20px)' },
					'100%': { opacity: '1', transform: 'translateY(0)' }
				},
				'scale-in': {
					'0%': { transform: 'scale(0.95)', opacity: '0' },
					'100%': { transform: 'scale(1)', opacity: '1' }
				},
				'bounce-soft': {
					'0%, 100%': { transform: 'translateY(0)' },
					'50%': { transform: 'translateY(-4px)' }
				},
				'gradient-shift': {
					'0%, 100%': { backgroundPosition: '0% 50%' },
					'50%': { backgroundPosition: '100% 50%' }
				},
				'float-particle': {
					'0%, 100%': { 
						transform: 'translateY(0px) rotate(0deg)',
						opacity: '0.3'
					},
					'25%': { 
						transform: 'translateY(-20px) rotate(90deg)',
						opacity: '0.8'
					},
					'50%': { 
						transform: 'translateY(-40px) rotate(180deg)',
						opacity: '0.5'
					},
					'75%': { 
						transform: 'translateY(-20px) rotate(270deg)',
						opacity: '0.8'
					}
				},
				'breathing': {
					'0%, 100%': { 
						transform: 'scale(1)',
						boxShadow: '0 0 20px rgba(99, 102, 241, 0.2)'
					},
					'50%': { 
						transform: 'scale(1.02)',
						boxShadow: '0 0 40px rgba(99, 102, 241, 0.3)'
					}
				},
				'ambient-pulse': {
					'0%, 100%': { 
						opacity: '0.6',
						transform: 'scale(1)'
					},
					'50%': { 
						opacity: '1',
						transform: 'scale(1.05)'
					}
				},
				'rim-light': {
					'0%, 100%': { 
						boxShadow: 'inset 0 1px 0 rgba(255, 255, 255, 0.1), 0 0 20px rgba(99, 102, 241, 0.2)'
					},
					'50%': { 
						boxShadow: 'inset 0 1px 0 rgba(255, 255, 255, 0.2), 0 0 30px rgba(99, 102, 241, 0.4)'
					}
				},
				'parallax-slow': {
					'0%': { transform: 'translateY(0px)' },
					'100%': { transform: 'translateY(-20px)' }
				},
				'parallax-fast': {
					'0%': { transform: 'translateY(0px)' },
					'100%': { transform: 'translateY(-40px)' }
				}
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out',
				'float': 'float 4s ease-in-out infinite',
				'glow': 'glow 2s ease-in-out infinite',
				'pulse-glow': 'pulse-glow 3s ease-in-out infinite',
				'slide-up': 'slide-up 0.8s ease-out',
				'fade-in': 'fade-in 1s ease-out',
				'scale-in': 'scale-in 0.6s ease-out',
				'bounce-soft': 'bounce-soft 2s ease-in-out infinite',
				'gradient-shift': 'gradient-shift 4s ease-in-out infinite',
				'float-particle': 'float-particle 8s ease-in-out infinite',
				'breathing': 'breathing 4s ease-in-out infinite',
				'ambient-pulse': 'ambient-pulse 6s ease-in-out infinite',
				'rim-light': 'rim-light 3s ease-in-out infinite',
				'parallax-slow': 'parallax-slow 20s linear infinite',
				'parallax-fast': 'parallax-fast 15s linear infinite'
			},
			backgroundImage: {
				'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
				'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
				'future-gradient': 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
				'cyber-gradient': 'linear-gradient(90deg, #00d4ff 0%, #6366f1 50%, #8b5cf6 100%)',
				'glass-gradient': 'linear-gradient(135deg, rgba(255,255,255,0.1) 0%, rgba(255,255,255,0.05) 100%)',
				'mesh-gradient': 'radial-gradient(circle at 20% 80%, rgba(120, 119, 198, 0.3) 0%, transparent 50%), radial-gradient(circle at 80% 20%, rgba(255, 119, 198, 0.3) 0%, transparent 50%), radial-gradient(circle at 40% 40%, rgba(120, 219, 255, 0.3) 0%, transparent 50%)',
				'atmospheric-gradient': 'linear-gradient(135deg, rgba(99, 102, 241, 0.1) 0%, rgba(6, 182, 212, 0.1) 25%, rgba(16, 185, 129, 0.1) 50%, rgba(139, 92, 246, 0.1) 75%, rgba(59, 130, 246, 0.1) 100%)'
			},
			backdropBlur: {
				xs: '2px',
			},
			boxShadow: {
				'glass': '0 8px 32px 0 rgba(31, 38, 135, 0.37)',
				'premium': '0 20px 80px -20px rgba(0, 0, 0, 0.12)',
				'soft': '0 4px 20px -2px rgba(0, 0, 0, 0.08)',
				'glow-blue': '0 0 20px rgba(59, 130, 246, 0.3)',
				'glow-purple': '0 0 20px rgba(147, 51, 234, 0.3)',
				'glow-green': '0 0 20px rgba(34, 197, 94, 0.3)',
				'cinematic': '0 4px 12px -2px rgba(0, 0, 0, 0.08), 0 8px 24px -4px rgba(0, 0, 0, 0.06), 0 16px 48px -8px rgba(0, 0, 0, 0.04)',
				'colored-blue': '0 8px 32px -8px rgba(59, 130, 246, 0.3), 0 4px 16px -4px rgba(59, 130, 246, 0.2)',
				'colored-purple': '0 8px 32px -8px rgba(147, 51, 234, 0.3), 0 4px 16px -4px rgba(147, 51, 234, 0.2)',
				'colored-green': '0 8px 32px -8px rgba(34, 197, 94, 0.3), 0 4px 16px -4px rgba(34, 197, 94, 0.2)',
				'layered': '0 1px 3px rgba(0, 0, 0, 0.1), 0 4px 8px rgba(0, 0, 0, 0.07), 0 8px 16px rgba(0, 0, 0, 0.05), 0 16px 32px rgba(0, 0, 0, 0.03)'
			},
			dropShadow: {
				'glow': '0 0 20px rgba(99, 102, 241, 0.4)',
				'ambient': '0 0 40px rgba(99, 102, 241, 0.2)'
			}
		}
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config;
