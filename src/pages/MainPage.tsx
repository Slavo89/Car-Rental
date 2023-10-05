import React from 'react';
import HeroImg from '../components/Layout/HeroImg';
import RentalCars from '../components/Layout/RentalCars';
import Features from '../components/Layout/Features';
import Footer from '../components/Layout/Footer';

const MainPage: React.FC = () => {
	return (
		<>
			<HeroImg />
			<main>
				<RentalCars />

				<Features />
			</main>
			<Footer />
		</>
	);
};

export default MainPage;
