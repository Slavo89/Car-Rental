import classes from './SearchPageCard.module.scss';
import { Data } from '../../../util/types';
import { Link } from 'react-router-dom';
import { GiPerson, GiCarDoor, GiJerrycan } from 'react-icons/gi';

const SearchPageCard = (props: Data) => {
	return (
		<Link
			to={`/${props.id}`}
			className={classes.card}
		>
			<img
				src={props.img}
				alt={`${props.make} ${props.model}`}
				width={360}
				height={280}
				loading="lazy"
				className={classes.cardImage}
			></img>
			<div className={classes.infoContainer}>
				<div className={classes.cardInfo}>
					<h4 className={classes.carTitle}>
						{props.make} {props.model}
					</h4>
					<p className={classes.carYear}>{props.year}</p>
					<div className={classes.carInfo}>
						<div>
							<GiPerson
								aria-label="Number of passangers"
								className={classes.icon}
							/>
							<span>{props.passengers}</span>
						</div>
						<div>
							<GiCarDoor
								aria-label="Number of doors"
								className={classes.icon}
							/>
							<span>{props.door}</span>
						</div>
						<div>
							<GiJerrycan
								aria-label="Fuel consumption"
								className={classes.icon}
							/>
							<span>{props.consumption} l/100 km</span>
						</div>
					</div>
				</div>
				<div className={classes.actionBox}>
					<p className={classes.price}>
						<span>${props.price.toFixed(2)}</span>per day
					</p>
					<button
						aria-label="Rent button"
						className={classes.rentBtn}
						// onClick={(event) => event.preventDefault()}
					>
						Rent Now
					</button>
				</div>
			</div>
		</Link>
	);
};

export default SearchPageCard;
