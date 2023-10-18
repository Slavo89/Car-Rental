/* eslint-disable no-mixed-spaces-and-tabs */
/* eslint-disable @typescript-eslint/ban-ts-comment */
import React, { useState } from 'react';
import classes from './SearchFilters.module.scss';
import { FaFilter } from 'react-icons/fa6';
import { BsArrowLeftShort } from 'react-icons/bs';
import RangeSlider from '../UI/RangeSlider';
import { SelectedFilters } from '../../util/types';

interface Props {
	onUpdateFilters: (
		filters: SelectedFilters,
		minPrice: number,
		maxPrice: number,
		minYear: number,
		maxYear: number
	) => void;
}

const SearchFilters = (props: Props) => {
	const [showFilters, setShowFilters] = useState(false);

	const showFiltersHandler = () => {
		setShowFilters(!showFilters);
	};

	const [price, setPrice] = useState({ minPrice: 20, maxPrice: 45 });
	const [year, setYear] = useState({ minYear: 2016, maxYear: 2023 });

	const handlePriceChange = (minValue: number, maxValue: number) => {
		setPrice({ minPrice: minValue, maxPrice: maxValue });
		props.onUpdateFilters(
			//@ts-ignore
			(prevFilters) => {
				return {
					...prevFilters,
					minPrice: minValue,
					maxPrice: maxValue,
				};
			},
			minValue,
			maxValue,
			year.minYear,
			year.maxYear
		);
	};

	const handleYearChange = (minValue: number, maxValue: number) => {
		setYear({ minYear: minValue, maxYear: maxValue });
		props.onUpdateFilters(
			//@ts-ignore
			(prevFilters) => {
				return {
					...prevFilters,
					minYear: minValue,
					maxYear: maxValue,
				};
			},
			price.minPrice,
			price.maxPrice,
			minValue,
			maxValue
		);
	};

	const handleFilterChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		const { name, value, checked } = event.target;

		props.onUpdateFilters(
			//@ts-ignore
			(prevFilters: SelectedFilters) => {
				return {
					...prevFilters,
					[name]: checked
						? //@ts-ignore
						  [...prevFilters[name], value]
						: //@ts-ignore
						  prevFilters[name].filter((item: string) => item !== value),
				};
			},
			price.minPrice,
			price.maxPrice,
			year.minYear,
			year.maxYear
		);
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
						<label>
							<input
								type="checkbox"
								name="fuel type"
								id="fuel"
								value="Gasoline"
								aria-label="Gasoline"
								onChange={handleFilterChange}
							/>
							Gasoline
						</label>
						<label>
							<input
								type="checkbox"
								name="fuel type"
								value="Diesel"
								aria-label="Diesel"
								onChange={handleFilterChange}
							/>
							Diesel
						</label>
						<label>
							<input
								type="checkbox"
								name="fuel type"
								value="Hybrid"
								aria-label="Hybrid"
								onChange={handleFilterChange}
							/>
							Hybrid
						</label>
						<label>
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
						<label>
							<input
								type="checkbox"
								name="transmission"
								value="Manual"
								aria-label="Manual"
								onChange={handleFilterChange}
							/>
							Manual
						</label>
						<label>
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
						<label>
							<input
								type="checkbox"
								name="drivetrain"
								value="AWD"
								aria-label="AWD"
								onChange={handleFilterChange}
							/>
							AWD
						</label>
						<label>
							<input
								type="checkbox"
								name="drivetrain"
								value="FWD"
								aria-label="FWD"
								onChange={handleFilterChange}
							/>
							FWD
						</label>
						<label>
							<input
								type="checkbox"
								name="drivetrain"
								value="RWD"
								aria-label="RWD"
								onChange={handleFilterChange}
							/>
							RWD
						</label>
						<label>
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
							minValue={price.minPrice}
							maxValue={price.maxPrice}
							minLimit={20}
							maxLimit={45}
							onChange={handlePriceChange}
						/>
					</div>

					<div className={classes.row}>
						<h4>Year</h4>
						<RangeSlider
							title="year"
							minValue={year.minYear}
							maxValue={year.maxYear}
							minLimit={2016}
							maxLimit={2023}
							onChange={handleYearChange}
						/>
					</div>
				</div>
			</section>
		</>
	);
};

export default SearchFilters;
