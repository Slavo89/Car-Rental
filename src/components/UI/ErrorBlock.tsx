import React from 'react'
import classes from './ErrorBlock.module.scss'


interface ErrorMessage {
	title: string;
	message: string;
}


const ErrorBlock = (props : ErrorMessage) => {
  return (
     <div className={classes.errorBlock}>
			<div className={classes.errorBlockIcon}>!</div>
			<div className={classes.errorBlockText}>
				<h2>{props.title}</h2>
				<p>{props.message}</p>
			</div>
		</div>
  )
}

export default ErrorBlock