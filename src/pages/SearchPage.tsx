import React from 'react';
import classes from './SearchPage.module.scss';
import Container from '../components/UI/Container';
import SearchFilters from '../components/Layout/SearchFilters';
import SearchPageCard from '../components/Layout/Cards/SearchPageCard';

const vehicle = {
	id: 'v1',
	consumption: 6.5,
	door: 5,
	'fuel type': 'Gasoline',
	img: 'https://carsguide-res.cloudinary.com/image/upload/f_auto,fl_lossy,q_auto,t_cg_hero_low/v1/editorial/vhs/Renault-Megane.png',
	make: 'Renault',
	model: 'Megane',
	passengers: 5,
	price: 28,
	year: 2016,
};

const SearchPage: React.FC = () => {
	return (
		<main>
			<Container>
				<div className={classes.searchPage}>
					{/* <button
						className={classes.showFiltersBtn}
						onClick={showFiltersHandler}
					>
						<FaFilter /> Filters
					</button>
					<section
						className={`${classes.filtersSection} ${
							showFilters && classes.show
						} `}
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
					</section> */}
					<SearchFilters />
					<section className={classes.searchResults}>
						<h2>Search Results</h2>
						<div className={classes.categories}>
							<div className={classes.categoryBox}>
								<img
									src="/public/SearchImages/B Class.webp"
									alt="B class"
									loading="lazy"
								/>
								<span>B Class</span>
							</div>
							<div className={classes.categoryBox}>
								<img
									src="/public/SearchImages/C Class.webp"
									alt="C class"
									loading="lazy"
								/>
								<span>C Class</span>
							</div>
							<div className={classes.categoryBox}>
								<img
									src="/public/SearchImages/D Class.webp"
									alt="D class"
									loading="lazy"
								/>
								<span>D Class</span>
							</div>
							<div className={classes.categoryBox}>
								<img
									src="/public/SearchImages/SUV.webp"
									alt="SUV"
									loading="lazy"
								/>
								<span>SUV</span>
							</div>
						</div>
						<div className={classes.results}>
							<SearchPageCard
								key={vehicle.id}
								id={vehicle.id}
								img={vehicle.img}
								consumption={vehicle.consumption}
								door={vehicle.door}
								make={vehicle.make}
								model={vehicle.model}
								price={vehicle.price}
								passengers={vehicle.passengers}
								year={vehicle.year}
							/>
						</div>
					</section>
				</div>
			</Container>
		</main>
	);
};

export default SearchPage;
