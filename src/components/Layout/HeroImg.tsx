import React, { FormEvent } from 'react';
import classes from './HeroImg.module.scss';
import { useNavigate } from 'react-router-dom';
import { useAppContext } from '../../context/SearchValueContext';

const HeroImg: React.FC = () => {
	const navigate = useNavigate();
	const context = useAppContext();
	const searchHandler = (event: FormEvent) => {
		event.preventDefault();
		navigate('/search');
	};

	return (
		<header className={classes.heroHeader}>
			<div className={classes.heroContent}>
				<h1>
					Find & Book <br /> a Great Deal Today
				</h1>
				<form className={classes.heroForm}>
					<fieldset
						aria-label="Location input"
						className={classes.heroFieldset}
					>
						<label htmlFor="location">Location</label>
						<input
							id="location"
							onChange={(event) => context?.setLocation(event.target.value)}
						/>
					</fieldset>
					<fieldset
						aria-label="Select vehicle class"
						className={classes.heroFieldset}
					>
						<label htmlFor="class">Vehicle class</label>
						<select
							id="class"
							defaultValue={context?.vehicleClass}
							onChange={(event) =>  context?.setVehicleClass(event.target.value) }
						>
							<option value="All">Select class</option>
							<option value="B">B Class</option>
							<option value="C">C Class</option>
							<option value="D">D Class</option>
							<option value="SUV">SUV</option>
						</select>
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
						type="submit"
						className={classes.searchBtn}
						onClick={searchHandler}
					>
						Search
					</button>
				</form>
			</div>
		</header>
	);
};

export default HeroImg;
