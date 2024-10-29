import React from 'react';
import './Card.css';
import rectangleSVG from '/rectangle.svg';

function Card({ phrase, author }) {
	return (
		<div className="card" style={{ backgroundImage: `url(${rectangleSVG})` }}>
			<div className="card__body">
				<q className="phrase">{phrase}</q> <br />
				<cite className="author">
					- {author} <span className="quote-icon">❞</span>
				</cite>
			</div>
		</div>
	);
}

export default Card;
