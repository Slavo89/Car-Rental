import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { QueryClientProvider } from '@tanstack/react-query';
import MainPage from './pages/MainPage';
import CarDetailsPage, {
	loader as carDetailsLoader,
} from './pages/CarDetailsPage';
import Root from './pages/Root';
import SearchPage, { loader as searchPageLoader } from './pages/SearchPage';
import { queryClient } from './util/http';
import { AppContextProvider } from './context/SearchValueContext';
import ErrorBlock from './components/UI/ErrorBlock';

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
				loader: carDetailsLoader,
				errorElement: (
					<ErrorBlock
						title={'Error'}
						message={'An error occured'}
					/>
				),
			},
			{
				path: '/search',
				element: <SearchPage />,
				loader: searchPageLoader,
				errorElement: (
					<ErrorBlock
						title={'error'}
						message={'An error occured'}
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
