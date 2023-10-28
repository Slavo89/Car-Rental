import React, { useEffect } from 'react';
import classes from './CheckoutModal.module.scss';
import { useRef } from 'react';
import { summaryData } from '../../util/types';

type Props = {
	isOpen: boolean;
	onClose: React.MouseEventHandler<HTMLButtonElement> | undefined;
	data: summaryData;
};

const CheckoutModal = (props: Props) => {
	const modalRef = useRef<HTMLDialogElement | null>(null);
	useEffect(() => {
		const dialog = modalRef.current;
		if (dialog) {
			if (props.isOpen) {
				dialog.showModal();
			} else {
				dialog.close();
			}
		}

		if (props.isOpen) {
			document.body.style.overflowY = 'hidden';
		} else {
			document.body.style.overflowY = 'unset';
		}
	}, [props.isOpen]);
	return (
		<dialog
			ref={modalRef}
			className={classes.checkoutModal}
		>
			<button
				className={classes.closeButton}
				onClick={props.onClose}
			>
				&times;
			</button>
			<h4 className={classes.title}>Your order</h4>
			<div className={classes.summary}>
				{/* <div> */}
					<p>
						{props.data.make} {props.data.model} {props.data.year}
					</p>
				{/* </div> */}
				<div>
					<p>Check In :</p>
					<span>{props.data['pickup-date']}</span>
				</div>
				<div>
					<p>Check Out : </p>
					<span>{props.data['return-date']}</span>
				</div>
				<div>
					<p>Car pickup location :</p>
					<span>{props.data.location}</span>
				</div>
				{props.data.additions && (
					<ul className={classes.accesoriesList}>
						Additional options :
						{/* <li>Child seat</li>
					<li>Baby chair</li>
					<li>GPS</li>
					<li>Roof Rack</li> */}
						{props.data.additions.map((option, index) => (
							<li key={index}>{option.toString()}</li>
						))}
					</ul>
				)}
				<div>
					<p>Total price :</p>
					<span>$ {props.data.totalPrice.toFixed(2)}</span>
				</div>
			</div>
			<button
				className={classes.bookButton}
				onClick={props.onClose}
			>
				Place order
			</button>
		</dialog>
	);
};

export default CheckoutModal;
