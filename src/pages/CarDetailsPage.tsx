import { useState } from 'react';
import classes from './CarDetailsPage.module.scss';
import { useLoaderData, useNavigate } from 'react-router-dom';
import { GiPerson, GiCarDoor, GiJerrycan } from 'react-icons/gi';
import { BsArrowLeftShort } from 'react-icons/bs';
import { fetchCarDetails, queryClient } from '../util/http';
import { useSearchValueContext } from '../context/SearchValueContext';
import { ExtendedData } from '../util/types';
import Container from '../components/UI/Container';
import MapComponent from '../components/MapComponents/MapComponent';
import CheckoutModal from '../components/UI/CheckoutModal';

const CarDetailsPage = () => {
	const DATA = useLoaderData() as ExtendedData;
	const context = useSearchValueContext();
	const navigate = useNavigate();

	// HANDLING PRICE VALUE
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

	//HANDLING VALIDATION AND FORM SUBMITTING
	const [validateInputs, setValidateInputs] = useState({
		pickupDate: !!context?.pickupDate,
		returnDate: !!context?.returnDate,
		location: !!context?.location,
	});
	const [isValid, setIsValid] = useState<boolean>(false);
	const [wasValidated, setWasValidated] = useState<boolean>(false);

	const handleValidation = () => {
		setWasValidated(true);
		const newValidation = {
			pickupDate: !!context?.pickupDate,
			returnDate:
				!!context?.returnDate &&
				!!context.pickupDate &&
				context.returnDate >= context?.pickupDate,
			location: !!context?.location,
		};

		setValidateInputs(newValidation);
		if (
			validateInputs.location === true &&
			validateInputs.pickupDate === true &&
			validateInputs.location === true
		) {
			setIsValid(true);
		} else {
			setIsValid(false);
		}
	};

	const handleFormSubmit = (event: React.FormEvent<HTMLFormElement>) => {
		event.preventDefault();
		const fd = new FormData(event.currentTarget);
		const additions = fd.getAll('additions');

		const data = {
			...Object.fromEntries(fd.entries()),
			additions: additions,
		};
		setIsValid(true);
		setIsModalOpen(true);
	};

	// HANDLING MODAL STATE
	const [isModalOpen, setIsModalOpen] = useState(true);
	// const modalRef = useRef<HTMLDialogElement | null>(null);

	// useEffect(() => {
	// 	const dialog = modalRef.current;
	// 	if (dialog) {
	// 		if (isModalOpen) {
	// 			dialog.showModal();
	// 		} else {
	// 			dialog.close();
	// 		}
	// 	}
	// }, [isModalOpen]);

	return (
		<main>
			<Container>
				<div className={classes.carDetailsPage}>
					<div className={classes.detailsContent}>
						<nav className={classes.nav}>
							<button
								className={classes.goBackButton}
								onClick={() => navigate(-1)}
							>
								<BsArrowLeftShort aria-hidden />
								Go Back
							</button>
						</nav>
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
						<div className={classes.insurance}>
							<h4>Insurance</h4>
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
						<div className={classes.importantInfo}>
							<h4>Age requirements</h4>
							<p>The minimum rental age for this car is 18 years.</p>
							<h4>Getting a car</h4>
							<p>
								Passport or ID is required. An international driver’s license is
								required if the national driver’s license is not printed in
								English.
							</p>
							<h4>Payment methods</h4>
							<p>
								The primary driver must have a credit card in his / her name
								when picking up the car. The card must have sufficient funds
								available to cover the amount of the deductible / down payment
								(which will be blocked on the card during the rental).
							</p>
							<p>Cash and debit cards are not accepted.</p>
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
						<form
							className={classes.formContainer}
							onSubmit={handleFormSubmit}
						>
							<fieldset
								aria-label="Choose pickup and return date"
								className={classes.heroCalendarOptions}
							>
								<label>
									Pick-Up
									<input
										type="date"
										name="pickup-date"
										min={context?.getTodayDate()}
										value={context?.pickupDate}
										onChange={(event) =>
											context!.setPickupDate(event.target.value)
										}
										className={
											!validateInputs.pickupDate && wasValidated
												? classes.error
												: ''
										}
										required
									/>
								</label>
								<label>
									Return
									<input
										type="date"
										name="return-date"
										min={context?.pickupDate}
										value={context?.returnDate}
										onChange={(event) =>
											context!.setReturnDate(event.target.value)
										}
										className={
											!validateInputs.returnDate && wasValidated
												? classes.error
												: ''
										}
										required
									/>
								</label>
							</fieldset>
							<MapComponent
								location={context?.location}
								onValidate={validateInputs.location}
								onWasValidated={wasValidated}
							/>
							<div className={classes.options}>
								<h4>Additional Options:</h4>
								<div className={classes.additionalOptions}>
									<label htmlFor="child-seat">
										<input
											type="checkbox"
											id="child-seat"
											name="additions"
											value="Child seat"
											data-calculate="2"
											onChange={handleOptionsChange}
										/>
										<span>Child seat: $2 /day</span>
									</label>
									<label htmlFor="baby-chair">
										<input
											type="checkbox"
											id="baby-chair"
											name="additions"
											value="Baby chair"
											data-calculate="2"
											onChange={handleOptionsChange}
										/>
										<span>Baby chair: $2 /day</span>
									</label>
									<label htmlFor="gps">
										<input
											type="checkbox"
											id="gps"
											name="additions"
											value="GPS"
											data-calculate="1"
											onChange={handleOptionsChange}
										/>
										<span>GPS: $1 /day</span>
									</label>
									<label htmlFor="roof-rack">
										<input
											type="checkbox"
											id="roof-rack"
											name="additions"
											value="Roof rack"
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
							{!isValid && wasValidated && (
								<span className={classes.validationError}>
									Wprowadź wszystkie wymagane informacje.
								</span>
							)}
							<button
								className={classes.rentButton}
								onClick={handleValidation}
							>
								Rent Now
							</button>
						</form>
					</div>
				</div>

				<CheckoutModal
					isOpen={isModalOpen}
					onClose={() => setIsModalOpen(false)}
					// data={data}
				/>
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
