import React, { createContext, useContext, useState } from 'react';
import { AppContextData } from '../util/types';

export const AppContext = createContext<AppContextData | undefined>(undefined);

export function AppContextProvider({
	children,
}: {
	children: React.ReactNode;
}) {
	const [location, setLocation] = useState<string | undefined>('');
	const [pickupDate, setPickupDate] = useState<string | undefined>(
		getTodayDate()
	);
	const [returnDate, setReturnDate] = useState<string | undefined>('');

	const contextData = {
		location,
		setLocation,
		pickupDate,
		setPickupDate,
		returnDate,
		setReturnDate,
		getTodayDate,
	};

	function getTodayDate() {
		const today = new Date();
		const year = today.getFullYear();
		let month: string | number = today.getMonth() + 1;
		let day: string | number = today.getDate();

		if (month < 10) {
			month = `0${month}`;
		}

		if (day < 10) {
			day = `0${day}`;
		}

		return `${year}-${month}-${day}`;
	}

	return (
		<AppContext.Provider value={contextData!}>{children}</AppContext.Provider>
	);
}

// eslint-disable-next-line react-refresh/only-export-components
export function useSearchValueContext() {
	return useContext(AppContext);
}
