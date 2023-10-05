import React, { FormEvent } from 'react';
import classes from './HeroImg.module.scss';

const HeroImg: React.FC = () => {
	const onSubmitHandler = (event: FormEvent<HTMLButtonElement>) => {
		event.preventDefault();
	};

	return (
		<header className={classes.heroHeader}>
			<div className={classes.heroContent}>
				{/* <div className={classes.heroLogo}>
					<a href="/"></a>
				</div> */}
				<h1>
					Find & Book <br /> a Great Deal Today
				</h1>
				<form className={classes.heroForm}>
					<fieldset
						aria-label="Location input"
						className={classes.heroFieldset}
					>
						<label htmlFor="location">Location</label>
						<input name="location" />
					</fieldset>
					<fieldset
						aria-label="Select vehicle class"
						className={classes.heroFieldset}
					>
						<label htmlFor="class">Vehicle class</label>
						<select id="class">
							<option value="Select class">Select class</option>
						</select>
					</fieldset>
					<fieldset aria-label='Choose pickup and return date' className={classes.heroCalendarOptions}>
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
						type="submit"
						className={classes.searchBtn}
						onSubmit={onSubmitHandler}
					>
						Search
					</button>
				</form>
			</div>
		</header>
	);
};

export default HeroImg;
