import React, { useState } from 'react';
import classes from './RangeSlider.module.scss';

type Props = {
	title: string;
	minValue: number;
	maxValue: number;
};

const RangeSlider = (props: Props) => {
	// VALUES OF props.minValue AND props.maxValue ARE CONSTANT, minValue and maxValue ARE STATES

	const [minValue, setMinValue] = useState(props.minValue);
	const [maxValue, setMaxValue] = useState(props.maxValue);

	const calculatePercentage = (
		minValue: number,
		maxValue: number,
		minLimit: number, // constant
		maxLimit: number // constant
	) => {
		return {
			'--minPercentage':
				((minValue - minLimit) / (maxLimit - minLimit)) * 100 + '%',
			'--maxPercentage':
				((maxValue - minLimit) / (maxLimit - minLimit)) * 100 + '%',
		};
	};

	const styles: Record<string, string> = calculatePercentage(
		minValue,
		maxValue,
		props.minValue,
		props.maxValue
	);

	const handlePriceMinChange = (event: React.FormEvent<HTMLInputElement>) => {
		const value = Math.min(+event.currentTarget.value, maxValue);
		if (minValue < props.minValue) {
			setMinValue(props.minValue);
		}
		setMinValue(value);
		event.currentTarget.value = value.toString();
	};

	const handlePriceMaxChange = (event: React.FormEvent<HTMLInputElement>) => {
		const value = Math.max(+event.currentTarget.value, minValue);
		if (maxValue > props.maxValue) {
			setMaxValue(props.maxValue);
		}
		setMaxValue(value);
		event.currentTarget.value = value.toString();
	};
	return (
		<div className={classes.rangeSlider}>
			<label htmlFor={`${props.title}-range`}>
				<div
					className={classes.sliderTrack}
					style={styles}
				></div>
				<input
					type="range"
					aria-label={`${props.title} minimum range`}
					id={`${props.title}-range`}
					name={props.title}
					min={props.minValue}
					max={props.maxValue}
					value={minValue}
					className={`${classes.rangeInput} ${classes.input1}`}
					onChange={handlePriceMinChange}
					aria-valuetext={`${minValue}`}
				/>
				<input
					type="range"
					aria-label={`${props.title} maximum range`}
					id={`${props.title}-range`}
					name={props.title}
					min={props.minValue}
					max={props.maxValue}
					value={maxValue}
					className={`${classes.rangeInput} ${classes.input2}`}
					onChange={handlePriceMaxChange}
					aria-valuetext={`${maxValue}`}
				/>
			</label>
			<div className={classes.rangeValues} >
				{props.title === 'price' && '$'} {minValue} -{' '}
				{props.title === 'price' && '$'} {maxValue}
			</div>
		</div>
	);
};

export default RangeSlider;
