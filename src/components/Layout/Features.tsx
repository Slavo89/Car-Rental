import React, { ReactNode } from 'react';
import classes from './Features.module.scss';
import { MdAssignment, MdSupportAgent, MdPriceCheck } from 'react-icons/md';

type Feature = {
	id: number;
	logo: ReactNode;
	title: string;
	text: string;
}

const Features: React.FC = () => {
	const FEATURES: Feature[] = [
		{
			id: 1,
			logo: <MdAssignment />,
			title: 'Car Insurance',
			text: 'Travel safely – we handle all risks on our own. All of our cars have valid insurance policies.',
		},
		{
			id: 2,
			logo: <MdSupportAgent />,
			title: 'Assistance on the Road',
			text: 'Something happened on the road? Contact us and our team will come to help you along the way.',
		},
		{
			id: 3,
			logo: <MdPriceCheck />,
			title: 'Best Cost',
			text: 'Our focus is delivering top-notch service at the best cost for you. Discover the perfect balance between affordability and excellence with us.',
		},
	];

	return (
		<section className={classes.features}>
			{FEATURES.map((feature) => (
				<div
					key={feature.id}
					className={classes.card}
				>
					<span className={classes.logo}>{feature.logo}</span>
					<h4 className={classes.title}>{feature.title}</h4>
					<p className={classes.text}>{feature.text}</p>
				</div>
			))}
		</section>
	);
};

export default Features;
