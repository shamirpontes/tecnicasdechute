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
					blue: '#2563eb',
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
					'50%': { transform: 'translateY(-6px)' }
				},
				'glow': {
					'0%, 100%': { boxShadow: '0 0 15px rgba(37, 99, 235, 0.2)' },
					'50%': { boxShadow: '0 0 25px rgba(37, 99, 235, 0.4)' }
				},
				'pulse-glow': {
					'0%, 100%': { 
						boxShadow: '0 0 15px rgba(99, 102, 241, 0.3)',
						transform: 'scale(1)'
					},
					'50%': { 
						boxShadow: '0 0 30px rgba(99, 102, 241, 0.5)',
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
				'future-gradient': 'linear-gradient(135deg, #3b82f6 0%, #6366f1 100%)',
				'cyber-gradient': 'linear-gradient(90deg, #06b6d4 0%, #3b82f6 50%, #6366f1 100%)',
				'glass-gradient': 'linear-gradient(135deg, rgba(255,255,255,0.1) 0%, rgba(255,255,255,0.05) 100%)',
				'atmospheric-gradient': 'linear-gradient(135deg, rgba(59, 130, 246, 0.05) 0%, rgba(6, 182, 212, 0.05) 25%, rgba(16, 185, 129, 0.05) 50%, rgba(99, 102, 241, 0.05) 75%, rgba(37, 99, 235, 0.05) 100%)'
			},
			backdropBlur: {
				xs: '2px',
			},
			boxShadow: {
				'glass': '0 8px 32px 0 rgba(31, 38, 135, 0.2)',
				'premium': '0 20px 60px -20px rgba(0, 0, 0, 0.08)',
				'soft': '0 4px 20px -2px rgba(0, 0, 0, 0.05)',
				'glow-blue': '0 0 20px rgba(37, 99, 235, 0.2)',
				'glow-purple': '0 0 20px rgba(99, 102, 241, 0.2)',
				'glow-green': '0 0 20px rgba(34, 197, 94, 0.2)',
				'cinematic': '0 4px 12px -2px rgba(0, 0, 0, 0.05), 0 8px 24px -4px rgba(0, 0, 0, 0.04), 0 16px 48px -8px rgba(0, 0, 0, 0.03)',
				'colored-blue': '0 8px 32px -8px rgba(37, 99, 235, 0.15), 0 4px 16px -4px rgba(37, 99, 235, 0.1)',
				'colored-purple': '0 8px 32px -8px rgba(99, 102, 241, 0.15), 0 4px 16px -4px rgba(99, 102, 241, 0.1)',
				'colored-green': '0 8px 32px -8px rgba(34, 197, 94, 0.15), 0 4px 16px -4px rgba(34, 197, 94, 0.1)'
			}
		}
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config;
