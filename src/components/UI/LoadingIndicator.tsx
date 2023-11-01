import React from 'react';
import classes from './LoadingIndicator.module.scss';

const LoadingIndicator: React.FC = () => {
	return (
		<div className={classes.center}>
			<div className={classes.ldsRing}>
				<div></div>
				<div></div>
				<div></div>
				<div></div>
			</div>
		</div>
	);
};

export default LoadingIndicator;
