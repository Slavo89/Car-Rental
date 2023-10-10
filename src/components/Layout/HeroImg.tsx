import React from 'react';
import classes from './HeroImg.module.scss';
import { useNavigate } from 'react-router-dom';

const HeroImg: React.FC = () => {
	const navigate = useNavigate();
	const onSubmitHandler = () => {
		navigate('/search');
		// event.preventDefault();
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
						<input id="location" />
					</fieldset>
					<fieldset
						aria-label="Select vehicle class"
						className={classes.heroFieldset}
					>
						<label htmlFor="class">Vehicle class</label>
						<select id="class">
							<option value="Select class">Select class</option>
							<option value="Select class">B Class</option>
							<option value="Select class">C Class</option>
							<option value="Select class">D Class</option>
							<option value="Select class">SUV</option>
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
					<button
						aria-label="Search car button"
						// type="submit"
						className={classes.searchBtn}
						onClick={onSubmitHandler}
					>
						Search
					</button>
				</form>
			</div>
		</header>
	);
};

export default HeroImg;