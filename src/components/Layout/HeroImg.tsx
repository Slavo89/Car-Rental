import React, { useRef } from 'react';
import classes from './HeroImg.module.scss';
import { useNavigate } from 'react-router-dom';
import { useSearchValueContext } from '../../context/SearchValueContext';

const HeroImg: React.FC = () => {
	const navigate = useNavigate();
	const context = useSearchValueContext();

	const locationRef = useRef<HTMLInputElement | null>(null);
	const pickupDateRef = useRef<HTMLInputElement | null>(null);
	const returnDateRef = useRef<HTMLInputElement | null>(null);

	const searchHandler = (event: React.FormEvent) => {
		event.preventDefault();

		context?.setLocation(locationRef.current?.value);
		context?.setPickupDate(pickupDateRef.current?.value);
		context?.setReturnDate(returnDateRef.current?.value);

		navigate('/search');
	};

	return (
		<header className={classes.heroHeader}>
			<div className={classes.heroContent}>
				<h1>
					Find & Book <br /> a Great Deal Today
				</h1>
				<form
					className={classes.heroForm}
					onSubmit={searchHandler}
				>
					<fieldset
						aria-label="Location input"
						className={classes.heroFieldset}
					>
						<label htmlFor="location">Location</label>
						<input
							id="location"
							ref={locationRef}
							onChange={(event) => context?.setLocation(event.target.value)}
						/>
					</fieldset>
					<fieldset
						aria-label="Choose pickup and return date"
						className={classes.heroCalendarOptions}
					>
						<label>
							Pick up
							<input
								id="dateInput"
								type="date"
								ref={pickupDateRef}
								value={context?.pickupDate}
								min={context?.getTodayDate()}
								onChange={(event) => {
									context?.setPickupDate(event.target.value);
								}}
							/>
						</label>
						<label>
							Return
							<input
								id="dateInput"
								type="date"
								ref={returnDateRef}
								value={context?.returnDate}
								min={context?.pickupDate}
								onChange={(event) => {
									context?.setReturnDate(event.target.value);
								}}
							/>
						</label>
					</fieldset>
					<button
						aria-label="Search car button"
						className={classes.searchBtn}
					>
						Search
					</button>
				</form>
			</div>
		</header>
	);
};

export default HeroImg;
