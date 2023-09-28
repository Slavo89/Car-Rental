import React from 'react';
import Header from './components/Layout/Header';
import Footer from './components/Layout/Footer';
import Features from './components/Layout/Features';
import RentalCars from './components/Layout/RentalCars';

const App: React.FC = () => {
	return (
		<>
			<Header />
			<RentalCars />

			<Features />
			<Footer />
		</>
	);
};

export default App;
