import { render, screen } from '@testing-library/react';
// import { render, screen, waitFor } from '../test-utils';
import { beforeEach, describe, test, vi } from 'vitest';
import SearchPage, { loader as searchPageLoader } from './SearchPage';
import {
	RouterProvider,
	createMemoryRouter,
} from 'react-router-dom';
import Root from './Root';

describe('Search Page', () => {
    test('Should render search page correctly', () => {
        beforeEach(() => {
            vi.clearAllMocks()
        })
		const routes = [
			{
				path: '/',
				element: <Root />,

				children: [
					{
						path: '/search',
						element: <SearchPage />,
						loader: searchPageLoader,
					},
				],
			},
		];
		const router = createMemoryRouter(routes, {
			initialEntries: ['/', '/search'],
			initialIndex: 1,
		});

		render(<RouterProvider router={router}/>);

		screen.debug();
	});
});


