import React from 'react';
import HeroImg from '../components/Layout/HeroImg';
import RentalCars from '../components/Layout/RentalCars';
import Features from '../components/Layout/Features';
import GoTopButton from '../components/UI/GoTopButton';

const MainPage: React.FC = () => {

	return (
		<>
			<HeroImg />
			<main>
				<RentalCars />

				<Features />
				<GoTopButton />
			</main>
		</>
	);
};

export default MainPage;
