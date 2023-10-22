import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { fetchMap } from '../../util/http';

// const KEY = 'AIzaSyCsb-KlrUNZTfTWjz1Fof6L4-BGk71HfHI';
// const http = `https://maps.googleapis.com/maps/api/js?key=${KEY}&callback=console.debug&libraries=maps,marker&v=beta`;

const MapComponent = () => {
	const { data, isPending, isError, error } = useQuery({
		queryKey: ['map'],
		queryFn: fetchMap,
	});

    if (data) {
        console.log(data);
    }
    console.log(error);
	return <>Map Component</>;
};

export default MapComponent;

// AIzaSyCsb-KlrUNZTfTWjz1Fof6L4-BGk71HfHI;
