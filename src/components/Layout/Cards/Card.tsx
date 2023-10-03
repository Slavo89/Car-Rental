import classes from './Card.module.scss';
import { GiPerson, GiCarDoor, GiJerrycan } from 'react-icons/gi';

import { Data } from '../../../util/types';

const Card = (props: Data) => {
	return (
		<div className={classes.card} >
			<img
				src={props.img}
				alt={`${props.make} ${props.model}`}
				width={360}
				height={280}
				loading='lazy'
				className={classes.cardImage}
			></img>
			<div className={classes.cardInfo}>
				<h4 className={classes.carTitle}>{props.make} {props.model}</h4>
				<p className={classes.carYear}>{props.year}</p>
				<p className={classes.cancellationText}>
					<span>&#10003; Free cancellation up</span> to 48h before pick-up time
				</p>
				<div className={classes.carInfo}>
					<div>
						<GiPerson className={classes.icon} />
						<span>{props.passengers}</span>
					</div>
					<div>
						<GiCarDoor className={classes.icon} />
						<span>{props.door}</span>
					</div>
					<div>
						<GiJerrycan className={classes.icon} />
						<span>{props.consumption} l/100 km</span>
					</div>
				</div>
				<div>
					<p className={classes.price}>
						<span>${props.price.toFixed(2)}</span>/ day
					</p>
					<button className={classes.rentButton}>Rent Now</button>
				</div>
			</div>
		</div>
	);
};

export default Card;
