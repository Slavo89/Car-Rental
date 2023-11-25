import * as router from 'react-router';
import { render, screen, waitFor } from '../../test-utils';
import userEvent from '@testing-library/user-event';
import { describe, expect, test, vitest } from 'vitest';
import HeroImg from './HeroImg';

import { AppContextData } from '../../util/types';
import { AppContext } from '../../context/SearchValueContext';

describe('HeroImg', () => {
	test('HeroImg renders correctly', () => {
		render(<HeroImg />);

		const heading = screen.getByRole('textbox');
		expect(heading).toBeInTheDocument();
	});

	test('Inputs should receive correct values', async () => {
		render(<HeroImg />);

		const locationInput = screen.getByLabelText('Location') as HTMLInputElement;
		const pickUpInput = screen.getByLabelText('Pick up') as HTMLInputElement;
		const returnInput = screen.getByLabelText('Return') as HTMLInputElement;

		await userEvent.type(locationInput, 'New York');
		await userEvent.type(pickUpInput, '2023-11-26');
		await userEvent.type(returnInput, '2023-11-27');

		expect(locationInput.value).toBe('New York');
		expect(pickUpInput.value).toBe('2023-11-26');
		expect(returnInput.value).toBe('2023-11-27');
	});

	test('searchHandler navigates to /search', async () => {
		const navigate = vitest.fn();
		vitest.spyOn(router, 'useNavigate').mockImplementation(() => navigate);
		render(<HeroImg />);

		const searchBtn = screen.getByRole('button', {
			name: /search car button/i,
		});

		await userEvent.click(searchBtn);

		expect(navigate).toHaveBeenCalledWith('/search');
	});

	test('searchHandler updates context after clicking searchBtn', async () => {
		const mockValues: AppContextData = {
			location: '',
			setLocation: vitest.fn(),
			pickupDate: '',
			setPickupDate: vitest.fn(),
			returnDate: '',
			setReturnDate: vitest.fn(),
			getTodayDate: vitest.fn(),
		};

		render(
			<AppContext.Provider value={mockValues}>
				<HeroImg />
			</AppContext.Provider>
		);

		const locationInput = screen.getByLabelText('Location') as HTMLInputElement;
		const pickUpInput = screen.getByLabelText('Pick up') as HTMLInputElement;
		const returnInput = screen.getByLabelText('Return') as HTMLInputElement;
		const searchBtn = screen.getByRole('button', {
			name: /search car button/i,
		});

		await userEvent.type(locationInput, 'New York');
		await userEvent.type(pickUpInput, '2023-11-26');
		await userEvent.type(returnInput, '2023-11-27');

		await userEvent.click(searchBtn);
		await waitFor(() => {
			expect(mockValues.setLocation).toHaveBeenCalledWith('New York');
			expect(mockValues.setPickupDate).toHaveBeenCalledWith('2023-11-26');
			expect(mockValues.setReturnDate).toHaveBeenCalledWith('2023-11-27');
		});
	});
});
