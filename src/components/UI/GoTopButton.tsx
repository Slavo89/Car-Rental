import React from 'react';
import classes from './GoTopButton.module.scss';
import { BsChevronUp } from 'react-icons/bs';

const GoTopButton: React.FC = () => {
	const scrollToTopHandler = () => {
		window.scrollTo({
			top: 0,
		});
	};
	return (
		<div className={classes.goTopContainer}>
			<button
				aria-label="Scroll to top button"
				type="button"
				className={classes.goTop}
				onClick={scrollToTopHandler}
			>
				<BsChevronUp aria-hidden />
			</button>
		</div>
	);
};

export default GoTopButton;
