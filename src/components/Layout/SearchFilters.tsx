import React, { useState } from 'react';
import classes from './SearchFilters.module.scss';
import { FaFilter } from 'react-icons/fa6';
import { BsArrowLeftShort } from 'react-icons/bs';
import RangeSlider from '../UI/RangeSlider';
import { SelectedFilters } from '../../util/types';

const SearchFilters: React.FC<{
	onUpdateFilters: (filters: SelectedFilters) => void;
}> = ({ onUpdateFilters }) => {
	const [showFilters, setShowFilters] = useState(false);

	const showFiltersHandler = () => {
		setShowFilters(!showFilters);
	};

	const handleFilterChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		const { name, value, checked } = event.target;
		// console.log(checked);
		onUpdateFilters((prevFilters) => {
			return {
				...prevFilters,
				[name]: checked
					? [...(prevFilters[name] || []), value]
					: (prevFilters[name] || []).filter((item: string) => item !== value),
			};
		});
	};

	return (
		<>
			<button
				className={classes.showFiltersBtn}
				onClick={showFiltersHandler}
			>
				<FaFilter /> Filters
			</button>
			<section
				className={`${classes.filtersSection} ${showFilters && classes.show} `}
			>
				<button
					className={classes.closeFiltersBtn}
					onClick={showFiltersHandler}
				>
					<BsArrowLeftShort aria-hidden />
					Hide
				</button>
				<form className={classes.form}>
					<h2>Quick Search</h2>
					<fieldset
						aria-label="Location input"
						className={classes.fieldset}
					>
						<label htmlFor="location">Location</label>
						<input id="location" />
					</fieldset>
					<fieldset
						aria-label="Choose pickup and return date"
						className={classes.calendarOptions}
					>
						<label htmlFor="pick-up-date">
							Pick up
							<input
								id="pick-up-date"
								type="date"
							/>
						</label>
						<label htmlFor="return-date">
							Return
							<input
								id="return-date"
								type="date"
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
				<div className={classes.filters}>
					<div className={classes.row}>
						<h4>Fuel Types</h4>
						<label htmlFor="fuel type">
							<input
								type="checkbox"
								name="fuel type"
								value="Gasoline"
								aria-label="Gasoline"
								onChange={handleFilterChange}
							/>
							Gasoline
						</label>
						<label htmlFor="fuel type">
							<input
								type="checkbox"
								name="fuel type"
								value="Diesel"
								aria-label="Diesel"
								onChange={handleFilterChange}
							/>
							Diesel
						</label>
						<label htmlFor="fuel type">
							<input
								type="checkbox"
								name="fuel type"
								value="Hybrid"
								aria-label="Hybrid"
								onChange={handleFilterChange}
							/>
							Hybrid
						</label>
						<label htmlFor="fuel type">
							<input
								type="checkbox"
								name="fuel type"
								value="Electric"
								aria-label="Electric"
								onChange={handleFilterChange}
							/>
							Electric
						</label>
					</div>

					<div className={classes.row}>
						<h4>Transmission</h4>
						<label htmlFor="transmission">
							<input
								type="checkbox"
								name="transmission"
								value="Manual"
								aria-label="Manual"
								onChange={handleFilterChange}
							/>
							Manual
						</label>
						<label htmlFor="transmission">
							<input
								type="checkbox"
								name="transmission"
								value="Automatic"
								aria-label="Automatic"
								onChange={handleFilterChange}
							/>
							Automatic
						</label>
					</div>

					<div className={classes.row}>
						<h4>Drivetrain</h4>
						<label htmlFor="drivetrain">
							<input
								type="checkbox"
								name="drivetrain"
								value="AWD"
								aria-label="AWD"
								onChange={handleFilterChange}
							/>
							AWD
						</label>
						<label htmlFor="drivetrain">
							<input
								type="checkbox"
								name="drivetrain"
								value="FWD"
								aria-label="FWD"
								onChange={handleFilterChange}
							/>
							FWD
						</label>
						<label htmlFor="drivetrain">
							<input
								type="checkbox"
								name="drivetrain"
								value="RWD"
								aria-label="RWD"
								onChange={handleFilterChange}
							/>
							RWD
						</label>
						<label htmlFor="drivetrain">
							<input
								type="checkbox"
								name="drivetrain"
								value="4WD"
								aria-label="4WD"
								onChange={handleFilterChange}
							/>
							4WD
						</label>
					</div>

					<div className={classes.row}>
						<h4>Price</h4>
						<RangeSlider
							title="price"
							minValue={20}
							maxValue={45}
						/>
					</div>

					<div className={classes.row}>
						<h4>Year</h4>
						<RangeSlider
							title="year"
							minValue={2016}
							maxValue={2023}
						/>
					</div>
				</div>
			</section>
		</>
	);
};

export default SearchFilters;
