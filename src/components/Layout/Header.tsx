import React, { FormEvent } from 'react';
import classes from './Header.module.scss';

const Header: React.FC = () => {
	const onSubmitHandler = (event: FormEvent<HTMLButtonElement>) => {
		event.preventDefault()
		// console.log(event);
	}

	return (
		<header className={classes.heroHeader}>
			<div className={classes.heroContent}>
				<div className={classes.heroLogo}>
					<a href="/"></a>
				</div>
				<h1>Find & Book <br/> a Great Deal Today</h1>
				<form className={classes.heroForm}>
					<fieldset className={classes.heroFieldset}>
						<label htmlFor="location">Location</label>
						<input name="location"/>
					</fieldset>
					<fieldset className={classes.heroFieldset}>
						<label htmlFor="class">Vehicle class</label>
						<select id="class">
							<option value="Select class">Select class</option>
						</select>
					</fieldset>
					<fieldset className={classes.heroCalendarOptions}>
						<label>
							Pick up
							<input />
						</label>
						<label>
							Return
							<input />
						</label>
					</fieldset>
					<button
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

export default Header;
