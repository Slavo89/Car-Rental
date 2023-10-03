import React, { ReactNode } from 'react';
import classes from './Container.module.scss';

type Container = {
	children: ReactNode;
};

const Container: React.FC<Container> = (props) => {
	return <div className={classes.container}>{props.children}</div>;
};

export default Container;
