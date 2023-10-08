import React, { useState } from 'react';
import classes from './Carousel.module.scss';
import Card from '../Layout/Cards/Card';
import { BsChevronLeft, BsChevronRight } from 'react-icons/bs';

import { ExtendedData } from '../../util/types';

type Props = {
	data: ExtendedData[];
	slidePercentage: number;
	visibleCars: number;
	carClass: 'B Class' | 'C Class' | 'D Class' | 'SUV';
};

const Carousel: React.FC<Props> = (props) => {
	const [currentIndex, setCurrentIndex] = useState<number>(0);

	// SLIDE CAROUSEL FUNCTIONS

	const slideNext = () => {
		if (currentIndex === props.data.length - props.visibleCars) {
			return;
		}
		setCurrentIndex(currentIndex + 1);
	};

	const slidePrev = () => {
		if (currentIndex === 0) {
			return;
		}
		setCurrentIndex(currentIndex - 1);
	};

	// const handleFocus = (index: number) => {
	// 	if (currentIndex === props.data.length - props.visibleCars) {
	// 		return;
	// 	}
	// 	setCurrentIndex(index);
	// };

	const transformValue = `translate(-${currentIndex * props.slidePercentage}%)`; // transformValue for sliding Carousel

	console.log(currentIndex);
	return (
		<>
			<div className={classes.classHeadline}>
				<h4 className={classes.classHeader}>{props.carClass}</h4>
				<div className={classes.buttons}>
					<button
					aria-label='Slide to previous car'
						className={classes.leftBtn}
						onClick={slidePrev}
					>
						<BsChevronLeft aria-hidden/>
					</button>
					<button
					aria-label='Slide to next car'
						className={classes.rightBtn}
						onClick={slideNext}
					>
						<BsChevronRight aria-hidden/>
					</button>
				</div>
			</div>
			<div className={classes.carousel}>
				<div
					className={classes.carouselContainer}
					style={{
						transform: transformValue,
						transition: 'transform 0.3s ease-in-out',
					}}
					role="group"
				>
					{props.data.map((vehicle: ExtendedData, index: number) => (
						<Card
							index={index + 1}
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
							// onFocus={handleFocus}
							// onFocus={() => handleFocus(index)}
						/>
					))}
				</div>
			</div>
		</>
	);
};

export default Carousel;
