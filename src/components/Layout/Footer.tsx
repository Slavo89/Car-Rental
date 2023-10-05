import React from 'react';
import classes from './Footer.module.scss';
import {
	BsYoutube,
	BsFacebook,
	BsInstagram,
	BsChevronUp,
} from 'react-icons/bs';

const Footer: React.FC = () => {
	const scrollToTopHandler = () => {
		window.scrollTo({
			top: 0,
		});
	};
	return (
		<footer className={classes.footer}>
			<div className={classes.contact}>
				<div className={classes.links}>
					<div className={classes.column}>
						<h4 className={classes.title}>Company</h4>
						<p className={classes.link}>About</p>
						<p className={classes.link}>How it works</p>
						<p className={classes.link}>Documentation</p>
					</div>
					<div className={classes.column}>
						<h4 className={classes.title}>Support</h4>
						<p className={classes.link}>Help Center</p>
						<p className={classes.link}>Refund policy</p>
						<p className={classes.link}>FAQ</p>
					</div>
				</div>
				<div className={classes.contactUs}>
					<div>
						<p className={classes.hours}>Daily from 09:00 - 21:00</p>
						<p className={classes.phone}>+ 48 000 000 000</p>
						<p className={classes.email}>email@email.com</p>
					</div>
					<div className={classes.social}>
						<div className={classes.icon}>
							<BsYoutube aria-label='Youtube'/>
						</div>
						<div className={classes.icon}>
							<BsFacebook aria-label='Facebook'/>
						</div>
						<div className={classes.icon}>
							<BsInstagram aria-label='Instagram'/>
						</div>
					</div>
				</div>
			</div>
			<div className={classes.copyrights}>
				<p>Copyright &#169; 2023 powered, Inc. All rights reserved</p>
			</div>
			<div className={classes.goTopContainer}>
				<button
					aria-label='Scroll to top button'
					type="button"
					className={classes.goTop}
					onClick={scrollToTopHandler}
				>
					<BsChevronUp aria-hidden/>
				</button>
			</div>
		</footer>
	);
};

export default Footer;
