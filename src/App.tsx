import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { QueryClientProvider, QueryClient } from '@tanstack/react-query';
import MainPage from './pages/MainPage';
import CarDetailsPage, {
} from './pages/CarDetailsPage'; 
import Root from './pages/Root';
import SearchPage from './pages/SearchPage';

const queryClient = new QueryClient();

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
				element: <SearchPage/>
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
