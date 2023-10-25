import classes from './CarDetailsPage.module.scss';
import { GiPerson, GiCarDoor, GiJerrycan } from 'react-icons/gi';
import {
	BsShieldFillCheck,
	BsInfoCircleFill,
	BsArrowLeftShort,
} from 'react-icons/bs';
import Container from '../components/UI/Container';
import { useLoaderData, useNavigate } from 'react-router-dom';
import { fetchCarDetails, queryClient } from '../util/http';
import { useSearchValueContext } from '../context/SearchValueContext';
import { ExtendedData } from '../util/types';
import { useState } from 'react';
import MapComponent from '../components/MapComponents/MapComponent';

const CarDetailsPage = () => {
	const navigate = useNavigate();
	const context = useSearchValueContext();
	const DATA = useLoaderData() as ExtendedData;

	const [totalPrice, setTotalPrice] = useState(DATA.price);
	const handleOptionsChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		const dataCalculate = event.target.getAttribute('data-calculate');

		if (dataCalculate !== null) {
			const calculateValue = +dataCalculate;
			if (event.target.checked) {
				setTotalPrice((prevPrice) => prevPrice + calculateValue);
			} else {
				setTotalPrice((prevPrice) => prevPrice - calculateValue);
			}
		}
	};
	return (
		<main>
			<Container>
				<div className={classes.carDetailsPage}>
					<div className={classes.detailsContent}>
						<div className={classes.heading}>
							<button
								className={classes.goBackButton}
								onClick={() => navigate(-1)}
							>
								<BsArrowLeftShort aria-hidden />
								Go Back
							</button>
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
								src={DATA.img}
								alt={`${DATA.make} ${DATA.model}`}
								width={360}
								height={280}
								loading="lazy"
								className={classes.carImage}
							/>
							<div className={classes.carProperties}>
								<div>
									<h4 className={classes.carTitle}>
										{DATA.make} {DATA.model}
									</h4>
									<p className={classes.carYear}>{DATA.year}</p>
								</div>
								<div className={classes.carDetails}>
									<div>
										<GiPerson
											aria-hidden
											className={classes.icon}
										/>
										<div>
											<p>Passangers</p>
											<span>{DATA.passengers}</span>
										</div>
									</div>
									<div>
										<GiCarDoor
											aria-hidden
											className={classes.icon}
										/>
										<div>
											<p>Door</p>
											<span>{DATA.door}</span>
										</div>
									</div>
									<div>
										<GiJerrycan
											aria-hidden
											className={classes.icon}
										/>
										<div>
											<p> Consumption</p>
											<span>{DATA.consumption} l/100 km</span>
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
									<span className={classes.detail}>{DATA.color}</span>
								</div>
								<div className={classes.label}>
									<span className={classes.head}>Fuel Types</span>
									<span className={classes.detail}>{DATA['fuel type']}</span>
								</div>
								<div className={classes.label}>
									<span className={classes.head}>Drivetrain</span>
									<span className={classes.detail}>{DATA.drivetrain}</span>
								</div>
								<div className={classes.label}>
									<span className={classes.head}>Transmission</span>
									<span className={classes.detail}>{DATA.transmission}</span>
								</div>
								<div className={classes.label}>
									<span className={classes.head}>Class</span>
									<span className={classes.detail}>{DATA.class}</span>
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
								The car has a damage excess of USD 1500 (Includes tax) and a
								theft excess of USD 1500 (Includes tax). Please ensure that you
								have the excess amount available on your card when you pick up
								the car.
							</p>
						</div>
						<div className={classes.features}>
							<h4>Following for free</h4>
							<ul className={classes.list}>
								<li className={classes.listItem}>&#10003; Free cancellation</li>
								<li className={classes.listItem}>
									&#10003; Rental Car Insurance
								</li>
								<li className={classes.listItem}>
									&#10003; No credit card fees
								</li>
								<li className={classes.listItem}>&#10003; Local taxes</li>
							</ul>
						</div>
					</div>
					<div className={classes.formContent}>
						<span className={classes.priceLabel}>
							${DATA.price}.00 <span>/ day</span>
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
										min={context?.getTodayDate()}
										value={context?.pickupDate}
										onChange={(event) =>
											context!.setPickupDate(event.target.value)
										}
									/>
								</label>
								<label>
									Return
									<input
										id="dateInput"
										type="date"
										min={context?.pickupDate}
										value={context?.returnDate}
										onChange={(event) =>
											context!.setReturnDate(event.target.value)
										}
									/>
								</label>
							</fieldset>
							<MapComponent location={context?.location} />
							<div className={classes.options}>
								<h4>Additional Options:</h4>
								<div className={classes.form}>
									<label htmlFor="child-seat">
										<input
											type="checkbox"
											id="child-seat"
											name="seat"
											data-calculate="2"
											onChange={handleOptionsChange}
										/>
										<span>Child seat: $2 /day</span>
									</label>
									<label htmlFor="baby-chair">
										<input
											type="checkbox"
											id="baby-chair"
											name="chair"
											data-calculate="2"
											onChange={handleOptionsChange}
										/>
										<span>Baby chair: $2 /day</span>
									</label>
									<label htmlFor="gps">
										<input
											type="checkbox"
											id="gps"
											name="gps"
											data-calculate="1"
											onChange={handleOptionsChange}
										/>
										<span>GPS: $1 /day</span>
									</label>
									<label htmlFor="roof-rack">
										<input
											type="checkbox"
											id="roof-rack"
											name="rack"
											data-calculate="3"
											onChange={handleOptionsChange}
										/>
										<span>Roof rack: $3 /day</span>
									</label>
								</div>
								<p className={classes.totalAmount}>
									Total: <span>${totalPrice}.00</span> / day
								</p>
							</div>
							<button className={classes.rentButton}>Rent Now</button>
						</div>
					</div>
				</div>
			</Container>
		</main>
	);
};
export default CarDetailsPage;

// eslint-disable-next-line react-refresh/only-export-components, @typescript-eslint/no-explicit-any
export function loader({ params }: any) {
	return queryClient.fetchQuery({
		queryKey: ['details', params.id],
		queryFn: () => fetchCarDetails(params.id),
	});
}
