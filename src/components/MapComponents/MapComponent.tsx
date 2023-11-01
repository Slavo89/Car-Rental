import { useState, useEffect } from 'react';
import classes from './MapComponent.module.scss';
import { GoogleMap, MarkerF, useLoadScript } from '@react-google-maps/api';
import { fromAddress, setKey } from 'react-geocode';
import PlacesAutocomplete from './PlacesAutocomplete';
import LoadingIndicator from '../UI/LoadingIndicator';
import { LatLng } from 'use-places-autocomplete';
import.meta.env.MODE;

const DEFAULT_LOCATION: LatLng = { lat: 52.2296756, lng: 21.0122287 };

setKey(import.meta.env.VITE_GOOGLE_KEY);

type Props = {
	location?: string;
	onValidate: boolean;
	onWasValidated: boolean;
};

const MapComponent = (props: Props) => {
	const [libraries] = useState(['places']); // preventing error on useLoadScript

	const [selectedLocation, setSelectedLocation] =
		useState<LatLng>(DEFAULT_LOCATION);

	const { isLoaded } = useLoadScript({
		googleMapsApiKey: import.meta.env.VITE_GOOGLE_KEY,

		// eslint-disable-next-line @typescript-eslint/ban-ts-comment
		//@ts-ignore
		libraries: libraries,
		language: 'en',

		// googleMapsApiKey: process.env.REACT_APP_GOOGLE_KEY,
	});

	useEffect(() => {
		if (props.location) {
			fromAddress(props.location)
				.then(({ results }) => {
					const { lat, lng } = results[0].geometry.location;
					setSelectedLocation({ lat, lng });
				})
				.catch(console.error);
		}
	}, [props.location]);

	if (!isLoaded) return <LoadingIndicator />;
	return (
		<>
			<h4>Choose pickup location</h4>
			<p> key {import.meta.env.VITE_GOOGLE_KEY}</p>
			<div className={classes.placesContainer}>
				<PlacesAutocomplete
					setSelected={setSelectedLocation}
					onValidate={props.onValidate}
					onWasValidated={props.onWasValidated}
				/>
			</div>
			<GoogleMap
				center={selectedLocation}
				zoom={12}
				mapContainerClassName={classes.map}
				options={{
					streetViewControl: false,
					mapTypeControl: false,
				}}
			>
				<MarkerF position={selectedLocation} />
			</GoogleMap>
		</>
	);
};

export default MapComponent;
