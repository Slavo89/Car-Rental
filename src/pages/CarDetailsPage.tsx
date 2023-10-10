import classes from './CarDetailsPage.module.scss';
import { GiPerson, GiCarDoor, GiJerrycan } from 'react-icons/gi';
import {
	BsShieldFillCheck,
	BsInfoCircleFill,
	BsArrowLeftShort,
} from 'react-icons/bs';
import { useQuery } from '@tanstack/react-query';

// import { ExtendedData } from '../util/types';
import Container from '../components/UI/Container';
import { Link, useParams } from 'react-router-dom';
import { fetchCarDetails } from '../util/http';
import ErrorBlock from '../components/UI/ErrorBlock';
import LoadingIndicator from '../components/UI/LoadingIndicator';

const CarDetailsPage = () => {
	const params = useParams();

	const { data, isPending, isError, error } = useQuery({
		queryKey: ['details', params.id],
		queryFn: () => fetchCarDetails(params.id),
		// staleTime: 10000,
	});

	let content;

	if (data) {
		content = (
			<div className={classes.carDetailsPage}>
				<div className={classes.detailsContent}>
					<div className={classes.heading}>
						<Link
							to={`/`}
							className={classes.link}
						>
							<BsArrowLeftShort aria-hidden />
							Back to Search Results
						</Link>
						<div className={classes.importantInfo}>
							<span>
								<BsInfoCircleFill aria-hidden />
								<span>Importrant Information</span>
							</span>
							<span>
								<BsShieldFillCheck aria-hidden />
								<span>Insurance</span>
							</span>
						</div>
					</div>
					<div className={classes.carInfo}>
						<img
							src={data.img}
							alt={`${data.make} ${data.model}`}
							width={360}
							height={280}
							loading="lazy"
							className={classes.carImage}
						/>
						<div className={classes.carProperties}>
							<div>
								<h4 className={classes.carTitle}>
									{data.make} {data.model}
								</h4>
								<p className={classes.carYear}>{data.year}</p>
							</div>
							<div className={classes.carDetails}>
								<div>
									<GiPerson
										aria-hidden
										className={classes.icon}
									/>
									<div>
										<p>Passangers</p>
										<span>{data.passengers}</span>
									</div>
								</div>
								<div>
									<GiCarDoor
										aria-hidden
										className={classes.icon}
									/>
									<div>
										<p>Door</p>
										<span>{data.door}</span>
									</div>
								</div>
								<div>
									<GiJerrycan
										aria-hidden
										className={classes.icon}
									/>
									<div>
										<p> Consumption</p>
										<span>{data.consumption} l/100 km</span>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div className={classes.carOverview}>
						<h4>Overview</h4>
						<div>
							<div className={classes.label}>
								<span className={classes.head}>Color</span>
								<span className={classes.detail}>{data.color}</span>
							</div>
							<div className={classes.label}>
								<span className={classes.head}>Fuel Types</span>
								<span className={classes.detail}>{data['fuel type']}</span>
							</div>
							<div className={classes.label}>
								<span className={classes.head}>Drivetrain</span>
								<span className={classes.detail}>{data.drivetrain}</span>
							</div>
							<div className={classes.label}>
								<span className={classes.head}>Transmission</span>
								<span className={classes.detail}>{data.transmission}</span>
							</div>
							<div className={classes.label}>
								<span className={classes.head}>Class</span>
								<span className={classes.detail}>{data.class}</span>
							</div>
						</div>
					</div>
					<div className={classes.description}>
						<h4>Description</h4>
						<p>
							Collision Damage Waiver and Theft Protection are included with
							this car. It covers damage and theft of the vehicle with the
							exclusion of damage or loss of tyres, windscreen, glass and
							undercarriage.
						</p>
						<p>
							The car has a damage excess of GBP 1205.0 (Includes tax) and a
							theft excess of GBP 1205.0 (Includes tax). Please ensure that you
							have the excess amount available on your card when you pick up the
							car.
						</p>
					</div>
					<div className={classes.features}>
						<h4>Following for free</h4>
						<ul className={classes.list}>
							<li className={classes.listItem}>&#10003; Free cancellation</li>
							<li className={classes.listItem}>
								&#10003; Rental Car Insurance
							</li>
							<li className={classes.listItem}>&#10003; No credit card fees</li>
							<li className={classes.listItem}>&#10003; Local taxes</li>
						</ul>
					</div>
				</div>
				<div className={classes.formContent}>
					<span className={classes.priceLabel}>
						${data.price}.00 <span>/ day</span>
					</span>
					<div className={classes.formContainer}>
						<fieldset
							aria-label="Choose pickup and return date"
							className={classes.heroCalendarOptions}
						>
							<label>
								Pick-Up
								<input
									id="dateInput"
									type="date"
								/>
							</label>
							<label>
								Return
								<input
									id="dateInput"
									type="date"
								/>
							</label>
						</fieldset>
						<div className={classes.options}>
							<h4>Additional Options:</h4>
							<form className={classes.form}>
								<label htmlFor="child-seat">
									<input
										type="checkbox"
										id="child-seat"
										name="seat"
										data-calculate="3"
										/>
									<span>Child seat: $3 /day</span>
								</label>
								<label htmlFor="baby-chair">
									<input
										type="checkbox"
										id="baby-chair"
										name="chair"
										data-calculate="3"
									/>
									<span>Baby chair: $3 /day</span>
								</label>
								<label htmlFor="gps">
									<input
										type="checkbox"
										id="gps"
										name="gps"
										data-calculate="2"
									/>
									<span>GPS: $2 /day</span>
								</label>
								<label htmlFor="roof-rack">
									<input
										type="checkbox"
										id='roof-rack'
										name="rack"
										data-calculate="5"
									/>
									<span>Roof rack: $5 /day</span>
								</label>
							</form>
							<p className={classes.totalAmount}>Total: ${data.price}.00 </p>
						</div>
						<button className={classes.rentButton}>Rent Now</button>
					</div>
				</div>
			</div>
		);
	}

	return (
		<main>
			<Container>
				{isPending && <LoadingIndicator />}
				{isError && (
					<ErrorBlock
						title="An error occured"
						message={error.message}
					/>
				)}
				{content}
			</Container>
		</main>
	);
};

export default CarDetailsPage;
