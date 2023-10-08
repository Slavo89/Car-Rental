export async function fetchVehicles() {
	const url =
		'https://car-rental-ba575-default-rtdb.europe-west1.firebasedatabase.app/vehicles.json';

	const response = await fetch(url);

	if (!response.ok) {
		const error = new Error('An error occurred while retrieving car data');
		// error.code = response.status;
		// error.info = await response.json();
		throw error;
	}

	const vehicles = await response.json();
	return vehicles;
}

export async function fetchCarDetails(id: string | undefined) {
	const response = await fetch(
		`https://car-rental-ba575-default-rtdb.europe-west1.firebasedatabase.app/vehicles/${id}.json`
		// {
		// 	signal,
		// }
	);

	// console.log(signal);

	if (!response.ok) {
		const error = new Error('An error occurred while fetching the event');
		// error.code = response.status;
		// error.info = await response.json();
		throw error;
	}

	const details = await response.json();

	return details;
}
