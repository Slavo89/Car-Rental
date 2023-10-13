import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { QueryClientProvider } from '@tanstack/react-query';
import MainPage from './pages/MainPage';
import CarDetailsPage from './pages/CarDetailsPage';
import Root from './pages/Root';
import SearchPage, { loader as searchPageLoader } from './pages/SearchPage';
import { queryClient } from './util/http';

// const queryClient = new QueryClient();

const router = createBrowserRouter([
	{
		path: '/',
		element: <Root />,

		children: [
			{
				index: true,
				element: <MainPage />,
			},
			{
				path: '/:id',
				element: <CarDetailsPage />,
			},
			{
				path: '/search',
				element: <SearchPage />,
				loader: searchPageLoader,
			},
		],
	},
]);

const App: React.FC = () => {
	return (
		<>
			<QueryClientProvider client={queryClient}>
				<RouterProvider router={router} />
			</QueryClientProvider>
		</>
	);
};

export default App;
