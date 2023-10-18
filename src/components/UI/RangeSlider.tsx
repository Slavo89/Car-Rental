import React from 'react';
import classes from './RangeSlider.module.scss';

type Props = {
	title: string;
	minValue: number;
	maxValue: number;
	minLimit: number;
	maxLimit: number;
	onChange: (value1: number, value2: number) => void;
};

const RangeSlider = (props: Props) => {

	// RANGE SLIDER STYLES
	const calculatePercentage = (
		minValue: number,
		maxValue: number,
		minLimit: number,
		maxLimit: number
	) => {
		return {
			'--minPercentage':
				((minValue - minLimit) / (maxLimit - minLimit)) * 100 + '%',
			'--maxPercentage':
				((maxValue - minLimit) / (maxLimit - minLimit)) * 100 + '%',
		};
	};

	const styles: Record<string, string> = calculatePercentage(
		props.minValue,
		props.maxValue,
		props.minLimit,
		props.maxLimit
	);

	const handleMinValueChange = (event: React.FormEvent<HTMLInputElement>) => {
		const value = Math.min(+event.currentTarget.value, props.maxValue);

		event.currentTarget.value = value.toString();
		props.onChange(value, props.maxValue);
	};

	const handleMaxValueChange = (event: React.FormEvent<HTMLInputElement>) => {
		const value = Math.max(+event.currentTarget.value, props.minValue);

		event.currentTarget.value = value.toString();
		props.onChange(props.minValue, value);
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
					min={props.minLimit}
					max={props.maxLimit}
					value={props.minValue}
					className={`${classes.rangeInput} ${classes.input1}`}
					onChange={handleMinValueChange}
					aria-valuetext={`${props.minValue}`}
				/>
				<input
					type="range"
					aria-label={`${props.title} maximum range`}
					id={`${props.title}-range`}
					name={props.title}
					min={props.minLimit}
					max={props.maxLimit}
					value={props.maxValue}
					className={`${classes.rangeInput} ${classes.input2}`}
					onChange={handleMaxValueChange}
					aria-valuetext={`${props.maxValue}`}
				/>
			</label>
			<div className={classes.rangeValues}>
				{props.title === 'price' && '$'} {props.minValue} -{' '}
				{props.title === 'price' && '$'} {props.maxValue}
			</div>
		</div>
	);
};

export default RangeSlider;
