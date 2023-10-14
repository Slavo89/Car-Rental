import React, { useState, useEffect } from 'react';
import classes from './Pagination.module.scss';
import { PaginationProps } from '../../util/types';

const Pagination: React.FC<PaginationProps> = (props) => {
	const [totalPages, setTotalPages] = useState(
		Math.ceil(props.totalItems / props.itemsPerPage)
	);
	const pageNumbers = Array.from(
		{ length: totalPages },
		(_, index) => index + 1
	);

	useEffect(() => {
		// Update page numbers when totalItems is changed
		setTotalPages(Math.ceil(props.totalItems / props.itemsPerPage));
	}, [props.totalItems, props.itemsPerPage]);

	return (
		<ul className={classes.pagination}>
			{pageNumbers.map((pageNumber) => (
				<li
					key={pageNumber}
					tabIndex={0}
					className={
						pageNumber === props.currentPage
							? `${classes.page} ${classes.active}`
							: classes.page
					}
					onClick={() => {
						props.paginate(pageNumber);
					}}
				>
					{pageNumber}
				</li>
			))}
		</ul>
	);
};

export default Pagination;
