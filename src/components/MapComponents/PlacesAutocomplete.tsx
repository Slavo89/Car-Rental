import React, { useEffect } from 'react';
import classes from './PlacesAutocomplete.module.scss';
import usePlacesAutocomplete, {
	LatLng,
	getGeocode,
	getLatLng,
} from 'use-places-autocomplete';
import {
	Combobox,
	ComboboxInput,
	ComboboxPopover,
	ComboboxList,
	ComboboxOption,
} from '@reach/combobox';
import '@reach/combobox/styles.css';
import { useSearchValueContext } from '../../context/SearchValueContext';

type Props = {
	setSelected: (location: LatLng) => void;
	onValidate: boolean;
	onWasValidated: boolean;
};

const PlacesAutocomplete = (props: Props) => {
	const context = useSearchValueContext();

	const {
		ready,
		value,
		setValue,
		suggestions: { status, data },
		clearSuggestions,
	} = usePlacesAutocomplete();

	const handleSelect = async (address: string) => {
		setValue(address, false);
		clearSuggestions();

		const results = await getGeocode({ address });
		const { lat, lng } = getLatLng(results[0]);
		props.setSelected({ lat, lng });
		context?.setLocation(address);
	};

	useEffect(() => {
		if (context?.location) {
			setValue(context?.location);
		}
	}, [context?.location, setValue]);

	return (
		<Combobox onSelect={handleSelect}>
			<ComboboxInput
				value={value}
				// value={context?.location ? context.location : value}
				onChange={(event) => {
					setValue(event.target.value);
					// context?.setLocation(event.target.value);
				}}
				disabled={!ready}
				className={
					!props.onValidate && props.onWasValidated
						? `${classes.error} ${classes.comboboxInput}`
						: classes.comboboxInput
				}
				autoComplete="off"
				name="location"
				placeholder="Type the location"
				required
			/>
			<ComboboxPopover>
				<ComboboxList>
					{status === 'OK' &&
						data.map(({ place_id, description }) => (
							<ComboboxOption
								key={place_id}
								value={description}
							/>
						))}
				</ComboboxList>
			</ComboboxPopover>
		</Combobox>
	);
};

export default PlacesAutocomplete;
