import React from 'react';
import classes from './SearchPage.module.scss';
import Container from '../components/UI/Container';
import { FaFilter } from 'react-icons/fa6';
import { BsArrowLeftShort } from 'react-icons/bs';

const SearchPage: React.FC = () => {
	return (
		<main>
			<Container>
				<div className={classes.searchPage}>
					<button className={classes.showFiltersBtn}>
						<FaFilter /> Filters
					</button>
					<section className={classes.filtersSection}>
						<button className={classes.closeFiltersBtn}>
							<BsArrowLeftShort aria-hidden />
							Back
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
										name="fuel-type"
										value="Gasoline"
									/>
									Gasoline
								</label>
								<label>
									<input
										type="checkbox"
										name="fuel-type"
										value="Diesel"
									/>
									Diesel
								</label>
								<label>
									<input
										type="checkbox"
										name="fuel-type"
										value="Hybrid"
									/>
									Hybrid
								</label>
								<label>
									<input
										type="checkbox"
										name="fuel-type"
										value="Electric"
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
									/>
									Manual
								</label>
								<label>
									<input
										type="checkbox"
										name="transmission"
										value="Automatic"
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
									/>
									AWD
								</label>
								<label>
									<input
										type="checkbox"
										name="drivetrain"
										value="FWD"
									/>
									FWD
								</label>
								<label>
									<input
										type="checkbox"
										name="drivetrain"
										value="RWD"
									/>
									RWD
								</label>
								<label>
									<input
										type="checkbox"
										name="drivetrain"
										value="4WD"
									/>
									4WD
								</label>
							</div>

							<div className={classes.row}>
								<h4>Price</h4>
								<label
									htmlFor="price-range"
									className={classes.rangeLabel}
								>
									<input
										type="range"
										id="price-range"
										name="price"
										min="20"
										max="45"
										className={classes.rangeInput}
									/>
								</label>
								<div className={classes.rangeValues}>$0 - $150</div>
							</div>

							<div className={classes.row}>
								<h4>Year</h4>
								<label
									htmlFor="year"
									className={classes.rangeLabel}
								>
									<input
										type="range"
										id="year"
										name="year"
										min="2016"
										max="2023"
										className={classes.rangeInput}
									/>
								</label>
								<div className={classes.rangeValues}>2016 - 2023</div>
							</div>
						</div>
					</section>
					<div>Car List</div>
				</div>
			</Container>
		</main>
	);
};

export default SearchPage;
