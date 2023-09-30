import React, { useState, useEffect } from 'react';
import classes from './RentalCars.module.scss';
import LoadingIndicator from '../UI/LoadingIndicator';
import ErrorBlock from '../UI/ErrorBlock';
import Container from '../UI/Container';
import Card from './Cards/Card';
import { BsChevronLeft, BsChevronRight } from 'react-icons/bs';
import { fetchVehicles } from '../../util/http';
import { useQuery } from '@tanstack/react-query';

interface data {
	id: string;
	img: string;
	consumption: number;
	door: number;
	make: string;
	model: string;
	price: number;
	passanger: number;
	year: number;
}

const RentalCars: React.FC = () => {
	const [currentIndex, setCurrentIndex] = useState<number>(0);
	const [visibleCars, setVisibleCars] = useState<number>(() => {
		if (window.innerWidth < 1200) {
			return 2;
		} else {
			return 3;
		}
	});
	const [currentPercentage, setCurrentPercentage] = useState<number>(() => {
		if (window.innerWidth < 1200) {
			return 51.5;
		} else {
			return 34.3;
		}
	});

	const { data, isPending, isError, error } = useQuery({
		queryKey: ['vehicles'],
		queryFn: fetchVehicles,
	});

	let content;
	let numberOfVehicles: number;

	// RENDERING FETCH CONTENT

	if (isError) {
		content = (
			<ErrorBlock
				title="An error occured"
				message={error.message}
			/>
		);
	} else if (data) {
		const vehicles = Object.keys(data).map((key) => ({
			id: key,
			...data[key],
		}));
		numberOfVehicles = vehicles.length;

		content = vehicles.map((vehicle: data) => (
			<Card
				key={vehicle.id}
				img={vehicle.img}
				consumption={vehicle.consumption}
				door={vehicle.door}
				make={vehicle.make}
				model={vehicle.model}
				price={vehicle.price}
				passanger={vehicle.passanger}
				year={vehicle.year}
			/>
		));
	}

	// SLIDE CAROUSEL FUNCTIONS

	const slideRight = () => {
		if (currentIndex === numberOfVehicles - visibleCars) {
			return;
		}
		setCurrentIndex(currentIndex + 1);
	};

	const slideLeft = () => {
		if (currentIndex === 0) {
			return;
		}
		setCurrentIndex(currentIndex - 1);
	};

	// HANDLING SLIDE PERCENTAGE CHANGE
	useEffect(() => {
		function handleResize() {
			if (window.innerWidth < 1200) {
				setVisibleCars(2);
				setCurrentPercentage(51.5);
			} else if (window.innerWidth >= 1200) {
				setVisibleCars(3);
				setCurrentPercentage(34.3);
			}
		}
		window.addEventListener('resize', handleResize);
	}, []);
	const transformValue = `translate(-${currentIndex * currentPercentage}%)`;

	return (
		<section className={classes.rentalSection}>
			<Container>
				<h2 className={classes.title}>Get Our Rental Cars</h2>
				<div className={classes.buttons}>
					<button
						className={classes.leftBtn}
						onClick={slideLeft}
					>
						<BsChevronLeft />
					</button>
					<button
						className={classes.rightBtn}
						onClick={slideRight}
					>
						<BsChevronRight />
					</button>
				</div>
				<div className={classes.carousel}>
					<div
						className={classes.rentalContainer}
						style={{
							transform: transformValue,
							// transform: `translate(-${currentIndex * currentPercentage}%)`,
							transition: 'transform 0.3s ease-in-out',
						}}
					>
						{isPending ? <LoadingIndicator /> : content}
					</div>
				</div>
			</Container>
		</section>
	);
};

export default RentalCars;
