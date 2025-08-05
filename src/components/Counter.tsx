import React from 'react';
import classes from './Counter.module.scss';

const Counter = () => {
	const [count, setCount] = React.useState(0);

	const increment = () => {
		setCount(prevState => prevState + 1);
	}

	return (
		<div>
			<button className={classes.button} onClick={increment}>increment</button>
			<p>{count}</p>
		</div>
	);
};

export default Counter;