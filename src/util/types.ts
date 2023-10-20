export type Data = {
	id: string;
	img: string;
	index?: number;
	consumption: number;
	door: number;
	make: string;
	model: string;
	price: number;
	passengers: number;
	year: number;
	disableFocus?: boolean;
	numberOfCars?: number;
};

export type ExtendedData = Data & {
	class: string;
	color: string;
	drivetrain: string;
	'fuel type': string;
	transmission: string;
};

export type PaginationProps = {
	totalItems: number;
	itemsPerPage: number;
	currentPage: number;
	paginate: (pageNumber: number) => void;
};

export type VehicleData = {
	[key: string]: {
		class: string;
		color: string;
		consumption: number;
		door: number;
		drivetrain: string;
		['fuel type']: string;
		img: string;
		make: string;
		model: string;
		passengers: number;
		price: number;
		transmission: string;
		year: number;
	};
};

export type SelectedFilters = {
	'fuel type': string[];
	transmission: string[];
	drivetrain: string[];
	minPrice: number;
	maxPrice: number;
	minYear: number;
	maxYear: number;
	
};

export type AppContextData = {
	location: string;
	setLocation: (location: string) => void;
	vehicleClass: string;
	setVehicleClass: (vehicleClass: string) => void;
	pickupDate: string;
	setPickupDate: (pickupDate: string) => void;
	returnDate: string;
	setReturnDate: (returnDate: string) => void;
	getTodayDate: () => string
};