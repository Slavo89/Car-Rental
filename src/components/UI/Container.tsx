import React, { type ReactNode } from 'react';
import classes from './Container.module.scss';

type Container = {
	children: ReactNode;
};

const Container: React.FC<Container> = (props) => {
	return (
		<div className={classes.container}>
			<div className={classes.wrapper}>{props.children}</div>
		</div>
	);
};

export default Container;
