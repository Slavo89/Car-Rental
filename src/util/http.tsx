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
