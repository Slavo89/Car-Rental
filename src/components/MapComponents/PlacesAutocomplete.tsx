import React from 'react';
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


const PlacesAutocomplete: React.FC<{
	setSelected: (location: LatLng) => void;
}> = (props) => {
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

	return (
		<Combobox onSelect={handleSelect}>
			<ComboboxInput
				value={value}
				onChange={(event) => setValue(event.target.value)}
				disabled={!ready}
				className={classes.comboboxInput}
				placeholder="Type the location"
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
