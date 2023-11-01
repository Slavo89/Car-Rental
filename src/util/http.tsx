import { QueryCache, QueryClient } from '@tanstack/react-query';

export const queryClient = new QueryClient({
	queryCache: new QueryCache({
		onError: (error) => console.error(error.message),
	}),
});

export async function fetchVehicles() {
	const url =
		'https://car-rental-ba575-default-rtdb.europe-west1.firebasedatabase.app/vehicles.json';

	const response = await fetch(url);

	if (!response.ok) {
		const error = new Error('An error occurred while retrieving car data');
		throw error;
	}

	const vehicles = await response.json();
	return vehicles;
}

export async function fetchCarDetails(id: string | undefined) {
	const response = await fetch(
		`https://car-rental-ba575-default-rtdb.europe-west1.firebasedatabase.app/vehicles/${id}.json`
	);

	if (!response.ok) {
		const error = new Error('An error occurred while fetching the car details');
		throw error;
	}

	const details = await response.json();

	return details;
}
