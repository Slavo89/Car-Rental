import React from 'react';
import Header from '../components/Layout/Header';
import { Outlet } from 'react-router-dom';
import Footer from '../components/Layout/Footer';

const Root: React.FC = () => {
	return (
		<>
			<Header />
			<Outlet />
			<Footer />
		</>
	);
};

export default Root;
