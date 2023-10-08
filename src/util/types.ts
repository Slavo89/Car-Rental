export type Data = {

	id: string;
	img: string;
	index: number;
	consumption: number;
	door: number;
	make: string;
	model: string;
	price: number;
	passengers: number;
	year: number;
	onFocus: () => void;
};

export type ExtendedData = Data & {
	class: string;
	color: string;
	drivetrain: string;
	'fuel type': string;
	transmission: string;
};
