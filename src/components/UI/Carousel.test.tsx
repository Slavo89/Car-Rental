import { render, screen } from '../../test-utils';
import { beforeEach, describe, expect, test } from 'vitest';
import Carousel from './Carousel';



beforeEach(() => {
	const data = [
		{
			id: '1',
			img: 'path',
			consumption: 2,
			make: 'Renault',
			model: 'Clio',
			passengers: 1,
			price: 2,
			year: 1999,
			door: 2,
			class: 'B',
			color: 'white',
			'fuel type': 'gasoline',
			drivetrain: '2WD',
			transmission: 'manual',
		},
		{
			id: '2',
			img: 'path',
			consumption: 2,
			make: 'Renault',
			model: 'Megane',
			passengers: 1,
			price: 2,
			year: 1999,
			door: 2,
			class: 'B',
			color: 'white',
			'fuel type': 'gasoline',
			drivetrain: '2WD',
			transmission: 'manual',
		},
		{
			id: '3',
			img: 'path',
			consumption: 2,
			make: 'Renault',
			model: 'Talisman',
			passengers: 1,
			price: 2,
			year: 1999,
			door: 2,
			class: 'B',
			color: 'white',
			'fuel type': 'gasoline',
			drivetrain: '2WD',
			transmission: 'manual',
		},
	];
	render(
		<Carousel
			data={data}
			carClass="B Class"
			visibleCars={1}
			slidePercentage={20}
		/>
	);
});

describe('Carousel', () => {
	test('Should render correctly', () => {
		const heading = screen.getByRole('heading', { name: /b class/i });
		expect(heading).toBeInTheDocument();
	});
    test('Should render proper number of cars', () => {
        const items = screen.getAllByTestId('carousel-card')
        expect(items.length).toBe(3)
    })
});
