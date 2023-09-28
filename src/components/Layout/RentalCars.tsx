import React from 'react';
import classes from './RentalCars.module.scss';
import LoadingIndicator from '../UI/LoadingIndicator';
import ErrorBlock from '../UI/ErrorBlock';
import Container from '../UI/Container';
import Card from './Cards/Card';
import { fetchVehicles } from '../../util/http';
import { useQuery } from '@tanstack/react-query';

interface data {
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
	const { data, isPending, isError, error } = useQuery({
		queryKey: ['vehicles'],
		queryFn: fetchVehicles,
	});

	let content;

	if (isPending) {
		content = <LoadingIndicator />;
	}

	if (isError) {
		content = (
			<ErrorBlock
				title="An error occured"
				message={error.message}
			/>
		);
	}

	if (data) {
		const vehicles = Object.keys(data).map((key) => ({
			id: key,
			...data[key],
		}));
		content = vehicles.map(({ ...vehicle }: data) => (
			<Card
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
		// content =
	}

	return (
		<section className={classes.rentalSection}>
			<Container>{content}</Container>
		</section>
	);
};

export default RentalCars;
