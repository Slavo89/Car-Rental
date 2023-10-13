import React, { useState, useEffect } from 'react';
import classes from './RentalCars.module.scss';
import ErrorBlock from '../UI/ErrorBlock';
import Container from '../UI/Container';
import Carousel from '../UI/Carousel';
import { fetchVehicles } from '../../util/http';
import { useQuery } from '@tanstack/react-query';
import LoadingIndicator from '../UI/LoadingIndicator';

import { ExtendedData } from '../../util/types';

const RentalCars: React.FC = () => {
	const [windowWidth, setWindowWidth] = useState(window.innerWidth);

	

	const { data, isPending, isError, error } = useQuery({
		queryKey: ['vehicles'],
		queryFn: fetchVehicles,
	});

	

	let content;

	function filterVehiclesByClass(
		vehicles: ExtendedData[],
		desiredClass: string
	): ExtendedData[] {
		return vehicles.filter((vehicle) => vehicle.class === desiredClass);
	}

	// RENDERING FETCH CONTENT

	if (data) {
		const vehicles: ExtendedData[] = Object.keys(data).map((key) => ({
			id: key,
			...data[key],
		}));

		const carClassesMap = new Map();
		carClassesMap.set('B Class', filterVehiclesByClass(vehicles, 'B'));
		carClassesMap.set('C Class', filterVehiclesByClass(vehicles, 'C'));
		carClassesMap.set('D Class', filterVehiclesByClass(vehicles, 'D'));
		carClassesMap.set('SUV Class', filterVehiclesByClass(vehicles, 'SUV'));

		const carClassesArray = Array.from(carClassesMap.entries()).map(
			([className, vehicles]) => ({
				className,
				vehicles,
			})
		);

		content = carClassesArray.map(({ className, vehicles }) => (
			<Carousel
				key={className}
				data={vehicles}
				slidePercentage={
					windowWidth < 770
						? 105
						: windowWidth >= 770 && windowWidth < 1200
						? 51.5
						: 34.3
				}
				visibleCars={windowWidth < 770 ? 1 : windowWidth < 1200 ? 2 : 3}
				carClass={className}
			/>
		));
	}

	// HANDLING SLIDE PERCENTAGE CHANGE

	useEffect(() => {
		const handleResize = () => {
			setWindowWidth(window.innerWidth);
		};

		window.addEventListener('resize', handleResize);

		return () => {
			window.removeEventListener('resize', handleResize);
		};
	}, []);

	return (
		<section className={classes.rentalSection}>
			<Container>
				<h2 className={classes.title}>Get Our Rental Cars</h2>
				{isPending && <LoadingIndicator />}
				{isError && (
					<ErrorBlock
						title="An error occured"
						message={error.message}
					/>
				)}
				{content}
			</Container>
		</section>
	);
};

export default RentalCars;
