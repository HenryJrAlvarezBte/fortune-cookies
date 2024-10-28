import React from 'react';
import './Button.css';

function Button({ onClick, className }) {
	return (
		<button onClick={onClick} className={`${className} button`}>
			Ver otro 🥠
		</button>
	);
}

export default Button;
