import React from 'react';
import Header from '../components/Layout/Header';
import Container from '../components/UI/Container';
import { Outlet } from 'react-router-dom';
import Footer from '../components/Layout/Footer';

const Root: React.FC = () => {
	return (
		<>
			<Header />
			<main>
				<Container>
					<Outlet />
				</Container>
			</main>
			<Footer />
		</>
	);
};

export default Root;
