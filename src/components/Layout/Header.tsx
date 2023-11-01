import React from 'react';
import classes from './Header.module.scss';
import { Link } from 'react-router-dom';

const Header: React.FC = () => {
	return (
		<header className={classes.header}>
			<Link to={'/'}>
				<img
					// src="../../../public/header_img.jpg"
					src="/header_img.jpg"
					alt="Logo"
					height={100}
				></img>
			</Link>
		</header>
	);
};

export default Header;
