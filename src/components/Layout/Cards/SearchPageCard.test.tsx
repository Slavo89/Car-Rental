import { beforeEach, describe, expect, test } from 'vitest';
import { render, screen } from '../../../test-utils';
import userEvent from '@testing-library/user-event';
import SearchPageCard from './SearchPageCard';

beforeEach(() => {
	render(
		<SearchPageCard
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

describe('SearchPageCard', () => {
	test('Should render correctly', () => {
		const card = screen.getByRole('link');
		expect(card).toBeInTheDocument();
	});
	test('Should navigate properly', async () => {
		const card = screen.getByRole('link');
		await userEvent.click(card);

		expect(window.location.pathname).toBe('/1');
	});
});
