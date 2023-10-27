import React, { useEffect } from 'react';
import classes from './CheckoutModal.module.scss';
import { useRef } from 'react';

const CheckoutModal = (props: {
	isOpen: unknown;
	onClose: React.MouseEventHandler<HTMLButtonElement> | undefined;
}) => {
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
			<div className={classes.summary}>
                <h4>Rental summary</h4>
                <p>Car : Ford Focus</p>
				<p>Check In : 25-10-23</p>
				<p>Check Out: 29-10-23</p>
                <p>Check In and Check Out Localization: Kraków</p>
                <ul>Additions:
                    <li>Child seat</li>
                    <li>Baby chair</li>
                    <li>GPS</li>
                    <li>Roof Rack</li>
                </ul>
				<p>Price per day: $ 25</p>
				<p>Total price: $ 125</p>
            </div>
            <button>Accept</button>
		</dialog>
	);
};

export default CheckoutModal;
