import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { QueryClientProvider } from '@tanstack/react-query';
import { loader as carDetailsLoader } from './pages/CarDetailsPage';
import { loader as searchPageLoader } from './pages/SearchPage';
import { queryClient } from './util/http';
import { AppContextProvider } from './context/SearchValueContext';
import ErrorBlock from './components/UI/ErrorBlock';
import LoadingIndicator from './components/UI/LoadingIndicator';

const Root = React.lazy(() => import('./pages/Root'));
const MainPage = React.lazy(() => import('./pages/MainPage'));
const SearchPage = React.lazy(() => import('./pages/SearchPage'));
const CarDetailsPage = React.lazy(() => import('./pages/CarDetailsPage'));

const router = createBrowserRouter([
	{
		path: '/',
		element: (
			<React.Suspense fallback={<LoadingIndicator />}>
				<Root />
			</React.Suspense>
		),
		errorElement: (
			<ErrorBlock
				title="Something went wrong"
				message="An error occurred while retrieving car data"
			/>
		),

		children: [
			{
				index: true,
				element: (
					<React.Suspense fallback={<LoadingIndicator />}>
						<MainPage />
					</React.Suspense>
				),
			},
			{
				path: '/:id',
				element: (
					<React.Suspense fallback={<LoadingIndicator />}>
						<CarDetailsPage />
					</React.Suspense>
				),
				loader: carDetailsLoader,
				errorElement: (
					<ErrorBlock
						title="Something went wrong"
						message="An error occurred while fetching the car details"
					/>
				),
			},
			{
				path: '/search',
				element: (
					<React.Suspense fallback={<LoadingIndicator />}>
						<SearchPage />
					</React.Suspense>
				),
				loader: searchPageLoader,
				errorElement: (
					<ErrorBlock
						title="Something went wrong"
						message="An error occurred while retrieving car data"
					/>
				),
			},
		],
	},
]);

const App: React.FC = () => {
	return (
		<>
			<QueryClientProvider client={queryClient}>
				<AppContextProvider>
					<RouterProvider router={router} />
				</AppContextProvider>
			</QueryClientProvider>
		</>
	);
};

export default App;
