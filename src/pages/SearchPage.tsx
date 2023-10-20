import React, { useState, useEffect } from 'react';
import classes from './SearchPage.module.scss';
import Container from '../components/UI/Container';
import SearchFilters from '../components/Layout/SearchFilters';
import SearchPageCard from '../components/Layout/Cards/SearchPageCard';
import { fetchVehicles, queryClient } from '../util/http';
import { useLoaderData } from 'react-router-dom';
import Pagination from '../components/UI/Pagination';
import { SelectedFilters, VehicleData } from '../util/types';
import GoTopButton from '../components/UI/GoTopButton';
import { useAppContext } from '../context/SearchValueContext';

const CARS_PER_PAGE = 6;

const SearchPage: React.FC = () => {
	const context = useAppContext()
	console.log(context?.vehicleClass);
	const [showFilters, setShowFilters] = useState(false);

	const showFiltersHandler = () => {
		if (showFilters) {
			setShowFilters(false);
			document.body.style.overflowY = 'unset';
		} else {
			setShowFilters(true)
			document.body.style.overflowY = 'hidden';
		}
	};

	const DATA = useLoaderData() as VehicleData;
	const VEHICLES = Object.keys(DATA).map((vehicleId) => ({
		id: vehicleId,
		...DATA[vehicleId],
	}));
	const [currentItems, setCurrentItems] = useState(VEHICLES);

	// PAGINATION HANDLER
	const [currentPage, setCurrentPage] = useState(1);
	const [totalItems, setTotalItems] = useState(VEHICLES.length);

	const paginationHandler = (pageNumber: number) => setCurrentPage(pageNumber);

	// FILTERS CHANGE
	const [selectedFilters, setSelectedFilters] = useState<SelectedFilters>({
		'fuel type': [],
		transmission: [],
		drivetrain: [],
		minPrice: 20,
		maxPrice: 45,
		minYear: 2016,
		maxYear: 2023,
	});

	const setPriceRange = (minPrice: number, maxPrice: number) => {
		setSelectedFilters((prevFilters) => ({
			...prevFilters,
			minPrice,
			maxPrice,
		}));
	};

	const setYearRange = (minYear: number, maxYear: number) => {
		setSelectedFilters((prevFilters) => ({
			...prevFilters,
			minYear,
			maxYear,
		}));
	};

	const handleUpdateFilters = (
		filters: SelectedFilters,
		minPrice: number,
		maxPrice: number,
		minYear: number,
		maxYear: number
	) => {
		setSelectedFilters(filters);
		setPriceRange(minPrice, maxPrice);
		setYearRange(minYear, maxYear);
	};

	// CAR CLASS FILTERING
	const categoryBoxes = [
		{
			imageSrc: '/public/SearchImages/B Class.webp',

			class: 'B',
		},
		{
			imageSrc: '/public/SearchImages/C Class.webp',

			class: 'C',
		},
		{
			imageSrc: '/public/SearchImages/D Class.webp',

			class: 'D',
		},
		{ imageSrc: '/public/SearchImages/SUV.webp', alt: 'SUV', class: 'SUV' },
	];

	const [activeClasses, setActiveClasses] = useState<string[]>([]);

	const handleCategoryClick = (categoryClass: string) => {
		// check if class is already active
		const isClassActive = activeClasses.includes(categoryClass);

		if (isClassActive) {
			// delete if is active
			setActiveClasses(activeClasses.filter((c) => c !== categoryClass));
		} else {
			// add if is not
			setActiveClasses([...activeClasses, categoryClass]);
		}

		// Reset to first page
		setCurrentPage(1);
	};

	useEffect(() => {
		let filteredVehicles;

		// Check if active classes
		if (activeClasses.length === 0) {
			// If is not display all vehicles
			filteredVehicles = VEHICLES;
		} else {
			// Set currentItems after change of activeClasses
			filteredVehicles = VEHICLES.filter((vehicle) => {
				const vehicleClass = vehicle.class;
				return activeClasses.some((activeClass) =>
					vehicleClass.startsWith(activeClass)
				);
			});
		}

		// Filter vehicles based on selected filters
		filteredVehicles = filteredVehicles.filter((vehicle) => {
			const meetsFuelType =
				selectedFilters['fuel type'].length === 0 ||
				selectedFilters['fuel type'].includes(vehicle['fuel type']);
			const meetsTransmission =
				selectedFilters.transmission.length === 0 ||
				selectedFilters.transmission.includes(vehicle.transmission);
			const meetsDrivetrain =
				selectedFilters.drivetrain.length === 0 ||
				selectedFilters.drivetrain.includes(vehicle.drivetrain);
			const meetsMinPrice = vehicle.price >= selectedFilters.minPrice;
			const meetsMaxPrice =
				selectedFilters.maxPrice === null ||
				vehicle.price <= selectedFilters.maxPrice;
			const meetsMinYear = vehicle.year >= selectedFilters.minYear;
			const meetsMaxYear =
				selectedFilters.maxYear === null ||
				vehicle.year <= selectedFilters.maxYear;

			return (
				meetsFuelType &&
				meetsTransmission &&
				meetsDrivetrain &&
				meetsMinPrice &&
				meetsMaxPrice &&
				meetsMinYear &&
				meetsMaxYear
			);
		});

		// Calculate the first and last element indexes for the current page
		const indexOfLastItem = currentPage * CARS_PER_PAGE;
		const indexOfFirstItem = indexOfLastItem - CARS_PER_PAGE;

		// Set current elements to filtered
		setCurrentItems(filteredVehicles.slice(indexOfFirstItem, indexOfLastItem));
		setTotalItems(filteredVehicles.length);
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [activeClasses, currentPage, selectedFilters]);

	return (
		<main>
			<Container>
				<div className={classes.searchPage}>
					<SearchFilters
						onUpdateFilters={handleUpdateFilters}
						onShowFilters={showFiltersHandler}
						showFilters={showFilters}
					/>
					{showFilters && <div className={classes.backdrop}></div>}
					<section className={classes.searchResults}>
						<h2>Search Results</h2>
						<div className={classes.categories}>
							{categoryBoxes.map((box, index) => (
								<div
									key={index}
									tabIndex={0}
									className={`${classes.categoryBox} ${
										activeClasses.includes(box.class) ? classes.active : ''
									}`}
									onClick={() => handleCategoryClick(box.class)}
								>
									<img
										src={box.imageSrc}
										alt={`${box.class} Class`}
										loading="lazy"
									/>
									<span aria-hidden>{`${box.class} Class`}</span>
								</div>
							))}
						</div>
						<div className={classes.results}>
							{currentItems.map((vehicle) => (
								<SearchPageCard
									key={vehicle.id}
									id={vehicle.id}
									img={vehicle.img}
									consumption={vehicle.consumption}
									door={vehicle.door}
									make={vehicle.make}
									model={vehicle.model}
									price={vehicle.price}
									passengers={vehicle.passengers}
									year={vehicle.year}
								/>
							))}
						</div>
						{currentItems.length > 0 ? (
							<Pagination
								itemsPerPage={CARS_PER_PAGE}
								currentPage={currentPage}
								paginate={paginationHandler}
								totalItems={totalItems}
							/>
						) : (
							<p>No matched cars :(</p>
						)}
					</section>
				</div>
			</Container>
			<GoTopButton />
		</main>
	);
};

export default SearchPage;

// eslint-disable-next-line react-refresh/only-export-components
export function loader() {
	return queryClient.fetchQuery({
		queryKey: ['vehicles'],
		queryFn: fetchVehicles,
	});
}
