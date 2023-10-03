export type Data = {
	img: string;
	consumption: number;
	door: number;
	make: string;
	model: string;
	price: number;
	passengers: number;
	year: number;
};

export type ExtendedData = Data & {
	class: string;
	color: string;
	drivetrain: string;
	'fuel type': string;
	id: string;
	transmission: string;
};