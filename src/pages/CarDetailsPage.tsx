// import React from 'react';
import classes from './CarDetailsPage.module.scss';
import { GiPerson, GiCarDoor, GiJerrycan } from 'react-icons/gi';
import { BsShieldFillCheck, BsInfoCircleFill } from 'react-icons/bs';

import { ExtendedData } from '../util/types';
import Container from '../components/UI/Container';
import Header from '../components/Layout/Header';

const CarDetailsPage = (props: ExtendedData) => {
	return (
		<>
			<Header />
			<Container>
				<div className={classes.carDetailsPage}>
					<div className={classes.detailsContent}>
						<div className={classes.heading}>
							<a>Back to Search Results</a>
							<div className={classes.importantInfo}>
								<span>
									<BsInfoCircleFill />
									Importrant Information
								</span>
								<span>
									<BsShieldFillCheck />
									Insurance
								</span>
							</div>
						</div>
						<div className={classes.carInfo}>
							<img
								src="https://carsguide-res.cloudinary.com/image/upload/f_auto,fl_lossy,q_auto,t_cg_hero_low/v1/editorial/vhs/Renault-Megane.png"
								alt={`${props.make} ${props.model}`}
								width={360}
								height={280}
								loading="lazy"
								className={classes.carImage}
							/>
							<div className={classes.carProperties}>
								<h4 className={classes.carTitle}>
									{props.make} {props.model} Renault Megane
								</h4>
								<p className={classes.carYear}>{props.year} 2016</p>
								<div className={classes.carDetails}>
									<div>
										<GiPerson
											aria-hidden
											className={classes.icon}
										/>
										<div>
											<p>Passangers</p>
											<span>{props.passengers} 5</span>
										</div>
									</div>
									<div>
										<GiCarDoor
											aria-hidden
											className={classes.icon}
										/>
										<div>
											<p>Door</p>
											<span>{props.door} 4</span>
										</div>
									</div>
									<div>
										<GiJerrycan
											aria-hidden
											className={classes.icon}
										/>
										<div>
											<p> Consumption</p>
											<span>{props.consumption}5.5 l/100 km</span>
										</div>
									</div>
								</div>
							</div>
						</div>
						<div className={classes.carOverview}>
							<h4>Overview</h4>
							<div>
								<div className={classes.label}>
									<span className={classes.head}>Color</span>
									<span className={classes.detail}>Red</span>
								</div>
								<div className={classes.label}>
									<span className={classes.head}>Fuel Types</span>
									<span className={classes.detail}>Gasoline</span>
								</div>
								<div className={classes.label}>
									<span className={classes.head}>Drivetrain</span>
									<span className={classes.detail}>AWD</span>
								</div>
								<div className={classes.label}>
									<span className={classes.head}>Transmission</span>
									<span className={classes.detail}>Manual</span>
								</div>
								<div className={classes.label}>
									<span className={classes.head}>Class</span>
									<span className={classes.detail}>C</span>
								</div>
							</div>
						</div>
						<div className={classes.description}>
							<h4>Description</h4>
							<p>
								Collision Damage Waiver and Theft Protection are included with
								this car. It covers damage and theft of the vehicle with the
								exclusion of damage or loss of tyres, windscreen, glass and
								undercarriage.
							</p>
							<p>
								The car has a damage excess of GBP 1205.0 (Includes tax) and a
								theft excess of GBP 1205.0 (Includes tax). Please ensure that
								you have the excess amount available on your card when you pick
								up the car.
							</p>
						</div>
					</div>
					<div>
						<div>
							<span>${props.price}28 / day</span>
							<div>
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
								<div>
									<h4>Additional Options:</h4>
									<form action="submit">
										<label>
											<input type="checkbox" />
											<span>Child seat: $3 /day</span>
										</label>
										<label>
											<input type="checkbox" />
											<span>Baby chair: $3 /day</span>
										</label>
										<label>
											<input type="checkbox" />
											<span>GPS: $2 /day</span>
										</label>
										<label>
											<input type="checkbox" />
											<span>Roof rack: $5 /day</span>
										</label>
                                    </form>
                                    <span>Total: $0.00 </span>
                                </div>
                                <button>Rent Now</button>
							</div>
						</div>
					</div>
				</div>
			</Container>
		</>
	);
};

export default CarDetailsPage;
