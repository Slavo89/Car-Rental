import React from 'react';
import HeroImg from '../components/Layout/HeroImg';
import RentalCars from '../components/Layout/RentalCars';
import Features from '../components/Layout/Features';
import GoTopButton from '../components/UI/GoTopButton';
// import { fetchVehicles, queryClient } from '../util/http';
// import { useLoaderData } from 'react-router-dom';

const MainPage: React.FC = () => {
	// const data = useLoaderData()
	// console.log(data);

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

// export function loader() {
// 	return queryClient.fetchQuery({
// 		queryKey: ['vehicles'],
// 		// queryFn: ({ signal }) => fetchVehicles({ signal, id: params.id }),
// 		queryFn: fetchVehicles,
// 	});
// }
