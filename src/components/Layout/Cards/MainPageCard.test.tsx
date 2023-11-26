import { beforeEach, describe, expect, test } from 'vitest';
import { render, screen } from '../../../test-utils';
import MainPageCard from './MainPageCard';
import userEvent from '@testing-library/user-event';

beforeEach(() => {
	render(
		<MainPageCard
			key="1"
			id="1"
			img=""
			index={1}
			consumption={3}
			door={5}
			make="Renault"
			model="Megane"
			price={10}
			passengers={5}
			year={1999}
			numberOfCars={3}
			disableFocus={true}
		/>
	);
});

describe('MainPageCard', () => {
	test('Should render correctly', () => {
		const card = screen.getByTestId('carousel-card');
		expect(card).toBeInTheDocument();
	});
	test('Should navigate properly', async () => {
		const card = screen.getByTestId('carousel-card');
		await userEvent.click(card);

		expect(window.location.pathname).toBe('/1');
	});
});
