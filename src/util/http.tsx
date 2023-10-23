import { QueryClient } from '@tanstack/react-query';

export const queryClient = new QueryClient();

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
		const error = new Error('An error occurred while fetching the event');
		// const message = 'An error occurred while fetching the event';
		throw error;
	}

	const details = await response.json();

	return details;
}

export async function fetchMap(enteredAddress: string) {
	const response = await fetch(
		`https://maps.googleapis.com/maps/api/geocode/json?address=${encodeURI(enteredAddress)}&key=AIzaSyCsb-KlrUNZTfTWjz1Fof6L4-BGk71HfHI`
		// `https://maps.googleapis.com/maps/api/geocode/json?address=1600+Amphitheatre+Parkway,+Mountain+View,+CA&key=AIzaSyCsb-KlrUNZTfTWjz1Fof6L4-BGk71HfHI`
	);

	if (!response.ok) {
		const error = new Error('An error occurred while fetching the event');
		throw error;
	}

	const details = await response.json();

	return details;
}

