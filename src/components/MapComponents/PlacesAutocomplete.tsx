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
	onValidate: boolean;
	onWasValidated: boolean;
}> = (props) => {
	const context = useSearchValueContext();

	// const handleDelayedChange = (event) => {
	// 	// Opuść poprzednią aktywną timeOut, jeśli istnieje

	// 	// Ustaw nowy timeOut, aby odroczyć żądanie
	// 	setValue(event.target.value);
	// 	context?.setLocation(event.target.value);
	// 	const searchTimeout = setTimeout(() => {
	// 		// Wykonaj żądanie lub inną operację, np. pobranie sugestii
	// 		// na podstawie wprowadzonego tekstu
	// 	}, 500); // Dopuszczalne opóźnienie (np. 500 ms)
	// 	clearTimeout(searchTimeout);
	// 	console.log(context?.location, '- context');
	// 	console.log(value, ' - value');
	// };

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
				value={context?.location ? context.location : value}
				onChange={(event) => {
					setValue(event.target.value);
					context?.setLocation(event.target.value);
				}}
				// onChange={handleDelayedChange}
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
