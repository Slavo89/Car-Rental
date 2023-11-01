import React, { useEffect } from 'react';
import classes from './CheckoutModal.module.scss';
import { useRef } from 'react';
import { summaryData } from '../../util/types';

type Props = {
	isOpen: boolean;
	onClose: React.MouseEventHandler<HTMLButtonElement> | undefined;
	summaryData: summaryData;
};

const CheckoutModal = ({ isOpen, onClose, summaryData }: Props) => {
	const modalRef = useRef<HTMLDialogElement | null>(null);
	useEffect(() => {
		const dialog = modalRef.current;
		if (dialog) {
			if (isOpen) {
				dialog.showModal();
			} else {
				dialog.close();
			}
		}

		if (isOpen) {
			document.body.style.overflowY = 'hidden';
		} else {
			document.body.style.overflowY = 'unset';
		}
	}, [isOpen, summaryData.totalPrice]);

	// calculating days of rent
	let daysOfRent: number | undefined = 1;
	if (summaryData['pickup-date'] && summaryData['return-date']) {
		if (summaryData['pickup-date'] === summaryData['return-date']) {
			return;
		} else {
			const pickupDate = new Date(summaryData['pickup-date']);
			const returnDate = new Date(summaryData['return-date']);
			const timeDiff = returnDate.getTime() - pickupDate.getTime();
			daysOfRent = Math.ceil(timeDiff / (1000 * 3600 * 24));
		}
	}

	return (
		<dialog
			ref={modalRef}
			className={classes.checkoutModal}
		>
			<button
				className={classes.closeButton}
				onClick={onClose}
			>
				&times;
			</button>
			<h4 className={classes.title}>Your order</h4>
			<div className={classes.summary}>
				<p>
					{summaryData.make} {summaryData.model} {summaryData.year}
				</p>

				<div>
					<p>Check In :</p>
					<span>{summaryData['pickup-date']}</span>
				</div>
				<div>
					<p>Check Out : </p>
					<span>{summaryData['return-date']}</span>
				</div>
				<div>
					<p>Car pickup location :</p>
					<span>{summaryData.location}</span>
				</div>
				{summaryData.additions && (
					<ul className={classes.accesoriesList}>
						Additional options :
						{summaryData.additions.map((option, index) => (
							<li key={index}>{option.toString()}</li>
						))}
					</ul>
				)}
				<div>
					<p>Total price :</p>
					<span>$ {(summaryData.totalPrice * daysOfRent).toFixed(2)}</span>
				</div>
			</div>
			<button
				className={classes.bookButton}
				onClick={onClose}
			>
				Place order
			</button>
		</dialog>
	);
};

export default CheckoutModal;
