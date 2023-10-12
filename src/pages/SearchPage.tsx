import React from 'react';
import classes from './SearchPage.module.scss';
import Container from '../components/UI/Container';
import { FaFilter } from 'react-icons/fa6';
import { BsArrowLeftShort } from 'react-icons/bs';
import RangeSlider from '../components/UI/RangeSlider';

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
								<label htmlFor="pick-up-date">
									Pick up
									<input
										id="return-date"
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
					</section>
					<div>Car List</div>
				</div>
			</Container>
		</main>
	);
};

export default SearchPage;

// interface CustomStyles {
// 	'--minPricePercentage': string;
// 	'--maxPricePercentage': string;
// }

// const [yearMinValue, setYearMinValue] = useState(2016);
// const [yearMaxValue, setYearMaxValue] = useState(2023);

// const calculatePercentage = (
// 	minValue: number,
// 	maxValue: number,
// 	minLimit: number,
// 	maxLimit: number
// ) => {
// 	return {
// 		'--minPercentage':
// 			((minValue - minLimit) / (maxLimit - minLimit)) * 100 + '%',
// 		'--maxPercentage':
// 			((maxValue - minLimit) / (maxLimit - minLimit)) * 100 + '%',
// 	};
// };

// const priceStyles: Record<string, string> = calculatePercentage(
// 	priceMinValue,
// 	priceMaxValue,
// 	20,
// 	45
// );
// const yearStyles: Record<string, string> = calculatePercentage(
// 	yearMinValue,
// 	yearMaxValue,
// 	2016,
// 	2023
// );

// const handlePriceMinChange = (event) => {
// 	const value = Math.min(+event.target.value, priceMaxValue);
// 	if (priceMinValue < 20) {
// 		setPriceMinValue(20);
// 	}
// 	setPriceMinValue(value);
// 	event.target.value = value.toString();
// };

// const handlePriceMaxChange = (event) => {
// 	const value = Math.max(+event.target.value, priceMinValue);
// 	if (priceMaxValue > 45) {
// 		setPriceMaxValue(45);
// 	}
// 	setPriceMaxValue(value);
// 	event.target.value = value.toString();
// };

{
	/* <label
									htmlFor="price-range"
									className={classes.rangeLabel}
								>
									<div
										className={classes.sliderTrack}
										style={priceStyles}
									></div>
									<input
										type="range"
										id="price-range"
										name="price"
										min="20"
										max="45"
										value={priceMinValue}
										className={classes.rangeInput}
										onChange={handlePriceMinChange}
									/>
									<input
										type="range"
										id="price-range"
										name="price"
										min="20"
										max="45"
										value={priceMaxValue}
										className={classes.rangeInput}
										onChange={handlePriceMaxChange}
									/>
								</label>
								<div className={classes.rangeValues}>
									$ {priceMinValue} - $ {priceMaxValue}
								</div> */
}

{
	/* <label
									htmlFor="year"
									className={classes.rangeLabel}
								>
									<div
										className={classes.sliderTrack}
										// className={classes.yearSliderTrack}
										style={yearStyles}
									></div>
									<input
										type="range"
										id="year"
										name="year"
										min="2016"
										max="2023"
										value={yearMinValue}
										className={classes.rangeInput}
										onChange={(e) =>
											setYearMinValue(parseInt(e.target.value, 10))
										}
									/>
									<input
										type="range"
										id="year"
										name="year"
										min="2016"
										max="2023"
										value={yearMaxValue}
										className={classes.rangeInput}
										onChange={(e) =>
											setYearMaxValue(parseInt(e.target.value, 10))
										}
									/>
								</label> */
}
{
	/* <div className={classes.rangeValues}>
									{yearMinValue} - {yearMaxValue}
								</div> */
}
