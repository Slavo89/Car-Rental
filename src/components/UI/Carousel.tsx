import React, { useState } from 'react';
import classes from './Carousel.module.scss';
import Card from '../Layout/Cards/Card';
import { BsChevronLeft, BsChevronRight } from 'react-icons/bs';

import { ExtendedData } from '../../util/types';

type Props = {
	data: ExtendedData[];
	currentPercentage: number;
	visibleCars: number;
	carClass: 'B Class' | 'C Class' | 'D Class' | 'SUV';
};

const Carousel: React.FC<Props> = (props) => {
	const [currentIndex, setCurrentIndex] = useState<number>(0);
	// const [firstFocus, setFirstFocus] = useState<boolean>(true);

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

	// const handleFocus = () => {
	// 	if (currentIndex === props.data.length - props.visibleCars) {
	// 		return;
	// 	}
	// 	setCurrentIndex(currentIndex + 1);
	// 	console.log(firstFocus);
	// 	console.log(currentIndex);
	// };

	const handleFocus = (index: number) => {
		if (index > 0) {
			if (currentIndex === props.data.length - props.visibleCars) {
				return;
			}

			setCurrentIndex(index);
		}
	};

	const transformValue = `translate(-${
		currentIndex * props.currentPercentage
	}%)`; // transformValue for sliding Carousel

	return (
		<>
			<div className={classes.classHeadline}>
				<h4 className={classes.classHeader}>{props.carClass}</h4>
				<div className={classes.buttons}>
					<button
						className={classes.leftBtn}
						onClick={slidePrev}
					>
						<BsChevronLeft />
					</button>
					<button
						className={classes.rightBtn}
						onClick={slideNext}
					>
						<BsChevronRight />
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
				>
					{props.data.map((vehicle: ExtendedData, index: number) => (
						<Card
							key={vehicle.id}
							img={vehicle.img}
							consumption={vehicle.consumption}
							door={vehicle.door}
							make={vehicle.make}
							model={vehicle.model}
							price={vehicle.price}
							passengers={vehicle.passengers}
							year={vehicle.year}
							// onFocus={handleFocus}
							onFocus={() => handleFocus(index)}
						/>
					))}
				</div>
			</div>
		</>
	);
};

export default Carousel;
