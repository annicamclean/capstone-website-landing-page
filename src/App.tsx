// src/App.tsx
import { ChakraProvider, ColorModeScript } from '@chakra-ui/react';
import { extendTheme, type ThemeConfig } from '@chakra-ui/react';
import Navbar from './components/Nav';
import Hero from './components/Hero';
import About from './components/About';
import Features from './components/Features';
import Team from './components/Team';
import Installation from './components/Installation';
import Footer from './components/Footer';

// 1. Define the color mode config
const config: ThemeConfig = {
	initialColorMode: 'dark',
	useSystemColorMode: false,
};

// 2. Define your color palette
const colors = {
	brand: {
		900: '#1a365d',
		800: '#153e75',
		700: '#2a69ac',
	},
	darkMode: {
		background: '#1A202C',  // dark gray
		card: '#2D3748',       // slightly lighter gray
		text: {
			primary: '#FFFFFF',
			secondary: '#CBD5E0',
		},
		border: '#4A5568',
	},
	lightMode: {
		background: '#FFFFFF',
		card: '#F7FAFC',
		text: {
			primary: '#1A202C',
			secondary: '#4A5568',
		},
		border: '#E2E8F0',
	}
};

// 3. Extend the theme
const theme = extendTheme({
	config,
	colors,
	styles: {
		global: (props) => ({
			body: {
				bg: props.colorMode === 'dark' ? 'darkMode.background' : 'lightMode.background',
				color: props.colorMode === 'dark' ? 'darkMode.text.primary' : 'lightMode.text.primary',
			},
		}),
	},
	components: {
		Box: {
			baseStyle: (props) => ({
				bg: props.colorMode === 'dark' ? 'darkMode.card' : 'lightMode.card',
			}),
		},
		Button: {
			baseStyle: {
				fontWeight: 'bold',
			},
			variants: {
				solid: (props) => ({
					bg: props.colorMode === 'dark' ? 'blue.500' : 'blue.600',
					color: 'white',
					_hover: {
						bg: props.colorMode === 'dark' ? 'blue.600' : 'blue.700',
					},
				}),
			},
		},
	},
});

function App() {
	return (
		<>
			<ColorModeScript initialColorMode={theme.config.initialColorMode} />
			<ChakraProvider theme={theme}>
				<Navbar />
				<Hero />
				<About />
				<Features />
				<Team />
				<Installation />
				<Footer />
			</ChakraProvider>
		</>
	);
}

export default App;