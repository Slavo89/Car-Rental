import React, { useState, useEffect, SetStateAction } from 'react';
import LoadingIndicator from './LoadingIndicator';
import classes from './MapComponent.module.scss';
// import ErrorBlock from './ErrorBlock';
import { GoogleMap, Marker, useLoadScript } from '@react-google-maps/api';
import { AppContextData } from '../../util/types';
import { fromAddress, setKey } from 'react-geocode';
import.meta.env.MODE;

// setDefaults({
// 	key: import.meta.env.VITE_GOOGLE_KEY,
// 	language: 'en',
// 	region: 'en',
// 	// outputFormat: "G:/Slavo/Projekty/Car Rental/node_modules/react-geocode/types/index"
// });
setKey(import.meta.env.VITE_GOOGLE_KEY);

const MapComponent = ({ location }: { location: string }) => {
	const [localization, setLocalization] = useState(location);

	const [center, setCenter] = useState({ lat: 52.2296756, lng: 21.0122287 });

	const { isLoaded } = useLoadScript({
		googleMapsApiKey: import.meta.env.VITE_GOOGLE_KEY,
		// googleMapsApiKey: process.env.REACT_APP_GOOGLE_KEY,
		// googleMapsApiKey: 'AIzaSyCsb-KlrUNZTfTWjz1Fof6L4-BGk71HfHI',
	});
	const getPosition = (event) => {
		const latitude = event.latLng?.lat();
		const longitude = event.latLng?.lng();
		// console.log(event.latLng.lat());
		// console.log(event.latLng.lng());
		setCenter({ lat: latitude, lng: longitude });
		//
	};

	useEffect(() => {
		if (localization) {
			fromAddress(localization)
				.then(({ results }) => {
					const { lat, lng } = results[0].geometry.location;
					setCenter({ lat, lng });
				})
				.catch(console.error);
		}
		fromAddress('Warszawa')
			.then(({ results }) => {
				const { lat, lng } = results[0].geometry.location;
				setCenter({ lat, lng });
			})
			.catch(console.error);
	}, [localization]);

	if (!isLoaded) return <LoadingIndicator />;
	return (
		<>
			<h4>Choose pickup location</h4>
			<GoogleMap
				onClick={getPosition}
				center={center}
				zoom={12}
				mapContainerClassName={classes.map}
			>
				{/* <Marker position={center} /> */}
				{center && <Marker position={center} />}
			</GoogleMap>
		</>
	);
};
export default MapComponent;
